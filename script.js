let nome = document.querySelector('#nome').value
let idade = document.querySelector('#idade').value
let peso = document.querySelector('#peso').value
let altura = document.querySelector('#altura').value
let sexo = document.querySelector('#sexo').value



function botao(){
    if(nome == null){
        document.getElementById('btn').disabled = true
        document.querySelector('.nome').innerHTML = 'Coloque um nome!'
    } else{
        document.getElementById('btn').disabled = false
        document.querySelector('.nome').innerHTML = ''
    }
    
    if(idade == null && idade < 18){
        document.getElementById('btn').disabled = true
        document.querySelector('.idade').innerHTML = 'Coloque uma idade!'
    } else{
        document.getElementById('btn').disabled = false
        document.querySelector('.idade').innerHTML = ''
    }
    
    if(peso == null){
        document.getElementById('btn').disabled = true
        document.querySelector('.peso').innerHTML = 'Coloque um peso!'
    } else{
        document.getElementById('btn').disabled = false
        document.querySelector('.peso').innerHTML = ''
    }
    
    if(altura == null){
        document.getElementById('btn').disabled = true
        document.querySelector('.altura').innerHTML = 'Coloque um altura!'
    } else{
        document.getElementById('btn').disabled = false
        document.querySelector('.altura').innerHTML = ''
    }
    
    if(sexo == Masculino || sexo == Feminino){
        document.getElementById('btn').disabled = true
        document.querySelector('.sexo').innerHTML = 'Escolha um sexo!'
    } else{
        document.getElementById('btn').disabled = false
        document.querySelector('.sexo').innerHTML = ''
    }
}