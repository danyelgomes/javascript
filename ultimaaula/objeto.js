let amigo = {
nome:"José",
sexo: "M",
peso: 85.4,
    // n(Parâmetro) = valor
engordar(n=0) {
    console.log('Engordou')
 // this aponta para a variável amigo que tem o atributo peso e que soma com o parâmetro
    this.peso += n
}}
    //  esse valor abaixo é enviado como parâmetro para a função engordar, que antes valia 0 e agora eu passei para ela o 2 como abaixo:
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)