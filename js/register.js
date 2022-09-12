const frmRegistro = document.getElementById("formularioUsuario");
const fullName = document.getElementById("nombre");
const userName = document.getElementById("apellido");
const email = document.getElementById("email");
const password = document.getElementById("contrasena1");
const confirmPassword = document.getElementById("contrasena2");

const userRegistered = [];


const validateUser = JSON.parse(localStorage.getItem("user")) || []; 


frmRegistro.addEventListener("submit", RegisterUser);
 

// Registrar Usuario
function RegisterUser(event) {


  const getLocal = localStorage.getItem("user");
  const validateUser = JSON.parse(getLocal); 
  // Prevenir los eventos precargados  
  event.preventDefault();

  // Crear usuario objeto
  const user = {
    nameFull: fullName.value,
    user: userName.value,
    pass: password.value,
    confPassword: confirmPassword.value
  };
  // Validar que los campos no estén vacíos
  if (
    fullName.value === "" ||
    userName.value === "" ||
    password.value === "" ||
    confirmPassword.value === ""
    ) {
      alert("Por favor llene todos los campos");
    }
    // Validar que las contraseñas coincidan
  else if (password.value !== confirmPassword.value) {
    alert("Las contraseñas no coinciden");
  }
  // Validar que el usuario no exista
  else if (validateUser.find(user => user.user === userName.value)) {
    alert("El usuario ya existe")   ;
  }
  // Validar que el usuario no exista
  else {
    // Agregar usuario
    userRegistered.push(user);
    console.table(user)
    // guardar array en localStorage
    localStorage.setItem("user",JSON.stringify(userRegistered));              
    alert("Usuario registrado con éxito");
    // Limpiar campos
    fullName.value = "";
    userName.value = "";
    password.value = "";
    confirmPassword.value = "";    
  }
}





