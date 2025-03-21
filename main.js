function Carro (a,b,c,d,e){ 
    this.valor = a;
    this.cor = b;
    this.ano = c;
    this.modelo = d;
    this.popular = e;
}

var carro = new Carro(91900, 'Preto', 2023, 'Corolla',true);

console.log(carro);

