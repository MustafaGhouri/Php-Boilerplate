//copyright lexilogos.com
var car;
function aralat () {
car = " " + document.transcription.text1.value;

// marbouta
car = car.replace(/ة/g, "ẗ"); // ah ou 
car = car.replace(/ا/g, "ā");
car = car.replace(/آ/g, "\u02beā");
car = car.replace(/ء/g, "\u02be");
car = car.replace(/إ/g, "i");
car = car.replace(/أ/g, "\u02bea"); // ou u ?
car = car.replace(/ؤ/g, "u\u02be");
car = car.replace(/ئ/g, "ʾi");


car = car.replace(/ب/g, "b");
car = car.replace(/ت/g, "t");
car = car.replace(/ث/g, "ṯ");
car = car.replace(/ج/g, "ǧ");
car = car.replace(/ح/g, "ḥ");
car = car.replace(/خ/g, "ẖ");
car = car.replace(/د/g, "d");
car = car.replace(/ذ/g, "ḏ");
car = car.replace(/ر/g, "r");
car = car.replace(/ز/g, "z");
car = car.replace(/س/g, "s");
car = car.replace(/ش/g, "š");
car = car.replace(/ص/g, "ṣ");
car = car.replace(/ض/g, "ḍ");
car = car.replace(/ط/g, "ṭ");
car = car.replace(/ظ/g, "ẓ");
car = car.replace(/ع/g, "ʿ");
car = car.replace(/غ/g, "ġ");
car = car.replace(/ف/g, "f");
car = car.replace(/ق/g, "q");
car = car.replace(/ك/g, "k");
car = car.replace(/ل/g, "l");
car = car.replace(/م/g, "m");
car = car.replace(/ن/g, "n");
car = car.replace(/ه/g, "h");
car = car.replace(/و/g, "ū");
car = car.replace(/ي/g, "ī");

// cas du a initial
car = car.replace(/ \u02be/g, " ");
// pb car = car.replace(/-\u02be/g, "-");
car = car.replace(/ ā/g, " a");
car = car.replace(/ al/g, " al-");
car = car.replace(/\n\u02be/g, "\n");
car = car.replace(/\nā/g, "\na");
car = car.replace(/\nal/g, "\nal-");

// voyelles 
car = car.replace(/َ/g, "a"); //1614
car = car.replace(/ُ/g, "u"); //1615
car = car.replace(/ِ/g, "i"); //1616
car = car.replace(/ّ/g, "w"); //1617

car = car.replace(/ىْ/g, "y");
car = car.replace(/ى/g, "i");


//cas du w et y 
car = car.replace(/aā/g, "ā");
car = car.replace(/aa/g, "ā");
car = car.replace(/ūa/g, "wa");
car = car.replace(/ūā/g, "wā");
car = car.replace(/ūu/g, "wu");
car = car.replace(/ūū/g, "wu");
car = car.replace(/ūw/g, "ww");
car = car.replace(/ūi/g, "wi");
car = car.replace(/ūī/g, "wy");
car = car.replace(/uu/g, "ū");
car = car.replace(/uū/g, "ū");
car = car.replace(/īī/g, "yi");
car = car.replace(/ii/g, "ī");
car = car.replace(/iī/g, "ī");


//double conso
car = car.replace(/rً/g, "rr");
car = car.replace(/lً/g, "ll");
car = car.replace(/bً/g, "bb");
car = car.replace(/tً/g, "tt");
car = car.replace(/ṭṭً/g, "ṭṭ");
car = car.replace(/mً/g, "mm");
car = car.replace(/nً/g, "nn");
car = car.replace(/dً/g, "dd");
car = car.replace(/ḍً/g, "ḍḍ");
car = car.replace(/sً/g, "ss");
car = car.replace(/tً/g, "tt");
car = car.replace(/ṣṣً/g, "ṣṣ");

car = car.replace(/،/g, ",");
car = car.replace(/؛/g, ";");
car = car.replace(/؟/g, "?");
car = car.replace(/ـ/g, ".");

car = car.replace(/٠/g, "0");
car = car.replace(/١/g, "1");
car = car.replace(/٢/g, "2");
car = car.replace(/٣/g, "3");
car = car.replace(/٤/g, "4");
car = car.replace(/۴/g, "4");
car = car.replace(/٥/g, "5");
car = car.replace(/۵/g, "5");
car = car.replace(/٦/g, "6");
car = car.replace(/۶/g, "6");
car = car.replace(/٧/g, "7");
car = car.replace(/٨/g, "8");
car = car.replace(/٩/g, "9");

// maghreb
car = car.replace(/گ/g, "g");
car = car.replace(/ڤ/g, "g");

document.transcription.text2.value=car;
}

