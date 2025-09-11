let x = 10;
let y = 3;
console.log(x+y);
console.log(x%y);

let a = 25;
if(a % 2 == 0){
    console.log(a,"is even")
}else{
    console.log(a,"is odd")
}



function checkPalindrome(str) {
    let reversed = str.split('').reverse().join('');

    if (str === reversed) {
        console.log(str + " is a palindrome");
    } else {
        console.log(str + " is not a palindrome");
    }
}

checkPalindrome("madam");   
checkPalindrome("hello");   
checkPalindrome("1234321");
checkPalindrome("147541");