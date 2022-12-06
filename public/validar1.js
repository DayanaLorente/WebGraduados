
var iniciarsesion = document.getElementById("formulario-login").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(iniciarsesion);
});
//AUTENTICAMOS MEDIANTE FIREBASE EN CASO DE INGRESRA SUS CREDENCIALES CORRECTAMENTE LO 
// REDIRIGIRA A UNA NUEVA PESTAÑA DE BIENVENIDA
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        location.replace("Paginaprincipal.html");
    }
});
// FUNCION PARA VERIFICAR Y HACER EL LLAMADO DEL EMAIL Y EL PASSWORD DEL USUARIO
function Home() {
    const email = document.getElementById("correo").value;
    const password = document.getElementById("password").value;


    firebase.auth().signInWithEmailAndPassword(email, password)
        // CASO CONTRARIO MOSTRARA UN MENSAJE DE AUTENTICACION ERRONEA 
        .catch((error) => {
            alert("Error de autenticacion el correo o la contraseña es incorrecta", error);
        });

}




