// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passLength = prompt(
    "How many characters in your password between 8 to 128"
  );

  if (passLength >= 8 && passLength <= 128) {
    var lowercaseConfirm = confirm("Include Lower Case characters?");
    var uppercaseConfirm = confirm("Include Upper Case characters?");
    var numberConfirm = confirm("Include Numeric characters?");
    var specialConfirm = confirm("Include Special characters?");

    if (
      lowercaseConfirm ||
      uppercaseConfirm ||
      numberConfirm ||
      specialConfirm
    ) {
      var lowerArray = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      var upperArray = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
