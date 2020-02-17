// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
return num + 2;
}
// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
 console.log(addTwo(10));

function minusTwo(num){
  return num - 2;
}

// Challenge 2
function addS(word) {
 return word += 's';
}
// uncomment these to check your work
 console.log(addS('pizza'));
 console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  let newA = [];
  for (let i=0; i<array.length; i++){
    newA.push(callback(array[i]));
  }
return newA;
}
console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
array.forEach(callback);
}

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);



// see for yourself if your forEach works!
//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
let newB = [];
function mapWith(array, callback) {
  array.forEach(n => newB.push(callback(n)));
}
mapWith([1, 2, 3], minusTwo);
console.log(newB);

//Extension 2
const nums = [4, 1, 3];
const add = function(a, b) {return a + b;}

function reduce(array, callback, initialValue) {
   array.forEach(n => {

    initialValue = callback(n, initialValue);

    });
  console.log(initialValue);
}

reduce(nums, add, 0);
