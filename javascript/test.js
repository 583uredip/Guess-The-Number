let ramnumbe=Math.floor(Math.random()*100)+1;
let gusscnt=0;
let score;
let guess;
while(true)
{
    guess=parseInt(prompt("Enter Your Number"));
    gusscnt++
    if(guess===ramnumbe)
    {
        score=100-gusscnt;
        alert(" Congo! Your the number in "+ gusscnt +" your score " + score );
        break;
    }
    else if(guess<ramnumbe)
    {
        alert("Your Number is less then number try agine");
    }
    else if(guess>ramnumbe)
    {
        alert("Your Number is geater  then number try agine");
    }
}