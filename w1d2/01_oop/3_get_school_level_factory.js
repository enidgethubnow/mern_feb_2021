// factory function - Must return an object
//    ALL attributes AND methods are contained inside the object
//      as key / value pairs
const createStudent = (name, age) => {
  return {
    name: name,
    age: age,
    getSchoolLevel: () => {
      if(this.age < 11) {
        console.log(this.name + " is in elementary school.");
      }
      else if(this.age < 15) {
        console.log(this.name + " is in middle school.");
      }
      else {
        console.log(this.name + " is in high school.");
      }
    }
  }
}

// my factory can return new objects based on a set object template
let student1 = createStudent("Billy", 8);
let student2 = createStudent("Sally", 16);

student1.getSchoolLevel();   
student2.getSchoolLevel();   

console.log("\nWhat is in the object?")
console.log(student1);
