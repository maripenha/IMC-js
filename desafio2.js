const nome = window.prompt("Insira seu nome:");
const peso = parseFloat(window.prompt("Insira seu peso:"));
const altura = parseFloat(window.prompt("Insira sua altura:"));
const IMC = peso / (altura ** 2);
if (IMC <= 18.5){
    alert(nome + " você está abaixo do peso");
}else if (IMC >= 18.5 && IMC <= 24.9){
    alert(nome + " seu peso é normal");
}else if (IMC >= 25.0 && IMC <= 29.9){
    alert(nome + " você está em sobrepeso");
}else if (IMC >= 30.0 && IMC <= 34.9){
    alert(nome + " você está com obesidade grau 1");
}else if (IMC >= 35.0 && IMC <= 39.9){
    alert(nome + " você está com obesidade grau 2");
}else{
alert(nome + " você está com obesidade grau 3");
}