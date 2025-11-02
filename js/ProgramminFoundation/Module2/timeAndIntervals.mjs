// To run a function later and only once
setTimeout(function () {
  console.log('This runs later');
}, 2000);

// Run later many times (to stop use clearInterval)
let count = 1;
const id = setInterval(function () {
  count = count + 1;

  if (count > 5) {
    //set the name of the interval to clear
    clearInterval(id);
  }
}, 1000);
