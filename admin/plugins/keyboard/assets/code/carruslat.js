//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "â");
car = car.replace(/â=/g, "a");
car = car.replace(/e=/g, "ë");
car = car.replace(/ë=/g, "è");
car = car.replace(/è=/g, "e");
car = car.replace(/u=/g, "û");
car = car.replace(/û=/g, "u");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "ŝ");
car = car.replace(/ŝ=/g, "s");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/A=/g, "Â");
car = car.replace(/Â=/g, "A");
car = car.replace(/E=/g, "Ë");
car = car.replace(/Ë=/g, "È");
car = car.replace(/È=/g, "E");
car = car.replace(/U=/g, "Û");
car = car.replace(/Û=/g, "U");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "Ŝ");
car = car.replace(/Ŝ=/g, "S");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");
car = car.replace(/\'/g, "’");

car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "g");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "e");
car = car.replace(/ё/g, "ë");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/и/g, "i");
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/л/g, "l");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "h");
car = car.replace(/ц/g, "c");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "ŝ");
car = car.replace(/ъ/g, "’’");
car = car.replace(/ы/g, "y");
car = car.replace(/ь/g, "’");
car = car.replace(/э/g, "è");
car = car.replace(/ю/g, "ju");
car = car.replace(/я/g, "ja");

car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "G");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "E");
car = car.replace(/Ё/g, "Ë");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/И/g, "I");
car = car.replace(/Й/g, "J");
car = car.replace(/К/g, "K");
car = car.replace(/Л/g, "L");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "H");
car = car.replace(/Ц/g, "C");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Ŝ");
car = car.replace(/Ъ/g, "’’");
car = car.replace(/Ы/g, "Y");
car = car.replace(/Ь/g, "’");
car = car.replace(/Э/g, "È");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");

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