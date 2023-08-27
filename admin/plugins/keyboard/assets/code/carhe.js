//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/’/g, "ּ");
car = car.replace(/\'/g, "ּ");
car = car.replace(/a/g, "א");
car = car.replace(/b/g, "ב");
car = car.replace(/בּ/g, "בּ");
car = car.replace(/בּּ/g, "ב");
car = car.replace(/g/g, "ג");
car = car.replace(/d/g, "ד");
car = car.replace(/h/g, "ה");
car = car.replace(/[uov]/g, "ו");
car = car.replace(/z/g, "ז");
car = car.replace(/H/g, "ח");

car = car.replace(/k/g, "כ");
car = car.replace(/כּ/g, "כּ");
car = car.replace(/כּּ/g, "כ");
car = car.replace(/כ /g, "ך ");
car = car.replace(/K/g, "ך");
car = car.replace(/l/g, "ל");
car = car.replace(/m/g, "מ");
car = car.replace(/M/g, "ם");
car = car.replace(/מ /g, "ם ");
car = car.replace(/n/g, "נ");
car = car.replace(/נ /g, "ן ");
car = car.replace(/N/g, "ן");
car = car.replace(/s/g, "ס");
car = car.replace(/j/g, "ע");
car = car.replace(/ʿ/g, "ע");
car = car.replace(/f/g, "פ");
car = car.replace(/פּ/g, "פּ");
car = car.replace(/פּּ/g, "פ");
car = car.replace(/p/g, "פּ");
car = car.replace(/פ /g, "ף ");
car = car.replace(/F/g, "ף");
car = car.replace(/q/g, "ק");
car = car.replace(/r/g, "ר");
car = car.replace(/S/g, "צ");
car = car.replace(/צ /g, "ץ ");
car = car.replace(/[wcç]/g, "ש");
//200930
//car = car.replace(/שּ/g, "שׁ");
//car = car.replace(/שּׁ/g, "שׂ");
//car = car.replace(/שּׂ/g, "ש");
car = car.replace(/ש=/g, "שׁ");
car = car.replace(/שׁ=/g, "שׂ");
car = car.replace(/שׂ=/g, "ש");
// retrait dagesh
car = car.replace(/שּּ/g, "ש"); 
car = car.replace(/שּּׁ/g, "שׁ");
car = car.replace(/שּּׂ/g, "שׂ");

car = car.replace(/T/g, "ט");
car = car.replace(/t/g, "ת");

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


car = car.replace(/[áạ]/g, "ַ");
car = car.replace(/[éẹ]/g, "ֶ");
car = car.replace(/ī/g, "ִ");
car = car.replace(/ū/g, "ֻ");
car = car.replace(/ọ/g, "ָ"); // ā doublon
car = car.replace(/ē/g, "ֵ");
car = car.replace(/ō/g, "ֹ ");
car = car.replace(/ə/g, "ְ");
car = car.replace(/ĕ/g, "ֱ");
car = car.replace(/ă/g, "ֲ");
car = car.replace(/ŏ/g, "ֳ");

car = car.replace(/א=/g, "ַ");
car = car.replace(/ַ=/g, "ָ");
car = car.replace(/ָ=/g, "ֲ");
car = car.replace(/ֲ=/g, "א");

car = car.replace(/[iye]/g, "י");
car = car.replace(/י=/g, "ִ");
car = car.replace(/ִ=/g, "ֵ");
car = car.replace(/ֵ=/g, "ְ");
car = car.replace(/ְ=/g, "ֶ");
car = car.replace(/ֶ=/g, "ֱ");
car = car.replace(/ֱ=/g, "י");

car = car.replace(/ו=/g, "ֻ");
car = car.replace(/ֻ=/g, "ֹ ");
car = car.replace(/ֹ =/g, "ֳ"); 
car = car.replace(/ֳ=/g, "ו"); 

car = car.replace(/x/g, "ֽ"); 

car = car.replace(/[LG]/g, "\u200c"); 
// milieu car = car.replace(/X/g, "\u200d");
car = car.replace(/[RD]/g, "\u034F");  // inversion diacritiques


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