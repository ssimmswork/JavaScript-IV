// CODE here for your Lambda Classes

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(insInfo) {
        super(insInfo)
        this.specialty = insInfo.specialty;
        this.favLanguage = insInfo.favLanguage;
        this.catchPhrase = insInfo.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`
    }
}

class Students extends Person {
    constructor(studentInfo) {
        super(studentInfo)
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade;
    }
    listsSubjects() {
        studentInfo.forEach(function(favSubjects) {
            return `${favSubjects} has begun sprint challenge on ${subject}`;
        });
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
    gradeRand() {
        return ((Math.floor(Math.random() * 5)) - grade);
    }
    graduate() {
        if (grade < 70) {
            return 'Go back to grading their assignment';
        } else {
            return 'Graduate!!!!';
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(pMInfo) {
        super(pMInfo)
        this.gradClassName = pMInfo.gradClassName;
        this.favInstructor = pMInfo.favInstructor;
    }
    standUp(channel) {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode() {
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}


const fred = new ProjectManagers({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
});

const Sam = new ProjectManagers({
    name: 'Sam',
    location: 'Washington, DC',
    age: 40,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Code so the mad architct wont come after you`
});

const Shy = new ProjectManagers({
    name: 'Shy',
    location: 'Baltimore',
    age: 28,
    gender: 'female',
    favLanguage: 'C#',
    specialty: 'Front-end & Back-end',
    catchPhrase: `I'm lost`
});

const joe = new Students({
    name: 'joe',
    age: '25',
    location: 'New York',
    gender: 'male',
    previousBackground: 'Customer Service',
    className: 'WPT5',
    favSubjects: 'Javascript',
    subject: 'Web Dev'

});

const sue = new Students({
    name: 'sue',
    age: '30',
    location: 'Miami',
    gender: 'female',
    previousBackground: 'Sales',
    className: 'WPT5',
    favSubjects: 'Javascript',
    subject: 'Web Dev'
});

console.log(fred);
console.log(Sam);
console.log(Shy);
console.log(joe);
console.log(sue);