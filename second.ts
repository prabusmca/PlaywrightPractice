let myname : string ='Prabu Sridharan'
let myage: number=41
let mycity: string='chennai'
let mynative:string='cuddalore'
let ishuman:boolean=true

/*console.log('My name is:'+ myname)
console.log('My aga is :'+ myage)
console.log('My city is :'+ mycity)
console.log('My native is :'+ mynative)
console.log('I am human :'+ ishuman)



console.log(typeof myname)
console.log(typeof myage)
console.log(typeof mycity)
console.log(typeof mynative)
console.log(typeof ishuman)





let FirstNumber =41;
let SecondNumber=42;
let sum= FirstNumber + SecondNumber;
console.log("Sum of two numbers is : "+sum);
*/

// var a=10;
// const employee={ name : "Prabu"}
// a=100;
// console.log(a);
// employee.name="Sridharan";
// console.log(employee);

 const car = { brand: "Toyota", Price: 850000, waitingPeriod: "2 months", availablecash: -8500}; 

//  Modify property

 car.brand = "Honda";

//  Try reassign
//  car = { brand: "BMW" }; // 

console.log(car);
console.log("Data Type of the brand variable is : "+ typeof car.brand);
console.log("Data Type of the Price variable is : "+ typeof car.Price);
console.log("Data Type of the waitingPeriod variable is : "+ typeof car.waitingPeriod);
console.log("Data Type of the availablecash variable is : "+ typeof car.availablecash);

const firstname ="Prabu";
const lastename="Sridharan";
const Name = firstname + lastename;
console.log("My name is : "+ Name);
console.log(Name.split(','))