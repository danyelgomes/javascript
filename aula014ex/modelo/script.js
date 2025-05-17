var btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click', geraTabuada)

function geraTabuada() {
var inp = Number(document.getElementById('tab').value)
var res = window.document.querySelector('.div2')
let select = document.querySelector('select')

select.innerHTML = ''
for (cont = 0; cont <= 10; cont++) {
    var s = cont * inp
    let item = document.createElement('option')
    item.innerHTML = `${inp} x ${cont} = ${s}`
    select.appendChild(item)
}}