let btn=document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset");
let newbtn =document.querySelector(".newg");
let msgc= document.querySelector(".msg");
let winmsg=document.querySelector(".results");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

let turn0=true;
let cnt=0;
const play=(box)=>{
if(turn0){
    box.innerText="O";
    turn0=false;
}
else{
    box.innerText="X";
    turn0=true;
}
box.disabled=true;
let win=iswinner();
cnt++;
if(cnt==9 && win==false){
    gameDraw();
}


};
btn.forEach((box)=>box.addEventListener("click",()=>play(box)));
const gameDraw = () => {
  winmsg.innerText = `Game was a Draw.`;
  msgc.classList.remove("hide");
  btn.forEach((box)=>{box.disabled=true;});
};
let iswinner=()=>{
    for(let pattern of winpatterns)
    {
        let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3){
                console.log(pos1);
                btn.forEach((box)=>{box.disabled=true;});
                displayWinner(pos1);
                return true;
            }
        }
    }

    return false;
}


let rst=()=>{
    turn0=true;
    cnt=0;
    btn.forEach((box)=>{box.disabled=false;});
    btn.forEach((box)=>{box.innerText="";});
    msgc.classList.add("hide");
};

rstbtn.addEventListener("click",rst);

const displayWinner = (winner) => {
  winmsg.innerText = `Congratulations, Winner is ${winner}`;
  msgc.classList.remove("hide");
 
  
};

newbtn.addEventListener("click",rst);