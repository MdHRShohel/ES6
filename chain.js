const users = [
    {
        id: 1, name : 'Abul',job: 'Doctor'
    }
]
//console.log(users[0].name);

const data = {

    salary : 500,
    data:[
        {id: 1, name: ' Utsho', job :'cleaner'},
        {id: 2, name: ' Ajmain Shariar', job :'cleaner'}
    ]
}
const firstJob = data.data[0].job;
//console.log(firstJob);

const user = {
    id: 5001,
    name : 'Thomas Alba Edision',
    address: {
        street: {
            firstLine : '34/A kochukhet lane',
            secondLine : 'thrid floor',
            thirdLine : 'right side'
        }
    }      
}
 //optional chainning
console.log(user.address.street?.firstLine);