var i = parseInt('10');

console.log(i);

if(i < 16){
    console.log("Você não pode votar!");
}else if(i > 16 || i <= 17) {
    console.log("Voto facultativo!");
}else if(i >= 18 && i <= 69){
    console.log("Voto obrigatório!");
}else{
    console.log("Voto fcultativo!");
}