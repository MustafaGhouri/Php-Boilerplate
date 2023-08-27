//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/d=/g, "ḍ");
car = car.replace(/ḍ=/g, "ḏ");
car = car.replace(/ḏ=/g, "ḏ̣");
car = car.replace(/ḏ̣=/g, "d");
car = car.replace(/g=/g, "ǧ");
car = car.replace(/ǧ=/g, "g̱");
car = car.replace(/g̱=/g, "g");
car = car.replace(/h=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/r=/g, "ṛ");
car = car.replace(/ṛ=/g, "r");
car = car.replace(/s=/g, "ṣ");
car = car.replace(/ṣ=/g, "s");
car = car.replace(/t=/g, "ṭ");
car = car.replace(/ṭ=/g, "ṯ");
car = car.replace(/ṯ=/g, "ţ");
car = car.replace(/ţ=/g, "t");
car = car.replace(/z=/g, "ẓ");
car = car.replace(/ẓ=/g, "z");

car = car.replace(/b=/g, "ḇ");
car = car.replace(/ḇ=/g, "b");
car = car.replace(/k=/g, "ḵ");
car = car.replace(/ḵ=/g, "k");
car = car.replace(/n=/g, "ṇ");
car = car.replace(/ṇ=/g, "n");
car = car.replace(/m=/g, "ṃ");
car = car.replace(/ṃ=/g, "m");

car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/D=/g, "Ḍ");
car = car.replace(/Ḍ=/g, "Ḏ");
car = car.replace(/Ḏ=/g, "Ḏ̣");
car = car.replace(/Ḏ̣=/g, "D");
car = car.replace(/G=/g, "Ǧ");
car = car.replace(/Ǧ=/g, "G̱");
car = car.replace(/G̱=/g, "G");
car = car.replace(/H=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H");
car = car.replace(/R=/g, "Ṛ");
car = car.replace(/Ṛ=/g, "R");
car = car.replace(/S=/g, "Ṣ");
car = car.replace(/Ṣ=/g, "S");
car = car.replace(/T=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "Ṯ");
car = car.replace(/Ṯ=/g, "Ţ");
car = car.replace(/Ţ=/g, "T");
car = car.replace(/Z=/g, "Ẓ");
car = car.replace(/Ẓ=/g, "Z");

car = car.replace(/B=/g, "Ḇ");
car = car.replace(/Ḇ=/g, "B");
car = car.replace(/K=/g, "Ḵ");
car = car.replace(/Ḵ=/g, "K");
car = car.replace(/N=/g, "Ṇ");
car = car.replace(/Ṇ=/g, "N");
car = car.replace(/M=/g, "Ṃ");
car = car.replace(/Ṃ=/g, "M");

car = car.replace(/e=/g, "ɛ");
car = car.replace(/ɛ=/g, "e");
car = car.replace(/E=/g, "Ɛ");
car = car.replace(/Ɛ=/g, "E");
car = car.replace(/y=/g, "ɣ");
car = car.replace(/ɣ=/g, "y");
car = car.replace(/Y=/g, "Ɣ");
car = car.replace(/Ɣ=/g, "Y");

// grec
car = car.replace(/a=/g, "ε");
car = car.replace(/ε=/g, "a");
car = car.replace(/A=/g, "Σ");
car = car.replace(/Σ=/g, "A");
car = car.replace(/v=/g, "γ");
car = car.replace(/γ=/g, "v");
car = car.replace(/V=/g, "Γ");
car = car.replace(/Γ=/g, "V");

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