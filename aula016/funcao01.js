function parimpar(N) {
    if(N %2 == 0) {
        return 'Par!'
    } else {
        return 'Ímpar!'
    }
}

let res = parimpar(5)
console.log(res)