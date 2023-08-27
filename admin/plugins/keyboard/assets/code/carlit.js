//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a=/g, "ą");
car = car.replace(/ą=/g, "a");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");
car = car.replace(/e=/g, "ę");
car = car.replace(/ę=/g, "ė");
car = car.replace(/ė=/g, "e");
car = car.replace(/i=/g, "į");
car = car.replace(/į=/g, "i");
car = car.replace(/s=/g, "š");
car = car.replace(/š=/g, "s");
car = car.replace(/u=/g, "ų");
car = car.replace(/ų=/g, "ū");
car = car.replace(/ū=/g, "u");
car = car.replace(/z=/g, "ž");
car = car.replace(/ž=/g, "z");
car = car.replace(/A=/g, "Ą");
car = car.replace(/Ą=/g, "A");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");
car = car.replace(/E=/g, "Ę");
car = car.replace(/Ę=/g, "Ė");
car = car.replace(/Ė=/g, "E");
car = car.replace(/I=/g, "Į");
car = car.replace(/Į=/g, "I");
car = car.replace(/S=/g, "Š");
car = car.replace(/Š=/g, "S");
car = car.replace(/U=/g, "Ų");
car = car.replace(/Ų=/g, "Ū");
car = car.replace(/Ū=/g, "U");
car = car.replace(/Z=/g, "Ž");
car = car.replace(/Ž=/g, "Z");

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