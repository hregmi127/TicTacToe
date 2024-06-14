let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winnerPlayer = document.querySelector("#winner");
var count = 0;

let turnO = true;//playerX, playerY
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("msg-container");
    count=0;
    }

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
        }
  }

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
  }


boxes.forEach((box)=>{coun=0;
    box.addEventListener("click",()=>{
        if(turnO===true){
          box.classList.add("color");
          box.innerText = "O"
          turnO = false;
        } else{
            box.classList.remove("color");
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;  
        count+=1;
        // checkWinner();
        let isWinner = checkWinner() ;  
        if(count===9 && !isWinner){draw();}

    })
  })

  const draw = ()=> {
    msg.innerText = `The game is Draw`;
    msgContainer.classList.remove("msg-container"); 
  }

   const showWinner = (winner)=> {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("msg-container");    
  }
  
  function checkWinner(){
    for(pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val) {              
                disableBoxes();
                showWinner(pos1Val); 
                return true;
                } 
                // else if(count===9){
                //   draw();};
            }
          } 
        }   
  newGameBtn.addEventListener("click",resetGame)
  resetBtn.addEventListener("click",resetGame)
