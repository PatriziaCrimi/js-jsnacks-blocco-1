/* ISTRUZIONI
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero.
Se è dispari inseriscilo nell’array.
*/

// Variables initialization
const numbers_quantity = 6;
var odd_numbers_array = [];
var check_input = true;

// **************** SOLUTION NUMBER 1 - BASIC LOGIC ****************

alert('You are going to enter ' + numbers_quantity + ' numbers.');

// *********** Entering Inputs ***********
for (var i = 0; i < numbers_quantity && check_input; i++) {
  var current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    // Check odd number
    if (current_number % 2 !== 0) {
      // Storing in the array
      odd_numbers_array.push(current_number);
    }
  } else {
    check_input = false;
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


// **************** SOLUTION NUMBER 2 - OPTIMIZATION ****************

alert('Let\'s try again! You are going to enter ' + numbers_quantity + ' numbers.')

// *********** Entering Inputs ***********
for (i = 0; i < numbers_quantity; i++) {
  current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    /* Check odd number:
          remember that 1===true and 0===false
          remember that if num/2 --> modulus/reminder === 1 is an odd number
          and if num/2 --> modulus/reminder === 0 is an even number
      */
    if (current_number % 2) { // this means: modulus === 1 === true
      // Storing in the array
      odd_numbers_array.push(current_number);
    }
  } else {
    check_input = false;
    current_number = 0;
    // Error message
    console.log('ERROR. One of the values you entered is not a number. This value is considered \'0\' by the system.');
    alert('ERROR. The value you entered is not a number. Your value is considered \'0\' by the system.');
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
