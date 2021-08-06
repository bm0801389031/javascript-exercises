const palindromes = function(string) {
    const processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    console.log(processedString)
    const reversed = processedString.split("").reverse().join("")
    console.log(reversed)
    if (processedString == reversed){
        return true
    } else {
        return false
    }
    
  };

module.exports = palindromes;
