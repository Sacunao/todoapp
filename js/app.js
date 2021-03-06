;(function(){

	var boton = document.getElementById("boton");
	var contenedor = document.getElementById("contenedor");
	var texto = document.getElementById("textarea");

	window.addEventListener("load", cargarPagina);

	function cargarPagina(){
		boton.disabled = true;
		boton.addEventListener("click", imprimirTexto);
		texto.addEventListener("keyup", validarTexto);
	}

	function imprimirTexto(e){
		e.preventDefault();
		crearMensaje(texto.value.trim(), contenedor);
		texto.value = "";
		boton.disabled = true;
	}

	function validarTexto(){
		boton.disabled = false;
		countEnter(texto);
	}

	function crearMensaje(texto, contenedor){
		var mensaje = document.createElement("div");
		mensaje.setAttribute("id", "mensaje");
		contenedor.insertBefore(mensaje, contenedor.childNodes[0]);
		mensaje.setAttribute("class", "mensaje");

		var label = document.createElement("label");
		label.innerText = texto;
		mensaje.appendChild(label);

		var input = document.createElement("input");
		input.setAttribute("type", "checkbox");
		mensaje.insertBefore(input, label);
		input.addEventListener("click", function(){
			label.classList.toggle("rayado");
		});

		var remove = document.createElement("i");
		remove.setAttribute("class","icon-bin");
		mensaje.appendChild(remove);
		remove.addEventListener("click", function(){
			contenedor.removeChild(mensaje);
		});
	}

	function countEnter(text){
		var textValue = text.value;
        var textSinEspacios = textValue.trim().length;
        var espacios = textValue.match(/\n/g);
        var cantEnters = (espacios.length == null) ? 0 : espacios.length;
        
        if(textSinEspacios === 0){
            boton.disabled = true; 
        }
        if(cantEnters > 3){
            text.setAttribute("rows", cantEnters);
        }
    }

})();

