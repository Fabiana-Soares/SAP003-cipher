document.getElementById("ciFrar1").addEventListener("click", ciFrando);
document.getElementById("deCifrar1").addEventListener("click", deCifrando);

function ciFrando(event) {
  event.preventDefault();
  let mensagem = document.getElementById("cMsg").value;
  let offset = parseInt(document.getElementById("desloque").value);
  let encode = window.cipher.encode(offset, mensagem);  
  document.getElementById("cMsg").value = encode;
}
function deCifrando(event) {
  event.preventDefault(); 
  let mensagem = document.getElementById("cMsg").value;
  let offset = parseInt(document.getElementById("desloque").value);
  let decode = window.cipher.decode(offset, mensagem);
  document.getElementById("cMsg").value = decode;
}