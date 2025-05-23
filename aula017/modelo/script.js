const btn = window.document.getElementsByTagName('button')[0]
btn.addEventListener('click', adicionar)


const valores = []

let soma = 0
let média = 0
const div = document.getElementById('res')
const input = document.getElementById('input')
input.focus()

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        btn.click()
    }
})
btn.addEventListener('click', function() {
})


function adicionar() {
const select = window.document.getElementById('iselect')
const numero = Number(input.value)

    if (numero == '' || numero > 100 || valores.includes(numero) || numero < 0) {
        alert('valor inválido ou já adicionado na lista')
    } else {
        valores.push(numero)
        const item =  document.createElement('option')
        item.innerHTML = `valor ${input.value} adicionado`
        select.appendChild(item)
        soma += numero
    }
    média = soma / valores.length
    div.innerHTML = ``
    input.value = ''
    valores.sort()
    input.focus()
}

const btn2 = window.document.getElementsByTagName('button')[1]
btn2.addEventListener('click', finalizar)

function finalizar() {
    input.focus()
    const menorValor = Math.min(...valores)
    const maiorValor = Math.max(...valores)
    div.innerHTML = `Ao todo, temos ${valores.length} números cadastrados <br> O maior valor foi ${maiorValor} <br> O menor valor foi ${menorValor} <br> A soma de todos os valores foi de ${soma} <br> A média de todos os valores é de ${média}`
}