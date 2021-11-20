function add(n1, n2) {
    return n1 + n2;
}
function abstract(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1/n2;
}
function equals(n1, n2, func) {
    return func(n1, n2);
}

export default function getOperatorFunc(operator) {
    switch (operator) {
        case '+':
            return add;
        case '-':
            return abstract;
        case 'X':
            return multiply;
        case '/':
            return divide;
        case '=':
            return equals;
        default:
            console.log(operator);
            break;
    }
}
