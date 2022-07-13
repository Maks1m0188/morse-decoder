
function decode(expr) {
    const morseTable = {
        '1011':     'a',
        '11101010':   'b',
        '11101110':   'c',
        '111010':    'd',
        '10':      'e',
        '10101110':   'f',
        '111110':    'g',
        '10101010':   'h',
        '1010':     'i',
        '10111111':   'j',
        '111011':    'k',
        '10111010':   'l',
        '1111':     'm',
        '1110':     'n',
        '111111':    'o',
        '10111110':   'p',
        '11111011':   'q',
        '101110':    'r',
        '101010':    's',
        '11':      't',
        '101011':    'u',
        '10101011':   'v',
        '101111':    'w',
        '11101011':   'x',
        '11101111':   'y',
        '11111010':   'z',
        '1011111111':  '1',
        '1010111111':  '2',
        '1010101111':  '3',
        '1010101011':  '4',
        '1010101010':  '5',
        '1110101010':  '6',
        '1111101010':  '7',
        '1111111010':  '8',
        '1111111110':  '9',
        '1111111111':  '0',
        '**********': ' ',
    };

    const exprArr = (e) => {
        let arrExpr = []
        for (let i = 0; i < e.length; i+=10) {
           arrExpr.push(e.slice(i,i+10))
        }
        return arrExpr;
    }

    const sortExpr = exprArr(expr).map((x) => x !== '**********' ? Number(x).toString() : x);
    let resArr = []
    for (let i=0;i<sortExpr.length;i++) {
        for (let key in morseTable) {
            if (sortExpr[i] == key) {
                resArr.push(morseTable[key])
            }
        }
    }
    return resArr.join('')
    

}

module.exports = {
    decode
}