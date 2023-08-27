//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "\'");
car = car.replace(/\'/g, "=");
car = car.replace(/[ḡG]/g, "ღ");
car = car.replace(/[šS]/g, "შ");
car = car.replace(/[xK]/g, "ხ");
car = car.replace(/[žZ]/g, "ჟ");
car = car.replace(/[čcC]/g, "ჩ");
car = car.replace(/ჩ=/g, "ჭ");
car = car.replace(/ჭ=/g, "ჩ");
car = car.replace(/T/g, "ც");
car = car.replace(/D/g, "ძ");
car = car.replace(/q/g, "ყ");
car = car.replace(/a/g, "ა");
car = car.replace(/b/g, "ბ");
car = car.replace(/g/g, "გ");
car = car.replace(/d/g, "დ");
car = car.replace(/e/g, "ე");
car = car.replace(/v/g, "ვ");
car = car.replace(/z/g, "ზ");
car = car.replace(/t/g, "თ");
car = car.replace(/[ēi]/g, "ი");
car = car.replace(/l/g, "ლ");
car = car.replace(/m/g, "მ");
car = car.replace(/n/g, "ნ");
car = car.replace(/o/g, "ო");
car = car.replace(/r/g, "რ");
car = car.replace(/s/g, "ს");
car = car.replace(/u/g, "უ");
car = car.replace(/p/g, "ფ");
car = car.replace(/k/g, "ქ");
car = car.replace(/j/g, "ჯ");
car = car.replace(/h/g, "ჰ");
car = car.replace(/ყ=/g, "ყ");
car = car.replace(/ქ=/g, "კ");
car = car.replace(/კ=/g, "ქ");
car = car.replace(/თ=/g, "ტ");
car = car.replace(/ტ=/g, "თ");
car = car.replace(/ფ=/g, "პ");
car = car.replace(/პ=/g, "ფ");
car = car.replace(/ც=/g, "წ");
car = car.replace(/წ=/g, "ც");

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