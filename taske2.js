function reverseNumber (number){
    let text =String(number);
    let reversed ="";
    for(let i=text.length-1;i>=0;i--){
        reversed += text[i];
    }
    return Number(reversed);
}
console.log(reverseNumber(532443));
//ex2//
function Agechecker (age){
    if (age>=18){
        console.log("The user is Adult");
    }
    else{
        console.log("The user is Minor");
    }
}
let ageInput = prompt("Enter your age:");

if (ageInput !== null && ageInput.trim() !== "") {
    let age = Number(ageInput);

    if (Number.isFinite(age) && age >= 0) {
        Agechecker(age);
    } else {
        console.log("Invalid age");
    }
}
//ex3//
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}
//ex4//
let input = prompt("Enter a number:");

if (input !== null && input !== "") {
    let result = "";

    for (let i = 0; i < input.length; i++) {
        result += input[i];

        if (
            i < input.length - 1 &&
            Number(input[i]) % 2 === 0 &&
            Number(input[i + 1]) % 2 === 0
        ) {
            result += "-";
        }
    }

    console.log(result);
}