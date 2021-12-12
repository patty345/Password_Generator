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
      var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var specialArray = [
        '"',
        "!",
        "#",
        "$",
        "%",
        "&",
        "@",
        "^",
        "*",
        "(",
        ")",
        "+",
        "-",
        "<",
        ">",
        "/",
        "?",
      ];
      var password = "";

      //Generating the password
      for (var i = 0; password.length < passLength; i++) {
        //random select lowercase, upper case, numeric and special characters
        var randomType = Math.floor(Math.random() * 4);

        //random lower case character
        if (randomType === 0 && lowercaseConfirm) {
          console.log(`randomType: ${randomType} = lowercase`);
          var radnomLowerCase =
            lowerArray[Math.floor(Math.random() * lowerArray.length)];
          console.log(`randomLowerCase: ${radnomLowerCase}`);
          password = password + radnomLowerCase;
        }

        //random upper case character
        else if (randomType === 1 && uppercaseConfirm) {
          console.log(`randomType: ${randomType} = uppercase`);
          var randomUpperCase =
            upperArray[Math.floor(Math.random() * randomUpperCase.length)];
          console.log(`randomUpperCase: ${randomUpperCase}`);
          password = password + randomUpperCase;
        }

        //random number characters
        else if (randomType === 2 && numberConfirm) {
          console.log(`randomType: ${randomType} = number`);
          var randomNumberChar =
            numArray[Math.floor(Math.random() * randomNumberChar.length)];
          console.log(`randomNumberChar: ${randomNumberChar}`);
          password = password + randomNumberChar;
        }

        // random special characters
        else if (randomType === 3 && specialConfirm) {
          console.log(`randomType: ${randomType} = special`);
          var randomSpecialChar =
            specialArray[Math.floor(Math.random() * randomSpecialChar.length)];
          console.log(`randomSpecialChar: ${randomSpecialChar}`);
          password = password + randomSpecialChar;
        }
      }

      // return the generated password
      console.log(`password: ${password}`);
      console.log(`password length: ${password.length}`);
      return password;
    } else {
      alert("Please select one character type");
      generatePassword();
    }
  } else {
    alert("Please select a length number between 8 to 128 characters");
    generatePassword();
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
