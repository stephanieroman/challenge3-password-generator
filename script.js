var generateBtn = document.querySelector("#generate");

// create variable for special characters, numbers, lowercase and uppercase A-Z
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = upperCase.toLowerCase();
var specialCh = "!@?$%&*()";
var numbers = "0123456789";

// 1. Prompt the user for password criteria (window.prompt - user input)
//  - ask use for password length (8 < 128), if outside of range alert user "invalid entry"
//  - ask user to confirm follow criteria (lowercase, uppercase, numbers, special characters)
//    (window.confirm - true or false)
// 2. Validate the input.
// 3. Then a password is generated with the password length desired.

function generatePassword() {
  var savedPassword = "";
  var userLength = window.prompt("Please provide a length between 8 and 128");

  if (userLength >= 8 && userLength <= 128) {
    var isSpecialCharacter = window.confirm(
      "Do you want special characters in your password?"
    );
    var isUpperCase = window.confirm(
      "Do you want upper case characters in your password?"
    );
    var isLowerCase = window.confirm(
      "Do you want lower case characters in your password?"
    );
    var isNumbers = window.confirm("Do you want numbers in your password?");

    while (savedPassword.length < userLength) {
      if (isSpecialCharacter) {
        var randomIndex = Math.floor(Math.random() * specialCh.length);
        savedPassword += specialCh[randomIndex];
      }

      if (isUpperCase) {
        var randomIndex = Math.floor(Math.random() * upperCase.length);
        savedPassword += upperCase[randomIndex];
      }

      if (isLowerCase) {
        var randomIndex = Math.floor(Math.random() * lowerCase.length);
        savedPassword += lowerCase[randomIndex];
      }

      if (isNumbers) {
        var randomIndex = Math.floor(Math.random() * numbers.length);
        savedPassword += numbers[randomIndex];
      }
    }
  } else {
    window.alert("Sorry, invalid password length entry");
  }
  return savedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
