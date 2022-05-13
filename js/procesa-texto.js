//Capturo el texto ingresado
const capturaTexto = () => {
  return document.querySelector("#txt-texto").value;
};

//asigno el texto al textarea que quiero mostrar
const asignaTexto = (texto) => {
  let pTexto = document.querySelector("#p-texto");
  pTexto.textContent = texto;
};

//encripta texto
const encriptaTexto = (texto) => {
  let diccionario = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  let palabra = "";

  for (let letra of texto) {
    if (diccionario.hasOwnProperty(letra)) {
      switch (letra) {
        case "a":
          letra = diccionario.a;
          break;
        case "e":
          letra = diccionario.e;
          break;
        case "i":
          letra = diccionario.i;
          break;
        case "o":
          letra = diccionario.o;
          break;
        case "u":
          letra = diccionario.u;
          break;
      }
    }
    palabra += letra;
  }

  return palabra;
};

//limpia el texto ingresado por el usuario
const limpiaTexto = () => {
  return (document.querySelector("#txt-texto").value = "");
};

//ocultar imágenes
const ocultaImagenes = () => {
  let imgDesaparece = document.querySelector("#img-desaparece");
  let pTexto = document.querySelector("#p-texto");

  imgDesaparece.style.display = "none";
  pTexto.style.display = "block";
  btnCopiar.style.visibility = "visible";
  btnCopiar.classList.add("aparece");
};

//copiar en portapapeles texto encriptado
const copiaTextoEncriptado = () => {
  let pTexto = document.querySelector("#p-texto");
  pTexto.select();
  document.execCommand("copy");
};

//limpia texto encriptado
const limpiaTextoEncriptado = () => {
  return (document.querySelector("#p-texto").value = "");
};

//desencripta texto
// const desencriptaTexto = (texto) => {
//   limpiaTextoEncriptado();

//   let diccionario = {
//     ai: "a",
//     enter: "e",
//     imes: "i",
//     ober: "o",
//     ufat: "u",
//   };

//   let palabra = "";

//   for (let letra of texto) {
//     if (diccionario.hasOwnProperty(letra)) {
//       switch (letra) {
//         case "ai":
//           letra = diccionario.ai;
//           break;
//         case "enter":
//           letra = diccionario.enter;
//           break;
//         case "imes":
//           letra = diccionario.imes;
//           break;
//         case "ober":
//           letra = diccionario.ober;
//           break;
//         case "ufat":
//           letra = diccionario.ufat;
//           break;
//       }
//     }
//     palabra += letra;
//   }

//   return palabra;
// };

//CAMBIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
