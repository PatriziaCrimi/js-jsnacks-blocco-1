/* ISTRUZIONI
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// Variables initialization
const numbers_quantity = 5;
var numbers_array = [];

// Entering Inputs
for (var i = 0; i < numbers_quantity; i++) {
  var current_number = prompt('Enter a number.');
  numbers_array.push(current_number);
}

// Check data in Console
console.log('The array of numbers is:');
console.log(numbers_array);

// *********** Check words' length ***********
