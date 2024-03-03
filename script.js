let bttn = document.querySelectorAll(".box");
let resetbutton = document.querySelector(".reset");
let mssgcontainer = document.querySelector(".mssg-container");
let msg = document.querySelector("#mssg")

let turnO = true ;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    ];
    
    bttn.forEach((box) => {
        box.addEventListener("click",()=>{
           if(turnO){
            box.innerHTML = "O"
            turnO = false ;
           }
           else{
            box.innerHTML = "X"
            turnO = true ;
           }
           box.disabled = true ; 

           checkwinner(); 
        })
    }) 

    const showwinner = (winner) => {
        msg.innerText = ` CONGRATULATIONS  ${winner} WON THE MATCH`;
        mssgcontainer.classList.remove("hide");
    }

    const checkwinner = () => {
        for (let pattern of winpattern){
            console.log(pattern[0] ,pattern[1] , pattern[2])
                let pos1val = bttn[pattern[0]].innerText; // TO SEE WHICH VALUE IS AT IDX 1 ,2 AND 3 of winning pattern
                let pos2val = bttn[pattern[1]].innerText;
                let pos3val = bttn[pattern[2]].innerText;
                
                if( pos1val !="" && pos2val !="" && pos3val !=""){
                    if( pos1val === pos2val && pos2val === pos3val){
                        console.log("WINNER",pos1val)
                        showwinner(pos1val);
                    }

                    
                }
        }
    }
