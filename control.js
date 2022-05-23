let usuario = document.getElementById('usuario');
let clave = document.getElementById('clave');
// expresion = /\w+@+\w/;

function validarFormulario() {

   if(usuario.value == '') {
      alert('Debe ingresar un usuario');
      return 0;
   }

   if(!usuario.value.includes('@')) {
      alert('El nombre de usuario debe incluir un @');
      return 0;
   }

   if(clave.value == '') {
      alert('Debe ingresar una clave');
      return 0;
   }

   alert ("Bienvenido")
   return ok;

};