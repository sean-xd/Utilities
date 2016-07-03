var crypto = require("crypto");

function encrypt(text){
  var cipher = crypto.createCipher("aes256", "salt");
  return cipher.update(text, "utf8", "hex") + cipher.final("hex");
}

function decrypt(text){
  var decipher = crypto.createDecipher("aes256", "salt");
  return decipher.update(text, "hex", "utf8") + decipher.final("utf8");
}
