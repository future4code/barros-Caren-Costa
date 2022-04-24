// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura=5
  let largura=3
  areaDoTriangulo = altura*largura
  console.log(areaDoTriangulo)


}

// EXERCÍCIO 02
function imprimeIdade(idade) {
  console.log(imprimeIdade)
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) { 
  console.log(peso/altura**2)
  // implemente sua lógica aqui

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 let nome=("Caren")
 let idade=("19")
 let email=("carenfcosta@gmail.com")
  console.log=(`Meu nome é ${nome}, tenho ${idade} anos e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
   
  let cor1=prompt("Qual a sua cor favorita?");
  let cor2=prompt("Qual a sua cor favorita?");
  let cor3=prompt("Qual a sua cor favorita?");
  let lista = []
  lista.push(cor1)
  lista.push(cor2)
  lista.push(cor3)
  console.log(lista);
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
string=toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  console.log=(custo/valorIngresso)
  
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1.length=string2.length

    // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    return primeiroElemento=array[0]
    
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.lenght-1]

  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ultNum=array.lenght-1
  let novoArr=array.splice(0,1,array[ultNum])
  array.splice(ultNum,1,novoArr[0])
  return array

  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  console.log(string1.toUpperCase()===string2.toUpperCase());
  console.log(string1.toLowerCase()===string2.toLowerCase());
  
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  
  
  prompt=('Qual o ano atual?')
  prompt=("Qual ano você nasceu?")
  prompt=("Informe o ano da emissão do seu RG:")

  if idade<20 = ("deve ser renovada")


// Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

//- Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
//- Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
//- Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
//- Dica
    
//    Você deve usar comparadores e operadores booleanos para avaliar as condições. Para te ajudar a organizar a lógica, tente criar 3 variáveis separadas, uma para cada condição, e depois compará-las.

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0));
  
  // Escreva uma função que recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:

//São bissextos** todos os anos múltiplos de 400**.**
//São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
//Não são bissextos** todos os demais anos.

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

// Escreva uma função que faz as seguintes perguntas ao usuário (condições para ser uma pessoa estudante da Labenu):

// Você tem mais de 18 anos?
//Você possui ensino médio completo?
//Você possui disponibilidade exclusiva durante os horários do curso?
//O usuário deve responder essas perguntas com `"sim"` ou `"nao"`.
//A função deve imprimir no console um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todas as respostas para todas as perguntas for positiva.

}