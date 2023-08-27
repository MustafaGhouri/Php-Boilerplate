//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "𑌅");
car = car.replace(/[Aā]/g, "𑌆");
car = car.replace(/i/g, "𑌇");
car = car.replace(/[Iī]/g, "𑌈");
car = car.replace(/u/g, "𑌉");
car = car.replace(/[Uū]/g, "𑌊");
car = car.replace(/𑌅𑌅/g, "𑌆");
car = car.replace(/𑌇𑌇/g, "𑌈");
car = car.replace(/𑌉𑌉/g, "𑌊");
car = car.replace(/e/g, "𑌏");
car = car.replace(/o/g, "𑌓");
car = car.replace(/𑌅𑌇/g, "𑌐");
car = car.replace(/𑌅𑌉/g, "𑌔");

// virama 
car = car.replace(/&/g, "𑍍");
// zero ZWJ 
car = car.replace(/\+/g, "‍");
//car = car.replace(/\=/g, "‌");


// suppression du virama 
car = car.replace(/𑌿𑌇/g, "𑍀");
car = car.replace(/𑍁𑌉/g, "𑍂");
car = car.replace(/𑍍𑌅/g, "​");  
car = car.replace(/​𑌅/g, "𑌾");
car = car.replace(/​𑌇/g, "𑍈"); 
car = car.replace(/​𑌉/g, "𑍌");

car = car.replace(/𑍍𑌆/g, "𑌾");         
car = car.replace(/𑍍𑌇/g, "𑌿");
car = car.replace(/𑍍𑌈/g, "𑍀");
car = car.replace(/𑍍𑌉/g, "𑍁");
car = car.replace(/𑍍𑌊/g, "𑍂");

car = car.replace(/𑍍𑌏/g, "𑍇"); 
car = car.replace(/𑍍𑌐/g, "𑍈");
car = car.replace(/𑍍𑌓/g, "𑍋");
car = car.replace(/𑍍𑌔/g, "𑍌");



//cons
car = car.replace(/n/g, "𑌨𑍍");
car = car.replace(/k/g, "𑌕𑍍");
car = car.replace(/g/g, "𑌗𑍍");
car = car.replace(/c/g, "𑌚𑍍");
car = car.replace(/j/g, "𑌜𑍍");
car = car.replace(/[TṭṬ]/g, "𑌟𑍍");
car = car.replace(/[DḍḌ]/g, "𑌡𑍍");
car = car.replace(/[NṇṆ]/g, "𑌣𑍍");
car = car.replace(/t/g, "𑌤𑍍");
car = car.replace(/d/g, "𑌦𑍍");
car = car.replace(/p/g, "𑌪𑍍");
car = car.replace(/b/g, "𑌬𑍍");
car = car.replace(/m/g, "𑌮𑍍");
car = car.replace(/y/g, "𑌯𑍍");
car = car.replace(/r/g, "𑌰𑍍");
car = car.replace(/l/g, "𑌲𑍍");
car = car.replace(/L/g, "𑌳𑍍");
car = car.replace(/v/g, "𑌵𑍍");
car = car.replace(/h/g, "𑌹𑍍");
car = car.replace(/[SṣṢ]/g, "𑌷𑍍");
car = car.replace(/s/g, "𑌸𑍍");


// cas particuliers 
car = car.replace(/G/g, "𑌙𑍍");
car = car.replace(/[Jñ]/g, "𑌞𑍍");
car = car.replace(/𑌨𑍍𑌗𑍍/g, "𑌙𑍍");
car = car.replace(/𑌨𑍍𑌜𑍍/g, "𑌞𑍍");

// aspirées
car = car.replace(/𑌕𑍍𑌹𑍍/g, "𑌖𑍍");
car = car.replace(/𑌗𑍍𑌹𑍍/g, "𑌘𑍍");
car = car.replace(/𑌚𑍍𑌹𑍍/g, "𑌛𑍍");
car = car.replace(/𑌜𑍍𑌹𑍍/g, "𑌝𑍍");
car = car.replace(/𑌟𑍍𑌹𑍍/g, "𑌠𑍍");
car = car.replace(/𑌡𑍍𑌹𑍍/g, "𑌢𑍍");
car = car.replace(/𑌤𑍍𑌹𑍍/g, "𑌥𑍍");
car = car.replace(/𑌦𑍍𑌹𑍍/g, "𑌧𑍍");
car = car.replace(/𑌪𑍍𑌹𑍍/g, "𑌫𑍍");
car = car.replace(/𑌬𑍍𑌹𑍍/g, "𑌭𑍍");


// cas du s barre
car = car.replace(/𑌸𑍍𑌹𑍍/g, "𑌶𑍍");
car = car.replace(/[çśŚ]/g, "𑌶𑍍");

// cas du ri li 
car = car.replace(/𑍍-𑌰𑍍/g, "𑍃");
car = car.replace(/-𑌰𑍍/g, "𑌋");
car = car.replace(/𑌋𑌇/g, "𑌌");
car = car.replace(/𑍃𑌇/g, "𑍄");

car = car.replace(/𑍍-𑌲𑍍/g, "𑍢");
car = car.replace(/-𑌲𑍍/g, "𑍠");
car = car.replace(/𑍠𑌇/g, "𑍡");
car = car.replace(/𑍢𑌇/g, "𑍣");

// ponctuation devanagari
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

//suppression du zero
 car = car.replace(/​𑌕/g, "𑌕")
