//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/&/g, "୍");
car = car.replace(/୍୍/g, "");

car = car.replace(/a/g, "ଅ");
car = car.replace(/[Aā]/g, "ଆ");
car = car.replace(/i/g, "ଇ");
car = car.replace(/[Iī]/g, "ଈ");
car = car.replace(/u/g, "ଉ");
car = car.replace(/[Uū]/g, "ଊ");
car = car.replace(/ଅଅ/g, "ଆ");
car = car.replace(/ଇଇ/g, "ଈ");
car = car.replace(/ଉଉ/g, "ଊ");
car = car.replace(/e/g, "ଏ");
car = car.replace(/o/g, "ଓ");
car = car.replace(/ଅଇ/g, "ଐ");
car = car.replace(/ଅଉ/g, "ଔ");


// suppression du virama 
car = car.replace(/ିଇ/g, "ୀ");
car = car.replace(/ୁଉ/g, "ୂ");
car = car.replace(/୍ଅ/g, "\u200b");
car = car.replace(/\u200bଅ/g, "ା");
car = car.replace(/\u200bଇ/g, "ୌ");
car = car.replace(/\u200bଉ/g, "ୌ");
car = car.replace(/୍ଆ/g, "ା");
car = car.replace(/୍ଇ/g, "ି");
car = car.replace(/୍ଈ/g, "ୀ");
car = car.replace(/୍ଉ/g, "ୁ");
car = car.replace(/୍ଊ/g, "ୂ");
car = car.replace(/୍ଋ/g, "ୃ");
car = car.replace(/୍ୠ/g, "ୄ");
car = car.replace(/୍ଌ/g, "ୢ");
car = car.replace(/୍ୡ/g, "ୣ");
car = car.replace(/୍ଏ/g, "ୋ");
car = car.replace(/୍ଓ/g, "ୋ");
car = car.replace(/୍ /g, " ");

//cons
car = car.replace(/n/g, "ନ୍");
car = car.replace(/k/g, "କ୍");
car = car.replace(/g/g, "ଗ୍");
car = car.replace(/c/g, "ଚ୍");
car = car.replace(/j/g, "ଜ୍");
car = car.replace(/[TṭṬ]/g, "ଟ୍");
car = car.replace(/[DḍḌ]/g, "ଡ୍");
car = car.replace(/[NṇṆ]/g, "ଣ୍");
car = car.replace(/t/g, "ତ୍");
car = car.replace(/d/g, "ଦ୍");
car = car.replace(/p/g, "ପ୍");
car = car.replace(/b/g, "ବ୍");
car = car.replace(/m/g, "ମ୍");
car = car.replace(/Y/g, "ୟ୍");
car = car.replace(/[RṚṛ]/g, "ଡ଼୍");
car = car.replace(/y/g, "ଯ୍");
car = car.replace(/r/g, "ର୍");
car = car.replace(/l/g, "ଲ୍");
car = car.replace(/[LḶḷ]/g, "ଳ୍");
car = car.replace(/v/g, "ଵ୍");
car = car.replace(/w/g, "ଵ୍");
car = car.replace(/h/g, "ହ୍");
car = car.replace(/[SṣṢ]/g, "ଷ୍");
car = car.replace(/s/g, "ସ୍");

// cas particuliers
car = car.replace(/[ṅG]/g, "ଙ୍");
car = car.replace(/J/g, "ଞ୍");
car = car.replace(/ñ/g, "ଞ୍");
car = car.replace(/ନ୍ଗ୍/g, "ଙ୍");
car = car.replace(/ନ୍ଜ୍/g, "ଞ୍");

// aspirées
car = car.replace(/କ୍ହ୍/g, "ଖ୍");
car = car.replace(/ଗ୍ହ୍/g, "ଘ୍");
car = car.replace(/ଚ୍ହ୍/g, "ଛ୍");
car = car.replace(/ଜ୍ହ୍/g, "ଝ୍");
car = car.replace(/ଟ୍ହ୍/g, "ଠ୍");
car = car.replace(/ଡ୍ହ୍/g, "ଢ୍");
car = car.replace(/ତ୍ହ୍/g, "ଥ୍");
car = car.replace(/ଦ୍ହ୍/g, "ଧ୍");
car = car.replace(/ତ୍ହ୍/g, "ଥ୍");
car = car.replace(/ଦ୍ହ୍/g, "ଧ୍");
car = car.replace(/ପ୍ହ୍/g, "ଫ୍");
car = car.replace(/ବ୍ହ୍/g, "ଭ୍");

