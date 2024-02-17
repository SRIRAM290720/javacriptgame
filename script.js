let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let msgcontainer=document.querySelector(".msg-container");


let turnO =true;
const winning=[
    
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
    

];




const resetbtn= ()=>{
    turnO =true;
    enablesbox();
    msgcontainer.classList.add("hide");

}
const enablesbox=()=>{
    for(box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const disablesbox=()=>{
    for(box of boxs){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratualations,winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disablesbox();
}
boxs.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if (turnO){
            box.innerText="o";
            turnO=false;
            
        

        } else{
            
            
            box.innerText="x";
            
            turnO=true;
            
        }
        box.disabled=true;

        checkwinner();
    });
});

const checkwinner= ()=>{
    for(pattern of winning ){
        let pos1val=boxs[pattern[0]].innerText;
        let pos2val=boxs[pattern[1]].innerText;
        let pos3val=boxs[pattern[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                
                showwinner(pos1val);
            }
        }
    }

}
newbtn.addEventListener("click",resetbtn);
reset.addEventListener("click",resetbtn);
