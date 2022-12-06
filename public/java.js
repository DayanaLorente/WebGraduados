var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}

/* EXPRESIONES REGULARES **************/

const expresiones_cedula = /^[0-9]{10,10}$/;
const expresiones_apellido = /^[a-zA-Z]{4,20}$/;
const expresiones_correo = /^\w+@\w+\.+[aZ-zA]{2,3}$/;
const expresiones_contraseña = /^.{4,12}$/;
const expresiones_contraseña2 = /^.{4,12}$/;
const expresiones_nombre = /^[a-zA-Z]{4,20}$/;
const expresiones_telefono = /^[0-9]{10,10}$/;

/* VALIDACION DE REGISTRO Y QUE NO CARGUE LA PAGINA*/
const validarRegistro = document.getElementById("formulario-registro");
validarRegistro.addEventListener("submit", async(e) => {
    var cedula = document.getElementById("cedula").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    var telefono = document.getElementById("telefono").value;
    var inicio =document.getElementById("inicio").value;
    var egreso= document.getElementById("egreso").value;
    

    if (cedula==""|| telefono==""||nombres == "" || apellidos == "" || correo == "" || password == "" || confirm_password == "" ||inicio==""||egreso=="") {
        e.preventDefault();
        alert("Todos los campos son obligatorios");
        return false;
    } else if (!expresiones_nombre.test(nombres)) {
        e.preventDefault();
        alert("El nombre debe contener entre 4 y 20 caracteres");
        return false;
    } else if (!expresiones_cedula.test(cedula)) {
        e.preventDefault();
        alert("El campo cèdula solo se aceptan nùmeros y debe tener 10 dìgitos");
        return false;
    } else if (!expresiones_telefono.test(telefono)) {
        e.preventDefault();
        alert("El campo telefòno solo se aceptan nùmeros y debe tener 10 dìgitos");
        return false;
    } else if (!expresiones_apellido.test(apellidos)) {
        e.preventDefault();
        alert("El apellido debe contener entre 4 y 20 caracteres");
        return false;
    } else if (!expresiones_correo.test(correo)) {
        e.preventDefault();
        alert("El correo no es valido");
        return false;
    } else if (!expresiones_contraseña.test(password)) {
        e.preventDefault();
        alert("La contraseña debe contener entre 4 y 12 caracteres");
        return false;
    } else if (password != confirm_password) {
        e.preventDefault();
        alert("Las contraseñas no coinciden");
        return false;
    } else {
        const enviar = (cedula, telefono,nombres, apellidos, correo, password, confirm_password,inicio,egreso) => db.collection('UsuariosRegistrados').doc().set({
            cedula,
            telefono,
            nombres,
            apellidos,
            correo,
            password,
            confirm_password,
            inicio,
            egreso
        });
        e.preventDefault();
        const cedula = validarRegistro["cedula"].value;
        const telefono = validarRegistro["telefono"].value;
        const nombres = validarRegistro["nombres"].value;
        const apellidos = validarRegistro["apellidos"].value;
        const correo = validarRegistro["correo"].value;

        const password = validarRegistro["password"].value;
        const confirm_password = validarRegistro["confirm_password"].value;
        const inicio = validarRegistro["inicio"].value;
        const egreso = validarRegistro["egreso"].value;
        //const email = registrarse["correo"].value;
        //const password = registrarse["password"].value;
        alert("Te has registrado exitosamente");

        await enviar(cedula,telefono,nombres, apellidos, correo, password, confirm_password, inicio, egreso);
        // AUTENTICACION DE USUARIOS
        console.log(enviar);

        auth
            .createUserWithEmailAndPassword(correo, password)
            .then((userCredential) => {
                // RESETEAR FORMULARIO

                validarRegistro.reset();


            });
        // return true;

    }
});