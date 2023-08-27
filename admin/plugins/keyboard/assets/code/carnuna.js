//  copyright lexilogos.com 
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/p/g,"ᑉ");
car = car.replace(/t/g,"ᑦ");
car = car.replace(/k/g,"ᒃ");
car = car.replace(/h/g, "ᕻ");
car = car.replace(/g/g,"ᒡ");
car = car.replace(/m/g,"ᒻ");
car = car.replace(/n/g,"ᓐ");
car = car.replace(/s/g, "ᔅ");
car = car.replace(/š/g, "ᔅ̵");
car = car.replace(/s/g, "ᔅ");
car = car.replace(/ᔅ=/g, "ᔅ̵"); 
car = car.replace(/ᔅ̵=/g, "ᔅ̷");
car = car.replace(/ᔅ̷=/g, "ᔅ");
car = car.replace(/l/g,"ᓪ");
car = car.replace(/j/g,"ᔾ");
car = car.replace(/ᔾᔾ/g,"ᑦᔾ");
car = car.replace(/v/g,"ᕝ");
car = car.replace(/r/g,"ᕐ");
car = car.replace(/ř/g, "ᖮ");
car = car.replace(/ᕐ=/g, "ᖮ");
car = car.replace(/ᖮ=/g, "ᕐ");
car = car.replace(/q/g,"ᖅ");
car = car.replace(/ᖅᖅ/g, "ᖅᒃ");
car = car.replace(/ŋ/g, "ᖕ");
car = car.replace(/ᓐᒡ/g, "ᖕ"); // ng
car = car.replace(/ᓐ=/g, "ᖕ");
car = car.replace(/ᖕ=/g, "ᓐ");
car = car.replace(/ᖕᖕ/g, "ᖖ");
car = car.replace(/ᓐᖕ/g, "ᖖ"); // nng
car = car.replace(/ł/g, "ᖦ");
car = car.replace(/l/g,"ᓪ");
car = car.replace(/ᓪ=/g,"ᖦ");
car = car.replace(/ᖦ=/g,"ᓪ");
car = car.replace(/b/g, "ᖯ");
car = car.replace(/H/g, "ᕼ");
car = car.replace(/ʼ/g, "ᑊ");

//i
car = car.replace(/i/g, "ᐃ");

car = car.replace(/ᑉᐃ/g, "ᐱ");
car = car.replace(/ᑦᐃ/g, "ᑎ");
car = car.replace(/ᒃᐃ/g, "ᑭ");
car = car.replace(/ᕻᐃ/g, "ᕵ");
car = car.replace(/ᒡᐃ/g, "ᒋ");
car = car.replace(/ᒻᐃ/g, "ᒥ");
car = car.replace(/ᓐᐃ/g, "ᓂ");
car = car.replace(/ᔅᐃ/g, "ᓯ");
car = car.replace(/ᔅ̵ᐃ/g, "ᓯ̵");
car = car.replace(/ᔅ̷ᐃ/g, "ᓯˋ");
car = car.replace(/ᓪᐃ/g, "ᓕ");
car = car.replace(/ᔾᐃ/g, "ᔨ");
car = car.replace(/ᑦᔾᐃ/g, "ᑦᔨ");
car = car.replace(/ᖮᐃ/g, "ᖨ");
car = car.replace(/ᕝᐃ/g, "ᕕ");
car = car.replace(/ᕐᐃ/g, "ᕆ");
car = car.replace(/ᖅᐃ/g, "ᕿ");
car = car.replace(/ᖅᒃᐃ/g, "ᖅᑭ");
car = car.replace(/ᖕᐃ/g, "ᖏ");
car = car.replace(/ᖖᐃ/g, "ᙱ");
car = car.replace(/ᖦᐃ/g, "ᖠ");

