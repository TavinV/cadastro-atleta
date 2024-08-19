let nome_atleta = document.getElementById("nome-do-atleta")
let rg = document.getElementById("rg")
let cpf = document.getElementById("cpf")
let data_nascimento = document.getElementById("data-nascimento")
let telefone = document.getElementById("telefone")
let posicao = document.getElementById("posicao")
let altura = document.getElementById("altura")
let experiencia = document.getElementById("experiencia")

let form = document.querySelector("form")

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    atleta = {
        nome: nome_atleta.value.trim(),
        rg: rg.value.trim(),
        cpf: cpf.value.trim(),
        data_nascimento: data_nascimento.value.trim(),
        tel: telefone.value.trim(),
        posicao: posicao.value.trim(),
        altura: altura.value.trim(),
        experiencia: experiencia.value.trim()
    }

    let jsonAtleta = JSON.stringify(atleta)

    console.log(jsonAtleta)
    console.log(atleta.valueOf())
})
