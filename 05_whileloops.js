/*
let i=1
while(i <= 100){

    console.log(i);
    i++;
}
*/

//even numbers from 0 to 100
/*
let even =0;
while(even <=100)
{
    console.log(`Even number is : ${even}`);
  even +=2; 
  
}
  */
/*
let number = 1;
do{
    console.log(number);
    number++;
} while (number <=10);
 */

/*
const browser = ["Chrome","Edge","Firefox","Opera","Safari"];
for (let e of browser)
{
    //console.log(e);

    if(e=="Chrome")
    {
        console.log("Chrome browser is launched");
        break;
    }
}
*/

const user = [
    {
    Name: "Prabu",
    Age:42,
    City: "Chennai" 
    },
{
    Name: "Sridharan",
    Age: 72,
    City: "Chennai"
}
];
for(let key in user)
{
    const person = user[key];
    //console.log(person);
  for(let prop in person)
  {
    console.log(`${prop} : ${person[prop]}`);
  }

}