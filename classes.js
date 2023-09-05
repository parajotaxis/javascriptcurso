class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(this.nome);
    }

    get nomeCompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome);
    }
}

p1 = new Pessoa("Fabio","Silva");
p1.falar();
p1.nomeCompleto;
