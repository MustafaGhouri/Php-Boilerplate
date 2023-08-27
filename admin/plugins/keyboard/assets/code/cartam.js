//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "அ");
car = car.replace(/அஅ/g, "ஆ");
car = car.replace(/[āA]/g, "ஆ");
car = car.replace(/i/g, "இ");
car = car.replace(/இஇ/g, "ஈ");
car = car.replace(/[īI]/g, "ஈ");
car = car.replace(/u/g, "உ");
car = car.replace(/உஉ/g, "ஊ");
car = car.replace(/[ūU]/g, "ஊ");
car = car.replace(/e/g, "எ");
car = car.replace(/எஎ/g, "ஏ");
car = car.replace(/[ēE]/g, "ஏ");
car = car.replace(/அஇ/g, "ஐ");
car = car.replace(/o/g, "ஒ");
car = car.replace(/ஒஒ/g, "ஓ");
car = car.replace(/[ōO]/g, "ஓ");
car = car.replace(/அஉ/g, "ஔ");

// virama 
car = car.replace(/ிஇ/g, "ீ");
car = car.replace(/ுஉ/g, "ூ");
car = car.replace(/ெஎ/g, "ே");
car = car.replace(/ொஒ/g, "ோ");
car = car.replace(/்அ/g, "\u200b");
car = car.replace(/\u200bஅ/g, "ா");
car = car.replace(/\u200bஇ/g, "ை");
car = car.replace(/\u200bஉ/g, "ௌ");

car = car.replace(/்ஆ/g, "ா");
car = car.replace(/்இ/g, "ி");
car = car.replace(/்ஈ/g, "ீ");
car = car.replace(/்உ/g, "ு");
car = car.replace(/்ஊ/g, "ூ");
car = car.replace(/்எ/g, "ெ");
car = car.replace(/்ஏ/g, "ே");
car = car.replace(/்ஒ/g, "ொ");
car = car.replace(/்ஓ/g, "ோ");

//cons
car = car.replace(/[kg]/g, "க்");
car = car.replace(/G/g, 'ங்');
car = car.replace(/c/g, "ச்");
car = car.replace(/j/g, "ஜ்");
car = car.replace(/[Jñ]/g, "ஞ்");
car = car.replace(/[td]/g, "த்");
car = car.replace(/த்த்/g, "ட்");
car = car.replace(/[TDṭṬ]/g, "ட்");
car = car.replace(/n/g, "ந்");
car = car.replace(/ந்ந்/g, "ண்");
car = car.replace(/[NṇṆ]/g, "ண்");
car = car.replace(/ண்ந்/g, "ன்");
car = car.replace(/ண்ண்/g, "ன்");
car = car.replace(/ṉ/g, "ன்");
car = car.replace(/[bp]/g, "ப்");
car = car.replace(/m/g, "ம்");
car = car.replace(/y/g, "ய்");
car = car.replace(/r/g, "ர்");
car = car.replace(/ர்ர்/g, "ற்");
car = car.replace(/[Rṟ]/g, "ற்");
car = car.replace(/l/g, "ல்");
car = car.replace(/ல்ல்/g, "ள்");
car = car.replace(/[Lḷ]/g, "ள்");
car = car.replace(/[zẕḻ]/g, "ழ்");
car = car.replace(/ள்ல்/g, "ழ்");
car = car.replace(/v/g, "வ்");
car = car.replace(/ś/g, "ஶ்");

// gn, ny 
car = car.replace(/ந்க்/g, "ங்");
car = car.replace(/ந்ய்/g, "ஞ்");


car = car.replace(/ç/g, "ஶ்");
car = car.replace(/s/g, "ஸ்");
car = car.replace(/[SṣṢ]/g, "ஷ்");
car = car.replace(/ஸ்ஸ்/g, "ஷ்");
car = car.replace(/h/g, "ஹ்");
car = car.replace(/ஸ்ஹ்/g, "ஶ்"); //sh
car = car.replace(/ஷ்ஸ்/g, "ஶ்"); //sss : sh


car = car.replace(/w/g, "௰");
car = car.replace(/௰'/g, "௱");
car = car.replace(/௱'/g, "௲");

// suppression zero
car = car.replace(/\u200bக/g, "க");
car = car.replace(/\u200bங/g, "ங");
car = car.replace(/\u200bச/g, "ச");
car = car.replace(/\u200bஜ/g, "ஜ");
car = car.replace(/\u200bஞ/g, "ஞ");
car = car.replace(/\u200bட/g, "ட");
car = car.replace(/\u200bண/g, "ண");
car = car.replace(/\u200bத/g, "த");
car = car.replace(/\u200bந/g, "ந");
car = car.replace(/\u200bன/g, "ன");
car = car.replace(/\u200bப/g, "ப");
car = car.replace(/\u200bம/g, "ம");
car = car.replace(/\u200bய/g, "ய");
car = car.replace(/\u200bர/g, "ர");
car = car.replace(/\u200bற/g, "ற");
car = car.replace(/\u200bல/g, "ல");
car = car.replace(/\u200bள/g, "ள");
car = car.replace(/\u200bழ/g, "ழ");
car = car.replace(/\u200bவ/g, "வ");
car = car.replace(/\u200bஶ/g, "ஶ");
car = car.replace(/\u200bஷ/g, "ஷ");
car = car.replace(/\u200bஸ/g, "ஸ");
car = car.replace(/\u200bஹ/g, "ஹ");

// anusvara
car = car.replace(/M/g, "ஂ");
// visarga
car = car.replace(/[KH]/g, "ஃ");
car = car.replace(/்ஃ/g, "ஃ");
//OM
car = car.replace(/ஓஂ/g, "ௐ");
// longueur au
car = car.replace(/ௌஉ/g, "ௗ");


car=car.replace(/1/g, "௧");
car=car.replace(/2/g, "௨");
car=car.replace(/3/g, "௩");
car=car.replace(/4/g, "௪");
car=car.replace(/5/g, "௫");
car=car.replace(/6/g, "௬");
car=car.replace(/7/g, "௭");
car=car.replace(/8/g, "௮");
car=car.replace(/9/g, "௯");

// ponctuation
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

// x pour zwj
car = car.replace(/x/g, "\u200d");

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