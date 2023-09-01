var n = 3;
n *= 10;

console.log(n);

var x = 10;
x--

console.log(x);

console.log(n > x);
a = 50;
b = 30;
c = 60;

console.log(n <= x && b != c);
console.log(n <= x || b != c);

// verificar se a é maior que b e b é divisivel por 2
console.log(a > b && b % 2 == 2);

// verificar se b é maior igual a ou b dividido por 2 o resultado é 2
console.log(b >= a || b / 2 == 2);

// verificar se a maior que b e b maior igual a 5
console.log(a > b && b >= 5);

// verificar se b é par ou impar usando ternario
resultado = b % 2 == 0 ? "Par" : "Impar";