//1.var let const 
//break up with ES6
const numbers = [12, 546, 45, 98];
let salary = 450;
salary = 455;


//2. Default parameters
function calculateSalary(){
    const remaining = salary - salary*tax;
    const total = remaining + bonus ;
    return total;
}

//3. tamplate string
const elementHTML = `
<div>
    <h3> Name: </h3>
    <p>Address: </p>
    <p>Salary: </p>
</div>
`

//4. Arrow function
const doubleIt = x=> x * 2;
const calculateSalary2 = (salary,tax,bonus) => salary - salary * tax + bonus;


//5. spread
const ages = [11, 12, 14, 15, 20];
//const newAges = ages;
const newAges = [...ages,22,25,21];


//6.destructuring 
const {x,y,...c} = {x:45, y:12, z: 33,name:'Sakib Al Hasan',salary: 50000};
const [a,b,...r] = [12, 45, 65, 98];
