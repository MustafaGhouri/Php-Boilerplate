// copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/ka/g, "𐎣");
car = car.replace(/ku/g, "𐎤");
car = car.replace(/ga/g, "𐎥");
car = car.replace(/gu/g, "𐎦");
car = car.replace(/ja/g, "𐎩");
car = car.replace(/ji/g, "𐎪");
car = car.replace(/ta/g, "𐎫");
car = car.replace(/tu/g, "𐎬");
car = car.replace(/da/g, "𐎭");
car = car.replace(/di/g, "𐎮");
car = car.replace(/du/g, "𐎯");
car = car.replace(/na/g, "𐎴");
car = car.replace(/nu/g, "𐎵");
car = car.replace(/ma/g, "𐎶");
car = car.replace(/mi/g, "𐎷");
car = car.replace(/mu/g, "𐎸");
car = car.replace(/va/g, "𐎺");
car = car.replace(/vi/g, "𐎻");
car = car.replace(/ra/g, "𐎼");
car = car.replace(/ru/g, "𐎽");
car = car.replace(/𐎿h/g, "𐏁");
car = car.replace(/[šS]/g, "𐏁");
car = car.replace(/𐎿s/g, "𐏂");
car = car.replace(/[çC]/g, "𐏂");
car = car.replace(/th/g, "𐎰");
car = car.replace(/T/g, "𐎰");
car = car.replace(/x/g, "𐎧");
car = car.replace(/c/g, "𐎨");
car = car.replace(/p/g, "𐎱");
car = car.replace(/b/g, "𐎲");
car = car.replace(/f/g, "𐎳");
car = car.replace(/y/g, "𐎹");
car = car.replace(/l/g, "𐎾");
car = car.replace(/s/g, "𐎿");
car = car.replace(/h/g, "𐏃");
car = car.replace(/z/g, "𐏀");

car = car.replace(/[aâ]/g, "𐎠");
car = car.replace(/[iî]/g, "𐎡");
car = car.replace(/[uû]/g, "𐎢");
car = car.replace(/𐎠𐎠/g, "𐎠");
car = car.replace(/𐎡𐎡/g, "𐎡");
car = car.replace(/𐎢𐎢/g, "𐎢");
car = car.replace(/=/g, "𐏐");
car = car.replace(/1/g, "𐏑");
car = car.replace(/2/g, "𐏒");
car = car.replace(/𐏑0/g, "𐏓");
car = car.replace(/𐏒0/g, "𐏔");
car = car.replace(/𐏓0/g, "𐏕");

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