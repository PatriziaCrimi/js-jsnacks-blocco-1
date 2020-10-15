/* ISTRUZIONI
Calcola la somma e la media dei numeri da 1 a 10.
*/

// Variables initialization
const first_number = 1;
const last_number = 10;
var numbers_array = [];
var sum = 0;

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
