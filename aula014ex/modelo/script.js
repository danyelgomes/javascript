var btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click', geraTabuada)

function geraTabuada() {
var inp = Number(document.getElementById('tab').value)
var res = window.document.querySelector('.div2')


res.innerHTML = ''
for (cont = 0; cont <= 10; cont++) {
    var s = cont * inp
    res.innerHTML += `${inp} x ${cont} = ${s}<br>`
}}