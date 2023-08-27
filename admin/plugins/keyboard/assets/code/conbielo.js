//  copyright lexilogos.com
//manque n'

var car;

function latcyr() {
car = document.transcription.text2.value;
car = car.replace(/le/g, "ле");
car = car.replace(/lo/g, "лё");
car = car.replace(/lu/g, "лю");
car = car.replace(/la/g, "ля");
car = car.replace(/ł/g, "л");
car = car.replace(/l/g, "ль");

car = car.replace(/ia/g, "я");
car = car.replace(/ja/g, "я");
car = car.replace(/a/g, "a");
car = car.replace(/iu/g, "ю");
car = car.replace(/ju/g, "ю");
car = car.replace(/u/g, "у");
car = car.replace(/io/g, "ё");
car = car.replace(/jo/g, "ё");
car = car.replace(/o/g, "о");
car = car.replace(/ie/g, "е");
car = car.replace(/je/g, "е");
car = car.replace(/è/g, "э");

car = car.replace(/i/g, "і");
car = car.replace(/y/g, "ы");
car = car.replace(/j/g, "й");

car = car.replace(/ch/g, "х");
car = car.replace(/h/g, "г");
car = car.replace(/b/g, "б");
car = car.replace(/v/g, "в");
car = car.replace(/g/g, "г");
car = car.replace(/d/g, "д");

car = car.replace(/ć/g, "Ць");
car = car.replace(/ź/g, "зь");
car = car.replace(/ś/g, "сь");
car = car.replace(/ń/g, "нь");

car = car.replace(/z/g, "з");
car = car.replace(/ž/g, "ж");
car = car.replace(/k/g, "к");
car = car.replace(/m/g, "м");
car = car.replace(/n/g, "н");
car = car.replace(/p/g, "п");
car = car.replace(/r/g, "р");
car = car.replace(/s/g, "с");
car = car.replace(/t/g, "т");

car = car.replace(/[ŭw]/g, "ў");
car = car.replace(/f/g, "ф");
car = car.replace(/c/g, "ц");
car = car.replace(/č/g, "ч");
car = car.replace(/š/g, "ш");

car = car.replace(/’/g, "ь");
car = car.replace(/'/g, "ь");


car = car.replace(/LE/g, "Ле");
car = car.replace(/LO/g, "Лё");
car = car.replace(/LU/g, "Лю");
car = car.replace(/LA/g, "Ля");
car = car.replace(/Le/g, "Ле");
car = car.replace(/Lo/g, "Лё");
car = car.replace(/Lu/g, "Лю");
car = car.replace(/La/g, "Ля");
car = car.replace(/Ł/g, "Л");
car = car.replace(/L/g, "Ль");

car = car.replace(/IA/g, "Я");
car = car.replace(/JA/g, "Я");
car = car.replace(/Ia/g, "Я");
car = car.replace(/Ja/g, "Я");
car = car.replace(/A/g, "A");
car = car.replace(/IU/g, "Ю");
car = car.replace(/JU/g, "Ю");
car = car.replace(/Iu/g, "Ю");
car = car.replace(/Ju/g, "Ю");
car = car.replace(/U/g, "У");
car = car.replace(/IO/g, "Ё");
car = car.replace(/JO/g, "Ё");
car = car.replace(/Io/g, "Ё");
car = car.replace(/Jo/g, "Ё");
car = car.replace(/O/g, "О");
car = car.replace(/IE/g, "Е");
car = car.replace(/JE/g, "Е");
car = car.replace(/Ie/g, "Е");
car = car.replace(/Je/g, "Е");
car = car.replace(/È/g, "Э");

car = car.replace(/I/g, "І");
car = car.replace(/Y/g, "Ы");
car = car.replace(/J/g, "Й");

car = car.replace(/CH/g, "Х");
car = car.replace(/Ch/g, "Х");
car = car.replace(/H/g, "Г");
car = car.replace(/B/g, "Б");
car = car.replace(/V/g, "В");
car = car.replace(/G/g, "Г");
car = car.replace(/D/g, "Д");

car = car.replace(/Z/g, "З");
car = car.replace(/Ž/g, "Ж");
car = car.replace(/K/g, "К");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Н");
car = car.replace(/P/g, "П");
car = car.replace(/R/g, "Р");
car = car.replace(/S/g, "С");
car = car.replace(/T/g, "Т");

car = car.replace(/[ŬW]/g, "Ў");
car = car.replace(/F/g, "Ф");
car = car.replace(/C/g, "Ц");
car = car.replace(/Č/g, "Ч");
car = car.replace(/Š/g, "Ш");

car = car.replace(/’/g, "ь"); //var
car = car.replace(/'/g, "ь"); //var
car = car.replace(/ʹ/g, "ь");
car = car.replace(/ʺ/g, "ъ");
document.transcription.text1.value = car;
}

function cyrlat() {
car = document.transcription.text1.value;
car = car.replace(/ь/g, "'");
car = car.replace(/Ъ/g, "ʺ"); // non bielo
car = car.replace(/ле/g, "le");
car = car.replace(/лё/g, "lo");
car = car.replace(/лю/g, "lu");
car = car.replace(/ля/g, "la");
car = car.replace(/л/g, "ł");
car = car.replace(/ł’/g, "l");
car = car.replace(/а/g, "a");
car = car.replace(/б/g, "b");
car = car.replace(/г/g, "g");
car = car.replace(/в/g, "v");
car = car.replace(/г/g, "h");
car = car.replace(/д/g, "d");
car = car.replace(/е/g, "je");
car = car.replace(/ё/g, "jo");
car = car.replace(/ж/g, "ž");
car = car.replace(/з/g, "z");
car = car.replace(/z’/g, "ź");
car = car.replace(/и/g, "i");
car = car.replace(/і/g, "i");
car = car.replace(/й/g, "j");
car = car.replace(/к/g, "k");
car = car.replace(/м/g, "m");
car = car.replace(/н/g, "n");
car = car.replace(/о/g, "o");
car = car.replace(/п/g, "p");
car = car.replace(/р/g, "r");
car = car.replace(/с/g, "s");
car = car.replace(/s’/g, "ś");
car = car.replace(/т/g, "t");
car = car.replace(/у/g, "u");
car = car.replace(/ў/g, "ŭ");
car = car.replace(/ф/g, "f");
car = car.replace(/х/g, "ch");
car = car.replace(/ц/g, "c");
car = car.replace(/c’/g, "ć");
car = car.replace(/ч/g, "č");
car = car.replace(/ш/g, "š");
car = car.replace(/щ/g, "šč");
car = car.replace(/ы/g, "y");
car = car.replace(/э/g, "e");
car = car.replace(/ю/g, "ju");
car = car.replace(/я/g, "ja");
car = car.replace(/ćj/g, "ć");
car = car.replace(/źj/g, "ź");
car = car.replace(/ńj/g, "ń");
car = car.replace(/śj/g, "ś");
car = car.replace(/bj/g, "bi");
car = car.replace(/cj/g, "ci");
car = car.replace(/dj/g, "di");
car = car.replace(/fj/g, "fi");
car = car.replace(/hj/g, "hi");
car = car.replace(/jj/g, "ji");
car = car.replace(/kj/g, "ki");
car = car.replace(/mj/g, "mi");
car = car.replace(/nj/g, "ni");
car = car.replace(/pj/g, "pi");
car = car.replace(/rj/g, "ri");
car = car.replace(/sj/g, "si");
car = car.replace(/tj/g, "ti");
car = car.replace(/vj/g, "vi");
car = car.replace(/zj/g, "zi");

car = car.replace(/ЛЕ/g, "Le");
car = car.replace(/ЛЁ/g, "Lo");
car = car.replace(/ЛЮ/g, "Lu");
car = car.replace(/ЛЯ/g, "La");
car = car.replace(/Ле/g, "Le");
car = car.replace(/Лё/g, "Lo");
car = car.replace(/Лю/g, "Lu");
car = car.replace(/Ля/g, "La");
car = car.replace(/Л/g, "Ł");
car = car.replace(/Ł’/g, "L");
car = car.replace(/А/g, "A");
car = car.replace(/Б/g, "B");
car = car.replace(/Г/g, "G");
car = car.replace(/В/g, "V");
car = car.replace(/Г/g, "H");
car = car.replace(/Д/g, "D");
car = car.replace(/Е/g, "Je");
car = car.replace(/Ё/g, "Jo");
car = car.replace(/Ж/g, "Ž");
car = car.replace(/З/g, "Z");
car = car.replace(/Z’/g, "Ź");
car = car.replace(/И/g, "I");
car = car.replace(/І/g, "I");
car = car.replace(/Й/g, "J");
car = car.replace(/К/g, "K");
car = car.replace(/М/g, "M");
car = car.replace(/Н/g, "N");
car = car.replace(/О/g, "O");
car = car.replace(/П/g, "P");
car = car.replace(/Р/g, "R");
car = car.replace(/С/g, "S");
car = car.replace(/S’/g, "Ś");
car = car.replace(/Т/g, "T");
car = car.replace(/У/g, "U");
car = car.replace(/Ў/g, "Ŭ");
car = car.replace(/Ф/g, "F");
car = car.replace(/Х/g, "Ch");
car = car.replace(/Ц/g, "C");
car = car.replace(/C’/g, "Ć");
car = car.replace(/Ч/g, "Č");
car = car.replace(/Ш/g, "Š");
car = car.replace(/Щ/g, "Šč");
car = car.replace(/Ы/g, "Y");
car = car.replace(/Э/g, "E");
car = car.replace(/Ю/g, "Ju");
car = car.replace(/Я/g, "Ja");
car = car.replace(/ĆJ/g, "Ć");
car = car.replace(/ŹJ/g, "Ź");
car = car.replace(/ŃJ/g, "Ń");
car = car.replace(/ŚJ/g, "Ś");
car = car.replace(/BJ/g, "Bi");
car = car.replace(/CJ/g, "Ci");
car = car.replace(/DJ/g, "Di");
car = car.replace(/FJ/g, "Fi");
car = car.replace(/HJ/g, "Hi");
car = car.replace(/JJ/g, "Ji");
car = car.replace(/KJ/g, "Ki");
car = car.replace(/MJ/g, "Mi");
car = car.replace(/NJ/g, "Ni");
car = car.replace(/PJ/g, "Pi");
car = car.replace(/RJ/g, "Ri");
car = car.replace(/SJ/g, "Si");
car = car.replace(/TJ/g, "Ti");
car = car.replace(/VJ/g, "Vi");
car = car.replace(/ZJ/g, "Zi");

document.transcription.text2.value = car;
}
