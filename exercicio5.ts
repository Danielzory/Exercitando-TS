// Crie uma função genérica pegarPrimeiroItem<T>(array: T[]): T: Ela deve receber um array de qualquer tipo e retornar o primeiro elemento, mantendo o tipo original.
let idAntigos = [1, "234", "3223", 3] 

function pegarPrimeiroItem<T> (array: T[]) {
    return array[0]
 }

 console.log(pegarPrimeiroItem(idAntigos))

//Combine Utility Types: Tente criar um tipo UsuarioPublico que usa o Omit para remover a senha e o id de uma interface de usuário completa.



 interface UsuarioSecreto<T> {
    id: T,
    nome: string,
    password: number
 }

 type UsuarioPublico = Omit<UsuarioSecreto<number>, 'id' | 'password'>

 const newAgent: UsuarioPublico = {nome: 'Daniel Batista da Siva Junior'}


//Desafio final: Imagine que você recebeu um objeto onde todas as propriedades são opcionais (vieram de um Partial), mas em uma parte específica do seu código, você precisa garantir que elas estejam preenchidas.
type livro = {
   nome: string,
   autor: string,
   dataLancamento: number
}

const dragonfly: Partial<livro> = {nome: "Dragonfly", dataLancamento:10/10/2035}

const livrosParaExposição: Required<livro>[] = [{nome: "Noite Cinza", autor:"Fernando Pascoal", dataLancamento:5/11/2029}]