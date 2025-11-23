interface IProduto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements IProduto {
    constructor(
        public id: number,
        public nome: string,
        public preco: number
    ) {}
}

const item = new ItemLoja(1, "Mouse Gamer", 150);
console.log(item);