let userNumber = +prompt("Enter number", '');
let userExtent = +prompt("Enter extent", 1);
function mathOperation (userNumber,  userExtent) {
    if (Number.isInteger(userNumber) && 
    Number.isInteger(userExtent)) {
        return alert(userNumber**userExtent);
    }
    else {
        return alert('some error');
    }
}
mathOperation (userNumber,  userExtent)


function padString(str, num, symbol, right = true) {
    if(typeof str !== 'string') return 'str param should be a String type';
    if(typeof num !== 'number') return 'num param should be a Number type';
    if(str.length >= num) return str.substr(0, num);
    if(symbol.length > 1) return 'Symbol should be only 1 char';

    const symbolsQty = num - str.length;
    let localSymbols = '';

    for(let i = 0; i < symbolsQty; i++) {
        // localSymbols = localSymbols + symbol;
        localSymbols += symbol
    }

    return right ? str + localSymbols : localSymbols + str;
}


console.log(padString('Alex', 8, '*'))
console.log(padString('Tkach', 2,))