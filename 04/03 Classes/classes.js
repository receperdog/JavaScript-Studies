//Named class decleration
let Human = class Human {
  constructor(gender, name) {
    this.gender = gender;
    this.name = name;
  }
};
//Unnamed class decleration
let Man = class extends Human {
  constructor() {
    super();
    this.gender = "Male";
    this.name = "Recep";
  }
};
let obj = new Man();
console.log(obj.name);
console.log(obj.gender);
