// Class dasar (parent class)
class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }
}

// Pewarisan dari class Person (child class)
class Teacher extends Person {
    constructor(name, subject) {
        super(name); // Memanggil constructor dari parent class
        this.subject = subject;
    }

    teach() {
        console.log(`${this.name} is teaching ${this.subject}`);
    }
}

// Membuat instance dari class Teacher
const teacher = new Teacher('John', 'JavaScript');
teacher.walk();  // Output: John is walking
teacher.teach(); // Output: John is teaching JavaScript
