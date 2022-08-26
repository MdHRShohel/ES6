//syntax sugar Method
class Instructor {
    name;
    designation = 'Web Instructor'
    team = 'Web Team'
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    stratSupportSession(time){
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module){
        console.log('please create quiz module ${module}')
    }
}
const  amir = new Instructor('Amir','Mombai');
console.log(amir);
amir.stratSupportSession('9.00');
const  rakib = new Instructor('Rakib','Dhaka');
console.log(rakib);