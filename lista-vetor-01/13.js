let number = [1,2,3,4,1,6,7,1,1,10];
let repeticao = 1;
let quantidade = 0;

for (i = 0; i<number.length; i++){
    if(repeticao === number[i]){
        quantidade++;

    }

}

console.log(quantidade);