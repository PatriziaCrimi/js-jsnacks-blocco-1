/* ISTRUZIONI
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

// Variables initialization
var numbers_quantity = parseFloat(prompt('Enter the amount of numbers that you want to calculate the cube for. Please check the results in console.'));
var numbers_array = [];
var cubes_array = [];
const power_exponent = 3;

// **************** SOLUTION NUMBER 1 - WITH ARRAY ****************

// Check that input is a number
if (!isNaN(numbers_quantity)) {
  console.log('The amount of numbers to calculate the cube for is ' + numbers_quantity + '.');
  // Storing numbers in array
  for (var i = 0; i < numbers_quantity; i++) {
    numbers_array.push(i+1);
  }
  // Cube calculation
  for (var i = 0; i < numbers_array.length; i++) {
    var cube = Math.pow(numbers_array[i], power_exponent);
    console.log('The cube of ' + numbers_array[i] + ' is: ' + cube + '.');
    cubes_array.push(cube);
  }
} else {
  // Error message
  console.log('ERROR. The value entered is not a number. Please reload the page.');
  alert('ERROR. The value you entered is not a number. Please reload the page.');
}

// Check data in Console
console.log('The array of numbers is:');
console.log(numbers_array);
console.log('The array of cubes is:');
console.log(cubes_array);


// **************** SOLUTION NUMBER 2 - WITHOUT ARRAY ****************

// Enter input
numbers_quantity = parseFloat(prompt('Enter the amount of numbers that you want to calculate the cube for. Please check the results in console.'));

// Cube calculation starting from number 1 (not zero!)
for (var i = 1; i <= numbers_quantity; i++) {
  cube = Math.pow(i, power_exponent);
  console.log('The cube of ' + i + ' is: ' + cube + '.');
}
