let estagio = document.querySelector('#estagio');
let experiente = document.querySelector('#experientes');

estagio.onclick = abrirEstagio;
experientes.onclick = abrirExperientes;

function abrirEstagio(){
    window.open('estagio.html', '_self');
}

function abrirExperientes(){
    window.open('experientes.html', '_self');
}