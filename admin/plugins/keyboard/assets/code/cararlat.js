//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/\</g, "ʿ");
car = car.replace(/\>/g, "ʾ");
car = car.replace(/‘/g, "ʿ");
car = car.replace(/’/g, "ʾ");
car = car.replace(/ʿ=/g, "ɛ");
car = car.replace(/a=/g, "ā");
car = car.replace(/i=/g, "ī");
car = car.replace(/u=/g, "ū");
car = car.replace(/o=/g, "ō");
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "ə");
car = car.replace(/ə=/g, "e");
car = car.replace(/â/g, "ā");
car = car.replace(/î/g, "ī");
car = car.replace(/û/g, "ū");
car = car.replace(/ô/g, "ō");
car = car.replace(/ê/g, "ē");
car = car.replace(/ā=/g, "a");
car = car.replace(/ī=/g, "i");
car = car.replace(/ū=/g, "u");
car = car.replace(/ō=/g, "o");
car = car.replace(/ē=/g, "e");
car = car.replace(/\^s/g, "š");
car = car.replace(/\^g/g, "ǧ");
car = car.replace(/\^c/g, "č");
car = car.replace(/d=/g, "ḏ");
car = car.replace(/ḏ=/g, "ḍ");
car = car.replace(/ḍ=/g, "ḏ̣");
car = car.replace(/ḏ̣=/g, "d");
car = car.replace(/h=/g, "ẖ");
car = car.replace(/ẖ=/g, "ḥ");
car = car.replace(/ḥ=/g, "ḫ");
car = car.replace(/ḫ=/g, "h");
car = car.replace(/t=/g, "ṯ");
car = car.replace(/ṯ=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/s=/g, "ṣ");
car = car.replace(/ṣ=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/g=/g, "ġ");
car = car.replace(/ġ=/g, "ǧ");
car = car.replace(/ǧ=/g, "g");
car = car.replace(/z=/g, "ẓ");
car = car.replace(/ẓ=/g, "z");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/b=/g, "ḅ");
car = car.replace(/ḅ=/g, "b");
car = car.replace(/r=/g, "ṛ");
car = car.replace(/ṛ=/g, "r");
car = car.replace(/l=/g, "ḷ");
car = car.replace(/ḷ=/g, "l");
car = car.replace(/m=/g, "ṃ");
car = car.replace(/ṃ=/g, "m");


car = car.replace(/A=/g, "Ā");
car = car.replace(/I=/g, "Ī");
car = car.replace(/U=/g, "Ū");
car = car.replace(/O=/g, "Ō");
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ā=/g, "A");
car = car.replace(/Ī=/g, "I");
car = car.replace(/Ū=/g, "U");
car = car.replace(/Ō=/g, "O");
car = car.replace(/Ē=/g, "E");
car = car.replace(/\^S/g, "Š");
car = car.replace(/\^G/g, "Ǧ");
car = car.replace(/\^C/g, "Č");
car = car.replace(/D=/g, "Ḏ");
car = car.replace(/Ḏ=/g, "Ḍ");
car = car.replace(/Ḍ=/g, "D");
car = car.replace(/H=/g, "H̱");
car = car.replace(/H̱=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "Ḫ");
car = car.replace(/Ḫ=/g, "H");
car = car.replace(/T=/g, "Ṯ");
car = car.replace(/Ṯ=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "T");
car = car.replace(/S=/g, "Ṣ");
car = car.replace(/Ṣ=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/G=/g, "Ġ");
car = car.replace(/Ġ=/g, "Ǧ");
car = car.replace(/Ǧ=/g, "G");
car = car.replace(/Z=/g, "Ẓ");
car = car.replace(/Ẓ=/g, "Z");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/B=/g, "Ḅ");
car = car.replace(/Ḅ=/g, "B");
car = car.replace(/R=/g, "Ṛ");
car = car.replace(/Ṛ=/g, "R");
car = car.replace(/L=/g, "Ḷ");
car = car.replace(/Ḷ=/g, "L");
car = car.replace(/M=/g, "Ṃ");
car = car.replace(/Ṃ=/g, "M");

car = car.replace(/ش/g, "š");
car = car.replace(/س/g, "s");
car = car.replace(/ز/g, "z");
car = car.replace(/ر/g, "r");
car = car.replace(/ذ/g, "ḏ");
car = car.replace(/د/g, "d");
car = car.replace(/خ/g, "ẖ");
car = car.replace(/ح/g, "ḥ");
car = car.replace(/ج/g, "ǧ");
car = car.replace(/ث/g, "ṯ");
car = car.replace(/ت/g, "t");
car = car.replace(/ب/g, "b");
car = car.replace(/ا/g, "ā");
car = car.replace(/ء/g, "ʾ");
car = car.replace(/ي/g, "y");
car = car.replace(/و/g, "w");
car = car.replace(/ه/g, "h");
car = car.replace(/ن/g, "n");
car = car.replace(/م/g, "m");
car = car.replace(/ل/g, "l");
car = car.replace(/ك/g, "k");
car = car.replace(/ق/g, "q");
car = car.replace(/ف/g, "f");
car = car.replace(/غ/g, "ġ");
car = car.replace(/ع/g, "ʿ");
car = car.replace(/ظ/g, "ẓ");
car = car.replace(/ط/g, "ṭ");
car = car.replace(/ض/g, "ḍ");
car = car.replace(/ص/g, "ṣ");

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