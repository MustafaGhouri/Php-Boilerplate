//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace (/a/g, "а");
car = car.replace (/b/g, "б");
car = car.replace (/w/g, "в");
car = car.replace (/g/g, "г");
car = car.replace (/ğ/g, "ғ");
car = car.replace (/d/g, "д");
car = car.replace (/ź/g, "ҙ");
car = car.replace (/j/g, "ж");
car = car.replace (/z/g, "з");
car = car.replace (/i/g, "и");
car = car.replace (/y/g, "й");
car = car.replace (/k/g, "к");
car = car.replace (/q/g, "ҡ");
car = car.replace (/l/g, "л");
car = car.replace (/m/g, "м");
car = car.replace (/n/g, "н");
car = car.replace (/ñ/g, "ң");
car = car.replace (/o/g, "о");
car = car.replace (/ö/g, "ө");
car = car.replace (/p/g, "п");
car = car.replace (/r/g, "р");
car = car.replace (/s/g, "с");
car = car.replace (/ś/g, "ҫ");
car = car.replace (/t/g, "т");
car = car.replace (/u/g, "у");
car = car.replace (/ü/g, "ү");
car = car.replace (/f/g, "ф");
car = car.replace (/x/g, "х");
car = car.replace (/h/g, "һ");
car = car.replace (/тс/g, "ц");
car = car.replace (/с=/g, "ш");
car = car.replace (/шч/g, "щ");
car = car.replace (/и=/g, "ы");
car = car.replace (/[cç]/g, "ч");
car = car.replace (/ş/g, "ш");
car = car.replace (/чш/g, "щ");
car = car.replace (/ı/g, "ы");

car = car.replace (/é/g, "э");
car = car.replace (/e/g, "е");
car = car.replace (/е=/g, "э");
car = car.replace (/э=/g, "е");
car = car.replace (/ä/g, "ә");
car = car.replace (/а=/g, "ә");
car = car.replace (/ә=/g, "а");
car = car.replace (/ë/g, "ё");

car = car.replace (/йу/g, "ю");
car = car.replace (/йа/g, "я");
car = car.replace (/йо/g, "ё");

car = car.replace (/’/g, "ь"); //var
car = car.replace (/'/g, "ь"); //var
car = car.replace (/ʹ/g, "ь");
car = car.replace (/ʺ/g, "ъ");
car = car.replace (/ьь/g, "ъ");

car = car.replace (/г=/g, "ғ");
car = car.replace (/ғ=/g, "г");
car = car.replace (/ҙ=/g, "з");
car = car.replace (/з=/g, "ҙ");
car = car.replace (/к=/g, "ҡ");
car = car.replace (/ҡ=/g, "к");
car = car.replace (/о=/g, "ө");
car = car.replace (/ө=/g, "о");
car = car.replace (/у=/g, "ү");
car = car.replace (/ү=/g, "у");
car = car.replace (/н=/g, "ң");
car = car.replace (/ң=/g, "н");
car = car.replace (/с=/g, "ҫ");
car = car.replace (/ҫ=/g, "с");

car = car.replace (/A/g, "А");
car = car.replace (/B/g, "Б");
car = car.replace (/W/g, "В");
car = car.replace (/G/g, "Г");
car = car.replace (/Ğ/g, "Ғ");
car = car.replace (/D/g, "Д");
car = car.replace (/Ź/g, "Ҙ");
car = car.replace (/J/g, "Ж");
car = car.replace (/Z/g, "З");
car = car.replace (/I/g, "И");
car = car.replace (/Y/g, "Й");
car = car.replace (/K/g, "К");
car = car.replace (/Q/g, "Ҡ");
car = car.replace (/L/g, "Л");
car = car.replace (/M/g, "М");
car = car.replace (/N/g, "Н");
car = car.replace (/Ñ/g, "Ң");
car = car.replace (/O/g, "О");
car = car.replace (/Ö/g, "Ө");
car = car.replace (/P/g, "П");
car = car.replace (/R/g, "Р");
car = car.replace (/S/g, "С");
car = car.replace (/Ś/g, "Ҫ");
car = car.replace (/T/g, "Т");
car = car.replace (/U/g, "У");
car = car.replace (/Ü/g, "Ү");
car = car.replace (/F/g, "Ф");
car = car.replace (/X/g, "Х");
car = car.replace (/H/g, "Һ");
car = car.replace (/ТС/g, "Ц");
car = car.replace (/С=/g, "Ш");
car = car.replace (/ШЧ/g, "Щ");
car = car.replace (/И=/g, "Ы");
car = car.replace (/[CÇ]/g, "Ч");
car = car.replace (/Ş/g, "Ш");
car = car.replace (/ЧШ/g, "Щ");
car = car.replace (/I/g, "Ы");

car = car.replace (/Г=/g, "Ғ");
car = car.replace (/Ғ=/g, "Г");
car = car.replace (/Ҙ=/g, "З");
car = car.replace (/З=/g, "Ҙ");
car = car.replace (/К=/g, "Ҡ");
car = car.replace (/Ҡ=/g, "К");
car = car.replace (/О=/g, "Ө");
car = car.replace (/Ө=/g, "О");
car = car.replace (/У=/g, "Ү");
car = car.replace (/Ү=/g, "У");
car = car.replace (/Н=/g, "Ң");
car = car.replace (/Ң=/g, "Н");
car = car.replace (/С=/g, "Ҫ");
car = car.replace (/Ҫ=/g, "С");

car = car.replace (/É/g, "Э");
car = car.replace (/E/g, "Е");
car = car.replace (/Е=/g, "Э");
car = car.replace (/Э=/g, "Е");
car = car.replace (/Ä/g, "Ә");
car = car.replace (/А=/g, "Ә");
car = car.replace (/Ә=/g, "А");
car = car.replace (/Ë/g, "Ё");

car = car.replace (/Тс/g, "Ц");
car = car.replace (/ТС/g, "Ц");
car = car.replace (/С=/g, "Ш");
car = car.replace (/ШЧ/g, "Щ");
car = car.replace (/ЙУ/g, "Ю");
car = car.replace (/ЙА/g, "Я");
car = car.replace (/ЙО/g, "Ё");
car = car.replace (/Йу/g, "Ю");
car = car.replace (/Йа/g, "Я");
car = car.replace (/Йо/g, "Ё");

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