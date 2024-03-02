let formularioSesion = document.getElementById("formSesion");
let btnSesion = document.getElementById('btnSesion');

if(formularioSesion){
    formularioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let objeto = {
        user: user,
        password: password
    }

    localStorage.setItem("sesion", JSON.stringify(objeto));
    comprobarSesion();
});

}






function comprobarSesion() {
    if (localStorage.getItem('sesion')) {
        btnSesion.textContent = "CUENTA";
        if(document.getElementById("contenidoLogin")){
            document.getElementById("contenidoLogin").classList.add("ocultar");
            document.getElementById("usuario").innerHTML = JSON.parse(localStorage.getItem("sesion")).user;
            document.getElementById("cuenta").classList.remove("ocultar");
            document.getElementById("cuenta").classList.add("cuenta");
            document.getElementById("cerrarSesion").addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem("sesion");
                comprobarSesion();
            });

        }
    } else {
        if(document.getElementById("contenidoLogin").classList.has("ocultar")){
            document.getElementById("cuenta").classList.add("ocultar");
            
        }else{
            document.getElementById("cuenta").classList.remove("ocultar");
            document.getElementById("cuenta").classList.add("cuenta");

        }
        btnSesion.textContent = "INICIAR SESION";
    }
}

comprobarSesion();