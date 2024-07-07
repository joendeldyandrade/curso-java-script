const names = [`Felipe`, `João`, `Julia`, 10, false];
const João = names[1];
console.log(João);
names.push(`Pedro`);
console.log(names);

names.unshift("Fernanda");
console.log(names);

names.pop();
names.pop();
names.pop();

names[3] = "Gustavo";

console.log(names);

const indexOfFelipe = names.indexOf("Felipe");
const sortedNames = names.sort();
console.log(names.length);
console.log(sortedNames);