car = car.replace(/ଡ଼୍ହ୍/g, "ଢ଼୍"); //Rh

car = car.replace(/ଢ଼୍/g, "ଢ଼୍");

// cas du s barre
car = car.replace(/ସ୍ହ୍/g, "ଶ୍");
car = car.replace(/[çśŚ]/g, "ଶ୍");

// cas du ri li 
car = car.replace(/୍-ର୍/g, "ୃ");
car = car.replace(/-ର୍/g, "ଋ");
car = car.replace(/ଋଇ/g, "ୠ");
car = car.replace(/ୃଇ/g, "ୄ");

car = car.replace(/୍-ଲ୍/g, "ୢ");
car = car.replace(/-ଲ୍/g, "ଌ");
car = car.replace(/ଌଇ/g, "ୡ");
car = car.replace(/ୢଇ/g, "ୣ");

//suppression du zero
car = car.replace(/\u200bକ/g, "କ");
car = car.replace(/\u200bଖ/g, "ଖ");
car = car.replace(/\u200bଗ/g, "ଗ");
car = car.replace(/\u200bଘ/g, "ଘ");
car = car.replace(/\u200bଙ/g, "ଙ");
car = car.replace(/\u200bଚ/g, "ଚ");
car = car.replace(/\u200bଛ/g, "ଛ");
car = car.replace(/\u200bଜ/g, "ଜ");
car = car.replace(/\u200bଝ/g, "ଝ");
car = car.replace(/\u200bଞ/g, "ଞ");
car = car.replace(/\u200bଟ/g, "ଟ");
car = car.replace(/\u200bठ/g, "ठ");
car = car.replace(/\u200bଡ/g, "ଡ");
car = car.replace(/\u200bଢ/g, "ଢ");
car = car.replace(/\u200bଣ/g, "ଣ");
car = car.replace(/\u200bତ/g, "ତ");
car = car.replace(/\u200bଥ/g, "ଥ");
car = car.replace(/\u200bଦ/g, "ଦ");
car = car.replace(/\u200bଧ/g, "ଧ");
car = car.replace(/\u200bନ/g, "ନ");
car = car.replace(/\u200bପ/g, "ପ");
car = car.replace(/\u200bଫ/g, "ଫ");
car = car.replace(/\u200bବ/g, "ବ");
car = car.replace(/\u200bଭ/g, "ଭ");
car = car.replace(/\u200bମ/g, "ମ");
car = car.replace(/\u200bଡ଼/g, "ଡ଼"); // R
car = car.replace(/\u200bୟ/g, "ୟ"); //Y
car = car.replace(/\u200bଢ଼/g, "ଢ଼"); //Rh
car = car.replace(/\u200bଢ଼/g, "ଢ଼");
car = car.replace(/\u200bଯ/g, "ଯ");
car = car.replace(/\u200bର/g, "ର");
car = car.replace(/\u200bଲ/g, "ଲ");
car = car.replace(/\u200bଳ/g, "ଳ");
car = car.replace(/\u200bଵ/g, "ଵ");
car = car.replace(/\u200bହ/g, "ହ");
car = car.replace(/\u200bଶ/g, "ଶ");
car = car.replace(/\u200bଷ/g, "ଷ");
car = car.replace(/\u200bସ/g, "ସ");
car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200b\ଂ/g, "ଂ");
car = car.replace(/\u200b\ଃ/g, "ଃ");

// anusvara
car = car.replace(/M/g, "ଂ");
car = car.replace(/୍ଂ/g, "ଂ");
// candrabindu 
car = car.replace(/ଂଂ/g, "ଁ");
// visarga
car = car.replace(/H/g, "ଃ");
car = car.replace(/୍ଃ/g, "ଃ");

// nukta
car = car.replace(/=/g, "଼");


// alternative : car = car.replace(/:/g, "ଃ");
// avagraha
car = car.replace(/\'/g, "ଽ");
car = car.replace(/’/g, "ଽ");


car = car.replace(/0/g, "୦");
car = car.replace(/1/g, "୧");
car = car.replace(/2/g, "୨");
car = car.replace(/3/g, "୩");
car = car.replace(/4/g, "୪");
car = car.replace(/5/g, "୫");
car = car.replace(/6/g, "୬");
car = car.replace(/7/g, "୭");
car = car.replace(/8/g, "୮");
car = car.replace(/9/g, "୯");

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