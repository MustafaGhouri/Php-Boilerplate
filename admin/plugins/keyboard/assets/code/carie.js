//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "á");
car = car.replace(/á=/g, "a");
car = car.replace(/i=/g, "ī");
car = car.replace(/ī=/g, "í");
car = car.replace(/í=/g, "i");
car = car.replace(/u=/g, "ū");
car = car.replace(/ū=/g, "ú");
car = car.replace(/ú=/g, "u");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "é");
car = car.replace(/é=/g, "e");
car = car.replace(/o=/g, "ō");
car = car.replace(/ō=/g, "ó");
car = car.replace(/ó=/g, "o");

car = car.replace(/h=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/n=/g, "ṇ");
car = car.replace(/ṇ=/g, "n");
car = car.replace(/m=/g, "ṃ");
car = car.replace(/ṃ=/g, "m");
car = car.replace(/l=/g, "ḷ");
car = car.replace(/ḷ=/g, "l");
car = car.replace(/r=/g, "ṛ");
car = car.replace(/ṛ=/g, "r");
car = car.replace(/g=/g, "ǵ");
car = car.replace(/ǵ=/g, "g");
car = car.replace(/k=/g, "ḱ");
car = car.replace(/ḱ=/g, "k");
car = car.replace(/h1/g, "h₁");
car = car.replace(/h2/g, "h₂");
car = car.replace(/h3/g, "h₃");
car = car.replace(/ḥ1/g, "ḥ₁");
car = car.replace(/ḥ2/g, "ḥ₂");
car = car.replace(/ḥ3/g, "ḥ₃");
car = car.replace(/h₁=/g, "ʔ");
car = car.replace(/h₂=/g, "ʕ");
car = car.replace(/h₃=/g, "ʕʷ");
car = car.replace(/ǝ1/g, "ǝ₁");
car = car.replace(/ǝ2/g, "ǝ₂");
car = car.replace(/ǝ3/g, "ǝ₃");

car = car.replace(/hh/g, "ʰ");
car = car.replace(/ʰ=/g, "’");
car = car.replace(/’=/g, "ʰ");
car = car.replace(/ww/g, "ʷ");
car = car.replace(/ee/g, "ǝ");
car = car.replace(/\</g, "ʕ");
car = car.replace(/\>/g, "ʔ");


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