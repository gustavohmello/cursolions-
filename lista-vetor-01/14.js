let number = [1, 2, 3, 4, 5, 4, 7, 8, 9];
let numberB = 5;
let indice = -1;

for (i = 0; i < number.length; i++) {
    if (number[i] === numberB) {
        indice = i;
        break;
    };
};