car = car.replace(/ᐱᐃ/g, "ᐲ");
car = car.replace(/ᑎᐃ/g, "ᑏ");
car = car.replace(/ᑭᐃ/g, "ᑮ");
car = car.replace(/ᕵᐃ/g, "ᕶ");
car = car.replace(/ᒋᐃ/g, "ᒌ");
car = car.replace(/ᒥᐃ/g, "ᒦ");
car = car.replace(/ᓂᐃ/g, "ᓃ");
car = car.replace(/ᓯᐃ/g, "ᓰ");
car = car.replace(/ᓯ̵ᐃ/g, "ᓰ̵");
car = car.replace(/ᓯˋᐃ/g, "ᓰˋ");
car = car.replace(/ᓕᐃ/g, "ᓖ");
car = car.replace(/ᔨᐃ/g, "ᔩ");
car = car.replace(/ᑦᔨᐃ/g, "ᑦᔩ");
car = car.replace(/ᖨᐃ/g, "ᖩ");
car = car.replace(/ᕕᐃ/g, "ᕖ");
car = car.replace(/ᕆᐃ/g, "ᕇ");
car = car.replace(/ᕿᐃ/g, "ᖀ");
car = car.replace(/ᖅᑭᐃ/g, "ᖅᑮ");
car = car.replace(/ᖏᐃ/g, "ᖐ");
car = car.replace(/ᙱᐃ/g, "ᙲ");
car = car.replace(/ᖠᐃ/g, "ᖡ");

car = car.replace(/ᑉī/g, "ᐲ");
car=car.replace(/ᑦī/g, "ᑏ");
car=car.replace(/ᒃī/g, "ᑮ");
car=car.replace(/ᕻī/g, "ᕶ");
car=car.replace(/ᒡī/g, "ᒌ");
car=car.replace(/ᒻī/g, "ᒦ");
car=car.replace(/ᓐī/g, "ᓃ");
car=car.replace(/ᔅī/g, "ᓰ");
car=car.replace(/ᔅ̵ī/g, "ᓰ̵");
car=car.replace(/ᔅ̷ī/g, "ᓰˋ");
car=car.replace(/ᓪī/g, "ᓖ");
car=car.replace(/ᔾī/g, "ᔩ");
car=car.replace(/ᑦᔾī/g, "ᑦᔩ");
car=car.replace(/ᖮī/g, "ᖩ");
car=car.replace(/ᕝī/g, "ᕖ");
car=car.replace(/ᕐī/g, "ᕇ");
car=car.replace(/ᖅī/g, "ᖀ");
car=car.replace(/ᖅᒃī/g, "ᖅᑮ");
car=car.replace(/ᖕī/g, "ᖐ");
car=car.replace(/ᖖī/g, "ᙲ");
car=car.replace(/ᖦī/g, "ᖡ");

car = car.replace(/ᐃᐃ/g, "ᐄ");
car = car.replace(/ī/g, "ᐄ");

//a
car = car.replace(/a/g, "ᐊ");

car = car.replace(/ᑉᐊ/g, "ᐸ");
car = car.replace(/ᑦᐊ/g, "ᑕ");
car = car.replace(/ᒃᐊ/g, "ᑲ");
car = car.replace(/ᕻᐊ/g, "ᕹ");
car = car.replace(/ᒡᐊ/g, "ᒐ");
car = car.replace(/ᒻᐊ/g, "ᒪ");
car = car.replace(/ᓐᐊ/g, "ᓇ");
car = car.replace(/ᔅᐊ/g, "ᓴ");
car = car.replace(/ᔅ̵ᐊ/g, "ᓴ̵");
car = car.replace(/ᔅ̷ᐊ/g, "ᓴˏ");
car = car.replace(/ᓪᐊ/g, "ᓚ");
car = car.replace(/ᔾᐊ/g, "ᔭ");
car = car.replace(/ᑦᔾᐊ/g, "ᑦᔭ");
car = car.replace(/ᖮᐊ/g, "ᖬ");
car = car.replace(/ᕝᐊ/g, "ᕙ");
car = car.replace(/ᕐᐊ/g, "ᕋ");
car = car.replace(/ᖅᐊ/g, "ᖃ");
car = car.replace(/ᖅᒃᐊ/g, "ᖅᑲ");
car = car.replace(/ᖕᐊ/g, "ᖓ");
car = car.replace(/ᖖᐊ/g, "ᙵ");
car = car.replace(/ᖦᐊ/g, "ᖤ");