car = car.replace(/​𑌖/g, "𑌖")
car = car.replace(/​𑌗/g, "𑌗")
car = car.replace(/​𑌘/g, "𑌘")
car = car.replace(/​𑌙/g, "𑌙")
car = car.replace(/​𑌚/g, "𑌚")
car = car.replace(/​𑌛/g, "𑌛")
car = car.replace(/​𑌜/g, "𑌜")
car = car.replace(/​𑌝/g, "𑌝")
car = car.replace(/​𑌞/g, "𑌞")
car = car.replace(/​𑌟/g, "𑌟")
car = car.replace(/​𑌠/g, "𑌠")
car = car.replace(/​𑌡/g, "𑌡")
car = car.replace(/​𑌢/g, "𑌢")
car = car.replace(/​𑌣/g, "𑌣")
car = car.replace(/​𑌤/g, "𑌤")
car = car.replace(/​𑌥/g, "𑌥")
car = car.replace(/​𑌦/g, "𑌦")
car = car.replace(/​𑌧/g, "𑌧")
car = car.replace(/​𑌨/g, "𑌨")
car = car.replace(/​𑌪/g, "𑌪")
car = car.replace(/​𑌫/g, "𑌫")
car = car.replace(/​𑌬/g, "𑌬")
car = car.replace(/​𑌭/g, "𑌭")
car = car.replace(/​𑌮/g, "𑌮")
car = car.replace(/​𑌯/g, "𑌯")
car = car.replace(/​𑌰/g, "𑌰")
car = car.replace(/​𑌲/g, "𑌲")
car = car.replace(/​𑌳/g, "𑌳")
car = car.replace(/​𑌵/g, "𑌵")
car = car.replace(/​𑌹/g, "𑌹")
car = car.replace(/​𑌶/g, "𑌶")
car = car.replace(/​𑌷/g, "𑌷")
car = car.replace(/​𑌸/g, "𑌸")
car = car.replace(/​ /g, " ");
car = car.replace(/​\𑌂/g, "𑌂");
car = car.replace(/​\𑌃 /g, "𑌃 ");


// anusvara
car = car.replace(/[Mṁ]/g, "𑌂");
car = car.replace(/𑍍𑌂/g, "𑌂");
// candrabindu 
car = car.replace(/ংং/g, "ঁ");
// visarga
car = car.replace(/[Hḥ]/g, "𑌃");
car = car.replace(/𑍍𑌃/g, "𑌃");

// ponctuation
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");


// avagraha
car = car.replace(/'/g, "𑌽");
car = car.replace(/’/g, "𑌽");

// longue
car = car.replace(/𑍌𑌉/g, "𑍗");


// replace bengali
car = car.replace (/ক/g, "𑌕");
car = car.replace (/খ/g, "𑌖");
car = car.replace (/গ/g, "𑌗");
car = car.replace (/ঘ/g, "𑌘");
car = car.replace (/ঙ/g, "𑌙");
car = car.replace (/চ/g, "𑌚");
car = car.replace (/ছ/g, "𑌛");
car = car.replace (/জ/g, "𑌜");
car = car.replace (/ঝ/g, "𑌝");
car = car.replace (/ঞ/g, "𑌞");
car = car.replace (/ট/g, "𑌟");
car = car.replace (/ঠ/g, "𑌠");
car = car.replace (/ড/g, "𑌡");
car = car.replace (/ঢ/g, "𑌢");
car = car.replace (/ণ/g, "𑌣");
car = car.replace (/ত/g, "𑌤");
car = car.replace (/থ/g, "𑌥");
car = car.replace (/দ/g, "𑌦");
car = car.replace (/ধ/g, "𑌧");
car = car.replace (/ন/g, "𑌨");
car = car.replace (/প/g, "𑌪");
car = car.replace (/ফ/g, "𑌫");
car = car.replace (/ব/g, "𑌬");
car = car.replace (/ভ/g, "𑌭");
car = car.replace (/ম/g, "𑌮");
car = car.replace (/য/g, "𑌯");
car = car.replace (/র/g, "𑌰");
car = car.replace (/ল/g, "𑌲");
car = car.replace (/ৰ/g, "𑌳");
car = car.replace (/ৱ/g, "𑌵");
car = car.replace (/শ/g, "𑌶");
car = car.replace (/ষ/g, "𑌷");
car = car.replace (/স/g, "𑌸");
car = car.replace (/হ/g, "𑌹");
car = car.replace (/অ/g, "𑌅");
car = car.replace (/আ/g, "𑌆");
car = car.replace (/ই/g, "𑌇");
car = car.replace (/ঈ/g, "𑌈");
car = car.replace (/উ/g, "𑌉");
car = car.replace (/ঊ/g, "𑌊");
car = car.replace (/ঋ/g, "𑌋");
car = car.replace (/ৠ/g, "𑌌");
car = car.replace (/ঌ/g, "𑍠");
car = car.replace (/ৡ/g, "𑍡");
car = car.replace (/এ/g, "𑌏");
car = car.replace (/ঐ/g, "𑌐");
car = car.replace (/ও/g, "𑌓");
car = car.replace (/ঔ/g, "𑌔");
car = car.replace (/া/g, "𑌾");
car = car.replace (/ি/g, "𑌿");
car = car.replace (/ী/g, "𑍀");
car = car.replace (/ু/g, "𑍁");
car = car.replace (/ূ/g, "𑍂");
car = car.replace (/ৃ/g, "𑍃");
car = car.replace (/ৄ/g, "𑍄");
car = car.replace (/ৢ/g, "𑍢");
car = car.replace (/ৣ/g, "𑍣");
car = car.replace (/ে/g, "𑍇");
car = car.replace (/ৈ/g, "𑍈");
car = car.replace (/ো/g, "𑍋");
car = car.replace (/ৌ/g, "𑍌");

car = car.replace (/্/g, "𑍍");

car = car.replace (/ং/g, "𑌂");
car = car.replace (/ ঁ/g, "𑌁");
car = car.replace (/ঃ/g, "𑌃");
car = car.replace (/ঽ/g, "ঽ");

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