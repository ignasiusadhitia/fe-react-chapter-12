// Parent class: Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, I am ${this.name}, and I am ${this.age} years old.`);
    }
}

// Child class: Teacher yang melakukan constructor overriding dan method overriding
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Memanggil constructor dari class Person
        this.subject = subject;
    }

    // Overriding method greet
    greet() {
        console.log(`Hello, I am ${this.name}, and I teach ${this.subject}.`);
    }
}

const teacher = new Teacher('John', 30, 'Math');
teacher.greet(); // Output: Hello, I am John, and I teach Math.
