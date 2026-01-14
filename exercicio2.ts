// Prontuario do PET
interface Pet {
    nome: string,
    idade: number
}

interface Pet {
    raca: string
}

const PacientesSegunda : Pet[] = [{nome: "Penelope", idade: 12, raca: 'malhada'}, {nome: 'Logan', idade: 5, raca: 'pastor belga'}]

const mostrarPacientes =(pacientes: Pet[])=> {
    console.log(`Na Segunda você terá ${pacientes.length} pacientes:`)
    pacientes.forEach((paciente)=>{ 
        console.log(`Nome: ${paciente.nome} - Idade: ${paciente.idade} da Raça: ${paciente.raca}`)
    })
}

mostrarPacientes(PacientesSegunda)

//Painel de Controle

type Servicos = "Banho" | "Tosa" | "Consulta";
type Identificador = string | number;

let SvEscolhido : Servicos
let IDPet: Identificador
