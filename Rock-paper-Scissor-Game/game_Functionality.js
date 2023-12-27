                              //This is the javaScript file for the game

const track=document.querySelectorAll(".choice");  //For keeping the track of each click
const msg=document.querySelector("#message_display");

track.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");   //For each click we pass the choice of user to play the game
        playGame(userChoice);
    })
});

const getComputerChoice=()=>{
    let arr=["rock","paper","scissor"];
    const random_Ind=Math.floor(Math.random()*3);        // To generate random numbers between 0 to 2 which will be treated as index for our array
    return arr[random_Ind];
}
const userCount=document.querySelector("#user-score");
const compCount=document.querySelector("#computer-score");         // It will keep the count of number of times the computer or user won the game

const Final_Winner=(userwin) =>{
    if (userwin) {
        console.log("You win");
        msg.innerText="You Win";

        //It will keep increasing the score whenever the user wins
        userCount.innerText=parseInt(userCount.innerText)+1;       //To convert the string to integer   

    }
    else {
        console.log("You lose");
        msg.innerText="You lose";
        ////It will keep increasing the score whenever the Computer wins
        compCount.innerText=parseInt(compCount.innerText)+1;
    }

}
const gameDraw=(userChoice)=>{
                //Whenever the user and computer clicks on the same image the user and computer score remains same
      
    console.log("Game was draw");
    msg.innerText="Game was draw";
    comp_select.innerText="Computer selected "+ userChoice;
    user_select.innerText="User selected "+ userChoice;
}
const comp_select=document.querySelector("#computer_count");       // To store what choice is made by the computer
const user_select=document.querySelector("#user_count");
const playGame=(userChoice)=>{
    console.log("User's Choice ",userChoice);
    //To get Computer's Choice
    const Computer_Choice=getComputerChoice();
    console.log("Computer's Choice ",Computer_Choice);
    if(userChoice===Computer_Choice){     //Checking Who'll win the game
       gameDraw(userChoice);
    }
    else{
        let user_Win=true;
        if(userChoice==="rock"){
            if(Computer_Choice==="paper"){
                user_Win=false;
                comp_select.innerText="Computer selected paper";
                user_select.innerText="User selected rock";
            }
            else if(Computer_Choice==="scissor"){
                user_Win=true;
                comp_select.innerText="Computer selected scissor";
                user_select.innerText="User selected rock";
            }
        }
        else if(userChoice==="paper"){
            if(Computer_Choice==="rock"){
                user_Win=true;
                comp_select.innerText="Computer selected rock";
                user_select.innerText="User selected paper";
            }
            else if(Computer_Choice==="scissor"){
                user_Win=false;
                comp_select.innerText="Computer selected scissor";
                user_select.innerText="User selected paper";
            }
        }
        else if(userChoice==="scissor"){
            if(Computer_Choice==="rock"){
                user_Win=false;
                comp_select.innerText="Computer selected rock";
                user_select.innerText="User selected scissor";
            }
            else if(Computer_Choice==="paper"){
                user_Win=true;
                comp_select.innerText="Computer selected scissor";
                user_select.innerText="User selected scissor";
            }
        }
        Final_Winner(user_Win);        //passing the result to a function which will increase the count of user or Computer Accordingly
    }
    
}

