interface produtoInterface {
    nome: string;
    preco: number;
    categoria: string; 
}

const produtos: produtoInterface[] = [
    { nome: "Bola de Futebol", preco: 89.90, categoria: "Esporte" },
    { nome: "Camiseta Dry Fit", preco: 59.00, categoria: "Vestuário" },
    { nome: "Tênis de Corrida", preco: 299.99, categoria: "Calçados" },
    { nome: "Monitor 24 Pol", preco: 850.00, categoria: "Eletrônicos" },
    { nome: "Teclado Mecânico", preco: 150.50, categoria: "Periféricos" }
]

const exibirProduto = (itens : produtoInterface[]) => {
    itens.map((item) => {
        console.log(`Produto: ${item.nome}, Preço: R$ ${item.preco.toFixed(2)},`)
        console.log(`${item.categoria.toUpperCase()}`)
    })

}

exibirProduto(produtos)
