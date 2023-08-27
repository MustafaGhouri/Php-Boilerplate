//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/_/g, "=");
car = car.replace(/\</g, "ʿ");
car = car.replace(/\>/g, "ʾ");
car = car.replace(/‘/g, "ʿ");
car = car.replace(/’/g, "ʾ");
car = car.replace(/a=/g, "ā");
car = car.replace(/ā=/g, "ă"); 
car = car.replace(/ă=/g, "á"); 
car = car.replace(/á=/g, "ạ"); 
car = car.replace(/ạ=/g, "a"); 
car = car.replace(/e=/g, "ē");
car = car.replace(/ē=/g, "ĕ");
car = car.replace(/ĕ=/g, "ə");
car = car.replace(/ə=/g, "é");
car = car.replace(/é=/g, "ẹ");
car = car.replace(/ẹ=/g, "e");
car = car.replace(/o=/g, "ō");
car = car.replace(/ō=/g, "ŏ");
car = car.replace(/ŏ=/g, "ọ");
car = car.replace(/ọ=/g, "o");
car = car.replace(/i=/g, "ī");
car = car.replace(/ī=/g, "i");
car = car.replace(/u=/g, "ū");
car = car.replace(/ū=/g, "u");

car = car.replace(/\^s/g, "š");
car = car.replace(/\^g/g, "ǧ");
car = car.replace(/\^c/g, "č");
car = car.replace(/b=/g, "ḇ");
car = car.replace(/ḇ=/g, "b");
car = car.replace(/d=/g, "ḏ");
car = car.replace(/ḏ=/g, "d");
car = car.replace(/g=/g, "ḡ");
car = car.replace(/ḡ=/g, "g");
car = car.replace(/h=/g, "ẖ");
car = car.replace(/ẖ=/g, "ḥ");
car = car.replace(/ḥ=/g, "h");
car = car.replace(/k=/g, "ḵ");
car = car.replace(/ḵ=/g, "k");
car = car.replace(/p=/g, "p̄");
car = car.replace(/p̄=/g, "p");
car = car.replace(/t=/g, "ṯ");
car = car.replace(/ṯ=/g, "ṭ");
car = car.replace(/ṭ=/g, "t");
car = car.replace(/s=/g, "ś");
car = car.replace(/ś=/g, "š");
car = car.replace(/š=/g, "ṣ");
car = car.replace(/ṣ=/g, "s");
car = car.replace(/c=/g, "č");
car = car.replace(/č=/g, "c");

car = car.replace(/A=/g, "Ā");
car = car.replace(/Ā=/g, "Ă"); 
car = car.replace(/Ă=/g, "Á"); 
car = car.replace(/Á=/g, "Ạ"); 
car = car.replace(/Ạ=/g, "A"); 
car = car.replace(/E=/g, "Ē");
car = car.replace(/Ē=/g, "Ĕ");
car = car.replace(/Ĕ=/g, "Ə");
car = car.replace(/Ə=/g, "É");
car = car.replace(/É=/g, "Ẹ");
car = car.replace(/Ẹ=/g, "E");
car = car.replace(/O=/g, "Ō");
car = car.replace(/Ō=/g, "Ŏ");
car = car.replace(/Ŏ=/g, "Ọ");
car = car.replace(/Ọ=/g, "O");
car = car.replace(/I=/g, "Ī");
car = car.replace(/Ī=/g, "I");
car = car.replace(/U=/g, "Ū");
car = car.replace(/Ū=/g, "U");

car = car.replace(/\^S/g, "Š");
car = car.replace(/\^G/g, "Ǧ");
car = car.replace(/\^C/g, "Č");
car = car.replace(/B=/g, "Ḇ");
car = car.replace(/Ḇ=/g, "B");
car = car.replace(/D=/g, "Ḏ");
car = car.replace(/Ḏ=/g, "D");
car = car.replace(/G=/g, "Ḡ");
car = car.replace(/Ḡ=/g, "G");
car = car.replace(/H=/g, "H̱");
car = car.replace(/H̱=/g, "Ḥ");
car = car.replace(/Ḥ=/g, "H");
car = car.replace(/K=/g, "Ḵ");
car = car.replace(/Ḵ=/g, "K");
car = car.replace(/P=/g, "P̄");
car = car.replace(/P̄=/g, "P");
car = car.replace(/T=/g, "Ṯ");
car = car.replace(/Ṯ=/g, "Ṭ");
car = car.replace(/Ṭ=/g, "T");
car = car.replace(/S=/g, "Ś");
car = car.replace(/Ś=/g, "Š");
car = car.replace(/Š=/g, "Ṣ");
car = car.replace(/Ṣ=/g, "S");
car = car.replace(/C=/g, "Č");
car = car.replace(/Č=/g, "C");


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