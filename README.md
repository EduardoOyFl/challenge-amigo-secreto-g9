![](./img-md/header.png)


# Amigo Secreto

Amigo Secreto, es un desarrollo web solicitado por Alura para el programa de capacitación Oracle ONE, este desarrollo web tiene por objeto, permitir al usuario ingresar nombres de sus amigos y luego realizar un sorteo aleatorio para determinar quien es el amigo secreto.

## Interfaz de Usuario

  <img src="./img-md/principal.png"/>

<hr>

## Uso de la Aplicación

* Para agregar "Amigos" para el sorteo, los nombres de los amigos debebn ingresarse a través de la caja de texto referenciada con frase "Escribir un nombre" y luego hacer clic en botón [Añadir]

  <img src="./img-md/input.png"/>

* Cada vez que se agregue un nombre, este se agregará a una lista que estará bajo la caja de texto de entrada de nombres.

  <img src="./img-md/listado.png"/>

* Sorteo del amigo secreto al azar: Idealmente, para que tenga sentido, por lo menos debería añadir a la lista de amigos un minio de 2 nombres  como maximo no hay un limite, salvo lo maximo que pueda soportar el hardware del equipo cliente y la renderización del navegador(en teoría); en el momento en que la lista de amigos esté completa, para realizar el sorteo, haga clic en botón [ Sortear amigo ].

  <img src="./img-md/boton-sorteo.png"/>

  Y el resultado será similar a la imagen siguiente:

  <img src="./img-md/resultado.png"/>

<hr>

## Excepciones y validaciones

* Intento de añadir vacio o solo uno o más espacios en blanco

  <img src="./img-md/validacion-vacio-blancos.png"/>

  La web valida si no se ha ingresado nada o solo espacios en blanaco al momento de hacer clic en Añadir, en caso de ser uno de estos casos, envia un mensaje indicando "Por favor, inserte un nombre"; en caso de pasar la validación, pasará al proceso de Añadir el nuevo nombre a la lista de amigos.
  
* Repetición de nombre de amigo:

  <img src="./img-md/validacion-de-repeticion.png"/>
  
  Al pasar al proceso de Añadir el nuevo nombre a la lista de amigos, validará si el nuevo nombre ingresado ya existe en la lista de amigos, si existe, notificará con un mensajes de "Ya se ha agregado con anterioridad a: [el nombre duplicado]"; si el [el nombre duplicado] no existe en la lista, entonces termina agregándolo a la lista de amigos y renderizarla en la misma página web.


<hr>

## Requerimientos

  Los requerimientos son mínimos, fuera de la siguiente lista, no requiere una instalación como tal de la web Amigo Secreto:
  
* Navegador web.
* Soporte para javascript por el navegador
* Terner habilitada a ejecución de script en el navegador

<hr>


# Link de web publicada en GitHub Pages

  <a href="https://eduardooyfl.github.io/challenge-amigo-secreto-g9/">Web de "Challenge Amigo Secreto"</a>
