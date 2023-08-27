//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ಅ");
car = car.replace(/[Aā]/g, "ಆ");
car = car.replace(/ಅಅ/g, "ಆ");
car = car.replace(/i/g, "ಇ");
car = car.replace(/[Iī]/g, "ಈ");
car = car.replace(/ಇಇ/g, "ಈ");
car = car.replace(/u/g, "ಉ");
car = car.replace(/[Uū]/g, "ಊ");
car = car.replace(/ಉಉ/g, "ಊ");
car = car.replace(/e/g, "ಎ");
car = car.replace(/[Eē]/g, "ಏ");
car = car.replace(/ಎಎ/g, "ಏ");
car = car.replace(/ಅಇ/g, "ಐ");
car = car.replace(/o/g, "ಒ");
car = car.replace(/[Oō]/g, "ಓ");
car = car.replace(/ಒಒ/g, "ಓ");
car = car.replace(/ಅಉ/g, "ಔ");

// suppression du virama
car = car.replace(/ಿಇ/g, "ೀ");
car = car.replace(/ುಉ/g, "ೂ");
car = car.replace(/ೆಎ/g, "ೇ");
car = car.replace(/ೊಒ/g, "ೋ");

car = car.replace(/್ಅ/g, "\u200b");
car = car.replace(/\u200bಅ/g, "ಾ");
car = car.replace(/\u200bಇ/g, "ೈ");
car = car.replace(/\u200bಉ/g, "ೌ");
car = car.replace(/್ಆ/g, "ಾ");
car = car.replace(/್ಇ/g, "ಿ");
car = car.replace(/್ಈ/g, "ೀ");
car = car.replace(/್ಉ/g, "ು");
car = car.replace(/್ಊ/g, "ೂ");
car = car.replace(/್ಎ/g, "ೆ");
car = car.replace(/್ಏ/g, "ೇ");
car = car.replace(/್ಐ/g, "ೈ");
car = car.replace(/್ಒ/g, "ೊ");
car = car.replace(/್ಓ/g, "ೋ");
car = car.replace(/್ಔ/g, "ೌ");
// car = car.replace(/್ /g, " "); cf sanskrit

car = car.replace(/k/g, "ಕ್");
car = car.replace(/g/g, "ಗ್");
car = car.replace(/c/g, "ಚ್");
car = car.replace(/j/g, "ಜ್");
car = car.replace(/[TṭṬ]/g, "ಟ್");
car = car.replace(/[DḍḌ]/g, "ಡ್");
car = car.replace(/[NṇṆ]/g, "ಣ್");
car = car.replace(/t/g, "ತ್");
car = car.replace(/d/g, "ದ್");
car = car.replace(/n/g, "ನ್");
car = car.replace(/p/g, "ಪ್");
car = car.replace(/b/g, "ಬ್");
car = car.replace(/m/g, "ಮ್");
car = car.replace(/y/g, "ಯ್");
car = car.replace(/r/g, "ರ್");
car = car.replace(/R/g, "ಱ್");
car = car.replace(/l/g, "ಲ್");
car = car.replace(/[LḶḷ]/g, "ಳ್");
car = car.replace(/v/g, "ವ್");
car = car.replace(/h/g, "ಹ್");
car = car.replace(/[SṣṢ]/g, "ಷ್");
car = car.replace(/s/g, "ಸ್");
car = car.replace(/f/g, "ೞ್");

// aspirees
car = car.replace(/ಕ್ಹ್/g, "ಖ್");
car = car.replace(/ಗ್ಹ್/g, "ಘ್");
car = car.replace(/ಚ್ಹ್/g, "ಛ್");
car = car.replace(/ಜ್ಹ್/g, "ಝ್");
car = car.replace(/ಟ್ಹ್/g, "ಠ್");
car = car.replace(/ಡ್ಹ್/g, "ಢ್");
car = car.replace(/ತ್ಹ್/g, "ಥ್");
car = car.replace(/ದ್ಹ್/g, "ಧ್");
car = car.replace(/ಪ್ಹ್/g, "ಫ್");
car = car.replace(/ಬ್ಹ್/g, "ಭ್");
car = car.replace(/ಸ್ಹ್/g, "ಶ್");
car = car.replace(/[çśŚ]/g, "ಶ್");

