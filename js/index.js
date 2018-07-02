const a = parseFloat(prompt('Введіть A'));
const b = parseFloat(prompt('Введіть B'));
const c = parseFloat(prompt('Введіть C'));

const result = solveQuadr(a,b,c);
alert(result);

function solveQuadr(a,b,c) {
    const d = calcD(a,b,c);
    if (d > 0) {
      const x1 = (-b + Math.sqrt(d)) / (2*a);
      const x2 = (-b - Math.sqrt(d)) / (2*a);
    return 'x1 =' + x1 + ', x2 = ' + x2;
    } else if (d == 0) {
      const  x1 = -b / (2*a);
        return 'x1 =' + x1;
    } 
    return 'Рівняння немає коренів';
}
function calcD(a,b,c) {
    return b * b - 4 * a * c;
}
