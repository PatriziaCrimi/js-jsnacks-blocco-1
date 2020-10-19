/* ISTRUZIONI
Calcola la somma e la media dei numeri da 1 a 10.
*/

// Variables initialization
const first_number = 1;
const last_number = 10;
var numbers_array = [];
var sum = 0;

// ************* SOLUTION 1 - WITH ARRAY *************
console.log('****** SOLUTION 1 - WITH ARRAY *****');
// Storing numbers in array
for (var i = first_number; i <= last_number; i++) {
  numbers_array.push(i);
}
console.log('The array of numbers to calculate their sum and average is: ');
console.log(numbers_array);

// ******** Calculating Sum ********
for (i = 0; i < numbers_array.length; i++) {
  sum = sum + numbers_array[i];
}
// Print results
console.log('The sum of numbers ranging from ' + first_number + ' to ' + last_number + ' is: ' + sum + '.');
alert('The sum of numbers ranging from ' + first_number + ' to ' + last_number + ' is: ' + sum + '.');

// ******** Calculating Average ********
var average = sum / numbers_array.length;
// Print results
console.log('The average of the ' + numbers_array.length + ' numbers ranging from ' + first_number + ' to ' + last_number + ' is: ' + average + '.');
alert('The average of the ' + numbers_array.length + ' numbers ranging from ' + first_number + ' to ' + last_number + ' is: ' + average + '.');
console.log('');


// ************* SOLUTION 2 - WITHOUT ARRAY *************
console.log('****** SOLUTION 2 - WITHOUT ARRAY *****');
sum = 0;
for (i = first_number; i <= last_number; i++) {
  var current_number = i;
  // Calculating Sum
  sum += current_number;    //forma contratta di "sum = sum + current_number"
}
// Print results
console.log('The sum of numbers ranging from ' + first_number + ' to ' + last_number + ' is: ' + sum + '.');

// Calcuating Average
average = sum / (last_number - first_number + 1);
console.log('The average of the numbers ranging from ' + first_number + ' to ' + last_number + ' is: ' + average + '.');
console.log('');

// ************* SOLUTION 3 - WITH DO-WHILE LOOP *************
console.log('****** SOLUTION 3 - WITH DO-WHILE LOOP *****');

// ********* Enter minimum number *********
var minimum_number;
do {
  minimum_number = parseFloat(prompt('Enter the minimum number to calculate the sum and the average.'));
  // Check minimum number is a number (not a string)
  if (isNaN(minimum_number)) {
    alert('The minimum number you entered is not valid. Please enter a number.');
  }
} while (isNaN(minimum_number));
// Print minimum number
console.log('The minimum number you entered is: ' + minimum_number + '.');

// ********* Enter maximum number *********
var maximum_number;
do {
  maximum_number = parseFloat(prompt('Enter the maximum number to calculate the sum and the average.'));
  // Check maximum number is a number (not a string) AND higher than minimum number
  if (isNaN(maximum_number) || maximum_number <= minimum_number) {
    alert('The maximum number you entered is not valid. Please enter a number.');
  }
} while (isNaN(maximum_number) || maximum_number <= minimum_number);
// Print maximum number
console.log('The maximum number you entered is: ' + maximum_number + '.');

// ********* Calculating Sum *********
sum = 0;
for (i = minimum_number; i <= maximum_number; i++) {
  var current_number = i;
  sum += current_number;    //forma contratta di "sum = sum + current_number"
}
// Print results
console.log('The sum of numbers ranging from ' + minimum_number + ' to ' + maximum_number + ' is: ' + sum + '.');

// ********* Calculating Average *********
average = sum / (last_number - first_number + 1);
console.log('The average of the numbers ranging from ' + minimum_number + ' to ' + maximum_number + ' is: ' + average + '.');
