function isPalindrome(str){
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("mom"));
console.log(isPalindrome("palindrom"));