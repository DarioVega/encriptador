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
  let diccionario = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  let palabra = "";

  for (let letra of texto) {
    if (diccionario.includes(letra)) {
      let i = 0;
      switch (letra) {
        case "a":
          // letra = diccionario[(0, 1)];
          alert(diccionario[(0, 0)]);
          break;
        // case "e":
        //   letra = diccionario[i+1,1];
        //   break;
        // case "i":
        //   letra = diccionario.[i+2,1];
        //   break;
        // case "o":
        //   letra = diccionario[i+3,1];
        //   break;
        // case "u":
        //   letra = diccionario[i+4,1];
        //   break;
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
