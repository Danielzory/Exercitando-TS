// Em resumo, são tipos genericos que já vem "prontos"

//Partial
interface User {
    id: number;
    nome: string;
    email: string;
}

// Se eu vou atualizar usuário, não preciso passa ID ou Nome sempre
function attUser(id: number, camposParaMudar: Partial<User>){
    //id aqui seria para passar o id do usuário que queremos alterar
    // camposParaMudar agora aceita {nome: "Novo Nome"} sem reclamar do email
}

//Pick<T, Keys>

type ContatosUser = Pick<User, "nome" | "email">;

const contato: ContatosUser = {
    nome: "Nathan",
    email: "natan@exemplo.com"
    // se colocasse o id aqui daria erro
}

//Readonly<T>
const userFixo: Readonly<User> = {id: 1, nome:"Mary", email: "Mary@email.com"}
// userFixo.nome = "Bia"; O TypeScript proíbe a alteração