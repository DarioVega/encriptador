//encripta texto
const encriptaTexto = (texto) => {
  let letrasAEncriptar = ["a", "e", "i", "o", "u"];

  let palabra = "";

  for (let letra of texto) {
    if (letrasAEncriptar.includes(letra)) {
      letra = reemplazarLetra(letra, 1);
    }
    palabra += letra;
  }
  return palabra;
};

//encripta la letra encontrada (indice 1 para encriptar letra)
const reemplazarLetra = (letra, indice = 0) => {
  let diccionario = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < diccionario.length; i++) {
    for (let j = 0; j < 2; j++) {
      if (letra === diccionario[i][j]) {
        letra = diccionario[i][indice];
      }
    }
  }

  return letra;
};
