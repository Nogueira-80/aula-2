//Criar programa que diga se o clima está "frio", "Agradável" ou "quente" dependendo da temperatura. menor que 15 graus é frio, entre 16 e 26 graus é agradável, e acima de 27 graus é quente.
let temperatura = 27;

if (temperatura < 15) {
    console.log("O clima está frio.");
} else if (temperatura >= 15 && temperatura <= 26) {
    console.log("O clima está agradável.");
} else {
    console.log("O clima está quente.");
}