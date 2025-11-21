botonformulario.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Hiciste clic!");


  const nombreenelformulario = document.getElementById("nombre").value;
  if (nombreenelformulario == "") {
    const validacionnombre = document.getElementById("debajodenombre");
    validacionnombre.innerHTML = "<p class='text-danger'>INGRESA UN NOMBRE</p>"
  }
  else {
    const validacionnombre = document.getElementById("debajodenombre");
    validacionnombre.innerHTML = "<p class='text-success'>★♥★</p>"
  }


  const correoelec = document.getElementById("correo").value;
  if (correoelec == "") {
    const validacioncorreo = document.getElementById("debajodecorreo");
    validacioncorreo.innerHTML = "<p class='text-danger'>ESCRIBE TU CORREO</p>"

  }
  else {
    const validacioncorreo = document.getElementById("debajodecorreo");
    validacioncorreo.innerHTML = "<p class='text-success'>★♥★</p>"
  }


  const mensajetexto = document.getElementById("mensaje").value;
  if (mensajetexto == "") {
    const validacionmensaje = document.getElementById("debajodemensaje");
    validacionmensaje.innerHTML = "<p class='text-danger'>ESCRIBE TU MENSAJE</p>"

  }
  else {
    const validacionmensaje = document.getElementById("debajodemensaje");
    validacionmensaje.innerHTML = "<p class='text-success'>★♥★</p>"
  }

});

botonformulario.addEventListener("mouseover", function (event) {
  console.log("pasaste por arriba del boton");
});




