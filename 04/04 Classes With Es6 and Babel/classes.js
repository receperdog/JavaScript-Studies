//We can get rid of the this keywords and constructors with because of new properties of ES6
let Human = class Human {
  gender;
  name;
};
//Unnamed class decleration
let Man = class extends Human {
  gender = "Male";
  nameOfMan = "Recep";

  getName = () => {
    return this.nameOfMan;
  };
};
let obj = new Man();
console.log(obj.nameOfMan);
console.log(obj.gender);
console.log(obj.getName());
