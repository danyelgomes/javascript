let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
/*
for (i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor de ${valores[i]}`)
}
*/
valores.sort()
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor de: ${valores[pos]}`)
}