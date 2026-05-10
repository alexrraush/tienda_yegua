//FUNCION PARA PEDIR DATOS

function ingresar(){

    let correo = document.getElementById("correo");
    let contraseña = document.getElementById("contraseña");

    if(correo.value == "" || contraseña.value == ""){
        Swal.fire({
                icon: "error",
                title: "Error",
                text: "Debe ingresar los datos"
});
    }

    else if(correo.checkValidity() == false){
        Swal.fire({
                icon: "error",
                title: "Correo inválido",
                text: "Ingresá un correo válido"
});
    }

    else{
        window.location.href = "index2.html";
    }
}



// CONTADOR
let productos = 0;


// AÑADIR
function añadir(){

    productos = productos + 1;

    Swal.fire({
        title: "Producto agregado",
        text: "Llevas " + productos + " productos",
        icon: "success"
    });

}



//CONTACTO

function contacto(){
    window.location.href = "index3.html";
}


//simulacion de enviar el formulario

function enviar(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let talle = document.getElementById("talle").value;

    if(nombre == "" || apellido == "" || telefono == "" || talle == ""){

        Swal.fire({
            title: "Completa todos los campos",
            icon: "error"
        });

    }

    else{

        Swal.fire({
            title: "Formulario enviado",
            icon: "success"
        });

    }

}