//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
// voyelles
car = car.replace(/a/g, "ะ");
car = car.replace(/ạ/g, "ั");
car = car.replace(/ะ=/g, "ั");
car = car.replace(/ั=/g, "ะ");
car = car.replace(/ะะ/g, "า");
car = car.replace(/[Aā]/g, "า");
car = car.replace(/า=/g, "ำ");
car = car.replace(/å/g, "ำ");
car = car.replace(/i/g, "ิ");
car = car.replace(/ิิ/g, "ี");
car = car.replace(/[Iī]/g, "ี");
car = car.replace(/u/g, "ุ");
car = car.replace(/ุุ/g, "ู");
car = car.replace(/[Uū]/g, "ู");
car = car.replace(/e/g, "เ");
car = car.replace(/เเ/g, "แ");
car = car.replace(/[Eæ]/g, "แ");
car = car.replace(/ุ=/g, "ึ");
car = car.replace(/ิ=/g, "ึ");
car = car.replace(/ี=/g, "ื");
car = car.replace(/ụ/g, "ึ");
car = car.replace(/ู=/g, "ึ");
car = car.replace(/ึึ/g, "ื");
car = car.replace(/o/g, "โ");
car = car.replace(/โ=/g, "ไ");
car = car.replace(/ไ=/g, "ใ");
car = car.replace(/ใ=/g, "โ");
car = car.replace(/ใ=/g, "โ");
car = car.replace(/ị/g, "ไ");
car = car.replace(/ı/g, "ใ");

// cons
car = car.replace(/n/g, "น");
car = car.replace(/h/g, "ห");
car = car.replace(/k/g, "ก");
car = car.replace(/ก=/g, "ข");

car = car.replace(/ค=/g, "ฅ");
car = car.replace(/K/g, "ฆ");
car = car.replace(/ข=/g, "ฃ");
car = car.replace(/ฃ=/g, "ฆ");
car = car.replace(/ฆ=/g, "ค");
car = car.replace(/ฅ=/g, "ข");


car = car.replace(/นg/g, "ง");
car = car.replace(/c/g, "จ");
car = car.replace(/จ=/g, "ฉ");
// ch car = car.replace(/จห/g, "ช");
car = car.replace(/ช=/g, "ฌ");
car = car.replace(/ฌ=/g, "ฉ");
car = car.replace(/ฉ=/g, "ช");
car = car.replace(/C/g, "ฌ");

car = car.replace(/y/g, "ย");
car = car.replace(/ย=/g, "ญ");
car = car.replace(/ญ=/g, "ย");
car = car.replace(/Y/g, "ญ");

car = car.replace(/D/g, "ฎ");
car = car.replace(/ฎ=/g, "ด");
car = car.replace(/ด=/g, "ฎ");
car = car.replace(/T/g, "ฏ");
car = car.replace(/ฏ=/g, "ต");
car = car.replace(/ต=/g, "ฏ");

car = car.replace(/ฏห/g, "ฐ")
car = car.replace(/ฐ=/g, "ฑ");
car = car.replace(/ฑ=/g, "ฒ");
car = car.replace(/ฒ=/g, "ถ");
car = car.replace(/ถ=/g, "ท");
car = car.replace(/ท=/g, "ธ");
car = car.replace(/ธ=/g, "ฐ");

car = car.replace(/N/g, "ณ");
car = car.replace(/ณ=/g, "น");
car = car.replace(/น=/g, "ณ");

car = car.replace(/d/g, "ด");
car = car.replace(/t/g, "ต");

// th car = car.replace(/ตห/g, "ท");


car = car.replace(/b/g, "บ");
car = car.replace(/p/g, "ป");
// ph car = car.replace(/ปห/g, "พ");
car = car.replace(/พ=/g, "ผ");
car = car.replace(/ผ=/g, "ภ");
car = car.replace(/ภ=/g, "พ");
car = car.replace(/f/g, "ฟ");
car = car.replace(/ฟ=/g, "ฝ");
car = car.replace(/ฝ=/g, "ฟ");
car = car.replace(/P/g, "ภ");
car = car.replace(/m/g, "ม");

car = car.replace(/r/g, "ร");
car = car.replace(/l/g, "ล");
car = car.replace(/ล=/g, "ฬ");
car = car.replace(/ฬ=/g, "ล");
car = car.replace(/[Lḷ]/g, "ฬ");
car = car.replace(/w/g, "ว");
car = car.replace(/s/g, "ซ");
car = car.replace(/ซ=/g, "ศ");
car = car.replace(/ศ=/g, "ษ");
car = car.replace(/ษ=/g, "ส");
car = car.replace(/ส=/g, "ซ");
car = car.replace(/S/g, "ศ");
car = car.replace(/x/g, "อ");
car = car.replace(/[Hḥ]/g, "ฮ");
car = car.replace(/ฮ=/g, "ห");
car = car.replace(/ห=/g, "ฮ");

// ru lu
car = car.replace(/-ร/g, "ฤ");
car = car.replace(/-ล/g, "ฦ");
car = car.replace(/v/g, "ฤ");
car = car.replace(/ł/g, "ฦ");
car = car.replace(/ล=/g, "ฦ");
car = car.replace(/ɨ/g, "ๅ");


// chiffres
car = car.replace(/o/g, "โ");
car = car.replace(/0/g, "๐");
car = car.replace(/1/g, "๑");
car = car.replace(/2/g, "๒");
car = car.replace(/3/g, "๓");
car = car.replace(/4/g, "๔");
car = car.replace(/5/g, "๕");
car = car.replace(/6/g, "๖");
car = car.replace(/7/g, "๗");
car = car.replace(/8/g, "๘");
car = car.replace(/9/g, "๙");

car = car.replace(/§/g, "๏");
car = car.replace(/«/g, "ๆ");
car = car.replace(/ǀ/g, "ฯ");
car = car.replace(/ǁ/g, "๚");
car = car.replace(/»/g, "๛");
car = car.replace(/\|/g, "ฯ");
car = car.replace(/ฯฯ/g, "๚");
car = car.replace(/B/g, "฿");

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