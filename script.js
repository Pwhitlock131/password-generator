// Selects the HTML element with the id 'generate'
var generateBtn = document.querySelector("#generate");

// This function generates the password based on the users input
// the 'alert' line displays a message informing the user about password criteria
// 'var length' prompts the user to enter password length and then stores said length into the 'length' variable
function generatePassword() {
  alert("A password must contain, lowercase, uppercase, numeric, and special characters");
  var length = parseInt(prompt("Enter password length from 8 to 128 characters"));

// checks to see if the entered amount is outside the valid range and shows an error message if it is
  if (length < 8 || length > 128) {
    alert("Invalid length");
    return;
  }

// Included in the prompt to ask the user if they would like to add these characters to their password
  var useLowercase = confirm("Would you like to include lowercase characters?");
  var useUppercase = confirm("Would you like to include uppercase characters?");
  var useNumeric = confirm("Would you like to include numeric characters?");
  var useSpecial = confirm("Would you like to include special characters?");

// if the user does not select any of the above prompts it displays an error asking user to choose at lease one
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type for your password");
    return;



  }
// Characters are defined for each option
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";
// an empty string that will store all the characters chosen by the user
  var allChars = ''
  if (useLowercase) allChars += lowercaseChars;
  if (useUppercase) allChars += uppercaseChars;
  if (useNumeric) allChars += numericChars;
  if (useSpecial) allChars += specialChars;
// an empty string to store the generated password
  var generatedPassword = '';
// repeatedly generates a random password by pulling from the selected 'allChars' and adding them to the 'generatePassword' and then returns password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];

  }



  return generatedPassword;

}
// function that is called when the user clicks the 'Generate' button
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This line adds an event listener to the generate button, so when the button is clicked it triggers the 'writePassword' function
generateBtn.addEventListener("click", writePassword);