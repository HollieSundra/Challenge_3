// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Assignment Code
var numbers = ["0", "1", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["*", "&", "$", "#", "@", "?", "^", "%", "!", "("];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];

// Prompt user to make choices
function getPasswordCriteria() {
  var userPasswordLength = prompt("How long would you like the password?");

  if(isNaN(userPasswordLength)) {
    userPasswordLength = prompt("Please choose number.");
  } if((userPasswordLength < 8) || (userPasswordLength > 126)) {
    userPasswordLength = prompt("Please enter a number between 7 and 127");} 
  
  

  var userChooseNumbers = confirm("Do you want numbers in your password?");
  var userChooseUpperCase = confirm("Do you want upper case letters in your password?");
  var userChooseLowerCase = confirm("Do you want lower case letters in your password?");
  var userChooseSymbols = confirm ("Do you want symbols in your password?");



//Options choosing and defining the length
var options = {
  userChooseNumbers: userChooseNumbers,
  userPasswordLength: userPasswordLength,
  userChooseUpperCase: userChooseUpperCase,
  userChooseLowerCase: userChooseLowerCase,
  userChooseSymbols: userChooseSymbols
}; 
return options;
}


function createRandom(length) {
  var randomNum = Math.floor(Math.random() * length);
  return randomNum;
}


//If else for Arrays
function generatePassword() {
  var userChoose = getPasswordCriteria();
  var availableChars = [];
  var passwordArr = [];
  if(userChoose.userChooseNumbers) {
    availableChars = availableChars.concat(numbers);
  }if(userChoose.userChooseSymbols) {
    availableChars = availableChars.concat(symbols);
  }if(userChoose.userChooseUpperCase) {
    availableChars = availableChars.concat(upperCase);
  }if(userChoose.userChooseLowerCase) {
    availableChars = availableChars.concat(lowerCase);
  }

  for(var i = 0; i < userChoose.userPasswordLength; i++) {
    passwordArr.push(availableChars[createRandom(availableChars.length)]);
  }

  return passwordArr.join("");
}

var generateBtn = document.querySelector("#generate");

//Write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
