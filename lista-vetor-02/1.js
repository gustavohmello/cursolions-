let numbers = [1, 2, 85, 4, 5,90];
let numeroMaior = numbers[0];
let segundoMaior = numbers[0]


for (i = 0; i < numbers.length; i++) {

    if (numbers[i] > numeroMaior) {
        numeroMaior = numbers[i];

    } else if (segundoMaior < numbers[i]) {
        segundoMaior = numbers[i];

    }

}

console.log("Numero maior: ", (numeroMaior));
console.log("Segundo numero maior: ", (segundoMaior));