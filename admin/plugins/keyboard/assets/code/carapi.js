//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ɑ");
car = car.replace(/ɑ=/g, "ɐ");
car = car.replace(/ɐ=/g, "ɒ");
car = car.replace(/ɒ=/g, "æ");
car = car.replace(/æ=/g, "a");
car = car.replace(/e=/g, "ɛ");
car = car.replace(/ɛ=/g, "ə");
car = car.replace(/ə=/g, "ɘ");
car = car.replace(/ɘ=/g, "ɵ");
car = car.replace(/ɵ=/g, "ɚ");
car = car.replace(/ɚ=/g, "ɜ");
car = car.replace(/ɜ=/g, "ɝ");
car = car.replace(/ɝ=/g, "ɞ");
car = car.replace(/ɞ=/g, "e");
car = car.replace(/i=/g, "ɪ");
car = car.replace(/ɪ=/g, "ɨ");
car = car.replace(/ɨ=/g, "i");
car = car.replace(/o=/g, "ɔ");
car = car.replace(/ɔ=/g, "ø");
car = car.replace(/ø=/g, "œ");
car = car.replace(/œ=/g, "ɶ");
car = car.replace(/ɶ=/g, "o");
car = car.replace(/u=/g, "ɥ");
car = car.replace(/ɥ=/g, "ʊ");
car = car.replace(/ʊ=/g, "ʌ");
car = car.replace(/ʌ=/g, "ʉ");
car = car.replace(/ʉ=/g, "ɯ");
car = car.replace(/ɯ=/g, "ɤ");
car = car.replace(/ɤ=/g, "u");

car = car.replace(/b=/g, "ɓ");
car = car.replace(/ɓ=/g, "ʙ");
car = car.replace(/ʙ=/g, "β");
car = car.replace(/β=/g, "b");
car = car.replace(/c=/g, "ç");
car = car.replace(/ç=/g, "ɕ");
car = car.replace(/ɕ=/g, "c");
car = car.replace(/f=/g, "ɟ");
car = car.replace(/ɟ=/g, "ʄ");
car = car.replace(/ʄ=/g, "f");
car = car.replace(/g=/g, "ɡ");
car = car.replace(/ɡ=/g, "ɠ");
car = car.replace(/ɠ=/g, "ɢ");
car = car.replace(/ɢ=/g, "ʛ");
car = car.replace(/ʛ=/g, "g");
car = car.replace(/h=/g, "ɦ");
car = car.replace(/ɦ=/g, "ɧ");
car = car.replace(/ɧ=/g, "ħ");
car = car.replace(/ħ=/g, "ʜ");
car = car.replace(/ʜ=/g, "h");
car = car.replace(/j=/g, "ʝ");
car = car.replace(/ʝ=/g, "j");
car = car.replace(/l=/g, "ɭ");
car = car.replace(/ɭ=/g, "ɬ");
car = car.replace(/ɬ=/g, "ɫ");
car = car.replace(/ɫ=/g, "ɮ");
car = car.replace(/ɮ=/g, "ʟ");
car = car.replace(/ʟ=/g, "ʎ");
car = car.replace(/ʎ=/g, "l")
car = car.replace(/m=/g, "ɱ");
car = car.replace(/ɱ=/g, "ɰ");
car = car.replace(/ɰ=/g, "m");
car = car.replace(/n=/g, "ŋ");
car = car.replace(/ŋ=/g, "ɳ");
car = car.replace(/ɳ=/g, "ɲ");
car = car.replace(/ɲ=/g, "ɴ");
car = car.replace(/ɴ=/g, "n");
  

car = car.replace(/d=/g, "ð"); 
car = car.replace(/ð=/g, "ɗ");
car = car.replace(/ɗ=/g, "ɖ");
car = car.replace(/ɖ=/g, "ʤ");
car = car.replace(/ʤ=/g, "d");
car = car.replace(/p=/g, "ɸ");
car = car.replace(/ɸ=/g, "p");
car = car.replace(/r=/g, "ʀ");
car = car.replace(/ʀ=/g, "ʁ");
car = car.replace(/ʁ=/g, "ɹ");
car = car.replace(/ɹ=/g, "ɻ");
car = car.replace(/ɻ=/g, "ɺ");
car = car.replace(/ɺ=/g, "ɾ");
car = car.replace(/ɾ=/g, "ɽ");
car = car.replace(/ɽ=/g, "r");  
car = car.replace(/s=/g, "ʃ");
car = car.replace(/ʃ=/g, "ʂ");
car = car.replace(/ʂ=/g, "s");
car = car.replace(/t=/g, "θ");
car = car.replace(/θ=/g, "ʧ");
car = car.replace(/ʧ=/g, "ʈ");
car = car.replace(/ʈ=/g, "t");
car = car.replace(/v=/g, "ʋ");
car = car.replace(/ʋ=/g, "ɣ");
car = car.replace(/ɣ=/g, "v");
car = car.replace(/w=/g, "ʍ");
car = car.replace(/ʍ=/g, "w");
car = car.replace(/y=/g, "ʏ");
car = car.replace(/ʏ=/g, "y");
car = car.replace(/z=/g, "ʒ");
car = car.replace(/ʒ=/g, "ʑ");
car = car.replace(/ʑ=/g, "ʐ");
car = car.replace(/ʐ=/g, "z");


//spéciaux
car = car.replace(/x=/g, "χ");
car = car.replace(/χ=/g, "x");

// diacritiques
car = car.replace(/\'/g, "ˈ");
car = car.replace(/’/g, "ˈ");
car = car.replace(/ˈ=/g, "ˌ");
car = car.replace(/ˌ=/g, "ˈ");
car = car.replace(/ˈˈ/g, "ː"); //facultatif 
car = car.replace(/\:/g, "ː");
car = car.replace(/N/g, "̃");


startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}