function latara () {
car = document.transcription.text2.value.toLowerCase();
car = car.replace(/’/g, "\'");
car = car.replace(/[aâàā]/g, "ا");
car = car.replace(/اا/g, "آ");
car = car.replace(/b/g, "ب");
car = car.replace(/ب'/g, "پ");
car = car.replace(/p/g, "پ");
car = car.replace(/پ'/g, "ب");
car = car.replace(/t/g, "ت");
car = car.replace(/ت'/g, "ث");
car = car.replace(/ث'/g, "ت");
car = car.replace(/ṯ/g, "ث");
car = car.replace(/[jǧ]/g, "ج");
car = car.replace(/ج'/g, "چ");
car = car.replace(/c/g, "چ");
car = car.replace(/چ'/g, "ح");
car = car.replace(/[HḥḤ]/g, "ح");
car = car.replace(/ح'/g, "خ");
car = car.replace(/[xẖK]/g, "خ");
car = car.replace(/خ'/g, "ج");
car = car.replace(/d/g, "د");
car = car.replace(/د'/g, "ذ");
car = car.replace(/ذ'/g, "د");
car = car.replace(/ḏ/g, "ذ");
car = car.replace(/r/g, "ر");
car = car.replace(/ر'/g, "ز");
car = car.replace(/ز'/g, "ر");
car = car.replace(/z/g, "ز");
car = car.replace(/s/g, "س");
car = car.replace(/س'/g, "ش");
car = car.replace(/ش'/g, "س");
car = car.replace(/š/g, "ش");
car = car.replace(/[Sṣ]/g, "ص");
car = car.replace(/ص'/g, "ض");
car = car.replace(/ض'/g, "ص");
car = car.replace(/[Dḍ]/g, "ض");
car = car.replace(/[Tṭ]/g, "ط");
car = car.replace(/ط'/g, "ظ");
car = car.replace(/ظ'/g, "ط");
car = car.replace(/[Zẓ]/g, "ظ");
car = car.replace(/[gʿ]/g, "ع");
car = car.replace(/ع'/g, "غ");
car = car.replace(/غ'/g, "ع");
car = car.replace(/ġ/g, "غ");
car = car.replace(/f/g, "ف");
car = car.replace(/ف'/g, "ڤ");
car = car.replace(/ڤ'/g, "ف");
car = car.replace(/v/g, "ڢ");
car = car.replace(/q/g, "ق");
car = car.replace(/ق'/g, "ڨ");
car = car.replace(/ڨ'/g, "ق");
car = car.replace(/k/g, "ك");
car = car.replace(/ك'/g, "ڭ");
car = car.replace(/ڭ'/g, "ك");
car = car.replace(/l/g, "ل");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/h/g, "ه");
car = car.replace(/ه'/g, "ة");
car = car.replace(/ة'/g, "ه");
car = car.replace(/[wouôûōū]/g, "و");
car = car.replace(/[yieîī]/g, "ي");
car = car.replace(/[YIE]/g, "ى");
car = car.replace(/ي'/g, "ى");
car = car.replace(/ى'/g, "ي");
car = car.replace(/-/g, "ء");
car = car.replace(/ʾ/g, "ء");
car = car.replace(/وءء/g, "ؤ");
car = car.replace(/يءء/g, "ئ");
car = car.replace(/اءء/g, "إ");
car = car.replace(/I/g, "إ");
car = car.replace(/A/g, "إ");
car = car.replace(/ءا/g, "أ");
car = car.replace(/_/g, "ـ");
car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");
document.transcription.text1.value=car;
}
