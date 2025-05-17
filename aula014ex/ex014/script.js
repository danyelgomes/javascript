let btn = document.getElementsByTagName('button')[0]
let res  = document.getElementById('res')

btn.addEventListener('click', contar)
function contar() {
let start = Number(document.querySelector('#istart').value)
let end = Number(document.getElementById('ifim').value)
let passo = Number(document.getElementById('passo').value)

    res.innerHTML = ''

    if (passo === 0 || passo === '') {
        passo = 1
    }

    if (start < end) {
        while (start <= end) {
            res.innerHTML += `<p>${start}</p>`
            start = start + passo
        }
    } else {
        while (start >= end) {
        res.innerHTML += `<p>${start}</p>`
        start = start - passo
    }
  }
}