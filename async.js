/* CHALLENGE 1 */
function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */
function delayedGreet() {
  setTimeout( () => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */
function helloGoodbye() {
 setTimeout ( () => console.log('good bye'), 2000);
 console.log('hello');

}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */
function brokenRecord() {
  setInterval( () => console.log('hi again'), 1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */
function limitedRepeat() {
  let counter = 0;
  let repeat = setInterval( function(){
    console.log('hi for now');
    counter++;

    if(counter === 5){
      clearInterval(repeat);
    }
  }, 1000,)}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */
function everyXsecsForYsecs(func, interval, duration) {
// declares a const set to the return value of Date.now() which is the number of milliseconds elapsed since January 1, 1970. According to MDN using Date.now() is a more acurate way to get the exact second the fucntion was started.
   const start = Date.now();

   let intervalMS = interval * 1000;

   let repeat = setInterval( () => {
     func();

     // gets the number of milli seconds since the function started
     let milli = Date.now() - start;

     // evalutes to seconds
     let counter = Math.floor(milli / 1000);

     if(counter === duration){
       clearInterval(repeat);
       console.log(counter);
     }

   }, intervalMS);
}
// Uncomment the following lines to check your work!
// function theEnd() {
//  console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */
function delayCounter(target, wait) {

 	function repeat() {
   let numbersInRoute = 0;
   let numCount = setInterval( () => {
   	if(numbersInRoute < target){
      	numbersInRoute++;
      	console.log(numbersInRoute);
    		}else{
          // console.log('number are equal or count has been completed');
          clearInterval(numCount);
        }
    }, wait);
   }

 return repeat();
}
// UNCOMMENT THESE TO TEST YOUR WORK!
delayCounter(3, 1000);
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3
