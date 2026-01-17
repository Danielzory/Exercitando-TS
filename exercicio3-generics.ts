interface RespostaAPI<T> {
    data:T;
    status: number;
}

// Agora posso reutiizar a mesma interface para qualquer coisa!

type Usuario = {nome: string; email: string};
type Produto = {preco: number; nome: string};

// O TypeScript "substitui"o  T pelo tipo que eu passar entre os <>

const respostaDoUser: RespostaAPI<Usuario> = {
    data: {nome: "Nathan", email:"nathan@email.com"},
    status:200
};

const respostaDoProduto: RespostaAPI<Produto> = {
    data: {preco: 50, nome: "mouse"},
    status: 200
};