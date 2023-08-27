// copyright lexilogos.com
var car;

function aralat() {
car = " " + document.transcription.text1.value;
car = car.replace(/\n/g, "\n ");
// caractères autres
car = car.replace(/ى/g, "ی");
car = car.replace(/ي/g, "ی");
car = car.replace(/ه‌/g, "ە");
car = car.replace(/ة/g, "ە");
car = car.replace(/ك/g, "ک");

car = car.replace(/؟/g, "?");
car = car.replace(/؛/g, ";");
car = car.replace(/،/g, ",");

car = car.replace(/ِ/g, "i");
car = car.replace(/ئ/g, "\u200b");

car = car.replace(/ا/g, "a");
car = car.replace(/ە/g, "e");
car = car.replace(/ۆ/g, "o");
car = car.replace(/ی/g, "î");
car = car.replace(/ێ/g, "ê");

car = car.replace(/و/g, "u");
car = car.replace(/ u /g, " û ");
car = car.replace(/ u\,/g, " û,");

car = car.replace(/ u/g, " w");
car = car.replace(/\u200bu/g, "u");
car = car.replace(/\u200bû/g, "û");

car = car.replace(/ î/g, " y");
car = car.replace(/\u200by/g, "î");

car = car.replace(/ب/g, "b");
car = car.replace(/پ/g, "p");
car = car.replace(/ت/g, "t");
car = car.replace(/ج/g, "c");
car = car.replace(/چ/g, "ç");
car = car.replace(/ح/g, "ḧ");
car = car.replace(/ع/g, "\'");
car = car.replace(/غ/g, "ẍ");
car = car.replace(/خ/g, "x");
car = car.replace(/د/g, "d");
car = car.replace(/ر/g, "r");
car = car.replace(/ڕ/g, "rr");
car = car.replace(/ز/g, "z");
car = car.replace(/ژ/g, "j");
car = car.replace(/س/g, "s");
car = car.replace(/ش/g, "ş");
car = car.replace(/ف/g, "f");
car = car.replace(/ڤ/g, "v");
car = car.replace(/ق/g, "q");
car = car.replace(/ک/g, "k");
car = car.replace(/گ/g, "g");
car = car.replace(/ل/g, "l");
car = car.replace(/ڵ/g, "ll");
car = car.replace(/م/g, "m");
car = car.replace(/ن/g, "n");
car = car.replace(/ه/g, "h");  //normal 1607
car = car.replace(/ھ/g, "h");  //spécial 1726

car = car.replace(/ b /g, " bi ");
car = car.replace(/ ç /g, " çi ");
car = car.replace(/ d /g, " di ");
car = car.replace(/ j /g, " ji ");
car = car.replace(/ l /g, " li ");

car = car.replace(/\u200bb/g, "ib");
car = car.replace(/\u200bc/g, "ic");
car = car.replace(/\u200bd/g, "id");
car = car.replace(/\u200bf/g, "if");
car = car.replace(/\u200bg/g, "ig");
car = car.replace(/\u200bh/g, "ih");
car = car.replace(/\u200bj/g, "ij");
car = car.replace(/\u200bk/g, "ik");
car = car.replace(/\u200bl/g, "il");
car = car.replace(/\u200bm/g, "im");
car = car.replace(/\u200bn/g, "in");
car = car.replace(/\u200bp/g, "ip");
car = car.replace(/\u200bq/g, "iq");
car = car.replace(/\u200br/g, "ir");
car = car.replace(/\u200bs/g, "is");
car = car.replace(/\u200bt/g, "it");
car = car.replace(/\u200bv/g, "iv");
car = car.replace(/\u200bx/g, "ix");
car = car.replace(/\u200by/g, "iy");
car = car.replace(/\u200bz/g, "iz");
car = car.replace(/\u200bş/g, "iş");
car = car.replace(/\u200bç/g, "iç");
car = car.replace(/\u200bḧ/g, "iḧ");
car = car.replace(/\u200b\'/g, "i\'");
car = car.replace(/\u200bẍ/g, "iẍ");
car = car.replace(/\u200b/g, "");

car = car.replace(/îa/g, "ya");
car = car.replace(/îe/g, "ye");
car = car.replace(/îê/g, "yê");
car = car.replace(/îo/g, "yo");
car = car.replace(/îu/g, "yu");
car = car.replace(/aî/g, "ay");
car = car.replace(/eî/g, "ey");
car = car.replace(/oî/g, "oy");
car = car.replace(/êî/g, "êy");
car = car.replace(/îî/g, "îy");

car = car.replace(/ua/g, "wa");
car = car.replace(/ue/g, "we");
car = car.replace(/uê/g, "wê");
car = car.replace(/uo/g, "wo");
car = car.replace(/uî/g, "wî");
car = car.replace(/au/g, "aw");
car = car.replace(/eu/g, "ew");
car = car.replace(/ou/g, "ow");
car = car.replace(/êu/g, "êw");

car = car.replace(/uu/g, "û");
car = car.replace(/ûu/g, "uû");

car = car.replace(/ rr/g, " r");

//cas des isolées
// car = car.replace(/ bb/g, " bi b");
// car = car.replace(/ bc/g, " bi c");
// car = car.replace(/ bç/g, " bi ç");
// car = car.replace(/ bd/g, " bi d");
// car = car.replace(/ bf/g, " bi f");
// car = car.replace(/ bg/g, " bi g");
// car = car.replace(/ bh/g, " bi h");
// car = car.replace(/ bj/g, " bi j");
// car = car.replace(/ bk/g, " bi k");
// car = car.replace(/ bl/g, " bi l");
// car = car.replace(/ bm/g, " bi m");
// car = car.replace(/ bn/g, " bi n");
// car = car.replace(/ bp/g, " bi p");
// car = car.replace(/ bq/g, " bi q");
// car = car.replace(/ br/g, " bi r");
// car = car.replace(/ bs/g, " bi s");
// car = car.replace(/ bş/g, " bi ş");
// car = car.replace(/ bt/g, " bi t");
// car = car.replace(/ bv/g, " bi v");
// car = car.replace(/ bw/g, " bi w");
// car = car.replace(/ bx/g, " bi x");
// car = car.replace(/ by/g, " bi y");
// car = car.replace(/ bz/g, " bi z");
// car = car.replace(/ db/g, " di b");
// car = car.replace(/ dc/g, " di c");
// car = car.replace(/ dç/g, " di ç");
// car = car.replace(/ dd/g, " di d");
// car = car.replace(/ df/g, " di f");
// car = car.replace(/ dg/g, " di g");
// car = car.replace(/ dh/g, " di h");
// car = car.replace(/ dj/g, " di j");
// car = car.replace(/ dk/g, " di k");
// car = car.replace(/ dl/g, " di l");
// car = car.replace(/ dm/g, " di m");
// car = car.replace(/ dn/g, " di n");
// car = car.replace(/ dp/g, " di p");
// car = car.replace(/ dq/g, " di q");
// car = car.replace(/ dr/g, " di r");
// car = car.replace(/ ds/g, " di s");
// car = car.replace(/ dş/g, " di ş");
// car = car.replace(/ dt/g, " di t");
// car = car.replace(/ dv/g, " di v");
// car = car.replace(/ dw/g, " di w");
// car = car.replace(/ dx/g, " di x");
// car = car.replace(/ dy/g, " di y");
// car = car.replace(/ dz/g, " di z");
// car = car.replace(/ jb/g, " ji b");
// car = car.replace(/ jc/g, " ji c");
// car = car.replace(/ jç/g, " ji ç");
// car = car.replace(/ jd/g, " ji d");
// car = car.replace(/ jf/g, " ji f");
// car = car.replace(/ jg/g, " ji g");
// car = car.replace(/ jh/g, " ji h");
// car = car.replace(/ jj/g, " ji j");
// car = car.replace(/ jk/g, " ji k");
// car = car.replace(/ jl/g, " ji l");
// car = car.replace(/ jm/g, " ji m");
// car = car.replace(/ jn/g, " ji n");
// car = car.replace(/ jp/g, " ji p");
// car = car.replace(/ jq/g, " ji q");
// car = car.replace(/ jr/g, " ji r");
// car = car.replace(/ js/g, " ji s");
// car = car.replace(/ jş/g, " ji ş");
// car = car.replace(/ jt/g, " ji t");
// car = car.replace(/ jv/g, " ji v");
// car = car.replace(/ jw/g, " ji w");
// car = car.replace(/ jx/g, " ji x");
// car = car.replace(/ jy/g, " ji y");
// car = car.replace(/ jz/g, " ji z");
// car = car.replace(/ lb/g, " li b");
// car = car.replace(/ lc/g, " li c");
// car = car.replace(/ lç/g, " li ç");
// car = car.replace(/ ld/g, " li d");
// car = car.replace(/ lf/g, " li f");
// car = car.replace(/ lg/g, " li g");
// car = car.replace(/ lh/g, " li h");
// car = car.replace(/ lj/g, " li j");
// car = car.replace(/ lk/g, " li k");
// car = car.replace(/ ll/g, " li l");
// car = car.replace(/ lm/g, " li m");
// car = car.replace(/ ln/g, " li n");
// car = car.replace(/ lp/g, " li p");
// car = car.replace(/ lq/g, " li q");
// car = car.replace(/ lr/g, " li r");
// car = car.replace(/ ls/g, " li s");
// car = car.replace(/ lş/g, " li ş");
// car = car.replace(/ lt/g, " li t");
// car = car.replace(/ lv/g, " li v");
// car = car.replace(/ lw/g, " li w");
// car = car.replace(/ lx/g, " li x");
// car = car.replace(/ ly/g, " li y");
// car = car.replace(/ lz/g, " li z");

// cas du i
car = car.replace(/grtn/g, "girtin");
car = car.replace(/krn/g, "kirin");
car = car.replace(/karb/g, "karib");
car = car.replace(/bgr/g, "bigir");
car = car.replace(/grn/g, "girin");
car = car.replace(/bb/g, "bib");
car = car.replace(/bc/g, "bic");
car = car.replace(/bç/g, "biç");
car = car.replace(/bd/g, "bid");
car = car.replace(/bg/g, "big");
car = car.replace(/bh/g, "bih");
car = car.replace(/bj/g, "bij");
car = car.replace(/bk/g, "bik");
car = car.replace(/bl/g, "bil");
car = car.replace(/bn/g, "bin");
car = car.replace(/brr/g, "birr");
car = car.replace(/bt/g, "bit");
car = car.replace(/bx/g, "bix");
car = car.replace(/ch/g, "cih");
car = car.replace(/çr/g, "çir");
car = car.replace(/cv/g, "civ");
car = car.replace(/dd/g, "did");
car = car.replace(/dj/g, "dij");
car = car.replace(/dn/g, "din");
car = car.replace(/dv/g, "div");
car = car.replace(/hm/g, "him");
car = car.replace(/hq/g, "hiq");
car = car.replace(/hş/g, "hiş");
car = car.replace(/kn/g, "kin");
car = car.replace(/jn/g, "jin");
car = car.replace(/ln/g, "lin");
car = car.replace(/lv/g, "liv");
car = car.replace(/lx/g, "lix");
car = car.replace(/ml/g, "mil");
car = car.replace(/ml/g, "mim");
car = car.replace(/mn/g, "min");
car = car.replace(/mr/g, "mir");
car = car.replace(/nj/g, "nij");
car = car.replace(/nk/g, "nik");
car = car.replace(/nn/g, "nin");
car = car.replace(/ns/g, "nis");
car = car.replace(/pc/g, "pic");
car = car.replace(/pç/g, "piç");
car = car.replace(/pg/g, "pig");
car = car.replace(/pn/g, "pin");
car = car.replace(/rn/g, "rin");
car = car.replace(/rz/g, "riz");
car = car.replace(/sn/g, "sin");
car = car.replace(/sr/g, "sir");
car = car.replace(/şt/g, "şit");
car = car.replace(/tb/g, "tib");
car = car.replace(/tf/g, "tif");
car = car.replace(/tn/g, "tin");
car = car.replace(/tr/g, "tir");
car = car.replace(/vn/g, "vin");
car = car.replace(/vrr/g, "virr");
car = car.replace(/xn/g, "xin");
car = car.replace(/xr/g, "xir");
car = car.replace(/xs/g, "xis");
car = car.replace(/xz/g, "xiz");
car = car.replace(/zh/g, "zih");
car = car.replace(/zm/g, "zim");
car = car.replace(/zr/g, "zir");
car = car.replace(/ds/g, "dis"); // ajout kurdistan

car = car.replace(/by/g, "biy");
car = car.replace(/cy/g, "ciy");
car = car.replace(/çy/g, "çiy");
car = car.replace(/dy/g, "diy");
car = car.replace(/fy/g, "fiy");
car = car.replace(/gy/g, "giy");
car = car.replace(/jy/g, "jiy");
car = car.replace(/hy/g, "hiy");
car = car.replace(/ky/g, "kiy");
car = car.replace(/ly/g, "liy");
car = car.replace(/my/g, "miy");
car = car.replace(/ny/g, "niy");
car = car.replace(/py/g, "piy");
car = car.replace(/qy/g, "qiy");
car = car.replace(/ry/g, "riy");
car = car.replace(/ty/g, "tiy");
car = car.replace(/sy/g, "siy");
car = car.replace(/şy/g, "şiy");
car = car.replace(/vy/g, "viy");
car = car.replace(/xy/g, "xiy");
car = car.replace(/zy/g, "ziy");
car = car.replace(/yy/g, "yiy");
//except
car = car.replace(/riti/g, "rti");
car = car.replace(/iriy/g, "iry");
car = car.replace(/eriy/g, "ery");
car = car.replace(/evir/g, "evr");
car = car.replace(/iniy/g, "iny");
car = car.replace(/uniy/g, "uny");
car = car.replace(/înis/g, "îns");

car = car.replace(/yn/g, "yin");
car = car.replace(/yv/g, "yiv");
car = car.replace(/y /g, "yi ");


car = car.replace(/۰/g, "0");
car = car.replace(/۱/g, "1");
car = car.replace(/۲/g, "2");
car = car.replace(/۳/g, "3");
car = car.replace(/۴/g, "4");
car = car.replace(/۵/g, "5");
car = car.replace(/۶/g, "6");
car = car.replace(/۷/g, "7");
car = car.replace(/۸/g, "8");
car = car.replace(/۹/g, "9");

car = car.replace(/\n /g, "\n");
document.transcription.text2.value = car;
}

var car;

function latara() {
car = " " + document.transcription.text2.value.toLowerCase();
car = car.replace(/\n/g, "\n ");

car = car.replace(/’/g, "\'");
car = car.replace(/ i/g, " ئ");
car = car.replace(/i/g, "");
// car = car.replace(/i/g, "\ِ");
// car = car.replace(/ \ِ/g, " ئ");
car = car.replace(/ḧ/g, "ح");
car = car.replace(/\'/g, "ع");
car = car.replace(/ẍ/g, "غ");
car = car.replace(/a/g, "ئا");
car = car.replace(/b/g, "ب");
car = car.replace(/p/g, "پ");
car = car.replace(/t/g, "ت");
car = car.replace(/c/g, "ج");
car = car.replace(/ç/g, "چ");
car = car.replace(/x/g, "خ");
car = car.replace(/d/g, "د");
car = car.replace(/ r/g, " ڕ");
car = car.replace(/r/g, "ر");
car = car.replace(/رر/g, "ڕ");
car = car.replace(/z/g, "ز");
car = car.replace(/j/g, "ژ");
car = car.replace(/s/g, "س");
car = car.replace(/ş/g, "ش");
car = car.replace(/f/g, "ف");
car = car.replace(/v/g, "ڤ");
car = car.replace(/q/g, "ق");
car = car.replace(/k/g, "ک");
car = car.replace(/g/g, "گ");
car = car.replace(/l/g, "ل");
car = car.replace(/لل/g, "ڵ");
car = car.replace(/m/g, "م");
car = car.replace(/n/g, "ن");
car = car.replace(/h/g, "ه");
car = car.replace(/e/g, "ئە");
car = car.replace(/o/g, "ئۆ");
car = car.replace(/u/g, "ئو");
car = car.replace(/w/g, "و");
car = car.replace(/y/g, "ی");
car = car.replace(/[îí]/g, "ئی");
car = car.replace(/[êé]/g, "ئێ");
car = car.replace(/[ûúù]/g, "ئوو");
car = car.replace(/ ئوو /g, " و ");

car = car.replace(/\?/g, "؟");
car = car.replace(/\;/g, "؛");
car = car.replace(/\,/g, "،");
// cas du û = et
car = car.replace(/ ئوو،/g, " و،");

car = car.replace(/بئ/g, "ب");
car = car.replace(/پئ/g, "پ");
car = car.replace(/تئ/g, "ت");
car = car.replace(/جئ/g, "ج");
car = car.replace(/چئ/g, "چ");
car = car.replace(/خئ/g, "خ");
car = car.replace(/دئ/g, "د");
car = car.replace(/رئ/g, "ر");
car = car.replace(/ڕئ/g, "ڕ");
car = car.replace(/زئ/g, "ز");
car = car.replace(/ژئ/g, "ژ");
car = car.replace(/سئ/g, "س");
car = car.replace(/شئ/g, "ش");
car = car.replace(/فئ/g, "ف");
car = car.replace(/ڤئ/g, "ڤ");
car = car.replace(/قئ/g, "ق");
car = car.replace(/کئ/g, "ک");
car = car.replace(/گئ/g, "گ");
car = car.replace(/لئ/g, "ل");
car = car.replace(/ڵئ/g, "ڵ");
car = car.replace(/مئ/g, "م");
car = car.replace(/نئ/g, "ن");
car = car.replace(/هئ/g, "ه");
car = car.replace(/وئ/g, "و");
car = car.replace(/یئ/g, "ی");
car = car.replace(/عئ/g, "ع");
car = car.replace(/غئ/g, "غ");
car = car.replace(/حئ/g, "ح");
car = car.replace(/وئ/g, "و");
car = car.replace(/یئ/g, "ی");

car = car.replace(/ئئ/g, "ئ");

// cas des isolées
//car=car.replace(/ ب /g, " ب");
//car=car.replace(/ د /g, " د");
//car=car.replace(/ د /g, " د");
//car=car.replace(/ ج /g, " ج");


car = car.replace(/0/g, "۰");
car = car.replace(/1/g, "۱");
car = car.replace(/2/g, "۲");
car = car.replace(/3/g, "۳");
car = car.replace(/4/g, "٤");
car = car.replace(/5/g, "٥");
car = car.replace(/6/g, "٦");
car = car.replace(/7/g, "۷");
car = car.replace(/8/g, "۸");
car = car.replace(/9/g, "۹");

// correction pour le e

car = car.replace(/ە/g, "ه‌");

car = car.replace(/\n /g, "\n");
document.transcription.text1.value = car;
}

