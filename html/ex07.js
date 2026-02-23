//Criar um programa que exiba as seguintes mensagens: SE menor de 16 anos "não pode votar", SE tiver entre 16 e 18 anos e maior de 70 anos "voto opcional", SE tiver entre 18 e 70 anos "voto obrigatório".
let idade = 70;

if (idade < 16) {
    console.log("não pode votar");
} else if (idade >= 16 && idade <= 18 || idade > 70) {
    console.log("voto opcional");
} else {
    console.log("voto obrigatório");
}
