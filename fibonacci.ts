function fibonacciRecursivoSimples(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursivoSimples(n - 1) + fibonacciRecursivoSimples(n - 2);
    }
}

function fibonacciRecursivoMemoria(n: number, memo: Record<number, number> = {}): number {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    } else {
        memo[n] = fibonacciRecursivoMemoria(n - 1, memo) + fibonacciRecursivoMemoria(n - 2, memo);
        return memo[n];
    }
}


const n = 7;
console.log(`Fibonacci recursivo simples para n=${n}: ${fibonacciRecursivoSimples(n)}`);
console.log(`Fibonacci recursivo com memória para n=${n}: ${fibonacciRecursivoMemoria(n)}`);
