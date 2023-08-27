//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

car = car.replace(/’/g, "\'");
car = car.replace(/a/g, "𐩱");
car = car.replace(/b/g, "𐩨");
car = car.replace(/t/g, "𐩩");
car = car.replace(/ṯ/g, "𐩻");
car = car.replace(/𐩩=/g, "𐩻");
car = car.replace(/[TṭṬ]/g, "𐩷");
car = car.replace(/[Ṱṱ]/g, "𐩼");
car=car.replace(/𐩷=/g, "𐩼");
car=car.replace(/𐩻=/g, "𐩼");
car = car.replace(/𐩼=/g, "𐩩");
car = car.replace(/[gjǧ]/g, "𐩴");
car = car.replace(/[HḥḤ]/g, "𐩢");
car = car.replace(/[ḫxẖK]/g, "𐩭");
car = car.replace(/𐩢=/g, "𐩭");
car = car.replace(/𐩭=/g, "𐩢");
car = car.replace(/d/g, "𐩵");
car = car.replace(/[Dḏ]/g, "𐩹");
car = car.replace(/𐩵=/g, "𐩹");
car = car.replace(/𐩹=/g, "𐩵");

car = car.replace(/r/g, "𐩧");
car = car.replace(/z/g, "𐩸");

car = car.replace(/s/g, "𐩯");
car = car.replace(/𐩯1/g, "𐩪");
car = car.replace(/𐩯¹/g, "𐩪");
car = car.replace(/š/g, "𐩪");
car = car.replace(/𐩯2/g, "𐩦");
car = car.replace(/𐩯²/g, "𐩦");
car = car.replace(/ś/g, "𐩦");
car = car.replace(/𐩯3/g, "𐩯");
car = car.replace(/𐩯³/g, "𐩯");
car = car.replace(/[SṣṢ]/g, "𐩮");
car = car.replace(/[Ṡṡ]/g, "𐩳");
car=car.replace(/𐩮=/g, "𐩳");
car=car.replace(/𐩳=/g, "𐩮");
car = car.replace(/𐩯=/g, "𐩪");
car = car.replace(/𐩪=/g, "𐩦");
car = car.replace(/𐩦=/g, "𐩯");

car = car.replace(/[Aʿ]/g, "𐩲"); // spec A
car = car.replace(/[GġĠ]/g, "𐩶");
car = car.replace(/f/g, "𐩰");
car = car.replace(/q/g, "𐩤");
car = car.replace(/k/g, "𐩫");
car = car.replace(/l/g, "𐩡");
car = car.replace(/m/g, "𐩣");
car = car.replace(/n/g, "𐩬");
car = car.replace(/h/g, "𐩠");
car = car.replace(/𐩠=/g, "𐩭");
car = car.replace(/𐩭=/g, "𐩠");
car = car.replace(/[wouôûōū]/g, "𐩥");
car = car.replace(/[yieîī]/g, "𐩺");

car=car.replace(/ه/g, "𐩠");
car=car.replace(/ل/g, "𐩡");
car=car.replace(/ح/g, "𐩢");
car=car.replace(/م/g, "𐩣");
car=car.replace(/ق/g, "𐩤");
car=car.replace(/و/g, "𐩥");
car=car.replace(/ش/g, "𐩦");
car=car.replace(/ر/g, "𐩧");
car=car.replace(/ب/g, "𐩨");
car=car.replace(/ت/g, "𐩩");
car=car.replace(/س/g, "𐩪");
car=car.replace(/ك/g, "𐩫");
car=car.replace(/ن/g, "𐩬");
car=car.replace(/خ/g, "𐩭");
car=car.replace(/ص/g, "𐩮");
car=car.replace(/س/g, "𐩯");
car=car.replace(/ف/g, "𐩰");
car=car.replace(/ا/g, "𐩱");
car=car.replace(/ع/g, "𐩲");
car=car.replace(/ض/g, "𐩳");
car=car.replace(/ج/g, "𐩴");
car=car.replace(/د/g, "𐩵");
car=car.replace(/غ/g, "𐩶");
car=car.replace(/ط/g, "𐩷");
car=car.replace(/ز/g, "𐩸");
car=car.replace(/ذ/g, "𐩹");
car=car.replace(/ي/g, "𐩺");
car=car.replace(/ث/g, "𐩻");
car=car.replace(/ظ/g, "𐩼");

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