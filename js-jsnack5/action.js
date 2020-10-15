/* ISTRUZIONI
Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente.
*/

// Variables initialization
var numbers_quantity = parseFloat(prompt('Enter the amount of numbers that you want to calculate the cube for.'));
var numbers_array = [];
var cubes_array = [];
const power_exponent = 3;

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
