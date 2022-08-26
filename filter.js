const numbers = [12, 43, 32, 45, 56, 54, 34, 36];

const bigNums = numbers.filter(number => number > 40);
const tiny = numbers.filter(n => n<40);
console.log(bigNums);
console.log(tiny);