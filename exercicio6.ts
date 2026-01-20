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
  
  
 
*/