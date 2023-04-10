// 배열

const fruit = ["apple", "banana"];

// 구조분해할당이 없을 때
// let one = fruit[0];
// let two = fruit[1];

// 구조분해할당!!
let [one, two] = fruit;

const user = {
  name: "철수",
  age: 9,
  school: "다람쥐초등학교",
};

// 구조분해할당이 없을 때
// let name = user.name;
// let age = user["age"];

let { name: aaa, age, school } = user;

// console.log(aaa, age, school);

//활용

function sayHi({ name, age, school }) {
  console.log(name, age, school);
}

sayHi(user);
