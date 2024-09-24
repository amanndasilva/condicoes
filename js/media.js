var n = 'Joana';
var i = parseInt('16');
var n1 = parseFloat('9.7');
var n2 = parseFloat('5');
var media = parseFloat((n1 + n2) / 2);

console.log(n);

if(media < 6){
    console.log("Reprovado com média: ", media);
}else{
    console.log("Aprovado com média: ", media);
}

if(i >= 18){
    console.log("Maior de idade!");
}else{
    console.log("Menor de idade!");
}