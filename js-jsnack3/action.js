/* ISTRUZIONI
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// Variables initialization
const numbers_quantity = 5;
var numbers_array = [];
var current_number = 0;

// Entering Inputs
for (var i = 0; i < numbers_quantity && !isNaN(current_number); i++) {
  current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    numbers_array.push(current_number);
  } else {
    alert('The value entered is not a number. Please reload the page.');
    console.log('One of the values entered is not a number. Please reload the page.');
  }
}

// Check data in Console
console.log('The array of numbers is:');
console.log(numbers_array);

// *********** Check words' length ***********