car = car.replace(/ᐸᐊ/g, "ᐹ");
car = car.replace(/ᑕᐊ/g, "ᑖ");
car = car.replace(/ᑲᐊ/g, "ᑳ");
car = car.replace(/ᕹᐊ/g, "ᕺ");
car = car.replace(/ᒐᐊ/g, "ᒑ");
car = car.replace(/ᒪᐊ/g, "ᒫ");
car = car.replace(/ᓇᐊ/g, "ᓈ");
car = car.replace(/ᓴᐊ/g, "ᓵ");
car = car.replace(/ᓴ̵ᐊ/g, "ᓵ̵");
car = car.replace(/ᓴˏᐊ/g, "ᓵˏ");
car = car.replace(/ᓚᐊ/g, "ᓛ");
car = car.replace(/ᔭᐊ/g, "ᔮ");
car = car.replace(/ᑦᔭᐊ/g, "ᑦᔮ");
car = car.replace(/ᖬᐊ/g, "ᖭ");
car = car.replace(/ᕙᐊ/g, "ᕚ");
car = car.replace(/ᕋᐊ/g, "ᕌ");
car = car.replace(/ᖃᐊ/g, "ᖄ");
car = car.replace(/ᖅᑲᐊ/g, "ᖅᑳ");
car = car.replace(/ᖓᐊ/g, "ᖔ");
car = car.replace(/ᙵᐊ/g, "ᙶ");
car = car.replace(/ᖤᐊ/g, "ᖥ");

car=car.replace(/ᑉā/g, "ᐹ");
car=car.replace(/ᑦā/g, "ᑖ");
car=car.replace(/ᒃā/g, "ᑳ");
car=car.replace(/ᕻā/g, "ᕺ");
car=car.replace(/ᒡā/g, "ᒑ");
car=car.replace(/ᒻā/g, "ᒫ");
car=car.replace(/ᓐā/g, "ᓈ");
car=car.replace(/ᔅā/g, "ᓵ");
car=car.replace(/ᔅ̵ā/g, "ᓵ̵");
car=car.replace(/ᔅ̷ā/g, "ᓵˏ");
car=car.replace(/ᓪā/g, "ᓛ");
car=car.replace(/ᔾā/g, "ᔮ");
car=car.replace(/ᑦᔾā/g, "ᑦᔮ");
car=car.replace(/ᖮā/g, "ᖭ");
car=car.replace(/ᕝā/g, "ᕚ");
car=car.replace(/ᕐā/g, "ᕌ");
car=car.replace(/ᖅā/g, "ᖄ");
car=car.replace(/ᖅᒃā/g, "ᖅᑳ");
car=car.replace(/ᖕā/g, "ᖔ");
car=car.replace(/ᖖā/g, "ᙶ");
car=car.replace(/ᖦā/g, "ᖥ");

car = car.replace(/ᐊᐊ/g, "ᐋ");
car = car.replace(/ā/g, "ᐋ");

//ai
car = car.replace(/ᐊᐃ/g, "ᐁ");
car = car.replace(/ᐸᐃ/g, "ᐯ");
car = car.replace(/ᑕᐃ/g, "ᑌ");
car = car.replace(/ᑲᐃ/g, "ᑫ");
car = car.replace(/ᕹᐃ/g, "ᕴ");
car = car.replace(/ᒐᐃ/g, "ᒉ");
car = car.replace(/ᒪᐃ/g, "ᒣ");
car = car.replace(/ᓇᐃ/g, "ᓀ");
car = car.replace(/ᓴᐃ/g, "ᓭ");
car = car.replace(/ᓚᐃ/g, "ᓓ");
car = car.replace(/ᔭᐃ/g, "ᔦ");
car = car.replace(/ᑦᔭᐃ/g, "ᑦᔦ");
car = car.replace(/ᕙᐃ/g, "ᕓ");
car = car.replace(/ᕋᐃ/g, "ᕂ");
car = car.replace(/ᖃᐃ/g, "ᙯ");
car = car.replace(/ᖅᑲᐃ/g, "ᖅᑫ");
car = car.replace(/ᖓᐃ/g, "ᙰ");

//u
car = car.replace(/u/g, "ᐅ");

