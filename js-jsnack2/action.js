/* ISTRUZIONI
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// Variables initialization
var first_word = prompt('Enter the first word.');
var second_word = prompt('Enter the second word.');

// Check data in Console
console.log('The first word is: ' + first_word + '.');
console.log('The second word is: ' + second_word + '.');

// *********** Check words' length ***********
if (first_word.length < second_word.length) {
  // First is shorter
  console.log('The shortest word is: ' + first_word + '.');
  console.log('The longest word is: ' + second_word + '.');
} else if (first_word.length > second_word.length) {
  // Second is shorter
  console.log('The shortest word is: ' + second_word + '.');
  console.log('The longest word is: ' + first_word + '.');
} else {
  // Same length
  console.log('There is no shorter word, they both are ' + first_word.length + ' characters long.');
}
