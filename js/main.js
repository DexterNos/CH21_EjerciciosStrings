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
let nombreinv= "Laura Aline";
let inver = "";

function invertido(name){
    for (let i=name.length-1; i>=0; i--){
        inver += name[i];

    }
    return inver;
}

function palindrome(word) {    
    let l = word.length;
    for (i = 0; i < l / 2; i++) {
        if (word.charAt(i) !== word.charAt(l - 1 - i)) {
            return false;
        }
    }
    return true;
}

//console.log(invertido ("Laura Aline"));
    

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

