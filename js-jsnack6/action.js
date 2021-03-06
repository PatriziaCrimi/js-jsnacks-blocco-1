/* ISTRUZIONI
Stampa le potenze di 2 senza superare il numero 1000.
*/

// Variables initialization
const power_base = 2;
const maximum_number = 1000;
var counter = 0;
var current_power_result = 0;
var power_results_array = [];

// **************** SOLUTION NUMBER 1 - WITH ARRAY ****************
console.log('***SOLUTION NUMBER 2 - WITH ARRAY***');
// *********** Power calculation ***********
for (var i = 0; i <= counter; i++) {
  var power_exponent = i;
  current_power_result = Math.pow(power_base, power_exponent);
  // Check for power result maximum 1000
  if (current_power_result < maximum_number) {
    power_results_array.push(current_power_result);
    counter++;
  }
}
// Print output
console.log('The array containing the powers of ' + power_base + ' within the specified maximum number limit of ' + maximum_number + ' is:');
console.log(power_results_array);
console.log('');


// **************** SOLUTION NUMBER 2 - WITHOUT ARRAY ****************
console.log('***SOLUTION NUMBER 2 - WITHOUT ARRAY***');
// *********** Power calculation ***********
var check_limit = true;
for (i = 0; check_limit; i++) {
  power_exponent = i;
  current_power_result = Math.pow(power_base, power_exponent);
  // Check for power result maximum 1000
  if (current_power_result < maximum_number) {
    // Print results
    console.log(power_base + ' elevated to the power of ' + power_exponent + ' is: ' + current_power_result);
  } else {
    check_limit = false;
  }
}
console.log('');


// *********** SOLUTION NUMBER 3 - WITHOUT ARRAY OPTIMIZED ***********
console.log('***SOLUTION NUMBER 3 - WITHOUT ARRAY OPTIMIZED***');
// *********** Power calculation ***********
current_power_result = 0
for (i = 0; current_power_result < maximum_number; i++) {
  power_exponent = i;
  // Print results
  console.log(power_base + ' elevated to the power of ' + power_exponent + ' is: ' + current_power_result);
  // Power calculation
  current_power_result = Math.pow(power_base, power_exponent);
}
console.log('');


// *********** SOLUTION NUMBER 4 - WHILE LOOP ***********
console.log('***SOLUTION NUMBER 4 - WHILE LOOP***');
// *********** Power calculation ***********
current_power_result = 0;
power_exponent = 0;
while (current_power_result < maximum_number) {
  // Print results
  console.log(power_base + ' elevated to the power of ' + power_exponent + ' is: ' + current_power_result);
  // Power calculation
  current_power_result = Math.pow(power_base, power_exponent);
  power_exponent++;
}
