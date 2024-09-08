# Overriding Pada Class

Proyek ini memperkenalkan konsep **Overriding** pada **Class** dalam JavaScript. Overriding adalah fitur yang memungkinkan subclass untuk menyediakan implementasi khusus pada method atau constructor yang telah didefinisikan di parent class. Hal ini memungkinkan subclass untuk menyesuaikan fungsionalitas dari method yang sudah ada di parent class.

## Apa itu Overriding?

**Overriding** di dalam pemrograman berorientasi objek (OOP) adalah proses di mana **subclass** mendefinisikan ulang method atau constructor yang telah ada di **parent class**. Overriding memungkinkan subclass untuk menyediakan fungsionalitas yang lebih spesifik atau memodifikasi perilaku default dari parent class.

### Contoh Overriding Constructor

**Constructor overriding** adalah ketika kita mendefinisikan kembali constructor di subclass, biasanya untuk menambahkan properti baru. Satu hal yang penting adalah kita harus selalu memanggil **`super()`** untuk memanggil constructor dari parent class, agar properti dari parent class dapat diinisialisasi.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // Memanggil constructor dari parent class
    this.subject = subject; // Properti baru yang spesifik di subclass
  }
}

const teacher = new Teacher("John", 30, "Math");
console.log(teacher); // Output: Teacher { name: 'John', age: 30, subject: 'Math' }
```

**Dalam contoh di atas:**

- `Person` memiliki constructor dengan properti `name` dan `age`.
- `Teacher` meng-override constructor untuk menambahkan properti baru `subject`, namun tetap memanggil constructor dari `Person` menggunakan `super(name, age)`.

## Contoh Overriding Method

Selain constructor, kita juga dapat meng-override method dari parent class. Ini dilakukan ketika kita ingin memberikan perilaku yang berbeda atau lebih spesifik pada subclass.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I am ${this.name}.`);
  }
}

class Teacher extends Person {
  // Overriding method greet dari parent class
  greet() {
    console.log(`Hello, I am ${this.name}, and I'm a teacher.`);
  }
}

const teacher = new Teacher("John");
teacher.greet(); // Output: Hello, I am John, and I'm a teacher.
```

Pada contoh ini, `greet()` di subclass `Teacher` meng-override method `greet()` dari parent class Person untuk memberikan pesan yang lebih spesifik terkait profesinya sebagai guru.

### Pentingnya Memahami Overriding

Dengan menggunakan overriding, kita dapat:

- **Memodifikasi perilaku yang ada**: Subclass bisa menyesuaikan fungsionalitas dari method yang diwarisi dari parent class.
- **Menambah fungsionalitas baru**: Selain memodifikasi method yang sudah ada, subclass juga bisa menambah properti atau method baru yang spesifik.

## Kesimpulan

Overriding pada class memberikan fleksibilitas untuk memodifikasi perilaku default dari parent class tanpa mengubah kode asli dari parent class tersebut. Ini adalah salah satu fitur kunci dalam pemrograman berorientasi objek yang membantu pengembangan kode yang lebih modular, fleksibel, dan dapat digunakan kembali.
