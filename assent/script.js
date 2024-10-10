function validarFormulario() {
   let nombre = document.getElementById("nombre").value;
   let email = document.getElementById("email").value;
   let password = document.getElementById("password").value;
   if (nombre == "" || email == "" || password == "") {
    alert("Favor diligenciar todos los campos...");
    return false;
   }
   return true;

}

function mostrarImagen(event) {
    let imagen = document.getElementById("ver-imagen");
    imagen.src = URL.createObjectURL(event.target.files[0]);
}