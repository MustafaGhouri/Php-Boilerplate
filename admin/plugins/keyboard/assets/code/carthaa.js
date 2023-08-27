//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/h/g, "ހް");
car = car.replace(/n/g, "ން");
car = car.replace(/r/g, "ރް");
car = car.replace(/b/g, "ބް");
car = car.replace(/k/g, "ކް");
car = car.replace(/-/g, "އް");
car = car.replace(/v/g, "ވް");
car = car.replace(/m/g, "މް");
car = car.replace(/f/g, "ފް");
car = car.replace(/l/g, "ލް");
car = car.replace(/g/g, "ގް");
car = car.replace(/s/g, "ސް");
car = car.replace(/d/g, "ޑް");
car = car.replace(/z/g, "ޒް");
car = car.replace(/t/g, "ޓް");
car = car.replace(/y/g, "ޔް");
car = car.replace(/p/g, "ޕް");
car = car.replace(/j/g, "ޖް");
car = car.replace(/c/g, "ޗް");
car = car.replace(/ލްހް/g, "ޅް");
car = car.replace(/ސްހް/g, "ށް");
car = car.replace(/ޑްހް/g, "ދް");
car = car.replace(/ޓްހް/g, "ތް");
car = car.replace(/ñ/g, "ޏް");
car = car.replace(/ންޔް/g, "ޏް");
car = car.replace(/[ṇN]/g, "ޱް");
car = car.replace(/q/g, "ޤް");
car = car.replace(/w/g, "ޥް");

car = car.replace(/ްa/g, "އަ");
car = car.replace(/a/g, "އަ");
car = car.replace(/ައަ/g, "އާ");
car = car.replace(/ްA/g, "އާ");
car = car.replace(/ްā/g, "އާ");
car = car.replace(/[Aā]/g, "އާ");
car = car.replace(/ްi/g, "އި");
car = car.replace(/i/g, "އި");
car = car.replace(/ިއި/g, "އީ");
car = car.replace(/ްI/g, "އީ");
car = car.replace(/ްī/g, "އީ");
car = car.replace(/[Iī]/g, "އީ");
car = car.replace(/ްu/g, "އު");
car = car.replace(/u/g, "އު");
car = car.replace(/ުއު/g, "އޫ");
car = car.replace(/ްU/g, "އޫ");
car = car.replace(/ްū/g, "އޫ");
car = car.replace(/[Uū]/g, "އޫ");
car = car.replace(/ްe/g, "އެ");
car = car.replace(/e/g, "އެ");
car = car.replace(/ްE/g, "އޭ");
car = car.replace(/ްē/g, "އޭ");
car = car.replace(/[Eē]/g, "އޭ");
car = car.replace(/ެއެ/g, "އޭ");
car = car.replace(/ްo/g, "އޮ");
car = car.replace(/o/g, "އޮ");
car = car.replace(/ްO/g, "އޯ");
car = car.replace(/ްō/g, "އޯ");
car = car.replace(/[Oō]/g, "އޯ");
car = car.replace(/ޮއޮ/g, "އޯ");


car = car.replace(/ḥ/g, "ޙް");
car = car.replace(/ẖ/g, "ޚް");
car = car.replace(/ḏ/g, "ޛް");
car = car.replace(/š/g, "ޝް");
car = car.replace(/ṣ/g, "ޞް");
car = car.replace(/ḍ/g, "ޟް");
car = car.replace(/ṭ/g, "ޠް");
car = car.replace(/ẓ/g, "ޡް");
car = car.replace(/ṯ/g, "ޘް");
car = car.replace(/ʿ/g, "ޢް");
car = car.replace(/ġ/g, "ޣް");
car = car.replace(/ž/g, "ޜް");


 car = car.replace (/ހއ/g, "ހ");
car = car.replace (/ނއ/g, "ނ");
car = car.replace (/ރއ/g, "ރ");
car = car.replace (/ބއ/g, "ބ");
car = car.replace (/ކއ/g, "ކ");
car = car.replace (/އއ/g, "އ");
car = car.replace (/ވއ/g, "ވ");
car = car.replace (/މއ/g, "މ");
car = car.replace (/ފއ/g, "ފ");
car = car.replace (/ލއ/g, "ލ");
car = car.replace (/ގއ/g, "ގ");
car = car.replace (/ސއ/g, "ސ");
car = car.replace (/ޑއ/g, "ޑ");
car = car.replace (/ޒއ/g, "ޒ");
car = car.replace (/ޓއ/g, "ޓ");
car = car.replace (/ޔއ/g, "ޔ");
car = car.replace (/ޕއ/g, "ޕ");
car = car.replace (/ޖއ/g, "ޖ");
car = car.replace (/ޗއ/g, "ޗ");
car = car.replace (/ޅއ/g, "ޅ");
car = car.replace (/ށއ/g, "ށ");
car = car.replace (/ދއ/g, "ދ");
car = car.replace (/ތއ/g, "ތ");
car = car.replace (/ޏއ/g, "ޏ");
car = car.replace (/ޏއ/g, "ޏ");
car = car.replace (/ޱއ/g, "ޱ");
car = car.replace (/ޤއ/g, "ޤ");
car = car.replace (/ޥއ/g, "ޥ");
car = car.replace (/ޙއ/g, "ޙ");
car = car.replace (/ޚއ/g, "ޚ");
car = car.replace (/ޛއ/g, "ޛ");
car = car.replace (/ޝއ/g, "ޝ");
car = car.replace (/ޞއ/g, "ޞ");
car = car.replace (/ޟއ/g, "ޟ");
car = car.replace (/ޠއ/g, "ޠ");
car = car.replace (/ޡއ/g, "ޡ");
car = car.replace (/ޘއ/g, "ޘ");
car = car.replace (/ޢއ/g, "ޢ");
car = car.replace (/ޣއ/g, "ޣ");
car = car.replace (/ޜއ/g, "ޜ");


car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");

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