const rand = (arr) => arr.push(Math.floor(Math.random() * 21));

const listA = [];
const listB = [];
for(let i = 0; i <= 10; i++){
  rand(listA);
  rand(listB);
}

console.log(listA);
console.log(listB);

let listC = [];

for(let i = 0; i <= listA.length; i++){
  if(listA.indexOf(listB[i]) >= 0){

  } else {
    listC.push(listA[i]);
  }
}
console.log(listC);

