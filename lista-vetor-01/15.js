let number = [1,2,3,4,5,4,7,8,5];
let crescente = true;

for(i = 0; i<number; i++){
    if(number[i] > number [i+1]){
        crescente = false;
    }
    
}

if(crescente){
    console.log("crescente");

}else{
    console.log("Não crescente")
}