//some apenas os numeros impares 

let number = [1, 2, 3, 4, 5, 6, 7, 8];
let numerosPares = 0;

for (let i = 0; i < number.length; i++){
   
     if(number[i] % 2 === 0){
        numerosPares += number[i]

}

}

console.log(numerosPares)

