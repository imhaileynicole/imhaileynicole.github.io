// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChoice = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberChoice = ["1","2","3","4","5","6","7","8","9"];
var specialCharChoice = ["'",".",",",":",";","=","?","/","_","~","|","&","<",">","!","+","#","%","(",")","*","^","@","-","}","{","[","]"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword () {
  var numChar = prompt("How many characters do you want in the password? (Must be between 6 and 100 characters)")
  if(numChar < 6 || numChar > 100) {
    alert ("Please pick a number between 6 and 100");

}

else {
    var lowerCase= confirm("Do you want to include lowercase in your password?");
    var upperCase = confirm("Do you want to include uppercase in your password?");
    var numIncl= confirm("Do you want to include numeric values in your password?");
    var special = confirm("Do you want to include special characters in your password?");

}

//   var confirmArray = [];
//   console.log("password")
//   // return;
  
if (lowerCase === false && upperCase === false && numIncl === false && special === false) {
  alert("There has to at least one variable included!");
}
else if (lowerCase === true && upperCase === true && numIncl === true && special === true) {
while(parseInt(passwordText) < parseInt(numChar)) {
  var passwordText = passwordText += lowerChoices[Math.floor(Math.random()* parseInt(numChar))] + upperChoices[Math.floor(Math.random() * parseInt(numChar))] + numberChoice[Math.floor(Math.random() * parseInt(numChar))];
}
for (var i = 0; i < numChar; i++){
  symbol = Math.floor(Math.random() * parseInt(numchar));
  passwordText = lowerChoice[symbol] + upperChoice[symbol] + numberChoice[symbol] + specialCharChoice[symbol];
}
  // password += randomChoice(lowerChoice);
  // confirmArray.push(lowerChoice);
  // initialCharAdded++;

// }if (upperC === true) {
//   password += randomChoice( upperChoice);
//   confirmArray.push( upperChoice);
//   initialCharAdded++;
  
// } if (numberC === true) {
//   password += randomChoice( numberChoice);
//   confirmArray.push( numberChoice);
//   initialCharAdded++;

// }
// if (specialQ === true) {
//   password += randomChoice(specialCharChoice);
//   confirmArray.push(specialCharChoice);
//   initialCharAdded++;
// }

// for(var i = 0; i < (numChar - initialCharAdded); i++) {
//   password += randomChoice(confirmArray[randomNumber(confirmArray)]);
// }
// shuffle(password);
// return password;


}
console.log(passwordText);



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
