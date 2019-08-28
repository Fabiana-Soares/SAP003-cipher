function ciFrar() {
   
   let msg = document.getElementById("cMsg").value;
   let offset = parseInt(document.getElementById("desloque").value);
  
   let encode = window.cipher.encode(msg, offset);
   
   
   document.getElementById("cMsg").value = encode;

}

function deCifrar() {
   
   let msg = document.getElementById("cMsg").value;
   let offset = parseInt(document.getElementById("desloque").value);
  
   let decode = window.cipher.decode(msg, offset);
  
   document.getElementById("cMsg").value = decode;
}
	

