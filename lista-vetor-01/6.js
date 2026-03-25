let number = [1, 2, 3, 4, 5, 6];
let numeroMenor = number[0];

for (let i = 0; i < number.length; i++) {

    if (number[i] < numeroMenor) {
        numeroMenor = number[i]
    }
}
console.log(numeroMenor);