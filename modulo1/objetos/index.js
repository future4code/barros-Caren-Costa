// No filme "Auto da compadecida Matheus Nachtergaele, "Selton Mello", "Denise Fraga", será transmitido Canal Brasil", horario: "19h"},
//----------------------------------
// Resposta 02
//const cachorro = {
//	nome: "Juca", 
//	idade: 3, 
//	raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)
// a) Informará todos os atributos do cachorro: Nome Juca, 3 anos, SRD.
//--------------------------------
// b) Os ...(espaçhamento) realizará a copia de um objeto ou array, no caso ficará: 
//vai pegar todas os atributos de cachorro e vai alterar o nome para Juba.
//{...gato, nome: gato.nome.replaceAll("a", "o")} neste caso irá copiar todos os atributos de 
//gato alterando as teras "a" por "o".
//--------------------------------

//3)
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
// A) false
// B)Acredito que ele tenha dado false pelo fato de não constar informações sobre "altura"

//---------Execícios 
// 1)
const pessoa={
        nome:"Beatriz",
        apelidos:["Bia","Tizi","Trix",]

    pergunta:(nome)=>"Seu nome é ${nome}",
    apelidos:()=>"Meu apelido é ${apelido[2]}",

    const pessoa2={
    ...pessoa.apelidos:"Juju","pequena","lindinha"

  
    console.log(pessoa.nome(pessoa.apelidos[2]);

    }


}
// 2)
const pessoa={
    nome:"Oliveira",
    idade:32,
    profissao:"segurança",
}
    const pessoa2={
        nome:"Fernandes",
        idade:33,
        profissao:"Golpista the loved",
    }
function entrArr(pea,pea2){
    let arrDeRetorno=[pea.nome,pea.nome.lenght,pea2.nome,pea2.nome.lenght, pea.idade, pea2.idade, pea.profissao,pea.profissao,pea.profissao.lenght ]
    return entrArr
}
entrArr(pessoa,pessoa2)
console.log(entrArr(pessoa,pessoa2));

//3)

//a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
//b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade
// (`boolean` - devem começar como `true`)
//c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a 
//dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

let carrinho=[]
    fruta1:`mamão`,
    disponibilidade:true

let fruta1:`maça`,
    disponibilidade:false

let fruta2:`mamão`,
    disponibilidade:true   
    
let fruta3:`cajá`,
    disponibilidade:false
    
function sacolao(fruta){
    carrinho.push(fruta)
}    

escolherFruta(fruta1)
escolherFruta(fruta2)
escolherFruta(fruta3)

console.log(carrinho);


//**Desafio**
//1-Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e
// depois imprima no console um objeto com essas propriedades. Depois de imprimir 
//o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function dados(){
    nome=prompt("Qual seu nome?"),
    idade=prompt("Qual a sua idade?"),
    profissao=prompt("Qual a sua profissão?"),

    let suasInfor2={
    nome,
    idade,
    profissao,
}
    console.log(nome,idade,profissao) 
} 
 




//3-Crie uma função a mais pro exercício 3 de escrita de código. 
//Essa função vai auxiliar o controle de estoque do sacolão: ela deve 
//receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade
// disponibilidade com o valor invertido. 

function controleDeEstoque(fruta){
    ...fruta.disponibilidade=!fruta.disponibilidade
}

console.log(`${fruta1.nome}tem?${fruta1.disponibilidade`});
console.log(`${fruta2.nome}tem?${fruta2.disponibilidade`});
console.log(`${fruta3.nome}tem?${fruta3.disponibilidade`});



controleDeEstoque(fruta1)
controleDeEstoque(fruta2)
controleDeEstoque(fruta3)




















