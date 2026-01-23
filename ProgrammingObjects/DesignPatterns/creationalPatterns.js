//CREATIONAL PATTERNS
//patterns that control object creation
//They are build on top of each other
//READ DOWN

//SINGLETON PATTERN
//ensures a class has only one instance and provides a global point of access to it
let instance = null; //save first created instance here and see if it exists next time we call the class

class Person {
  constructor(name, age, gender) {
    if (!instance) {
      //check if instance already exists
      this.name = name;
      this.age = age;
      this.gender = gender;
      instance = this; //need to save the instance
    } else {
      return instance;
    }
  }
}

const john = new Person('John', 22, 'male');
const bob = new Person('Bob', 22, 'male'); //will return the first instance created (john)

//FACTORY PATTERN
//Mechanism for creating classes/objects without using having to know anything about the class that will be created
//Pass params into a factory class and get a new object created
class Employee {
  /* ... */
}
class Contractor {
  /* ... */
}
class Intern {
  /* ... */
}

class WorkerFactory {
  createWorker(type, name, age) {
    switch (type) {
      case 'employee':
        return new Employee(name, age, 'full benefits');
      case 'contractor':
        return new Contractor(name, age, 'hourly rate');
      case 'intern':
        return new Intern(name, age, 'stipend');
      default:
        throw new Error('Unknown worker type');
    }
  }
}
const factory = new WorkerFactory(); //start the factory
const emp = factory.createWorker('employee', 'Alice', 30); //create an employee

//ABSTRACT FACTORY PATTERN
//https://learning.noroff.no/mod/book/view.php?id=23851&chapterid=112613#mod_book-chapter
class Teacher {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class TeacherFactory {
  createPerson(type) {
    switch (type) {
      case 'John':
        return new Teacher('John', 32, 'male');
      case 'Barbara':
        return new Teacher('Barbara', 37, 'female');
    }
  }
}

const teacherFactory = new TeacherFactory();

const peopleFacturer = (type, model) => {
  switch (type) {
    case 'teacher':
      return teacherFactory.createPerson(model);
  }
};

const ohn = peopleFacturer('teacher', 'John');
