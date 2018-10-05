let estagio = document.querySelector('#estagio');
let experiente = document.querySelector('#experientes');


let face = document.querySelector('#face');
let youtube = document.querySelector('#youtube');
let twitter = document.querySelector('#twitter');
let insta = document.querySelector('#insta');
let linkedin = document.querySelector('#linkedin');

estagio.onclick = abrirEstagio;
experientes.onclick = abrirExperientes;

function abrirEstagio(){
    window.open('estagio.html', '_self');
}

function abrirExperientes(){
    window.open('experientes.html', '_self');
}

function abrirFace(){
    window.open('https://www.facebook.com/portoseguro/');
}

function abrirYoutube(){
    window.open('https://www.youtube.com/user/portoseguro');
}

function abrirTwitter(){
    window.open('https://twitter.com/portoseguro');
}

function abrirInsta(){
    window.open('https://www.instagram.com/portoseguro/?hl=pt-br');
}

function abrirLinkedin(){
    window.open('https://www.linkedin.com/company/porto-seguro');
}


face.onclick = abrirFace;
youtube.onclick = abrirYoutube;
twitter.onclick = abrirTwitter;
insta.onclick = abrirInsta;
linkedin.onclick = abrirLinkedin;
