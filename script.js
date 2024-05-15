const  boxes= document.querySelectorAll("td");
const display=document.querySelector(".display");
const Restart=document.getElementById("Restart");
let count; let gameEnded;

function startGame( ){
    gameEnded=false;
    count=0;
}

startGame( );

// event listener 
 boxes. forEach(( box)=> {

     box.addEventListener('click',( )=>{
        if ( !gameEnded && box.innerHTML=="" ){
            count++;
            count%2==0 ?  box.innerHTML="X" : box.innerHTML="O";

            winLogic( ); // check win logic after each move 
        }
    })

})


// win logic 
function winLogic( ){
    
    const winpatterns = [
        [ boxes[0] ,  boxes[1] ,  boxes[2] ],
        [ boxes[3] ,  boxes[4] ,  boxes[5] ],
        [ boxes[6] ,  boxes[7] ,  boxes[8] ],
        [ boxes[0] ,  boxes[3] ,  boxes[6] ],
        [ boxes[1] ,  boxes[4] ,  boxes[7] ],
        [ boxes[2] ,  boxes[5] ,  boxes[8] ],
        [ boxes[0] ,  boxes[4] ,  boxes[8] ],
        [ boxes[2] ,  boxes[4] ,  boxes[6] ]
    ];
    
    for (let pattern of winpatterns){ //
        const [a,b,c]=pattern;            //  

        // highlight squares when a player wins
        function highlight( ){
            pattern.forEach((letter)=>{
                letter.classList.add("highlight");
            })
        }

        // conditions
        if ( a.innerHTML=="X" && b.innerHTML=="X" && c.innerHTML=="X" ){
            display.innerHTML="X wins";
            highlight( );
            gameEnded=true;
            Restart.style.display="block";

        } else if ( a.innerHTML=="O" && b.innerHTML=="O" && c.innerHTML=="O" ){
            display.innerHTML="O wins";
            highlight( );
            gameEnded=true;
            Restart.style.display="block";

        } else if ( count==9 && display.innerHTML=="" ){
            display.innerHTML="Draw";
            gameEnded=true;
            Restart.style.display="block";
        }

    }
}

// Restart
Restart.addEventListener('click',( )=>{
    display.innerHTML="";
    gameEnded=false;
    startGame( );
    Restart.style.display="none"
    boxes.forEach((box,index)=>{
        box.innerHTML="";
        box.classList.remove("highlight");
    })
})

