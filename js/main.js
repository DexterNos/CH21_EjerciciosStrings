//Ejercicios Strings
let btnenviar = document.getElementById("btnEnviar");
let idTimeout;

btnenviar.addEventListener("click", function(event){
    event.preventDefault();
    let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById("alertError");
    let flexCheckDefault = document.getElementById("flexCheckDefault");
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2")
    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display="none";
    alertError.innerHTML="";
    validos=0;

    if (exampleFormControlTextarea1.value.trim().replaceAll("  ","").length < 20){
        alertError.innerHTML = "El mensaje debe contener 20 caracteres o mas";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    }else{
        exampleFormControlTextarea1.style.border = "solid green 1px";
        validos++;}

    if (exampleFormControlInput1.value.match(email) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El correo electronico no es valido.";
    }else{
        exampleFormControlInput1.style.border = "solid green 1px";
        validos++;}
    let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    if (exampleFormControlInput2.value.match(RFCRegex) == null){
        alertError.style.display="block";
        alertError.innerHTML += "<br/>El RFC no es valido.";
    }else{
        exampleFormControlInput2.style.border = "solid green 1px";
        validos++;
    }
    if ((idTimeout != undefined) && (idTimeout!=null)){
        clearTimeout(idTimeout);
    }
    //if Ternario
    alertError.innerHTML += (!flexCheckDefault.checked)?"<br/>Debes aceptar los terminos y condiciones":"";

    /*if (!flexCheckDefault.checked){
        alertError.innerHTML += "<br/>Debes aceptar los terminos y condiciones";
    }*/
    if (validos == 3){
        setTimeout(function(){
            exampleFormControlInput1.style.border ="";
            exampleFormControlInput2.style.border="";
            exampleFormControlTextarea1.style.border="";
        }, 3000);
    }
});