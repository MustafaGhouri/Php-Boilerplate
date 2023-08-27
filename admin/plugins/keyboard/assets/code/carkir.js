//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "а");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/d/g, "д");
car = car.replace(/[jž]/g, "ж");
car = car.replace(/z/g, "з");
car = car.replace(/i/g, "и");
car = car.replace(/y/g, "й");
car = car.replace(/k/g, "к");
car = car.replace(/l/g, "л");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/н=/g, "ң");
car = car.replace(/ң=/g, "н");
car = car.replace(/[ŋñņ]/g, "ң");
car = car.replace(/o/g, "о");
car = car.replace(/[öô]/g, "ө");
car = car.replace(/о=/g, "ө");
car = car.replace(/ө=/g, "о");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");
car = car.replace(/u/g, "у");
car = car.replace(/[üù]/g, "ү");
car = car.replace(/у=/g, "ү");
car = car.replace(/ү=/g, "у");
car = car.replace(/f/g, "ф");
car = car.replace(/x/g, "х");
car = car.replace(/c/g, "ц");
car = car.replace(/ц=/g, "ч");
car = car.replace(/[çč]/g, "ч");
car = car.replace(/[şš]/g, "ш");
car = car.replace(/с=/g, "ш");
car = car.replace(/ŝ/g, "щ");
car = car.replace(/шч/g, "щ");
car = car.replace(/ш=/g, "щ");
car = car.replace(/щ=/g, "ш");
car = car.replace(/ı/g, "ы");
car = car.replace(/[eè]/g, "э");
car = car.replace(/û/g, "ю");
car = car.replace(/â/g, "я");
car = car.replace(/йу/g, "ю");
car = car.replace(/йа/g, "я");
car = car.replace(/йо/g, "ё");
car = car.replace(/йэ/g, "е");
car = car.replace(/’/g, "ь"); //var
car = car.replace(/'/g, "ь"); //var
car = car.replace(/ʹ/g, "ь");
car = car.replace(/ʺ/g, "ъ");
car = car.replace(/ьь/g, "ъ");
car = car.replace(/ии/g, "ы");


car = car.replace(/A/g, "А");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/D/g, "Д");
car = car.replace(/[JŽ]/g, "Ж");
car = car.replace(/Z/g, "З");
car = car.replace(/[İI]/g, "И"); //pb turc
car = car.replace(/Y/g, "Й");
car = car.replace(/K/g, "К");
car = car.replace(/L/g, "Л");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/Н=/g, "Ң");
car = car.replace(/Ң=/g, "Н");
car = car.replace(/[ŊÑŅ]/g, "Ң");
car = car.replace(/O/g, "О");
car = car.replace(/[ÖÔ]/g, "Ө");
car = car.replace(/О=/g, "Ө");
car = car.replace(/Ө=/g, "О");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");
car = car.replace(/U/g, "У");
car = car.replace(/[ÜÙ]/g, "Ү");
car = car.replace(/У=/g, "Ү");
car = car.replace(/Ү=/g, "У");
car = car.replace(/F/g, "Ф");
car = car.replace(/X/g, "Х");
car = car.replace(/C/g, "Ц");
car = car.replace(/Ц=/g, "Ч");
car = car.replace(/[ÇČ]/g, "Ч");
car = car.replace(/[ŞŠ]/g, "Ш");
car = car.replace(/С=/g, "Ш");
car = car.replace(/Ŝ/g, "Щ");
car = car.replace(/ШЧ/g, "Щ");
car = car.replace(/Шч/g, "Щ");
car = car.replace(/Ш=/g, "Щ");
car = car.replace(/Щ=/g, "Ш");
car = car.replace(/[EÈ]/g, "Э");
car = car.replace(/Û/g, "Ю");
car = car.replace(/Â/g, "Я");
car = car.replace(/ЙУ/g, "Ю");
car = car.replace(/ЙА/g, "Я");
car = car.replace(/ЙО/g, "Ё");
car = car.replace(/ЙЭ/g, "Е")
car = car.replace(/Йу/g, "Ю");
car = car.replace(/Йа/g, "Я");
car = car.replace(/Йо/g, "Ё");
car = car.replace(/Йэ/g, "Е");
car = car.replace(/ИИ/g, "Ы");
car = car.replace(/Ии/g, "Ы");

car = car.replace(/ь=/g, "Ь");
car = car.replace(/ъ=/g, "Ъ");
car = car.replace(/Ь=/g, "ь");
car = car.replace(/Ъ=/g, "ъ");

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