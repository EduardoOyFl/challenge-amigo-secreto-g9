//Variables globales
let amigos = [];
let amigo;

//Funcion para listar amigos en HTML
function listarAmigos(){
    document.querySelector("#listaAmigos").innerHTML = "";
    if(amigos.length>0){
        for(i=0;i<amigos.length;i++){
            //document.querySelector("#listaAmigos").innerHTML += `<li>${amigos[i]}</li>\n`;
            document.querySelector("#listaAmigos").innerHTML += `<div class="amigo-item">
            <span class="amigo-numero">${i + 1}</span>
            <span class="amigo-nombre">${amigos[i]}</span>
            <button class="amigo-eliminar" onclick="eliminarAmigo(${i})" title="Eliminar amigo">
                <span>&times;</span>
            </button></div>
        `; 
        }
    }
}
function eliminarAmigo(i){
    const nombreEliminado = amigos[i];
    amigos.splice(i, 1);
    listarAmigos();
    console.log(`Amigo "${nombreEliminado}" eliminado. Total: ${amigos.length}`);
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