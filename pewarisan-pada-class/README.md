# Pewarisan (Inheritance) pada Class

Proyek ini menjelaskan konsep **Pewarisan (Inheritance)** pada **Class** dalam JavaScript. Pewarisan adalah konsep di mana sebuah class dapat mewarisi properti dan method dari class lain. Dengan pewarisan, kita dapat membuat class yang lebih spesifik berdasarkan class yang lebih umum, tanpa harus menulis ulang semua kode dari awal.

## Apa itu Pewarisan?

Dalam **pewarisan (inheritance)**, sebuah class yang disebut **child class** dapat mewarisi properti dan method dari class lain yang disebut **parent class**. Hal ini memungkinkan kita untuk mendefinisikan class yang lebih spesifik sambil tetap menggunakan fitur dari class yang lebih umum.

Contoh:

- **Class `Person`** merepresentasikan konsep umum seperti nama dan kemampuan untuk berjalan.
- **Class `Teacher`** adalah turunan dari `Person` yang memiliki properti tambahan seperti `subject` dan kemampuan untuk mengajar.

## Membuat Pewarisan dengan `extends`

Untuk mewarisi dari class lain di JavaScript, kita menggunakan keyword **`extends`**. Ini memungkinkan **child class** untuk menggunakan properti dan method dari **parent class**.

Contoh:

```javascript
class Teacher extends Person {
  // Constructor dengan parameter tambahan
  constructor(name, subject) {
    super(name); // Memanggil constructor dari parent class
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }
}
```

**Dalam contoh di atas:**

- `extends` digunakan untuk mewarisi properti dan method dari class `Person`.
- `super(name)` digunakan untuk memanggil constructor dari class `Person`. Ini wajib dilakukan ketika menggunakan pewarisan dan ingin memanggil constructor dari parent class.

## Keyword super()

`super()` adalah kata kunci yang digunakan untuk memanggil constructor atau method dari parent class. Ini berguna ketika kita ingin mengakses properti atau method yang ada di parent class.
**Contoh penggunaan `super()` dalam constructor:**

```javascript
constructor(name, subject) {
    super(name); // Memanggil constructor dari parent class
    this.subject = subject;
}
```

`super(name)` di sini memanggil constructor dari class `Person`, sehingga `name` dapat diteruskan ke class induk.

## Contoh Penggunaan Pewarisan

```javascript
// Parent class: Person
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`${this.name} is walking`);
  }
}

// Child class: Teacher yang mewarisi dari Person
class Teacher extends Person {
  constructor(name, subject) {
    super(name); // Memanggil constructor dari Person
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }
}

// Membuat instance dari class Teacher
const teacher = new Teacher("John", "JavaScript");
teacher.walk(); // Output: John is walking
teacher.teach(); // Output: John is teaching JavaScript
```

Pada contoh di atas, `Teacher` mewarisi method `walk()` dari class `Person`, tetapi memiliki method baru yang spesifik untuk Teacher, yaitu `teach()`.

## Manfaat Pewarisan

- **Kode yang lebih terstruktur:** Dengan pewarisan, kita dapat mengatur class-class yang lebih spesifik dan tidak perlu menulis ulang kode yang sama.
- **Keterbacaan kode yang lebih baik:** Kode menjadi lebih mudah dibaca dan dipelihara, karena fungsi yang umum dapat disimpan di parent class.
- **Penggunaan kembali kode (code reusability):** Method dan properti yang sudah ada di parent class dapat digunakan kembali oleh child class, mengurangi duplikasi kode.

## Kesimpulan

Pewarisan (inheritance) adalah salah satu fitur utama dalam pemrograman berorientasi objek (OOP) yang memungkinkan kita untuk membuat class yang lebih spesifik dengan cara mewarisi properti dan method dari class yang lebih umum. Dengan memanfaatkan pewarisan, kita dapat membangun sistem yang lebih modular, terstruktur, dan mudah dipelihara.
