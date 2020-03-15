function imprimaQuadradoAsterisco(n) {
    // não altere a linha acima

    /*
     * Escreva nas linhas a seguir um código que 
     * imprima um quadrado de asteríscos
     * de altura e largura igual ao valor de n
     

    
    }
        */

    for (var index = 0; index < n; index++) {
        var linhaDeAsteriscos = '';

        for (var linha = 0; linha < n; linha++) {
            linhaDeAsteriscos += '*';
        }

        console.log(linhaDeAsteriscos);
    }

    // não altere a linha abaixo
}
imprimaQuadradoAsterisco(5)
// fim do seu código