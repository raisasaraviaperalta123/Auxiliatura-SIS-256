var titulo =  document.getElementById("titulo");
var contenido = document.getElementById("contenido");
var resultado = document.getElementById("resultado");
var mensaje = document.getElementById("mensaje");
var n = document.getElementsByName("n");
var valor=document.getElementsByName("valor");

function cargar(pagina) {
	var ajax = new XMLHttpRequest() //es hacer llamadas apaginas 
	ajax.open("get", pagina, true); //a quien llamara
	ajax.onreadystatechange = function () { // funcion de respuesta
		if (ajax.readyState == 4) {
			document.getElementById("contenido").innerHTML = ajax.responseText;
		}
	}
	ajax.setRequestHeader("Content-Type", "text/html; charset=utf-8"); //cabecera
	ajax.send(); //llamar a la pagina
}


function pregunta1(){
    titulo.innerHTML = 
    `<div>Estudiante: Pimentel Vito</div>
    <div>CU: 111-318</div>`;
}

function pregunta2(){
    titulo.innerHTML = `Pregunta 2 DOM en Javascript`
    titulo.style.backgroundColor = 'black';
    titulo.style.border = '2px solid black';
    menu.style.borderBottom = '2px solid black';
    content.style.border = '2px solid black';
    mensaje.style.border = '2px solid black';
    mensaje.style.backgroundColor = 'black';
    principal.style.border = '2px solid black';
    resultado.style.border = '2px solid rgb(46, 46, 46)';
    resultado.style.backgroundColor = 'rgb(108, 107, 107)';
    a1s = document.getElementsByClassName("a_1");
    for (let i = 0; i < a1s.length; i++) {
        a1s[i].style.backgroundColor = 'rgb(204, 199, 190)';
        a1s[i].style.border = '2px solid rgb(141, 141, 141)';
    }
    a2s = document.getElementsByClassName("a_2");
    for (let i = 0; i < a2s.length; i++) {
        a2s[i].style.backgroundColor = 'rgb(108, 107, 107)';
        a2s[i].style.border = '2px solid rgb(46, 46, 46)';
    }
    contenido.innerHTML = "Modo blanco y negro"
}

function pregunta3(){
    titulo.innerHTML=`Pregunta 3 Insertar en fetch`
    titulo.innerHTML = `Pregunta 3 Insertar en Ajax`
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "form_insertar.php");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4 && ajax.status == 200)
            contenido.innerHTML = ajax.responseText;
    }
    ajax.send();
}

function insertarLibro(){ 

    
    var form =  document.getElementById('form_insertar');
    var datos = new FormData(form);
    var ajax = new XMLHttpRequest()
    ajax.open("POST", 'insertar.php', false);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200)
            resultado.innerHTML = ajax.responseText;
    }
    ajax.send(datos);
}

function pregunta4(){
    titulo.innerHTML = `Pregunta 4 Llamar por fetch`
    fetch("listar.php")
        .then(response => response.text())
        .then(data => contenido.innerHTML = data);
}
function formn(){
    titulo.innerHTML = `Pregunta 5 llamar por fetch`
    
    fetch("formn.html")
        .then(response => response.text())
        .then(data => contenido.innerHTML = data);
    
       
}

