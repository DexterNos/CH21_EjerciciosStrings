//Ejercicios Strings
let nombre = "Jonathan";
let letra ="";
let contFinal=0;

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp = 1;
    for (let cont = index+1; cont < nombre.length; cont++){
        if(nombre.charAt(index)==nombre.charAt(cont)){
            contTemp++;
        }
    }
    if (contTemp>contFinal) {
        contFinal=contTemp;
        letra = nombre.charAt(index);
        
    }
    console.log(letra, contFinal);
    
}

/*function charRep(string) {
    letra = string.toLowerCase();
    for (let index = 0; index < letra.length; index++) {
        const element = letra[index];
        //console.log(element);

        let contador;
        contador = 0;
        if (letra.charAt() == letra[index]) {
            contador++;
            console.log(letra[index] + " " + contador);
        }
        
    
    }
    
}*/

