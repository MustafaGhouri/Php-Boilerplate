//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "𐒀");
car = car.replace(/\'/g, "𐒀");
car = car.replace(/b/g, "𐒁");
car = car.replace(/t/g, "𐒂");
car = car.replace(/j/g, "𐒃");
car = car.replace(/x/g, "𐒄");
car = car.replace(/k/g, "𐒏");
car = car.replace(/𐒏=/g, "𐒅");
car = car.replace(/K/g, "𐒅");
car = car.replace(/d/g, "𐒆");
car = car.replace(/r/g, "𐒇");
car = car.replace(/s/g, "𐒈");
car = car.replace(/𐒈=/g, "𐒉");
car = car.replace(/S/g, "𐒉");
car = car.replace(/𐒆=/g, "𐒊");
car = car.replace(/D/g, "𐒊");
car = car.replace(/c/g, "𐒋");
car = car.replace(/g/g, "𐒌");
car = car.replace(/f/g, "𐒍");
car = car.replace(/q/g, "𐒎");
car = car.replace(/l/g, "𐒐");
car = car.replace(/m/g, "𐒑");
car = car.replace(/n/g, "𐒒");
car = car.replace(/w/g, "𐒓");
car = car.replace(/h/g, "𐒔");
car = car.replace(/y/g, "𐒕");
car = car.replace(/a/g, "𐒖");
car = car.replace(/e/g, "𐒗");
car = car.replace(/i/g, "𐒘");
car = car.replace(/o/g, "𐒙");
car = car.replace(/u/g, "𐒚");
car = car.replace(/𐒖=/g, "𐒛");
car = car.replace(/𐒗=/g, "𐒜");
car = car.replace(/𐒙=/g, "𐒝");
car = car.replace(/[Aâā]/g, "𐒛");
car = car.replace(/[Eêē]/g, "𐒜");
car = car.replace(/[Oôō]/g, "𐒝");
car = car.replace(/0/g, "𐒠");
car = car.replace(/1/g, "𐒡");
car = car.replace(/2/g, "𐒢");
car = car.replace(/3/g, "𐒣");
car = car.replace(/4/g, "𐒤");
car = car.replace(/5/g, "𐒥");
car = car.replace(/6/g, "𐒦");
car = car.replace(/7/g, "𐒧");
car = car.replace(/8/g, "𐒨");
car = car.replace(/9/g, "𐒩");

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