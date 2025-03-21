function Aluno (a,b){
    this.nome = a;
    this.nota = b;
}
var alunos = [];

var aluno1 = new Aluno ('Giovanna',10);
var aluno2 = new Aluno ('Damares', 9);

alunos.push(aluno1);
alunos.push(aluno2);

console.log(alunos);