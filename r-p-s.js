const input=require("readline-sync")
console.log("GAME IS:- ROCK-PAPER-SCISSOR");
let name=input.question("Enter your name:")
console.log("Hi",name);
console.log("Welcome in this game");
console.log("Rule is : write only options not option number");


let k=1;
while(k==1)
{
    console.log("Chose your option:\n\t1.Rock\n\t2.Paper\n\t3.Scissor");    
    
    const b = ["rock", "paper", "scissor"];
    const comp = b[Math.floor(Math.random() *3)];
    let n=input.question("Write your option: ");
    console.log("Computer's choice: " + comp);
    if((n=="rock") || (n=="paper") || (n=="scissor"))
    {
        if (comp == n) {
            console.log("Draw🧐");
        } else if (
            (comp == "rock" && n == "scissor") ||
            (comp == "paper" && n == "rock") ||
            (comp == "scissor" && n == "paper")
        ) {
            console.log("You lose😫");
        } else {
            console.log("You wins!🥳");
            console.log("You win ₹100");
        }
    
        console.log('If you want to play again Enter:1');
        
        console.log('If you want to exit Enter:0 or any number except 1');
        let a=input.questionInt("Enter :")
        if(a==k)
        {
            k=1;
        }
        else
        {
            k=0;
        }
    }
    else
    {
        console.log("Please enter only rock,paper and scissor");
    }
}
console.log("Thank you for play this game 😇");
console.log("Bye Bye",name);