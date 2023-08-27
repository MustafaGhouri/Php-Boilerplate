//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/da/g, "𐀅");
car = car.replace(/de/g, "𐀆");
car = car.replace(/di/g, "𐀇");
car = car.replace(/do/g, "𐀈");
car = car.replace(/du/g, "𐀉");
car = car.replace(/ja/g, "𐀊");
car = car.replace(/je/g, "𐀋");
car = car.replace(/jo/g, "𐀍");
car = car.replace(/ju/g, "𐀎");
car = car.replace(/ka/g, "𐀏");
car = car.replace(/ke/g, "𐀐");
car = car.replace(/ki/g, "𐀑");
car = car.replace(/ko/g, "𐀒");
car = car.replace(/ku/g, "𐀓");
car = car.replace(/ma/g, "𐀔");
car = car.replace(/me/g, "𐀕");
car = car.replace(/mi/g, "𐀖");
car = car.replace(/mo/g, "𐀗");
car = car.replace(/mu/g, "𐀘");
car = car.replace(/na/g, "𐀙");
car = car.replace(/ne/g, "𐀚");
car = car.replace(/ni/g, "𐀛");
car = car.replace(/no/g, "𐀜");
car = car.replace(/nu/g, "𐀝");
car = car.replace(/pa/g, "𐀞");
car = car.replace(/pe/g, "𐀟");
car = car.replace(/pi/g, "𐀠");
car = car.replace(/po/g, "𐀡");
car = car.replace(/pu/g, "𐀢");
car = car.replace(/qa/g, "𐀣");
car = car.replace(/qe/g, "𐀤");
car = car.replace(/qi/g, "𐀥");
car = car.replace(/qo/g, "𐀦");
car = car.replace(/ra/g, "𐀨");
car = car.replace(/re/g, "𐀩");
car = car.replace(/ri/g, "𐀪");
car = car.replace(/ro/g, "𐀫");
car = car.replace(/ru/g, "𐀬");
car = car.replace(/sa/g, "𐀭");
car = car.replace(/se/g, "𐀮");
car = car.replace(/si/g, "𐀯");
car = car.replace(/so/g, "𐀰");
car = car.replace(/su/g, "𐀱");
car = car.replace(/ta/g, "𐀲");
car = car.replace(/te/g, "𐀳");
car = car.replace(/ti/g, "𐀴");
car = car.replace(/to/g, "𐀵");
car = car.replace(/tu/g, "𐀶");
car = car.replace(/wa/g, "𐀷");
car = car.replace(/we/g, "𐀸");
car = car.replace(/wi/g, "𐀹");
car = car.replace(/wo/g, "𐀺");
car = car.replace(/za/g, "𐀼");
car = car.replace(/ze/g, "𐀽");
car = car.replace(/zo/g, "𐀿");
car = car.replace(/d𐀸/g, "𐁃");
car = car.replace(/d𐀺/g, "𐁄");
car = car.replace(/n𐀷/g, "𐁅");
car = car.replace(/𐀢2/g, "𐁆");
car = car.replace(/p𐀳/g, "𐁇");
car = car.replace(/𐀨2/g, "𐁈");
car = car.replace(/𐀨3/g, "𐁉");
car = car.replace(/𐀫2/g, "𐁊");
car = car.replace(/𐀲2/g, "𐁋");
car = car.replace(/t𐀸/g, "𐁌");
car = car.replace(/t𐀺/g, "𐁍");
car = car.replace(/a/g, "𐀀");
car = car.replace(/e/g, "𐀁");
car = car.replace(/i/g, "𐀂");
car = car.replace(/o/g, "𐀃");
car = car.replace(/u/g, "𐀄");
car = car.replace(/𐀀2/g, "𐁀");
car = car.replace(/𐀀3/g, "𐁁");
car = car.replace(/𐀀𐀄/g, "𐁂");

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
