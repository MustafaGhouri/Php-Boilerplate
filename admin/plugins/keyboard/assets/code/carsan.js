//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "̱");
car = car.replace(/\'/g, "̍");
car = car.replace(/̍̍/g, "̎");
car = car.replace(/̎̍/g, "");

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
car = car.replace(/t=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/d=/g, "ḍ");
car = car.replace(/ḍ=/g, "d");
car = car.replace(/h=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/n=/g, "ṇ");
car = car.replace(/ṇ=/g, "ṅ");
car = car.replace(/ṅ=/g, "ñ");
car = car.replace(/ñ=/g, "n");
car = car.replace(/m=/g, "ṃ");
car = car.replace(/ṃ=/g, "ṁ");
car = car.replace(/ṁ=/g, "m̐");
car = car.replace(/m̐=/g, "m");
car = car.replace(/s=/g, "ṣ");
car = car.replace(/ṣ=/g, "ś");
car = car.replace(/ś=/g, "s");
car = car.replace(/l=/g, "ḷ");
car = car.replace(/ḷ=/g, "ḹ");
car = car.replace(/ḹ=/g, "l");
car = car.replace(/r=/g, "ṛ");
car = car.replace(/ṛ=/g, "ṝ");
car = car.replace(/ṝ=/g, "r");
car = car.replace(/A=/g, "Ā");
car = car.replace(/Ā=/g, "A");
car = car.replace(/I=/g, "Ī");
car = car.replace(/Ī=/g, "I");
car = car.replace(/U=/g, "Ū");
car = car.replace(/Ū=/g, "U");
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ē=/g, "E");
car = car.replace(/O=/g, "Ō");
car = car.replace(/Ō=/g, "O");
car = car.replace(/T=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "T");
car = car.replace(/D=/g, "Ḍ");
car = car.replace(/Ḍ=/g, "D");
car = car.replace(/H=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H");
car = car.replace(/N=/g, "Ṇ");
car = car.replace(/Ṇ=/g, "Ṅ");
car = car.replace(/Ṅ=/g, "Ñ");
car = car.replace(/Ñ=/g, "N");
car = car.replace(/M=/g, "Ṃ");
car = car.replace(/Ṃ=/g, "Ṁ");
car = car.replace(/Ṁ=/g, "M̐");
car = car.replace(/M̐=/g, "M");
car = car.replace(/S=/g, "Ṣ");
car = car.replace(/Ṣ=/g, "Ś");
car = car.replace(/Ś=/g, "S");
car = car.replace(/L=/g, "Ḷ");
car = car.replace(/Ḷ=/g, "Ḹ");
car = car.replace(/Ḹ=/g, "L");
car = car.replace(/R=/g, "Ṛ");
car = car.replace(/Ṛ=/g, "Ṝ");
car = car.replace(/Ṝ=/g, "R");

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