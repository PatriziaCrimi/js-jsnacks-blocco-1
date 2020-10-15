/* ISTRUZIONI
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero.
Se è dispari inseriscilo nell’array.
*/

// Variables initialization
const numbers_quantity = 6;
var odd_numbers_array = [];
var current_number = 0;

// *********** Entering Inputs ***********
for (var i = 0; i < numbers_quantity && !isNaN(current_number); i++) {
  current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    // Check odd number
    if (current_number % 2 !== 0) {
      // Storing in the array
      odd_numbers_array.push(current_number);
    }
  } else {
    // Error message
    console.log('ERROR. One of the values you entered is not a number. Please reload the page.');
    alert('ERROR. The value you entered is not a number. Please reload the page.');
  }
}

// Check data in Console
console.log('The array of odd numbers is:');
console.log(odd_numbers_array);

// Check empty array: no odd numbers entered
if (odd_numbers_array.length === 0) {
  console.log('The array is empty. The user didn\'t enter any odd number.')
  alert('You didn\'t enter any odd number.');
}
