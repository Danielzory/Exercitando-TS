/** 

Lista de Exercícios: Do Aluno ao Arquiteto

    O Clonador Genérico: Crie uma função genérica chamada clonarObjeto<T>. 
    Ela deve receber um objeto do tipo T e retornar um novo objeto que é uma cópia exata do primeiro. (
    Dica: Use o Spread Operator {...obj}).

    O Filtro de Propriedades (Pick): Crie uma interface Carro com marca, modelo, ano e preco. 
    Depois, crie um tipo chamado CarroResumido usando Pick que contenha apenas marca e modelo. 
    Tente instanciar um objeto desse novo tipo.

    A Lista de Compras (Generic + Interface): Crie uma interface genérica Lista<T> que tenha uma propriedade itens
    (um array de T) e um método adicionar(item: T): void. Teste essa lista criando uma lista de strings.

    O Formulário de Cadastro (Partial): Imagine um sistema onde o usuário pode criar um perfil. 
    Crie uma interface PerfilUsuario com 5 campos. Crie uma função configurarPerfil que recebe o objeto original 
    e um segundo parâmetro do tipo Partial<PerfilUsuario> para atualizar apenas o que o usuário desejar.

    O Registro Imutável (Readonly): Crie uma interface ConfiguracaoSistema com campos como apiKey e databaseUrl. 
    Use o utility type Readonly para garantir que, após configurado, nenhum desses valores possa ser alterado durante a 
    execução do programa. 


    🕵️ Missão Especial: Operação Skyfall

Contexto: Você é o desenvolvedor líder do QG do MI6. O sistema de mensagens entre os agentes 00 está sendo interceptado. 
Você precisa criar um sistema de "Mensagens Criptografadas" ultra-seguro e flexível.

O Desafio:

    Crie uma Interface Genérica chamada MensagemSecreta<T>.

    Ela deve ter:

        id: number

        prioridade: "baixa" | "alta" | "crítica"

        conteudo: T (Este é o conteúdo da mensagem, que pode ser uma simples string ou um objeto complexo com coordenadas).

    Crie um tipo chamado MensagemEnviada. Ele deve ser baseado na MensagemSecreta, mas o conteúdo deve ser obrigatoriamente uma 
    string e todos os campos devem ser Readonly (agentes não podem alterar mensagens já enviadas!).

    Crie um tipo chamado RascunhoDeMensagem. Ele deve permitir que o agente escreva uma mensagem incompleta 
    (ou seja, todos os campos da MensagemSecreta tornam-se opcionais).
 
*/
let suspeito = {nome: "Darick", idade: "54 anos", crime: "Terroristomo"}

function clonarObj<T> (obj:T) {
    return {...obj}
}

console.log(clonarObj(suspeito))
//------------------------------------------------------------------------
interface Car {
    ano: number,
    modelo: string,
    marca: string,
    preco: number
}

type shortCar = Pick<Car, 'marca' | 'modelo'>;

const S10Resumida: shortCar = {marca: 'chevrolet', modelo: 'S10'}
//----------------------------------------------------------------------------
interface Lista<T> {
    itens: T[],
    adicionar (item: T) : void
}

const ListaCompras: Lista<string> = {
    itens: ["Maçã", "Batata", "Arroz", "Bife"],
    adicionar(item) {
        this.itens.push(item)
    },
}

ListaCompras.adicionar("Feijão")
console.log(ListaCompras.itens)


    
