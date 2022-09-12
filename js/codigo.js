// //se crean los arrays con los diferentes campos necesarios
// //Arrays de Usuarios registrados, con nombre apellido y clases a inscribirse
// class Usuario {
//     constructor(nombre, apellido, clase){
//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.clase=clase;
//     }
// }
// //Arrays de Clases disponibles a inscribirse junto a un contador de alumnos inscriptos
// class Clase {
//     constructor(nombre, fechaInicio){
//         this.nombre=nombre;
//         this.fechaInicio=fechaInicio;
//         this.cantidadUsuarios=0;
//     }
// }
//  //Encontrar cuantos usuarios tiene cada clase
// function encontrarIndex(arrayClases, claseAEncontrar){
//     for (const clase of arrayClases){
//         if(claseAEncontrar == clase.nombre)
//             return arrayClases.indexOf(clase);
//     }
// }
// //Muestra  los  usuario inscriptos en todas las clases
// function imprimirUsuarios(arrayUsuarios){
//     for(const usuario of arrayUsuarios)
//             console.table(usuario)
//         }
    
// // clases disponibles y fechas de inicio de cada clase
// const clases=[];
// clases.push(new Clase("Funcional", "1/01"));
// clases.push(new Clase("Natacion", "1/01"));
// clases.push(new Clase("Pilates", "1/01"));

// //Agrega nuevos usuarios al Arrays
// const usuarios=[];

// function ingresarUsuarios() {
//     let nombre;
//     do{
//         nombre =prompt("ingrese el nombre de Usuario");
//         if (nombre==""){
//             break;
//         }
//         let apellido =prompt("ingrese Apellido");
//         let clase =prompt("ingrese Clase a realizar");
//         let usuario = new Usuario(nombre, apellido, clase);

//         let indice = clases.find((clase)=>clase.nombre == usuario.clase)
            
//         if (indice){
//                 if(indice.cantidadUsuarios < 10){
//                     usuarios.push(usuario)
//                     let index = encontrarIndex(clases, clase)
//                     clases[index].cantidadUsuarios +=1;
                    
//                     alert("la fecha de inicio es " +
//                     clases[index].fechaInicio +
//                     " y la cantidad de inscriptos es " +
//                     clases[index].cantidadUsuarios);
//                 }
//                 else{alert("los cupos estan llenos")
//             }
            
//         }else{
//             alert ("La clase no existe")
//         }       
//      } while (nombre !="");
// }
// ingresarUsuarios();
// imprimirUsuarios(usuarios);