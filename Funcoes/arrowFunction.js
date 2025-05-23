const soma = (n1, n2) => {     // Arrow function
    return console.log("olá")
}

function soma2(n1, n2) {       // Função void(Vazia)
    console.log('olá')
}

function soma3() {             // Função com return
    return console.log('olá')
}

document.addEventListener('keydown', function(event) {     // Função anônima
    if (event.key === 'Enter') {
        event.preventDefault()
        btn.click()
    }
})




document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        console.log('Olá')
    }
})