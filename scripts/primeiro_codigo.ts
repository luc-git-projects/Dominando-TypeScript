class Produto{

    nome: string;
    valor: number;

    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
    
}

const playstation5 = new Produto("Playstation5", 5000);