// Variables globales
let amigos = [];
let amigo;

/* Funcion para el button [Añadir] 
*************************************************
Funcion para validar ingreso unico de amigo
*************************************************/
function agregarAmigo(){
    //alert(normalizaEspacios("ho    la")+" - ho   la")
    //Captura del dato ingresado en <input type=''text....>
    //Tambien, elimino los espacios antes de validar y añadir con funcion normalizaEspacios(arg) y actualizao el input text [amigo]
    amigo = normalizaEspacios(document.querySelector("#amigo").value.trim());
    document.getElementById("amigo").value = amigo;

    //Valido si es un dato vacio, de ser true, salgo de la funcion
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    /* 🟢 Este metodo de los arrays <some> busca la primera coincidencia de un valor en un array y acaba su ejecución, devolviendo
    verdadero: en caso de interceptar un valor
    falso: en caso de no hayar coincidencia     */
    // amigos.some(nombreArray => normalizarTexto(nombreArray) === normalizarTexto(amigo));

    //Si el dato no es "", entonce, valido si existe en la lista
    // - Si no existe, se agrega
    // - Si existe, se omite agregación y se notifica al usuario
    if(amigos.includes(amigo) || amigos.some(nombreArray => normalizarTexto(nombreArray) === normalizarTexto(amigo))){
        alert(`Ya se ha a añadido con anterioridad a : [ ${amigo} ]. Por favor, ingrese un nombre diferente.`);
    } else {
        amigos.push(amigo);
        listarAmigos();
        //await  consoleLogConDelay("Creando delay",4000);//Envia mensaje a console.log y provoca delay de 500 milisegundos
        //miFuncionConRetraso();

        setTimeout(() => {
            dejarVacio();
        }, 270);
        //document.querySelector("#amigo").value = "";
        
    }
    console.log(amigos);
    document.querySelector("#amigo").focus();
}

function dejarVacio(){
    document.querySelector("#amigo").value = "";
}
//Funcion para listar amigos en HTML <li>...</li> despues de pasar validaciones al añadir amigo a la lista
/*********************************************************************************************************/
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

// 🟢 Funcion para eliminar "amigo" de lista de amigos añadidos
/*************************************************/
function eliminarAmigo(i){
    const nombreEliminado = amigos[i];
    amigos.splice(i, 1);
    listarAmigos();
    console.log(`Amigo "${nombreEliminado}" eliminado. Total: ${amigos.length}`);
}

/* Funcion para el button [Sortear amigo] */
/*************************************************/
function sortearAmigo(){
    if(amigos.length==0){
        alert("No se han añadido amigos. Por favor, ingrese un nombre.");
        document.querySelector("#amigo").focus();
    } else{
        document.querySelector("#amigo").value = '';
    //alert("amigos.length: "+amigos.length);
    //alert(amigos);
    let sorteo = Math.floor(Math.random()*amigos.length);

    document.querySelector("#listaAmigos").innerHTML = "";
    console.log(sorteo);
    // document.querySelector("#resultado").innerHTML = `<li>${amigos[sorteo]}</li>`;
    document.querySelector("#resultado").innerHTML = `<div class="amigo-item">
            <span class="amigo-numero">${sorteo + 1}</span>
            <span class="amigo-nombre">${amigos[sorteo]}</span>
            </div>
        `;
    }
}












/*************************** O T R O S **************************/
/*************************** O T R O S **************************/
/*************************** O T R O S **************************/

// 🟢 Funcion para normalizar Strings en elementos de Array y postulante a Amigo a ser añadido a array
// * Se utiliza en la funcion <agregarAmigo()> para buscar la existencia del dato a insertar
// Devuelve un texto estandar, sin acentros
function normalizarTexto(texto) {
  return texto
    .toLowerCase() // pasar a minúsculas
    .normalize("NFD") // separar letras y acentos
    .replace(/[\u0300-\u036f]/g, ""); // quitar los acentos
}

// ✅ Normaliza los espacios consecutivos( 2 o mas espacios) a uno solo " "
function normalizaEspacios(texto){
    // Devuelve el valor en actualizado
    return texto.replace(/\s{2,}/g, " ");
}

// ✅ Validaciones para el html [ input ] evento onkeypress por caracter
function validaTecla(e) {
    const tecla = e.key;
    const valor = e.target.value;
    //console.log("valor e.target.value: '"+valor+"'");
    const cursorPos = e.target.selectionStart; // posición del cursor
    const caracterAnterior = valor.charAt(cursorPos - 1); // carácter justo antes del cursor

    // ✅ Si presiona Enter, ejecuta el click del botón
    if (tecla === "Enter") {
        e.preventDefault();
        document.getElementById("addAmigo").click();
        return false; // evitar que el enter escriba salto de línea
    }

    // ✅ Bloquear doble espacio en cualquier parte del texto
    if (caracterAnterior === " " && tecla === " ") {
        return false;
    }

    // ✅ Permitir letras, acentos, ñ/Ñ, apóstrofo y espacio
    const regex = /^[a-zA-ZáÁéÉíÍóÓúÚñÑ'\s]$/;
    return regex.test(tecla);
}

/***********************************/

/* Funcion para el button [Reiniciar Sorteo] */
/*************************************************/
function reiniciaEstados() {// funcion de reinicio de juego
    Amigos = []; // vacía el arreglo
    Amigo = undefined;
    document.getElementById('listaAmigos').innerHTML = ''; // limpia la lista visual
    document.getElementById('resultado').innerHTML = '';   // limpia el resultado
    document.getElementById('amigo').value = '';           // limpia el campo de entrada
    document.getElementById('amigo').focus();    // Hace focus en el input de "amigo"
}

