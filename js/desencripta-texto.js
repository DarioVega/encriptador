//desencripta texto
const desencriptaTexto = (texto) => {
  let diccionario = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < diccionario.length; i++) {
    let bandera = false;
    while (bandera === false) {
      if (texto.includes(diccionario[i][1])) {
        texto = texto.replace(diccionario[i][1], diccionario[i][0]);
      } else {
        bandera = true;
      }
    }
  }

  return texto;
};
