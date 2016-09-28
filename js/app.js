window.addEventListener("load", function(){
	var boton = document.getElementById("boton");
	var contenedor = document.getElementById("contenedor");
	var texto = document.getElementById("textarea");
	boton.disabled = true;

	boton.addEventListener("click", function(e){
		e.preventDefault();
		crearMensaje(texto.value, contenedor);
		texto.value = "";
		boton.disabled = true;
	});

	texto.addEventListener("keyup", function(){
		boton.disabled = false;
		if(texto.value == null || texto.value.length == 0 || /^\s+$/.test(texto.value) ) {
            boton.disabled = true;
         } 
	});
	

	function crearMensaje(texto, contenedor){
		var mensaje = document.createElement("div");
		mensaje.setAttribute("id", "mensaje");
		contenedor.insertBefore(mensaje, contenedor.childNodes[0]);
		mensaje.setAttribute("class", "mensaje");

		var label = document.createElement("label");
		label.innerText = texto;
		// label.setAttribute("class", "label");
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
});
