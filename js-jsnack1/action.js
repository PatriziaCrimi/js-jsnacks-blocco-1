/* ISTRUZIONI
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// Variables initialization
var first_number = parseFloat(prompt('Enter the first number.'));
var second_number = parseFloat(prompt('Enter the second number.'));

// Check data in Console
console.log('The first number is: ' + first_number + '.');
console.log('The second number is: ' + second_number + '.');

// *********** Check higher number ***********
if (!isNaN(first_number) && !isNaN(second_number)) {
  if (first_number > second_number) {
    // First is higher
    console.log('The highest number is: ' + first_number + '.');
  } else if (first_number < second_number) {
    // Second is higher
    console.log('The highest number is: ' + second_number + '.');
  } else {
    // Same numbers
    console.log('There is no higher number, they both are ' + first_number + '.');
  }
} else {
  console.log('ERROR. The value you entered is not a number. Please reload the page.');
}
