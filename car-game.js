const input=require("readline-sync")
let name=input.question("Enter your name:")
console.log("Hi",name);
console.log("Welcome in this game. Now you are a driver.");
let started = "0";
let stopped = "1";

while ("1") 
{
    console.log(("Your options are:\n\t1.Statr\n\t2.Stop\n\t3.Exit:"));
    let n=input.questionInt("Enter your option number:");
    if (n=="1") 
    {
        if(started=="1") 
        {
            console.log(name,":Your car is already started.");
        } 
        else 
        {
            console.log("Your car is started.");
            started = "1";
            stopped = "0";
        }
    }
    else if(n=="2") 
    {
        if(stopped=="1") 
        {
            console.log(name,":Your car is already stopped.");
        } 
        else 
        {
            console.log("Your car is stopped.");
            stopped = "1";
            started = "0";
        }
    } 
    else if(n=="3") 
    {
        console.log("You are exiting the car game.");
        break;
    } 
    else 
    {
        console.log("Please enter only your option number.");
    }
}
console.log("Thank you ");
console.log("Bye Bye",name);
