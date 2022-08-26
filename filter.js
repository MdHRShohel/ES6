const numbers = [12, 43, 32, 45, 56, 54, 34, 36];

const bigNums = numbers.filter(number => number > 40);
const tiny = numbers.filter(n => n<40);
console.log(bigNums);
console.log(tiny);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 2, name: 'mobile', price: 55000},
    {id: 3, name: 'tablet', price: 34500},
];


const expensive = products.filter(product => product.price > 40000);
console.log(expensive);