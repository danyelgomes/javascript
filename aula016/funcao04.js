function fatorial(n) {
    let fat = 1
    for(C = n; C > 1 ; C--) {
        fat *= C
    }
    return fat
}

console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1