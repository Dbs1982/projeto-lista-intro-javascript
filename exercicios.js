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
  const numeroAltura = Number(prompt(`Qual é a altura`))
  const numeroLargura = Number(prompt(`Qual é a largura`))
  const areaRetangulo = numeroAltura * numeroLargura

  console.log(areaRetangulo)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Coloque o ano em que estamos`))
  const anoNascimento = Number(prompt(`Coloque o ano em que nasceu`))
  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  const IMC = peso/(altura * altura).toFixed(2)
  return IMC


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Qual é o seu email?")
  const email = prompt("Qual é a sua idade?")
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual é a sua primeira cor favorita?")
  const cor2 = prompt("Qual é a sua segunda cor favorita?")
  const cor3 = prompt("Qual é a sua terseira cor favorita?")

  const minhasCoresFAvoritas = [cor1, cor2, cor3]

  console.log (minhasCoresFAvoritas)
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
  const retornaPrimeiroElemento = string.toUpperCase()
  return retornaPrimeiroElemento


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const calculaIngressosEspetaculo = custo/valorIngresso
  return calculaIngressosEspetaculo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array [array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const primeiro = array[0]
  const ultimo = array[array.length -1]
  array[0] = ultimo
  array[array.length -1] = primeiro

  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()


}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Digite o ano atual (Ex 0000): `))
  const anoNascimento = Number(prompt(`Digite o seu ano de nascimento (Ex 0000): `))
  const anoEmissaoRg = Number(prompt(`Digite o ano de emissão do RG (Ex 00000000-0):`))
  const idade = anoAtual - anoNascimento
  const tempoEmissao = anoAtual - anoEmissaoRg
  if(idade <= 20){
    console.log(tempoEmissao >= 5)
  } else if(idade <= 50){
    console.log(tempoEmissao >= 10)
  } else {
    console.log(tempoEmissao >= 15)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const checaAnoBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0 
  return checaAnoBissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos? (Sim ou Não):")
  const ensinoMedio = prompt("Você possui ensino médio completo? (Sim ou Não)")
  const disponibilidadedeHorario = prompt("Você possui disponibilidade de horário? (Sim ou Não)")
  const resposta = idade.toLowerCase() === "sim" && ensinoMedio.toLowerCase() === "sim" && disponibilidadedeHorario.toLowerCase() === "sim"
  console.log(resposta)


}