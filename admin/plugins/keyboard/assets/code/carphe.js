//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/[aʾ]/g, "\uD802\uDD00");
car = car.replace(/b/g, "\uD802\uDD01");
car = car.replace(/g/g, "\uD802\uDD02");
car = car.replace(/d/g, "\uD802\uDD03");
car = car.replace(/h/g, "\uD802\uDD04");
car = car.replace(/[wvu]/g, "\uD802\uDD05");
car = car.replace(/z/g, "\uD802\uDD06");
car = car.replace(/[HḤḥ]/g, "\uD802\uDD07");
car = car.replace(/[TṬṭ]/g, "\uD802\uDD08");
car = car.replace(/[yi]/g, "\uD802\uDD09");
car = car.replace(/k/g, "\uD802\uDD0A");
car = car.replace(/l/g, "\uD802\uDD0B");
car = car.replace(/m/g, "\uD802\uDD0C");
car = car.replace(/n/g, "\uD802\uDD0D");
car = car.replace(/s/g, "\uD802\uDD0E");
car = car.replace(/\'/g, "\uD802\uDD0F"); 
car = car.replace(/[oʿ`]/g, "\uD802\uDD0F"); 
car = car.replace(/p/g, "\uD802\uDD10");
car = car.replace(/[SṢṣ]/g, "\uD802\uDD11");
car = car.replace(/q/g, "\uD802\uDD12");
car = car.replace(/r/g, "\uD802\uDD13");
car = car.replace(/[cš]/g, "\uD802\uDD14");
car = car.replace(/t/g, "\uD802\uDD15");
car = car.replace(/-/g, "\uD802\uDD1F");
//heb
car = car.replace(/א/g, "\uD802\uDD00");
car = car.replace(/ב/g, "\uD802\uDD01");
car = car.replace(/ג/g, "\uD802\uDD02");
car = car.replace(/ד/g, "\uD802\uDD03");
car = car.replace(/ה/g, "\uD802\uDD04");
car = car.replace(/ו/g, "\uD802\uDD05");
car = car.replace(/ז/g, "\uD802\uDD06");
car = car.replace(/ח/g, "\uD802\uDD07");
car = car.replace(/ט/g, "\uD802\uDD08");
car = car.replace(/י/g, "\uD802\uDD09");
car = car.replace(/[כך]/g, "\uD802\uDD0A");
car = car.replace(/ל/g, "\uD802\uDD0B");
car = car.replace(/[מם]/g, "\uD802\uDD0C");
car = car.replace(/[נן]/g, "\uD802\uDD0D");
car = car.replace(/ס/g, "\uD802\uDD0E");
car = car.replace(/ע/g, "\uD802\uDD0F"); 
car = car.replace(/ף/g, "\uD802\uDD10");
car = car.replace(/[צץ]/g, "\uD802\uDD11");
car = car.replace(/ק/g, "\uD802\uDD12");
car = car.replace(/ר/g, "\uD802\uDD13");
car = car.replace(/ש/g, "\uD802\uDD14");
car = car.replace(/ת/g, "\uD802\uDD15");
car = car.replace(/-/g, "\uD802\uDD1F");
//syr
car = car.replace(/ܐ/g, "\uD802\uDD00");
car = car.replace(/ܒ/g, "\uD802\uDD01");
car = car.replace(/ܓ/g, "\uD802\uDD02");
car = car.replace(/ܕ/g, "\uD802\uDD03");
car = car.replace(/ܗ/g, "\uD802\uDD04");
car = car.replace(/ܘ/g, "\uD802\uDD05");
car = car.replace(/ܙ/g, "\uD802\uDD06");
car = car.replace(/ܚ/g, "\uD802\uDD07");
car = car.replace(/ܛ/g, "\uD802\uDD08");
car = car.replace(/ܝ/g, "\uD802\uDD09");
car = car.replace(/ܟ/g, "\uD802\uDD0A");
car = car.replace(/ܠ/g, "\uD802\uDD0B");
car = car.replace(/ܡ/g, "\uD802\uDD0C");
car = car.replace(/ܢ/g, "\uD802\uDD0D");
car = car.replace(/ܣ/g, "\uD802\uDD0E");
car = car.replace(/ܥ/g, "\uD802\uDD0F"); 
car = car.replace(/ܦ/g, "\uD802\uDD10");
car = car.replace(/ܨ/g, "\uD802\uDD11");
car = car.replace(/ܩ/g, "\uD802\uDD12");
car = car.replace(/ܪ/g, "\uD802\uDD13");
car = car.replace(/ܫ/g, "\uD802\uDD14");
car = car.replace(/ܬ/g, "\uD802\uDD15");

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