window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var contenedor = document.getElementById("contenedor");
	var texto = document.getElementById("textarea");

	boton.addEventListener("click", function(e){
		e.preventDefault();
		crearMensaje(texto.value, contenedor);
		texto.value = "";
	});

	texto.addEventListener("keyup", function(){
		validated(this.value);
	});
	

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

	function validated(texto){
		if(texto.length > 0){
			boton.disabled = false;
		} else {
			boton.disabled = true;
		}
	}
});
