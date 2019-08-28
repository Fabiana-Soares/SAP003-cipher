window.cipher = {
  encode: encode,
  decode: decode
};

function encode(mensagem, offset) {
  let escreva = "";
  let regrinha;
  let ciFrada;
  for (let i = 0; i < mensagem.length; i++) {
    let letrAscii = mensagem.charCodeAt(i);
    if (letrAscii >= 65 && letrAscii <= 90) {
      regrinha = ((letrAscii - 65 + offset) % 26) + 65;
      ciFrada = String.fromCharCode(regrinha);
    } else if (letrAscii >= 97 && letrAscii <= 122) {
      regrinha = ((letrAscii - 97 + offset) % 26) + 97;
      ciFrada = String.fromCharCode(regrinha);
    } else {
      ciFrada = mensagem[i];
    } escreva += ciFrada;
  }
  return escreva;
}

function decode(mensagem, offset) {
  let escreva = "";
  let regrinhaDecifrar;
  let deCifrar;
  for (let i = 0; i < mensagem.length; i++) {
    let letrAscii = mensagem.charCodeAt(i);
    if (letrAscii >= 65 && letrAscii <= 90) {
      regrinhaDecifrar = ((letrAscii - 65 - offset) + 26) % 26 + 65;
      deCifrar = String.fromCharCode(regrinhaDecifrar);
    } else if (letrAscii >= 97 && letrAscii <= 122) {
      regrinhaDecifrar = ((letrAscii - 97 - offset) + 26) % 26 + 97;
      deCifrar = String.fromCharCode(regrinhaDecifrar);
    } else {
      deCifrar = mensagem[i];  
    }escreva += deCifrar;
    
  }
  return escreva;
}

