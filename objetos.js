var pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

console.log(pessoa['sobrenome']);

var pessoa1 =  new Object();
pessoa1.nome = 'Angela';
pessoa1.sobrenome = 'Silva';
pessoa1.falarNome = function(){
    console.log("sobrenome é " + this.sobrenome);
}

console.log(pessoa1.nome);
pessoa1.falarNome();

function criarPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

var p1 = criarPessoa("Ana","Paula");
var p2 = criarPessoa("Jefferson","Xavier");

console.log(p1.nome + " e " + p2.nome);
