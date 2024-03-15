function somaArray(arr: number[]): number {
    let soma = 0;
    for (let num of arr) {
        soma += num;
    }
    return soma;
}

const numeros = [1, 2, 3, 4, 5];
const resultado = somaArray(numeros);
console.log("A soma dos números é:", resultado);