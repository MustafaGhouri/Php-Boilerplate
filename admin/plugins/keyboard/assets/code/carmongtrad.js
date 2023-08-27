//  copyright lexilogos.com 
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ᠠ");
car = car.replace(/e/g, "ᠡ");
car = car.replace(/i/g, "ᠢ");
car = car.replace(/o/g, "ᠣ");
car = car.replace(/u/g, "ᠤ");
car = car.replace(/[Oö]/g, "ᠥ");
car = car.replace(/[Uü]/g, "ᠦ");
car = car.replace(/[Eë]/g, "ᠧ");
car = car.replace(/n/g, "ᠨ");
car = car.replace(/[Nñ]/g, "ᠩ");
car = car.replace(/b/g, "ᠪ");
car = car.replace(/p/g, "ᠫ");
car = car.replace(/q/g, "ᠬ");
car = car.replace(/g/g, "ᠭ");
car = car.replace(/m/g, "ᠮ");
car = car.replace(/l/g, "ᠯ");
car = car.replace(/s/g, "ᠰ");
car = car.replace(/[Sš]/g, "ᠱ");
car = car.replace(/t/g, "ᠲ");
car = car.replace(/d/g, "ᠳ");
car = car.replace(/[Cč]/g, "ᠴ");
car = car.replace(/j/g, "ᠵ");
car = car.replace(/y/g, "ᠶ");
car = car.replace(/r/g, "ᠷ");
car = car.replace(/v/g, "ᠸ");
car = car.replace(/f/g, "ᠹ");
car = car.replace(/k/g, "ᠺ");
car = car.replace(/[Kḳ]/g, "ᠻ");
car = car.replace(/c/g, "ᠼ");
car = car.replace(/z/g, "ᠽ");
car = car.replace(/h/g, "ᠾ");

car = car.replace(/а/g, "ᠠ");
car = car.replace(/э/g, "ᠡ");
car = car.replace(/и/g, "ᠢ");
car = car.replace(/о/g, "ᠣ");
car = car.replace(/у/g, "ᠤ");
car = car.replace(/ө/g, "ᠥ");
car = car.replace(/ү/g, "ᠦ");
car = car.replace(/ё/g, "ᠧ");
car = car.replace(/н/g, "ᠨ");
car = car.replace(/б/g, "ᠪ");
car = car.replace(/п/g, "ᠫ");
car = car.replace(/х/g, "ᠬ");
car = car.replace(/г/g, "ᠭ");
car = car.replace(/ᠨᠭ/g, "ᠩ"); //ng
car = car.replace(/м/g, "ᠮ");
car = car.replace(/л/g, "ᠯ");
car = car.replace(/с/g, "ᠰ");
car = car.replace(/ш/g, "ᠱ");
car = car.replace(/т/g, "ᠲ");
car = car.replace(/д/g, "ᠳ");
car = car.replace(/ч/g, "ᠴ");
car = car.replace(/ж/g, "ᠵ");
car = car.replace(/й/g, "ᠶ");
car = car.replace(/р/g, "ᠷ");
car = car.replace(/в/g, "ᠸ");
car = car.replace(/ф/g, "ᠹ");
car = car.replace(/Х/g, "ᠺ"); // maj
car = car.replace(/к/g, "ᠻ");
car = car.replace(/ц/g, "ᠼ");
car = car.replace(/з/g, "ᠽ");
//car = car.replace(/h/g, "ᠾ");

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