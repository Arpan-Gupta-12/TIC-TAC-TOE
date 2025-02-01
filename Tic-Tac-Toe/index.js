let boxes =document.querySelectorAll(".box");
let reset_btn =document.querySelector("#reset");
let new_game =document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnx=true;

const winpart= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetgm =()=>{
turnx=true;
boxenable();
msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnx){
            box.innerHTML ="X"
            turnx = false;
        }
        else{
            box.innerHTML ="O"
            turnx= true;
        }
        box.disabled = true;
        checkWinner();
    })
})
const boxdis= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const boxenable= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const showWinner = (winner)=>{
msg.innerHTML=`Congratulations, The Winner is ${winner} `
msgContainer.classList.remove("hide");
boxdis();
}

const checkWinner = ()=>{
    for(let pattern of winpart){
        let positionVal1 = boxes[pattern[0]].innerHTML;
        let positionVal2 = boxes[pattern[1]].innerHTML;
        let positionVal3 = boxes[pattern[2]].innerHTML;
        if(positionVal1 != ""&&positionVal2 != ""&&positionVal3 != ""){
            if(positionVal1===positionVal2 &&positionVal2===positionVal3){
                console.log("Winner");
                showWinner(positionVal1);
            }
        }
    }
}
new_game.addEventListener("click",resetgm);
reset_btn.addEventListener("click",resetgm);