car = car.replace(/ᑉᐅ/g, "ᐳ");
car = car.replace(/ᑦᐅ/g, "ᑐ");
car = car.replace(/ᒃᐅ/g, "ᑯ");
car = car.replace(/ᕻᐅ/g, "ᕷ");
car = car.replace(/ᒡᐅ/g, "ᒍ");
car = car.replace(/ᒻᐅ/g, "ᒧ");
car = car.replace(/ᓐᐅ/g, "ᓄ");
car = car.replace(/ᔅᐅ/g, "ᓱ");
car = car.replace(/ᔅ̵ᐅ/g, "ᓱ̵");
car = car.replace(/ᔅ̷ᐅ/g, "ˎᓱ");
car = car.replace(/ᓪᐅ/g, "ᓗ");
car = car.replace(/ᔾᐅ/g, "ᔪ");
car = car.replace(/ᑦᔾᐅ/g, "ᑦᔪ");
car = car.replace(/ᖮᐅ/g, "ᖪ");
car = car.replace(/ᕝᐅ/g, "ᕗ");
car = car.replace(/ᕐᐅ/g, "ᕈ");
car = car.replace(/ᖅᐅ/g, "ᖁ");
car = car.replace(/ᖅᒃᐅ/g, "ᖅᑯ");
car = car.replace(/ᖕᐅ/g, "ᖑ");
car = car.replace(/ᖖᐅ/g, "ᙳ");
car = car.replace(/ᖦᐅ/g, "ᖢ");

car=car.replace(/ᐳᐅ/g, "ᐴ");
car=car.replace(/ᑐᐅ/g, "ᑑ");
car=car.replace(/ᑯᐅ/g, "ᑰ");
car=car.replace(/ᕷᐅ/g, "ᕸ");
car=car.replace(/ᒍᐅ/g, "ᒎ");
car=car.replace(/ᒧᐅ/g, "ᒨ");
car=car.replace(/ᓄᐅ/g, "ᓅ");
car=car.replace(/ᓱᐅ/g, "ᓲ");
car=car.replace(/ᓱ̵ᐅ/g, "ᓲ̵");
car=car.replace(/ˎᓱᐅ/g, "ˎᓲ");
car=car.replace(/ᓗᐅ/g, "ᓘ");
car=car.replace(/ᔪᐅ/g, "ᔫ");
car=car.replace(/ᑦᔪᐅ/g, "ᑦᔫ");
car=car.replace(/ᖪᐅ/g, "ᖫ");
car=car.replace(/ᕗᐅ/g, "ᕘ");
car=car.replace(/ᕈᐅ/g, "ᕉ");
car=car.replace(/ᖁᐅ/g, "ᖂ");
car=car.replace(/ᖅᑯᐅ/g, "ᖅᑰ");
car=car.replace(/ᖑᐅ/g, "ᖒ");
car=car.replace(/ᙳᐅ/g, "ᙴ");
car=car.replace(/ᖢᐅ/g, "ᖣ");

car = car.replace(/ᑉū/g, "ᐴ");
car = car.replace(/ᑦū/g, "ᑑ");
car = car.replace(/ᒃū/g, "ᑰ");
car = car.replace(/ᕻū/g, "ᕸ");
car = car.replace(/ᒡū/g, "ᒎ");
car = car.replace(/ᒻū/g, "ᒨ");
car = car.replace(/ᓐū/g, "ᓅ");
car = car.replace(/ᔅū/g, "ᓲ");
car = car.replace(/ᔅ̵ū/g, "ᓲ̵");
car = car.replace(/ᔅ̷ū/g, "ˎᓲ");
car = car.replace(/ᓪū/g, "ᓘ");
car = car.replace(/ᔾū/g, "ᔫ");
car = car.replace(/ᑦᔾū/g, "ᑦᔫ");
car = car.replace(/ᖮū/g, "ᖫ");
car = car.replace(/ᕝū/g, "ᕘ");
car = car.replace(/ᕐū/g, "ᕉ");
car = car.replace(/ᖅū/g, "ᖂ");
car = car.replace(/ᖅᒃū/g, "ᖅᑰ");
car = car.replace(/ᖕū/g, "ᖒ");
car = car.replace(/ᖖū/g, "ᙴ");
car = car.replace(/ᖦū/g, "ᖣ");

car = car.replace(/ᐅᐅ/g, "ᐆ");
car = car.replace(/ū/g, "ᐆ");

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