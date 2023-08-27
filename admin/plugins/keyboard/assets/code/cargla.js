//  copyright lexilogos.com
var car;
function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/[aа]/g, "ⰰ");
car = car.replace(/[bб]/g, "ⰱ");
car = car.replace(/[vв]/g, "ⰲ");
car = car.replace(/[gг]/g, "ⰳ");
car = car.replace(/[dд]/g, "ⰴ");
car = car.replace(/[eе]/g, "ⰵ");
car = car.replace(/[zз]/g, "ⰸ");
car = car.replace(/[žж]/g, "ⰶ");
car = car.replace(/ⰸ=/g, "ⰶ");
car = car.replace(/ѕ/g, "ⰷ");
car = car.replace(/ⰶ=/g, "ⰷ");
car = car.replace(/[yй]/g, "ⰹ");
car = car.replace(/ⰹ=/g, "ⰺ"); //initial
car = car.replace(/[iі]/g, "ⰻ");
car = car.replace(/[jћ]/g, "ⰼ");
car = car.replace(/[kк]/g, "ⰽ");
car = car.replace(/[lл]/g, "ⰾ");
car = car.replace(/[mм]/g, "ⰿ");
car = car.replace(/[nн]/g, "ⱀ");
car = car.replace(/[oо]/g, "ⱁ");
car = car.replace(/[pп]/g, "ⱂ");
car = car.replace(/[rр]/g, "ⱃ");
car = car.replace(/[sс]/g, "ⱄ");
car = car.replace(/[tт]/g, "ⱅ");
car = car.replace(/[uу]/g, "ⱆ"); 	 	 	
car = car.replace(/[fф]/g, "ⱇ");
car = car.replace(/[xх]/g, "ⱈ");
car = car.replace(/[ōôѡ]/g, "ⱉ");
car = car.replace(/ⱂ=/g, "ⱊ"); //ph
car = car.replace(/[ŝщ]/g, "ⱋ");
car = car.replace(/ⱄ=/g, "ⱎ");
car = car.replace(/ⱎ=/g, "ⱋ");
car = car.replace(/[cц]/g, "ⱌ");
car = car.replace(/[čч]/g, "ⱍ");
car = car.replace(/ⱌ=/g, "ⱍ");
car = car.replace(/[šш]/g, "ⱎ");
car = car.replace(/ъ/g, "ⱏ");
car = car.replace(/ь/g, "ⱐ");
car = car.replace(/’/g, "ⱐ");
car = car.replace(/'/g, "ⱐ");
car = car.replace(/ⱐⱐ/g, "ⱏ");
car = car.replace(/[üѵ]/g, "ⱛ");
car = car.replace(/ѳ/g, "ⱚ");
car = car.replace(/ⱅ=/g, "ⱚ");
car = car.replace(/[âěѣ]/g, "ⱑ");
car = car.replace(/ⰰ=/g, "ⱑ"); // a=
car = car.replace(/[ûю]/g, "ⱓ");
car = car.replace(/ⱆ=/g, "ⱓ"); //u=

car = car.replace(/h/g, "ⱒ");
car = car.replace(/[ęѧ]/g, "ⱔ");
car = car.replace(/ⰵ=/g, "ⱔ");
car = car.replace(/ⱔ=/g, "ⱗ"); // e==
car = car.replace(/[ëêё]/g, "ⱖ");
car = car.replace(/ѩ/g, "ⱗ");
car = car.replace(/[ǫѫ]/g, "ⱘ");
car = car.replace(/ⱁ=/g, "ⱘ");
car = car.replace(/ѭ/g, "ⱙ");
car = car.replace(/ⱘ=/g, "ⱙ"); //o==

car = car.replace(/[AА]/g, "Ⰰ");
car = car.replace(/[BБ]/g, "Ⰱ");
car = car.replace(/[VВ]/g, "Ⰲ");
car = car.replace(/[GГ]/g, "Ⰳ");
car = car.replace(/[DД]/g, "Ⰴ");
car = car.replace(/[EЕ]/g, "Ⰵ");
car = car.replace(/[ZЗ]/g, "Ⰸ");
car = car.replace(/[ŽЖ]/g, "Ⰶ");
car = car.replace(/Ⰸ=/g, "Ⰶ");
car = car.replace(/Ѕ/g, "Ⰷ");
car = car.replace(/Ⰶ=/g, "Ⰷ");
car = car.replace(/[YЙ]/g, "Ⰹ");
car = car.replace(/Ⰹ=/g, "Ⰺ"); //initial
car = car.replace(/[IІ]/g, "Ⰻ");
car = car.replace(/[JЋ]/g, "Ⰼ");
car = car.replace(/[KК]/g, "Ⰽ");
car = car.replace(/[LЛ]/g, "Ⰾ");
car = car.replace(/[MМ]/g, "Ⰿ");
car = car.replace(/[NН]/g, "Ⱀ");
car = car.replace(/[OО]/g, "Ⱁ");
car = car.replace(/[PП]/g, "Ⱂ");
car = car.replace(/[RР]/g, "Ⱃ");
car = car.replace(/[SС]/g, "Ⱄ");
car = car.replace(/[TТ]/g, "Ⱅ");
car = car.replace(/[UУ]/g, "Ⱆ"); 	 	 	
car = car.replace(/[FФ]/g, "Ⱇ");
car = car.replace(/[XХ]/g, "Ⱈ");
car = car.replace(/[ŌÔѠ]/g, "Ⱉ");
car = car.replace(/Ⱂ=/g, "Ⱊ"); //PH
car = car.replace(/[ŜЩ]/g, "Ⱋ");
car = car.replace(/Ⱄ=/g, "Ⱎ");
car = car.replace(/Ⱎ=/g, "Ⱋ");
car = car.replace(/[CЦ]/g, "Ⱌ");
car = car.replace(/[ČЧ]/g, "Ⱍ");
car = car.replace(/Ⱌ=/g, "Ⱍ");
car = car.replace(/[ŠШ]/g, "Ⱎ");
car = car.replace(/Ъ/g, "Ⱏ");
car = car.replace(/Ь/g, "Ⱐ");
car = car.replace(/’/g, "Ⱐ");
car = car.replace(/'/g, "Ⱐ");
car = car.replace(/ⰠⰠ/g, "Ⱏ");
car = car.replace(/[ÜѴ]/g, "Ⱛ");
car = car.replace(/Ѳ/g, "Ⱚ");
car = car.replace(/Ⱅ=/g, "Ⱚ");
car = car.replace(/[ÂĚѢ]/g, "Ⱑ");
car = car.replace(/Ⰰ=/g, "Ⱑ"); // A=
car = car.replace(/[ÛЮ]/g, "Ⱓ");
car = car.replace(/Ⱆ=/g, "Ⱓ"); //U=

car = car.replace(/H/g, "Ⱒ");
car = car.replace(/[ĘѦ]/g, "Ⱔ");
car = car.replace(/Ⰵ=/g, "Ⱔ");
car = car.replace(/Ⱔ=/g, "Ⱗ"); // E==
car = car.replace(/[ËÊЁ]/g, "Ⱖ");
car = car.replace(/Ѩ/g, "Ⱗ");
car = car.replace(/[ǪѪ]/g, "Ⱘ");
car = car.replace(/Ⱁ=/g, "Ⱘ");
car = car.replace(/Ѭ/g, "Ⱙ");
car = car.replace(/Ⱘ=/g, "Ⱙ"); //O==	 

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

