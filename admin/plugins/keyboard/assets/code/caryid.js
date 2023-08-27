//  copyright lexilogos.com
var car;
	
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "אַ");
car = car.replace(/אַ=/g, "א");
car = car.replace(/א=/g, "אַ");
car = car.replace(/o/g, "אָ");
car = car.replace(/u/g, "ו");
car = car.replace(/ו=/g, "וּ");
car = car.replace(/וּ=/g, "ו");
car = car.replace(/v/g, "װ");
car = car.replace(/װ=/g, "וֹ");
car = car.replace(/וֹ=/g, "װ");
car = car.replace(/[yi]/g, "י");
car = car.replace(/י=/g, "יִ");
car = car.replace(/יִ=/g, "י");
car = car.replace(/A/g, "ײַ");
car = car.replace(/E/g, "ײ");
car = car.replace(/O/g, "ױ");

car = car.replace(/b/g, "ב");
car = car.replace(/ב=/g, "בּ");
car = car.replace(/בּ=/g, "ב");
car = car.replace(/V/g, "בֿ");
car = car.replace(/g/g, "ג");
car = car.replace(/d/g, "ד");
car = car.replace(/h/g, "ה");
car = car.replace(/z/g, "ז");
car = car.replace(/[Hx]/g, "ח");
car = car.replace(/K/g, "כּ");
car = car.replace(/כ=/g, "כּ");
car = car.replace(/כּ=/g, "כ");
car = car.replace(/q/g, "כ");
car = car.replace(/כ\u0020/g, "ך\u0020");
car = car.replace(/l/g, "ל");
car = car.replace(/m/g, "מ");
car = car.replace(/מ\u0020/g, "ם\u0020");
car = car.replace(/n/g, "נ");
car = car.replace(/נ\u0020/g, "ן\u0020");
car = car.replace(/s/g, "ס");
car = car.replace(/e/g, "ע");
car = car.replace(/p/g, "פּ");
car = car.replace(/פּ=/g, "פ");
car = car.replace(/פ=/g, "פּ");
car = car.replace(/f/g, "פֿ");
car = car.replace(/פֿ\u0020/g, "ף\u0020");
car = car.replace(/k/g, "ק");
car = car.replace(/r/g, "ר");
car = car.replace(/w/g, "צ");
car = car.replace(/צ\u0020/g, "ץ\u0020");
car = car.replace(/c/g, "ש");
car = car.replace(/ש=/g, "שׂ");
car = car.replace(/שׂ=/g, "ש");
car = car.replace(/ç/g, "שׂ");
car = car.replace(/t/g, "ט");
car = car.replace(/T/g, "תּ");
car = car.replace(/S/g, "ת");
car = car.replace(/ת=/g, "תּ");
car = car.replace(/תּ=/g, "ת");

car = car.replace(/j/g, "זש");
car = car.replace(/זה/g, "זש"); //zh

car = car.replace(/כ\./g, "ך\.");
car = car.replace(/מ\./g, "ם\.");
car = car.replace(/נ\./g, "ן\.");
car = car.replace(/פֿ\./g, "ף\.");
car = car.replace(/צ\./g, "ץ\.");

car = car.replace(/כ\!/g, "ך\!");
car = car.replace(/מ\!/g, "ם\!");
car = car.replace(/נ\!/g, "ן\!");
car = car.replace(/פֿ\!/g, "ף\!");
car = car.replace(/צ\!/g, "ץ\!");

car = car.replace(/כ\?/g, "ך\?");
car = car.replace(/מ\?/g, "ם\?");
car = car.replace(/נ\?/g, "ן\?");
car = car.replace(/פֿ\?/g, "ף\?");
car = car.replace(/צ\?/g, "ץ\?");

car = car.replace(/כ\:/g, "ך\:");
car = car.replace(/מ\:/g, "ם\:");
car = car.replace(/נ\:/g, "ן\:");
car = car.replace(/פֿ\:/g, "ף\:");
car = car.replace(/צ\:/g, "ץ\:");

car = car.replace(/כ\;/g, "ך\;");
car = car.replace(/מ\;/g, "ם\;");
car = car.replace(/נ\;/g, "ן\;");
car = car.replace(/פֿ\;/g, "ף\;");
car = car.replace(/צ\;/g, "ץ\;");

car = car.replace(/כ\,/g, "ך\,");
car = car.replace(/מ\,/g, "ם\,");
car = car.replace(/נ\,/g, "ן\,");
car = car.replace(/פֿ\,/g, "ף\,");
car = car.replace(/צ\,/g, "ץ\,");

car = car.replace(/כ\-/g, "ך\-");
car = car.replace(/מ\-/g, "ם\-");
car = car.replace(/נ\-/g, "ן\-");
car = car.replace(/פֿ\-/g, "ף\-");
car = car.replace(/צ\-/g, "ץ\-");

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