function logger(param) {
    /* let param = 'hello' */
    console.log(param)
}

function extractionOfTwoNumbers(x, y) {
    let extraction = 0; 
    extraction = x - y;
    return extraction; 
}

logger(extractionOfTwoNumbers(10, 15))

function multiplyTwoNumbers(x, y) {
    let multiplication = 0;
    multiplication = x * y;
    return multiplication;
}

logger (multiplyTwoNumbers (10, 12))

function createName(x, y) {
    let creation = '';
    creation = x + y;
    return creation;
}

logger (`Hello ${createName('Kappel', ' Kata')}!`) /* template literal */
logger ('Hello ' + createName('Kiss', ' Ferenc') + '!')