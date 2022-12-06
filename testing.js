console.log("Hello");

let person = {
    navn: "Fredrik",
    alder: 23
};

console.log(person.alder);
typeof person.navn;

let colors = ['rød', 'blå', 'rosa'];
colors[3] = colors[0];
console.log(colors);
console.log("Det er " + colors.length + " enheter");

function greet( name ) {
    console.log("Hei " + name + '!');
}

greet('Karl');
greet('Kompis');

// Multipliser
function multi( a, b ) {
    return a * b;
}

console.log(multi(3, 2));

let c = multi(6, 9);
console.log(c);