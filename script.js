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
    multiplication = x + y;
    return multiplication;
}

logger (multiplyTwoNumbers (10, 12))

function createName(x, y) {
    let creation = 0;
    creation = x + y;
    return creation;
}

logger (createName ('Kappel', ' Kata'))
logger (createName ('Kiss', ' Ferenc'))