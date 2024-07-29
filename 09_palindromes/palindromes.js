const palindromes = function (string) {
    string = string
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+/g, "");
    reversedString = string.split("").reverse().join("");
    if (string === reversedString) {
      return true;
    } else {
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
