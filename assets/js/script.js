// Assignment Code -- variables
var generateBtn = document.querySelector("#generate");

var pwLCLetters = ["ant", "ban", "car", "dog", "ear", "fun", "gum", "hat", "ink", "jet", "key", "lot", "man", "net", "orb", "pie", "rat", "rob", "sun", "tux", "uni", "vow", "win", "xyl", "yak", "zoo"];
var pwUCLetters = ["ARM", "BAT", "CAT", "DOG", "ELE", "FUN", "GUM", "HAT", "INK", "JET", "KEY", "LOT", "MAN", "NET", "ORB", "PIE", "QAT", "ROB", "SUN", "TUX", "UNI", "VOW", "WIN", "XRAY", "YAK", "ZOO"];

var pwNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0",];
var pwSpecialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];


var potentialCharacters = []; //placeholder for concatted array

function generatePassword() {
  // prompt password requirements
  // prompt function for character length
  var pwGenerated = ""; //placeholder for generated password
  var pwLength = prompt(
    "Please select a password between 8 and 128 characters in length."
  );

  if (pwLength < 8 || pwLength > 128) {
    alert(
      "Your password must be at 8 characters and no more than 128 characters."
    ); //  if less than 8 or more than 128, alert user must be at least 8 characters and at least 128 characters
    return null;
  }

  if (isNaN(pwLength)) {
    alert("You must enter a number between 8 and 128.");
    console.log(pwGenerated); //check work
    return null;
  }

  // if within range, then go through series of prompts and get final array
  var U = confirm("Would you like your password to include uppercase letters?");
  var L = confirm("Would you like your password to include lowercase letters?");
  var N = confirm("Would you like your password to include numbers?");
  var S = confirm("Would you like your password to include symbols?");

  if (U === false && L === false && N === false && S === false) {
    alert("Your password must contain at least one of the four options.");
    return null;
  }

  if (U === true) {
    potentialCharacters = potentialCharacters.concat(pwUCLetters);
    console.log(pwUCLetters); //checkwork
  }

  if (L === true) {
    potentialCharacters = potentialCharacters.concat(pwLCLetters);
    console.log(pwLCLetters); //checkwork
  }
  if (N === true) {
    potentialCharacters = potentialCharacters.concat(pwNumbers);
  }
  if (S === true) {
    potentialCharacters = potentialCharacters.concat(pwSpecialChar);
    console.log(potentialCharacters); //check work
  }
  //randomize the array
  // determine the length (value) of combined array
var removeFromCharaters = potentialCharacters.splice
console.log(pwLength)
  for (var i = 0; i < pwLength; i++) {
    pwGenerated +=
      potentialCharacters[
        Math.floor(Math.random() * potentialCharacters.length)
      ];
  }
  console.log(pwGenerated); // check work
  window.alert("Your new password is: " + pwGenerated);

  return writePassword(pwGenerated);
  //
}
  // Write password to the #password input
function writePassword(password) {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
