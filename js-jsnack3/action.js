/* ISTRUZIONI
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

// Variables initialization
const numbers_quantity = 5;
var numbers_array = [];
var current_number = 0;


// **************** SOLUTION NUMBER 1 - BASIC LOGIC ****************

// *********** Entering Inputs ***********
for (var i = 0; i < numbers_quantity && !isNaN(current_number); i++) {
  current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    // Storing in the array
    numbers_array.push(current_number);
  } else {
    // Error message
    console.log('ERROR. One of the values entered is not a number. Press \'OK\' to continue.');
    alert('ERROR. The value entered is not a number. Press \'OK\' to continue.');
  }
}

// Check data in Console
console.log('The array of numbers is:');
console.log(numbers_array);

// Calculating Sum
var sum = numbers_array[0];
for (i = 1; i < numbers_array.length; i++) {
  sum = sum + numbers_array[i];
}
// Print output
console.log('The sum of the numbers in the array is: ' + sum + '.');
alert('The sum of the numbers you entered is: ' + sum + '.');


// ******************** SOLUTION NUMBER 2 - OPTIMIZATION ********************

// *********** Entering Inputs & Calculating Sum ***********
sum = 0;

for (i = 0; i < numbers_quantity; i++) {
  current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    sum = sum + current_number;
  } else {
    // Invalid input
    current_number = 0;
    console.log('ERROR. One of the values entered is not a number. This value is considered \'0\' by the system.');
    alert('ERROR. The value you entered is not a number. This value is considered \'0\' by the system.');
  }
}
// Print output
console.log('The sum of the numbers the user entered is: ' + sum + '.');
alert('The sum of the numbers you entered is: ' + sum + '.');


// ********** SOLUTION NUMBER 3 - INPUT CHECK IN THE CYCLE **********

// *********** Entering Inputs & Calculating Sum ***********
sum = 0;
var check_input = false;

for (i = 0; i < numbers_quantity && !check_input; i++) {
  current_number = parseFloat(prompt('Enter a number.'));
  if (!isNaN(current_number)) {
    sum = sum + current_number;
  } else {
    check_input = true;
    // Error message
    console.log('ERROR. One of the values entered is not a number. Please reload the page.');
    alert('ERROR. The value entered is not a number. Please reload the page.');
  }
}
// Print Sum
if (check_input === false) {
  console.log('The sum of the numbers the user entered is: ' + sum + '.');
  alert('The sum of the numbers you entered is: ' + sum + '.');
}
