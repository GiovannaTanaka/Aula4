function Pessoa (a,b){ //Pessoa=Classe (nome em maiúsculo)
    this.nome = a;
    this.idade = b;
}

const x = new Pessoa('Afonso', 31);
const y = new Pessoa('Giovanna', 21);

console.log(x);
console.log(y);

