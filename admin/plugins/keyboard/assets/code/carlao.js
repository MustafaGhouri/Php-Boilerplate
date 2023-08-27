//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

// voy
car = car.replace(/a/g, "ະ");
car = car.replace(/ະ=/g, "ັ");
car = car.replace(/ັ=/g, "ົ");
car = car.replace(/ົ=/g, "ັ");
car = car.replace(/ະະ/g, "າ");
car = car.replace(/[Aā]/g, "າ");
car = car.replace(/າ=/g, "ຳ");
car = car.replace(/i/g, "ິ");
car = car.replace(/ິິ/g, "ີ");
car = car.replace(/[Iī]/g, "ີ");
car = car.replace(/u/g, "ຸ");
car = car.replace(/ຸຸ/g, "ູ");
car = car.replace(/[Uū]/g, "ູ");
car = car.replace(/[ư]/g, "ຶ");
car = car.replace(/ຶຶ/g, "ື");
car = car.replace(/ິ=/g, "ຶ");
car = car.replace(/ີ=/g, "ື");
car = car.replace(/e/g, "ເ");
car = car.replace(/ເເ/g, "ແ");
car = car.replace(/[Eē]/g, "ແ");
car = car.replace(/o/g, "ໂ");
car = car.replace(/ໂ=/g, "ໃ");
car = car.replace(/ໃ=/g, "ໄ");
car = car.replace(/ໄ=/g, "ໂ");

//cons
car = car.replace(/h/g, "ຮ");
car = car.replace(/n/g, "ນ");
car = car.replace(/ນg/g, "ງ");
car = car.replace(/ñ/g, "ຍ");
car = car.replace(/k/g, "ກ");
car = car.replace(/ກຮ/g, "ຂ");
car = car.replace(/K/g, "ຂ");
car = car.replace(/ຂ=/g, "ຄ");
car = car.replace(/ຄ=/g, "ຂ");

car = car.replace(/c/g, "ຈ");
car = car.replace(/s/g, "ຊ");
car = car.replace(/ຊ=/g, "ສ");
car = car.replace(/ສ=/g, "ຊ");

car = car.replace(/t/g, "ຕ");
car = car.replace(/d/g, "ດ");
car = car.replace(/ຕຮ/g, "ຖ");
car = car.replace(/T/g, "ຖ");
car = car.replace(/ຖ=/g, "ທ");
car = car.replace(/ທ=/g, "ຖ");


car = car.replace(/p/g, "ປ");
car = car.replace(/ປຮ/g, "ພ");
car = car.replace(/P/g, "ພ");
car = car.replace(/ພ=/g, "ຜ");
car = car.replace(/ຜ=/g, "ພ");


car = car.replace(/b/g, "ບ");
car = car.replace(/f/g, "ຝ");
car = car.replace(/ຝ=/g, "ຟ");
car = car.replace(/ຟ=/g, "ຝ");
car = car.replace(/F/g, "ຟ");
car = car.replace(/m/g, "ມ");
car = car.replace(/y/g, "ຢ");
car = car.replace(/r/g, "ຣ");
car = car.replace(/l/g, "ລ");
car = car.replace(/w/g, "ວ");
car = car.replace(/S/g, "ສ");
car = car.replace(/H/g, "ຫ");
car = car.replace(/x/g, "ອ");

//ton
car = car.replace(/\'/g, "່");
car = car.replace(/່່/g, "້");
car = car.replace(/້່/g, "໊");
car = car.replace(/໊່/g, "໋");
car = car.replace(/໋່/g, "");

car = car.replace(/0/g, "໐");
car = car.replace(/1/g, "໑");
car = car.replace(/2/g, "໒");
car = car.replace(/3/g, "໓");
car = car.replace(/4/g, "໔");
car = car.replace(/5/g, "໕");
car = car.replace(/6/g, "໖");
car = car.replace(/7/g, "໗");
car = car.replace(/8/g, "໘");
car = car.replace(/9/g, "໙");

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