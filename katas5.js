//INVERTER STRING
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testeReverseString2() {
    let result = reverseString("Lucas Anacleto");
    let expected = "otelcanA sacuL";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString(str) {
    let nomeReverso = ''
    for (let i = str.length - 1; i >= 0; i--) {
        nomeReverso += str[i]
    }
    return nomeReverso
}

//MOSTRAR O MENOR VALOR DE UM ARRAY

function testMinimumValue1() {
    let result = minimumValue([1, 8, 7, 4, 0, 9]);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMinimumValue2() {
    let result = minimumValue([5, 9, 3, 3]);
    let expected = 3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function minimumValue(arr) {
    let result = arr[0]
    arr.forEach(numero => {
        if (numero < result) {
            result = numero
        }
    })
    return result
}

//MOSTRAR O MAIOR VALOR DE UM ARRAY
function testMaximumValue1() {
    let result = maximumValue([1, 8, 7, 4, 0, 9]);
    let expected = 9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2() {
    let result = maximumValue([5, 9, 3, 3]);
    let expected = 9;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function maximumValue(arr) {
    let result = arr[0]
    arr.forEach(numero => {
        if (numero > result) {
            result = numero
        }
    })
    return result
}

// CALCULA O RESTO DE UMA DIVISÃO
function testCalculateRemainder1() {
    let result = calculateRemainder(15, 5);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(8, 3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function calculateRemainder(num1, num2) {

    return num1 % num2
}

// -----------------------------
function testDistinctValues1() {
    let result = distinctValues([1, 3, 5, 3, 7, 3, 1, 1, 5]);
    let expected = [1, 3, 5, 7];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues([8, 3, 1, 3]);
    let expected = [8, 3, 1];
    console.assert(JSON.stringify(result) === JSON.stringify(expected), `esperado: ${expected}, obtido: ${result}`)
}

function distinctValues(numeros) {

    let result = []

    for (let i = 0; i < numeros.length; i++) {
        if (result.indexOf(numeros[i]) === -1) {
            result.push(numeros[i])
        }
    }
    return result
}

//---------------------------------------------------------