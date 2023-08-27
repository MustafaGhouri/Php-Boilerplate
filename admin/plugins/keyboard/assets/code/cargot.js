//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𐌰");
car = car.replace(/b/g, "𐌱");
car = car.replace(/g/g, "𐌲");
car = car.replace(/d/g, "𐌳");
car = car.replace(/e/g, "𐌴");
car = car.replace(/q/g, "𐌵");
car = car.replace(/z/g, "𐌶");
car = car.replace(/h/g, "𐌷");
car = car.replace(/i/g, "𐌹");
car = car.replace(/k/g, "𐌺");
car = car.replace(/l/g, "𐌻");
car = car.replace(/m/g, "𐌼");
car = car.replace(/n/g, "𐌽");
car = car.replace(/j/g, "𐌾");
car = car.replace(/u/g, "𐌿");
car = car.replace(/p/g, "𐍀");

car = car.replace(/r/g, "𐍂");
car = car.replace(/s/g, "𐍃");
car = car.replace(/t/g, "𐍄");
car = car.replace(/w/g, "𐍅");
car = car.replace(/f/g, "𐍆");
car = car.replace(/x/g, "𐍇");
car = car.replace(/o/g, "𐍉");
car = car.replace(/𐍄=/g, "𐌸");
car = car.replace(/þ/g, "𐌸");
car = car.replace(/v/g, "𐍈");
car = car.replace(/ƕ/g, "𐍈");

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