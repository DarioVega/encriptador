//Capturo el texto ingresado
const capturaTexto = () => {
  return document.querySelector("#txt-texto").value;
};

//asigno el texto al textarea que quiero mostrar
const asignaTexto = (texto) => {
  let pTexto = document.querySelector("#p-texto");
  pTexto.textContent = texto;
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
