const student = {
    name: 'Shohel',
    age : 15,
    class : 'Ten',
    marks: {
        math : 77,
        physics : 89,
        chemistry : 53
    },
}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks'] ['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];

console.log(subjectMarks);