/*
This is for when I do my XBRL stuff and I want to see 
which new, custom tags have been added to the financial reports
year on year.

I get the tags from one year (array a) and the other year (array b)
and can find the differences.
*/

var a = [];
var b = [];
const gen = () => Math.floor(Math.random() * 11)

for(var i = 0; i <= 10; i++){
  a.push(gen());
  b.push(gen());
}

console.log(a);
console.log(b);
console.log("============");

const c = a.slice();
a = a.filter(element => !b.includes(element));
b = b.filter(element => !c.includes(element));

console.log(a);
console.log(b);