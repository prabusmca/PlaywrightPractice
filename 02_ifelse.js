// Eligibility to vote
/*
function checkAge(age){
    if(age>=18){
        console.log("Your are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

checkAge(25);
checkAge(10);
checkAge(18);
checkAge(17);
*/

// Check Possitive or Negative Number
/*
function CheckNubmer(Number){
    if(Number>0){
        console.log("The number is possitive");
    }else if (Number<0){
        console.log("The number is negative");
    }else{
        console.log("The number is zero");
}
}
CheckNubmer(10);
CheckNubmer(50);
CheckNubmer(-125);
CheckNubmer(0);
*/

// Check Grade
/*
function checkGrade(score){
    let grade;
    if(score>=90){
        grade='A';
    } else if (score>=80){
        grade='B';

    } else if (score>=70){
        grade='C';
    } else{
        grade='F'
    }
   // console.log(`Your grade is: ${grade}`);
    console.log('Your Grade is: '+grade);
}

checkGrade(95);
checkGrade(85);
checkGrade(75);
checkGrade(65);
checkGrade(10); 
checkGrade(0);
checkGrade(100);
checkGrade(-55);   


//nested if statement : else statement also displaye when the condition is true

let Browser ="Chrome";
if(Browser =="Chrome"){
    console.log("You are using Chrome browser");
}
if (Browser =="Edge"){
    console.log("You are using Edge browser");
} 
if (Browser =="Firefox"){
    console.log("You are using Firefox browser");
}   
else{
    console.log("Kindly launch the browser" );
}

*/

let Browser ="Tommy";
if(Browser =="Chrome"){
    console.log("You are using Chrome browser");
}
else if (Browser =="Edge"){
    console.log("You are using Edge browser");
} 
else if (Browser =="Firefox"){
    console.log("You are using Firefox browser");
}   
else{
    console.log("Kindly launch the browser" );
}
