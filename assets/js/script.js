var generateBtn = document.querySelector("#generate");

function generatePassword() {
// Assignment Code -- variables
var pwLCLetters = "abcdefghijklmnopqrstuvwxyz";
var pwUCLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwNumbers = "0123456789";
var pwSpecialChar = "!#$%&*+-/:;<=>?@[^_`{|}~";
var potentialCharacters = ""; //placeholder for concatted array
var pwGenerated = ""; //placeholder for final password


  // prompt password requirements
  // prompt function for character length
  var pwLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
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
// var removeFromCharaters = potentialCharacters.splice
console.log(pwLength)
for (var i = 0; i < pwLength -1; i++) { //fixes the overage in the generated password
  pwGenerated += potentialCharacters.charAt(Math.floor(Math.random() * potentialCharacters.length));
}
  console.log(pwGenerated); // check work
  window.alert("Your new password is: " + pwGenerated);
  writePassword(pwGenerated);
 

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