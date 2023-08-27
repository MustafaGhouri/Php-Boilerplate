//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

car = car.replace(/’/g, "\'");
car = car.replace(/a/g, "𐪑");
car = car.replace(/b/g, "𐪈");
car = car.replace(/t/g, "𐪉");
car = car.replace(/ṯ/g, "𐪛");
car = car.replace(/𐪉=/g, "𐪛");
car = car.replace(/[TṭṬ]/g, "𐪗");
car = car.replace(/[Ṱṱ]/g, "𐪜");
car=car.replace(/𐪗=/g, "𐪜");
car = car.replace(/𐪛=/g, "𐪜");
car = car.replace(/𐪜=/g, "𐪉");
car = car.replace(/[gjǧ]/g, "𐪔");
car = car.replace(/[HḥḤ]/g, "𐪂");
car = car.replace(/[ḫxẖK]/g, "𐪍");
car = car.replace(/𐪂=/g, "𐪍");
car = car.replace(/𐪍=/g, "𐪂");
car = car.replace(/d/g, "𐪕");
car = car.replace(/[Dḏ]/g, "𐪙");
car = car.replace(/𐪕=/g, "𐪙");
car = car.replace(/𐪙=/g, "𐪕");

car = car.replace(/r/g, "𐪇");
car = car.replace(/z/g, "𐪘");

car = car.replace(/s/g, "𐪏");
car = car.replace(/𐪏1/g, "𐪊");
car = car.replace(/𐪏¹/g, "𐪊");
car = car.replace(/š/g, "𐪊");
car = car.replace(/𐪏2/g, "𐪆");
car = car.replace(/𐪏²/g, "𐪆");
car = car.replace(/ś/g, "𐪆");
car = car.replace(/𐪏3/g, "𐪏");
car = car.replace(/𐪏³/g, "𐪏");
car = car.replace(/[SṣṢ]/g, "𐪎");
car = car.replace(/[Ṡṡ]/g, "𐪓");
car = car.replace(/𐪎=/g, "𐪓");
car = car.replace(/𐪓=/g, "𐪎");

car = car.replace(/𐪏=/g, "𐪊");
car = car.replace(/𐪊=/g, "𐪆");
car = car.replace(/𐪆=/g, "𐪏");

car = car.replace(/[Aʿ]/g, "𐪒");
car = car.replace(/[GġĠ]/g, "𐪖");
car = car.replace(/f/g, "𐪐");
car = car.replace(/q/g, "𐪄");
car = car.replace(/k/g, "𐪋");
car = car.replace(/l/g, "𐪁");
car = car.replace(/m/g, "𐪃");
car = car.replace(/n/g, "𐪌");
car = car.replace(/h/g, "𐪀");
car = car.replace(/𐪀=/g, "𐪍");
car = car.replace(/𐪍=/g, "𐪀");
car = car.replace(/[wouôûōū]/g, "𐪅");
car = car.replace(/[yieîī]/g, "𐪚");


car=car.replace(/ه/g, "𐪀");
car=car.replace(/ل/g, "𐪁");
car=car.replace(/ح/g, "𐪂");
car=car.replace(/م/g, "𐪃");
car=car.replace(/ق/g, "𐪄");
car=car.replace(/و/g, "𐪅");
car=car.replace(/ش/g, "𐪆");
car=car.replace(/ر/g, "𐪇");
car=car.replace(/ب/g, "𐪈");
car=car.replace(/ت/g, "𐪉");
car=car.replace(/س/g, "𐪊");
car=car.replace(/ك/g, "𐪋");
car=car.replace(/ن/g, "𐪌");
car=car.replace(/خ/g, "𐪍");
car=car.replace(/ص/g, "𐪎");
car=car.replace(/س/g, "𐪏");
car=car.replace(/ف/g, "𐪐");
car=car.replace(/ا/g, "𐪑");
car=car.replace(/ع/g, "𐪒");
car=car.replace(/ض/g, "𐪓");
car=car.replace(/ج/g, "𐪔");
car=car.replace(/د/g, "𐪕");
car=car.replace(/غ/g, "𐪖");
car=car.replace(/ط/g, "𐪗");
car=car.replace(/ز/g, "𐪘");
car=car.replace(/ذ/g, "𐪙");
car=car.replace(/ي/g, "𐪚");
car=car.replace(/ث/g, "𐪛");
car=car.replace(/ظ/g, "𐪜");

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