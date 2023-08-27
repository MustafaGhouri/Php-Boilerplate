 // copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/&/g, "𑁆");
car = car.replace(/𑁆𑁆/g, "");

car = car.replace(/a/g, "𑀅");
car = car.replace(/[Aā]/g, "𑀆");
car = car.replace(/i/g, "𑀇");
car = car.replace(/[Iī]/g, "𑀈");
car = car.replace(/u/g, "𑀉");
car = car.replace(/[Uū]/g, "𑀊");
car = car.replace(/𑀅𑀅/g, "𑀆");
car = car.replace(/𑀇𑀇/g, "𑀈");
car = car.replace(/𑀉𑀉/g, "𑀊");
car = car.replace(/e/g, "𑀏");
car = car.replace(/o/g, "𑀑");
car = car.replace(/𑀅𑀇/g, "𑀐");
car = car.replace(/𑀅𑀉/g, "𑀒");

// a
car = car.replace(/𑀑𑀅/g, "𑀒");

car = car.replace(/𑁄𑀅/g, "𑁅");
car = car.replace(/𑁅𑀅/g, "𑀸");
//o
car = car.replace(/𑀑𑀑/g, "𑀒");
car = car.replace(/𑁄𑀑/g, "𑁅");
//e
car = car.replace(/𑀏𑀏/g, "𑀐");
car = car.replace(/𑁂𑀏/g, "𑁃");




// suppression du virama
car = car.replace(/𑀺𑀇/g, "𑀻");
car = car.replace(/𑀼𑀉/g, "𑀽");
car = car.replace(/𑁆𑀅/g, "\u200b");
car = car.replace(/\u200b𑀅/g, "𑀸");
car = car.replace(/\u200b𑀇/g, "𑁃");
car = car.replace(/\u200b𑀉/g, "𑁅");
car = car.replace(/𑁆𑀆/g, "𑀸");
car = car.replace(/𑁆𑀇/g, "𑀺");
car = car.replace(/𑁆𑀈/g, "𑀻");
car = car.replace(/𑁆𑀉/g, "𑀼");
car = car.replace(/𑁆𑀊/g, "𑀽");
car = car.replace(/𑁆𑀋/g, "𑀾");
car = car.replace(/𑁆𑀌/g, "𑀿");
car = car.replace(/𑁆𑀍/g, "𑁀");
car = car.replace(/𑁆𑀎/g, "𑁁");
car = car.replace(/𑁆𑀏/g, "𑁂");
car = car.replace(/𑁆𑀑/g, "𑁄");

car = car.replace(/𑁆 /g, " ");
// diacritiques

car = car.replace(/\u200b\𑀁/g, "𑀁");
car = car.replace(/\u200b\𑀂/g, "𑀂");


//cons
car = car.replace(/n/g, "𑀦𑁆");
car = car.replace(/k/g, "𑀓𑁆");
car = car.replace(/g/g, "𑀕𑁆");
car = car.replace(/c/g, "𑀘𑁆");
car = car.replace(/j/g, "𑀚𑁆");
car = car.replace(/[TṭṬ]/g, "𑀝𑁆");
car = car.replace(/[DḍḌ]/g, "𑀟𑁆");
car = car.replace(/[NṇṆ]/g, "𑀡𑁆");
car = car.replace(/t/g, "𑀢𑁆");
car = car.replace(/d/g, "𑀤𑁆");
car = car.replace(/p/g, "𑀧𑁆");
car = car.replace(/b/g, "𑀩𑁆");
car = car.replace(/m/g, "𑀫𑁆");
car = car.replace(/y/g, "𑀬𑁆");
car = car.replace(/r/g, "𑀭𑁆");
car = car.replace(/l/g, "𑀮𑁆");
car = car.replace(/[LḶḷ]/g, "𑀴𑁆");
car = car.replace(/v/g, "𑀯𑁆");
car = car.replace(/h/g, "𑀳𑁆");
car = car.replace(/[SṣṢ]/g, "𑀱𑁆");
car = car.replace(/s/g, "𑀲𑁆");
// cas particuliers
car = car.replace(/[ṅG]/g, "𑀗𑁆");
car = car.replace(/J/g, "𑀜𑁆");
car = car.replace(/ñ/g, "𑀜𑁆");
car = car.replace(/𑀦𑁆𑀕𑁆/g, "𑀗𑁆");
car = car.replace(/𑀦𑁆𑀚𑁆/g, "𑀜𑁆");

// aspirees
car = car.replace(/𑀓𑁆𑀳𑁆/g, "𑀔𑁆");
car = car.replace(/𑀕𑁆𑀳𑁆/g, "𑀖𑁆");
car = car.replace(/𑀘𑁆𑀳𑁆/g, "𑀙𑁆");
car = car.replace(/𑀚𑁆𑀳𑁆/g, "𑀛𑁆");
car = car.replace(/𑀝𑁆𑀳𑁆/g, "𑀞𑁆");
car = car.replace(/𑀟𑁆𑀳𑁆/g, "𑀠𑁆");
car = car.replace(/𑀢𑁆𑀳𑁆/g, "𑀣𑁆");
car = car.replace(/𑀤𑁆𑀳𑁆/g, "𑀥𑁆");
car = car.replace(/𑀢𑁆𑀳𑁆/g, "𑀣𑁆");
car = car.replace(/𑀤𑁆𑀳𑁆/g, "𑀥𑁆");
car = car.replace(/𑀧𑁆𑀳𑁆/g, "𑀨𑁆");
car = car.replace(/𑀩𑁆𑀳𑁆/g, "𑀪𑁆");


