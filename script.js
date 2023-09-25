// Selects the HTML element with the id 'generate'
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  alert("A password must contain, lowercase, uppercase, numeric, and special characters");
  var length = parseInt(prompt("Enter password length from 8 to 128 characters"));


  if (length < 8 || length > 128) {
    alert("Invalid length");
    return;
  }


  var useLowercase = confirm("Would you like to include lowercase characters?");
  var useUppercase = confirm("Would you like to include uppercase characters?");
  var useNumeric = confirm("Would you like to include numeric characters?");
  var useSpecial = confirm("Would you like to include special characters?");


  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type for your password");
    return;



  }

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  var allChars = ''
  if (useLowercase) allChars += lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumeric) allChars += numericChars;
  if (useSpecial) allChars += specialChars;

  var generatedPassword = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];

  }



  return generatedPassword;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);