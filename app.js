//Variables globales
let amigos = [];
let amigo;

//Funcion para listar amigos en HTML
function listarAmigos(){
    document.querySelector("#listaAmigos").innerHTML = "";
    if(amigos.length>0){
        for(i=0;i<amigos.length;i++){
            document.querySelector("#listaAmigos").innerHTML += `<li>${amigos[i]}</li>\n`;
        }
    }
}

//Funcion para validar ingreso unico de amigo
function agregarAmigo(){
    //Captura del dato ingresado en <input ytpe=''text....>
    amigo = document.querySelector("#amigo").value.trim();

    //Valido si es un dato vacio, de ser true, salgo de la funcion
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Si el dato no es "", entonce, valido si existe en la lista
    // - Si no existe, se agrega
    // - Si existe, se omite agregación y se notifica al usuario
    if(amigos.includes(amigo)){
        alert(`Ya se ha a agregado con anterioridad a : [${amigo}]`);
    } else {
        amigos.push(amigo);
        listarAmigos();
        document.querySelector("#amigo").value = "";
    }
    document.querySelector("#amigo").focus();
}

function sortearAmigo(){
    let sorteo = Math.floor(Math.random()*amigos.length);
    document.querySelector("#listaAmigos").innerHTML = "";
    console.log(sorteo);
    document.querySelector("#resultado").innerHTML = `<li>${amigos[sorteo]}</li>`;
}