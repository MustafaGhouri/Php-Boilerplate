//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/г=/g, "ӷ");
car = car.replace(/ӷ=/g, "г");
car = car.replace(/d/g, "д");
car = car.replace(/e/g, "е");
car = car.replace(/ž/g, "ж");
car = car.replace(/z/g, "з");
car = car.replace(/з=/g, "ж");
car = car.replace(/ʒ/g, "ӡ");
car = car.replace(/ж=/g, "ӡ");
car = car.replace(/ӡ=/g, "з");
car = car.replace(/i/g, "и");
car = car.replace(/j/g, "й");
car = car.replace(/k/g, "к");
car = car.replace(/ķ/g, "қ");
car = car.replace(/к=/g, "қ");
car = car.replace(/q/g, "ҟ");
car = car.replace(/қ=/g, "ҟ");
car = car.replace(/ҟ=/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/o/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/п=/g, "ҧ");
car = car.replace(/ҧ=/g, "ԥ");
car = car.replace(/ԥ=/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/ţ/g, "ҭ");
car = car.replace(/т=/g, "ҭ");
car = car.replace(/ҭ=/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/h/g, "ҳ");
car = car.replace(/х=/g, "ҳ");
car = car.replace(/ҳ=/g, "х");
car = car.replace(/c/g, "ц");
car = car.replace(/ċ/g, "ҵ");
car = car.replace(/ц=/g, "ҵ");
car = car.replace(/č/g, "ч");
car = car.replace(/ҵ=/g, "ч");
car = car.replace(/ć/g, "ҷ");
car = car.replace(/ч=/g, "ҷ");
car = car.replace(/ĉ/g, "ҽ");
car = car.replace(/ҷ=/g, "ҽ");
car = car.replace(/ç/g, "ҿ");
car = car.replace(/ҽ=/g, "ҿ");
car = car.replace(/ҿ=/g, "ц");
car = car.replace(/ş/g, "ш");
car = car.replace(/с=/g, "ш");
car = car.replace(/ш=/g, "с");
car = car.replace(/y/g, "ы");
car = car.replace(/ò/g, "ҩ");
car = car.replace(/о=/g, "ҩ")
car = car.replace(/ҩ=/g, "о")
car = car.replace(/д=/g, "џ");
car = car.replace(/џ=/g, "д");
car = car.replace(/w/g, "ә");

car = car.replace(/ʹ/g, "ь");
car = car.replace(/\'/g, "ь");

car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/Г=/g, "Ӷ");
car = car.replace(/Ӷ=/g, "Г");
car = car.replace(/D/g, "Д");
car = car.replace(/E/g, "Е");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/Z/g, "З");
car = car.replace(/З=/g, "Ж");
car = car.replace(/Ʒ/g, "Ӡ");
car = car.replace(/Ж=/g, "Ӡ");
car = car.replace(/Ӡ=/g, "З");
car = car.replace(/I/g, "И");
car = car.replace(/J/g, "Й");
car = car.replace(/K/g, "К");
car = car.replace(/Ķ/g, "Қ");
car = car.replace(/К=/g, "Қ");
car = car.replace(/Q/g, "Ҟ");
car = car.replace(/Қ=/g, "Ҟ");
car = car.replace(/Ҟ=/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/O/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/П=/g, "Ҧ");
car = car.replace(/Ҧ=/g, "Ԥ");
car = car.replace(/Ԥ=/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/Ţ/g, "Ҭ");
car = car.replace(/Т=/g, "Ҭ");
car = car.replace(/Ҭ=/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/H/g, "Ҳ");
car = car.replace(/Х=/g, "Ҳ");
car = car.replace(/Ҳ=/g, "Х");
car = car.replace(/C/g, "Ц");
car = car.replace(/Ċ/g, "Ҵ");
car = car.replace(/Ц=/g, "Ҵ");
car = car.replace(/Č/g, "Ч");
car = car.replace(/Ҵ=/g, "Ч");
car = car.replace(/Ć/g, "Ҷ");
car = car.replace(/Ч=/g, "Ҷ");
car = car.replace(/Ĉ/g, "Ҽ");
car = car.replace(/Ҷ=/g, "Ҽ");
car = car.replace(/Ç/g, "Ҿ");
car = car.replace(/Ҽ=/g, "Ҿ");
car = car.replace(/Ҿ=/g, "Ц");
car = car.replace(/Ş/g, "Ш");
car = car.replace(/С=/g, "Ш");
car = car.replace(/Ш=/g, "С");
car = car.replace(/Y/g, "Ы");
car = car.replace(/Ò/g, "Ҩ");
car = car.replace(/О=/g, "Ҩ")
car = car.replace(/Ҩ=/g, "О")
car = car.replace(/Д=/g, "Џ");
car = car.replace(/Џ=/g, "Д");
car = car.replace(/W/g, "Ә");


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