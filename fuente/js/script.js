let tituloOriginal = document.title;

window.addEventListener('blur', (e) => {
    document.title = "😁Espero que vuelvas😁";
});
window.addEventListener('focus', function() {
    document.title = tituloOriginal;
});


if(typeof nav == 'undefined'){
    let nav = document.querySelector('#nav');
}

if(typeof abrir == 'undefined'){
    let abrir = document.getElementById('abrir');
}

if(typeof cerra == 'undefined'){
    let cerrar = document.getElementById('cerrar');
}


abrir.addEventListener('click', (e) =>{
    nav.classList.add('visible');
});


cerrar.addEventListener('click', () =>{
    nav.classList.remove('visible');
})


window.addEventListener('scroll', (e) => {
    if(nav.classList.contains('visible')){
        nav.classList.remove('visible');
    }
});



let logo = document.getElementById('logoPagina');

logo.addEventListener('click', (e) => {
    console.log('click');
    location.href ='../index.html' ;
});


