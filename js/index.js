//captura de los botones
let btnEncriptar = document.querySelector("#btn-encriptar");
let btnDesencriptar = document.querySelector("#btn-desencriptar");
let btnCopiar = document.querySelector("#btn-copiar");

//agrego un evento click al botón encriptar
btnEncriptar.addEventListener("click", () => {
  //capturo el texto ingresado
  let texto = capturaTexto();

  //encriptar
  let textoEncriptado = encriptaTexto(texto);

  //oculto imagenes
  ocultaImagenes();

  //asigno el texto al p que quiero mostrar
  asignaTexto(textoEncriptado);

  //limpio el input text
  limpiaTexto();
});

//agrego un evento click al botón copiar
btnCopiar.addEventListener("click", () => {
  copiaTextoEncriptado();
});

btnDesencriptar.addEventListener("click", () => {
  let texto = capturaTexto();

  let textoDesencriptado = desencriptaTexto(texto);

  ocultaImagenes();

  asignaTexto(textoDesencriptado);

  limpiaTexto();
});

alert("prueba");