// cas du s barre
car = car.replace(/𑀲𑁆𑀳𑁆/g, "𑀰𑁆");
car = car.replace(/[çśŚ]/g, "𑀰𑁆");

// cas du ri li
car = car.replace(/𑁆-𑀭𑁆/g, "𑀾");
car = car.replace(/-𑀭𑁆/g, "𑀋");
car = car.replace(/𑀋𑀇/g, "𑀌");
car = car.replace(/𑀾𑀇/g, "𑀿");

car = car.replace(/𑁆-𑀮𑁆/g, "𑁀");
car = car.replace(/-𑀮𑁆/g, "𑀍");
car = car.replace(/𑀍𑀇/g, "𑀎");
car = car.replace(/𑁀𑀇/g, "𑁁");

//suppression du zero
car = car.replace(/\u200b𑀓/g, "𑀓");
car = car.replace(/\u200b𑀔/g, "𑀔");
car = car.replace(/\u200b𑀕/g, "𑀕");
car = car.replace(/\u200b𑀖/g, "𑀖");
car = car.replace(/\u200b𑀗/g, "𑀗");
car = car.replace(/\u200b𑀘/g, "𑀘");
car = car.replace(/\u200b𑀙/g, "𑀙");
car = car.replace(/\u200b𑀚/g, "𑀚");
car = car.replace(/\u200b𑀛/g, "𑀛");
car = car.replace(/\u200b𑀜/g, "𑀜");
car = car.replace(/\u200b𑀝/g, "𑀝");
car = car.replace(/\u200b𑀞/g, "𑀞");
car = car.replace(/\u200b𑀟/g, "𑀟");
car = car.replace(/\u200b𑀠/g, "𑀠");
car = car.replace(/\u200b𑀡/g, "𑀡");
car = car.replace(/\u200b𑀢/g, "𑀢");
car = car.replace(/\u200b𑀣/g, "𑀣");
car = car.replace(/\u200b𑀤/g, "𑀤");
car = car.replace(/\u200b𑀥/g, "𑀥");
car = car.replace(/\u200b𑀦/g, "𑀦");
car = car.replace(/\u200b𑀧/g, "𑀧");
car = car.replace(/\u200b𑀨/g, "𑀨");
car = car.replace(/\u200b𑀩/g, "𑀩");
car = car.replace(/\u200b𑀪/g, "𑀪");
car = car.replace(/\u200b𑀫/g, "𑀫");
car = car.replace(/\u200b𑀬/g, "𑀬");
car = car.replace(/\u200b𑀭/g, "𑀭");
car = car.replace(/\u200b𑀮/g, "𑀮");
car = car.replace(/\u200b𑀴/g, "𑀴");
car = car.replace(/\u200b𑀯/g, "𑀯");
car = car.replace(/\u200b𑀳/g, "𑀳");
car = car.replace(/\u200b𑀰/g, "𑀰");
car = car.replace(/\u200b𑀱/g, "𑀱");
car = car.replace(/\u200b𑀲/g, "𑀲");
car = car.replace(/\u200b /g, " ");


// anusvara
car = car.replace(/[MṃṂṁ]/g, "𑀁");
car = car.replace(/\u200b𑀁/g, "𑀁");
car = car.replace(/𑁆𑀁/g, "𑀁");
// + candrabindu
car = car.replace(/𑀁𑀁/g, "𑀀");
car = car.replace(/𑀀𑀁/g, "");
car = car.replace(/\u200b𑀀/g, "𑀀");

// visarga
car = car.replace(/[HḥḤ]/g, "𑀂");
car = car.replace(/𑁆𑀂/g, "𑀂");
car = car.replace(/\u200b\𑀂/g, "𑀂");


//zwnj no ligature
car = car.replace(/x/g, "\u200c");

// ponctuation
car = car.replace(/\|/g, "𑁇");
car = car.replace(/\//g, "𑁇");
car = car.replace(/𑁇𑁇/g, "𑁈");

car = car.replace(/0\+/g, "𑁦");
car = car.replace(/1\+/g, "𑁧");
car = car.replace(/2\+/g, "𑁨");
car = car.replace(/3\+/g, "𑁩");
car = car.replace(/4\+/g, "𑁪");
car = car.replace(/5\+/g, "𑁫");
car = car.replace(/6\+/g, "𑁬");
car = car.replace(/7\+/g, "𑁭");
car = car.replace(/8\+/g, "𑁮");
car = car.replace(/9\+/g, "𑁯");

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