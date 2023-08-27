//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ⴰ");
car = car.replace(/b/g, "ⴱ");
car = car.replace(/ⴱ=/g, "ⴲ");
car = car.replace(/ⴲ=/g, "ⴱ");
car = car.replace(/g/g, "ⴳ");
car = car.replace(/ⴳ=/g, "ⴴ");
car = car.replace(/ⴴ=/g, "ⴵ");
car = car.replace(/ⴵ=/g, "ⴳ");
car = car.replace(/d/g, "ⴷ");
car = car.replace(/ⴷ=/g, "ⴸ");
car = car.replace(/ⴸ=/g, "ⴷ");
car = car.replace(/[ḍDḌ]/g, "ⴹ");
car = car.replace(/ⴹ=/g, "ⴺ");
car = car.replace(/ⴺ=/g, "ⴹ");
car = car.replace(/e/g, "ⴻ");
car = car.replace(/f/g, "ⴼ");
car = car.replace(/k/g, "ⴽ");
car = car.replace(/ⴽ=/g, "ⴿ");
car = car.replace(/ⴿ=/g, "ⴽ");
car = car.replace(/h/g, "ⵀ");
car = car.replace(/ⵀ=/g, "ⵁ");
car = car.replace(/ⵁ=/g, "ⵀ");
car = car.replace(/[ḥHḤ]/g, "ⵃ");
car = car.replace(/[KXx]/g, "ⵅ");
car = car.replace(/q/g, "ⵇ");
car = car.replace(/i/g, "ⵉ");
car = car.replace(/j/g, "ⵊ");
car = car.replace(/l/g, "ⵍ");
car = car.replace(/m/g, "ⵎ");
car = car.replace(/n/g, "ⵏ");
car = car.replace(/p/g, "ⵒ");
car = car.replace(/u/g, "ⵓ");
car = car.replace(/r/g, "ⵔ");
car = car.replace(/[ṛRṚ]/g, "ⵕ");
car = car.replace(/ⵔ=/g, "ⵕ");
car = car.replace(/ⵕ=/g, "ⵔ");
car = car.replace(/s/g, "ⵙ");
car = car.replace(/[ṣSṢ]/g, "ⵚ");
car = car.replace(/ⵙ=/g, "ⵚ");
car = car.replace(/ⵚ=/g, "ⵙ");
car = car.replace(/[cCš]/g, "ⵛ");
car = car.replace(/č/g, "ⵞ");
car = car.replace(/ⵛ=/g, "ⵞ");
car = car.replace(/ⵞ=/g, "ⵛ");
car = car.replace(/t/g, "ⵜ");
car = car.replace(/[ṭTṬ]/g, "ⵟ");
car = car.replace(/w/g, "ⵡ");
car = car.replace(/y/g, "ⵢ");
car = car.replace(/z/g, "ⵣ");
car = car.replace(/[ẓZẒ]/g, "ⵥ");
car = car.replace(/ⵣ=/g, "ⵥ");
car = car.replace(/ⵥ=/g, "ⵣ");
car = car.replace(/v/g, "ⵯ");
car = car.replace(/ⵡ=/g, "ⵯ");
car = car.replace(/ⵯ=/g, "ⵡ");
car = car.replace(/[ɣGYγ]/g, "ⵖ");
car = car.replace(/[εAε]/g, "ⵄ");
car = car.replace(/ⵄ=/g, "ⵖ");
car = car.replace(/ⵖ=/g, "ⵄ");
car = car.replace(/V/g, "ⵠ");
car = car.replace(/ⵅ=/g, "ⵝ");
car = car.replace(/ⵝ=/g, "ⵅ");

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