//ng, ny
car = car.replace(/ನ್ಗ್/g, "ಙ್");
car = car.replace(/[ṅG]/g, "ಙ್");
car = car.replace(/ನ್ಯ್/g, "ಞ್");
car = car.replace(/[ñJ]/g, "ಞ್");

// cas du ri li 
car = car.replace(/್-ರ್/g, "ೃ");
car = car.replace(/-ರ್/g, "ಋ");

car = car.replace(/್-ಲ್/g, "ೄ");
car = car.replace(/-ಲ್/g, "ಌ");


// suppression du zero 
car = car.replace(/\u200bಕ/g, "ಕ");
car = car.replace(/\u200bಖ/g, "ಖ");
car = car.replace(/\u200bಗ/g, "ಗ");
car = car.replace(/\u200bಘ/g, "ಘ");
car = car.replace(/\u200bಙ/g, "ಙ");
car = car.replace(/\u200bಚ/g, "ಚ");
car = car.replace(/\u200bಛ/g, "ಛ");
car = car.replace(/\u200bಜ/g, "ಜ");
car = car.replace(/\u200bಝ/g, "ಝ");
car = car.replace(/\u200bಞ/g, "ಞ");
car = car.replace(/\u200bಟ/g, "ಟ");
car = car.replace(/\u200bಠ/g, "ಠ");
car = car.replace(/\u200bಡ/g, "ಡ");
car = car.replace(/\u200bಢ/g, "ಢ");
car = car.replace(/\u200bಣ/g, "ಣ");
car = car.replace(/\u200bತ/g, "ತ");
car = car.replace(/\u200bಥ/g, "ಥ");
car = car.replace(/\u200bದ/g, "ದ");
car = car.replace(/\u200bಧ/g, "ಧ");
car = car.replace(/\u200bನ/g, "ನ");
car = car.replace(/\u200bಪ/g, "ಪ");
car = car.replace(/\u200bಫ/g, "ಫ");
car = car.replace(/\u200bಬ/g, "ಬ");
car = car.replace(/\u200bಭ/g, "ಭ");
car = car.replace(/\u200bಮ/g, "ಮ");
car = car.replace(/\u200bಯ/g, "ಯ");
car = car.replace(/\u200bರ/g, "ರ");
car = car.replace(/\u200bಱ/g, "ಱ");
car = car.replace(/\u200bಲ/g, "ಲ");
car = car.replace(/\u200bಳ/g, "ಳ");
car = car.replace(/\u200bವ/g, "ವ");
car = car.replace(/\u200bಹ/g, "ಹ");
car = car.replace(/\u200bಶ/g, "ಶ");
car = car.replace(/\u200bಷ/g, "ಷ");
car = car.replace(/\u200bಸ/g, "ಸ");
car = car.replace(/\u200bೞ/g, "ೞ");
car = car.replace(/\u200b /g, " ");

car = car.replace(/M/g, "ಂ");
car = car.replace(/ಂಂ/g, "ಁ");
car = car.replace(/H/g, "ಃ");
car = car.replace(/=/g, "಼");

//cluster zero-width joiner avec suppression du virama
car = car.replace(/x/g, "\u200d");
car = car.replace(/್\u200d/g, "\u200d್");
car = car.replace(/\u200d\u200d/g, "\u200c");
car = car.replace(/\u200d್"\u200d/g, "\u200c");
car = car.replace(/\u200c್/g, "\u200c");


car = car.replace(/0/g, "೦");
car = car.replace(/1/g, "೧");
car = car.replace(/2/g, "೨");
car = car.replace(/3/g, "೩");
car = car.replace(/4/g, "೪");
car = car.replace(/5/g, "೫");
car = car.replace(/6/g, "೬");
car = car.replace(/7/g, "೭");
car = car.replace(/8/g, "೮");
car = car.replace(/9/g, "೯");


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