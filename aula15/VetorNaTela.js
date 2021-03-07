let valores = [8, 1, 7, 4, 2 ,9]
valores.sort()

//Isso é um percurso em vetores

/*for(let pos= 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
console.log('')*/

// Maneira mais simples de percurso em vetores
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}