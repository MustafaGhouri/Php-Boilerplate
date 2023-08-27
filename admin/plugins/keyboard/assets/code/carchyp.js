//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/ja/g, "𐠅");
car = car.replace(/jo/g, "𐠈");
car = car.replace(/ka/g, "𐠊");
car = car.replace(/ke/g, "𐠋");
car = car.replace(/ki/g, "𐠌");
car = car.replace(/ko/g, "𐠍");
car = car.replace(/ku/g, "𐠎");
car = car.replace(/la/g, "𐠏");
car = car.replace(/le/g, "𐠐");
car = car.replace(/li/g, "𐠑");
car = car.replace(/lo/g, "𐠒");
car = car.replace(/lu/g, "𐠓");
car = car.replace(/ma/g, "𐠔");
car = car.replace(/me/g, "𐠕");
car = car.replace(/mi/g, "𐠖");
car = car.replace(/mo/g, "𐠗");
car = car.replace(/mu/g, "𐠘");
car = car.replace(/na/g, "𐠙");
car = car.replace(/ne/g, "𐠚");
car = car.replace(/ni/g, "𐠛");
car = car.replace(/no/g, "𐠜");
car = car.replace(/nu/g, "𐠝");
car = car.replace(/pa/g, "𐠞");
car = car.replace(/pe/g, "𐠟");
car = car.replace(/pi/g, "𐠠");
car = car.replace(/po/g, "𐠡");
car = car.replace(/pu/g, "𐠢");
car = car.replace(/ra/g, "𐠣");
car = car.replace(/re/g, "𐠤");
car = car.replace(/ri/g, "𐠥");
car = car.replace(/ro/g, "𐠦");
car = car.replace(/ru/g, "𐠧");
car = car.replace(/sa/g, "𐠨");
car = car.replace(/se/g, "𐠩");
car = car.replace(/si/g, "𐠪");
car = car.replace(/so/g, "𐠫");
car = car.replace(/su/g, "𐠬");
car = car.replace(/ta/g, "𐠭");
car = car.replace(/te/g, "𐠮");
car = car.replace(/ti/g, "𐠯");
car = car.replace(/to/g, "𐠰");
car = car.replace(/tu/g, "𐠱");
car = car.replace(/wa/g, "𐠲");
car = car.replace(/we/g, "𐠳");
car = car.replace(/wi/g, "𐠴");
car = car.replace(/wo/g, "𐠵");
car = car.replace(/xa/g, "𐠷");
car = car.replace(/xe/g, "𐠸");
car = car.replace(/za/g, "𐠼");
car = car.replace(/zo/g, "𐠿");
car = car.replace(/a/g, "𐠀");
car = car.replace(/e/g, "𐠁");
car = car.replace(/i/g, "𐠂");
car = car.replace(/o/g, "𐠃");
car = car.replace(/u/g, "𐠄"); 

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
