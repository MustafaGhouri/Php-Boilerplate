//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/&/g, "्");
car = car.replace(/््/g, "");

car = car.replace(/a/g, "अ");
car = car.replace(/[Aā]/g, "आ");
car = car.replace(/i/g, "इ");
car = car.replace(/[Iī]/g, "ई");
car = car.replace(/u/g, "उ");
car = car.replace(/[Uū]/g, "ऊ");
car = car.replace(/अअ/g, "आ");
car = car.replace(/इइ/g, "ई");
car = car.replace(/उउ/g, "ऊ");
car = car.replace(/e/g, "ए");
car = car.replace(/o/g, "ओ");
car = car.replace(/अइ/g, "ऐ");
car = car.replace(/अउ/g, "औ");


// candra 
car = car.replace(/एए/g, "ऐ");
car = car.replace(/ऐए/g, "ऍ");
car = car.replace(/ऍए/g, "ऎ");
car = car.replace(/ऎए/g, "ए");

car = car.replace(/ेए/g, "ै");
car = car.replace(/ैए/g, "ॅ");
car = car.replace(/ॅए/g, "ॆ");
car = car.replace(/ॆए/g, "े");
// a
car = car.replace(/आअ/g, "ऑ");
car = car.replace(/ऑअ/g, "ऒ");
car = car.replace(/ऒअ/g, "ओ"); 
car = car.replace(/ओअ/g, "औ");   
car = car.replace(/औअ/g, "ॲ");
car = car.replace(/ॲअ/g, "अ");

car = car.replace(/ाअ/g, "ॉ");
car = car.replace(/ॉअ/g, "ॊ");
car = car.replace(/ॊअ/g, "ो");
car = car.replace(/ोअ/g, "ौ");
car = car.replace(/ौअ/g, "ा");
//o
car = car.replace(/ओओ/g, "औ");   
car = car.replace(/औओ/g, "ऑ");
car = car.replace(/ऑओ/g, "ऒ");
car = car.replace(/ऒओ/g, "ओ");

car = car.replace(/ोओ/g, "ौ");
car = car.replace(/ौओ/g, "ॉ");
car = car.replace(/ॉओ/g, "ॊ");
car = car.replace(/ॊओ/g, "ो");


// suppression du virama 
car = car.replace(/िइ/g, "ी");
car = car.replace(/ुउ/g, "ू");
car = car.replace(/्अ/g, "\u200b");
car = car.replace(/\u200bअ/g, "ा");
car = car.replace(/\u200bइ/g, "ै");
car = car.replace(/\u200bउ/g, "ौ");
car = car.replace(/्आ/g, "ा");
car = car.replace(/्इ/g, "ि");
car = car.replace(/्ई/g, "ी");
car = car.replace(/्उ/g, "ु");
car = car.replace(/्ऊ/g, "ू");
car = car.replace(/्ऋ/g, "ृ");
car = car.replace(/्ॠ/g, "ॄ");
car = car.replace(/्ऌ/g, "ॢ");
car = car.replace(/्ॡ/g, "ॣ");
car = car.replace(/्ए/g, "े");
car = car.replace(/्ओ/g, "ो");

car = car.replace(/् /g, " ");
// diacritiques
car = car.replace(/\u200b॑/g, "॑");
car = car.replace(/\u200b\ं/g, "ं");
car = car.replace(/\u200b\ः/g, "ः");
car = car.replace(/\u200b\॓/g, "॓");
car = car.replace(/\u200b\॔/g, "॔");
car = car.replace(/\u200b\़/g, "़");
car = car.replace(/\u200b\़/g, "ँ");

//cons
car = car.replace(/n/g, "न्");
car = car.replace(/k/g, "क्");
car = car.replace(/g/g, "ग्");
car = car.replace(/c/g, "च्");
car = car.replace(/j/g, "ज्");
car = car.replace(/[TṭṬ]/g, "ट्");
car = car.replace(/[DḍḌ]/g, "ड्");
car = car.replace(/[NṇṆ]/g, "ण्");
car = car.replace(/t/g, "त्");
car = car.replace(/d/g, "द्");
car = car.replace(/p/g, "प्");
car = car.replace(/b/g, "ब्");
car = car.replace(/m/g, "म्");
car = car.replace(/q/g, "क़्");
car = car.replace(/Q/g, "क़्");
car = car.replace(/क़्/g, "क़्");
car = car.replace(/X/g, "ख़्");
car = car.replace(/ख़्/g, "ख़्");
car = car.replace(/Y/g, "ग़्");
car = car.replace(/ग़्/g, "ग़्");
car = car.replace(/[zZ]/g, "ज़्");
car = car.replace(/ज़्/g, "ज़्");
car = car.replace(/[fF]/g, "फ़्");
car = car.replace(/फ़्/g, "फ़्");
car = car.replace(/[RṚṛ]/g, "ड़्");
car = car.replace(/ड़्/g, "ड़्");
car = car.replace(/y/g, "य्");
car = car.replace(/r/g, "र्");
car = car.replace(/ऱ्/g, "ऱ्");
car = car.replace(/l/g, "ल्");
car = car.replace(/[LḶḷ]/g, "ळ्");
car = car.replace(/ऴ्/g, "ऴ्");
car = car.replace(/v/g, "व्");
car = car.replace(/w/g, "व्");
car = car.replace(/h/g, "ह्");
car = car.replace(/[SṣṢ]/g, "ष्");
car = car.replace(/s/g, "स्");
// cas particuliers
car = car.replace(/[ṅG]/g, "ङ्");
car = car.replace(/J/g, "ञ्");
car = car.replace(/ñ/g, "ञ्");
car = car.replace(/न्ग्/g, "ङ्");
car = car.replace(/न्ज्/g, "ञ्");

// aspirées
car = car.replace(/क्ह्/g, "ख्");
car = car.replace(/ग्ह्/g, "घ्");
car = car.replace(/च्ह्/g, "छ्");
car = car.replace(/ज्ह्/g, "झ्");
car = car.replace(/ट्ह्/g, "ठ्");
car = car.replace(/ड्ह्/g, "ढ्");
car = car.replace(/त्ह्/g, "थ्");
car = car.replace(/द्ह्/g, "ध्");
car = car.replace(/त्ह्/g, "थ्");
car = car.replace(/द्ह्/g, "ध्");
car = car.replace(/प्ह्/g, "फ्");
car = car.replace(/ब्ह्/g, "भ्");
car = car.replace(/ड़्ह्/g, "ढ़्");

car = car.replace(/ढ़्/g, "ढ़्");

// cas du s barre
car = car.replace(/स्ह्/g, "श्");
car = car.replace(/[çśŚ]/g, "श्");

// cas du ri li 
car = car.replace(/्-र्/g, "ृ");
car = car.replace(/-र्/g, "ऋ");
car = car.replace(/ऋइ/g, "ॠ");
car = car.replace(/ृइ/g, "ॄ");

car = car.replace(/्-ल्/g, "ॢ");
car = car.replace(/-ल्/g, "ऌ");
car = car.replace(/ऌइ/g, "ॡ");
car = car.replace(/ॢइ/g, "ॣ");

//suppression du zero
car = car.replace(/\u200bक/g, "क");
car = car.replace(/\u200bख/g, "ख");
car = car.replace(/\u200bग/g, "ग");
car = car.replace(/\u200bघ/g, "घ");
car = car.replace(/\u200bङ/g, "ङ");
car = car.replace(/\u200bच/g, "च");
car = car.replace(/\u200bछ/g, "छ");
car = car.replace(/\u200bज/g, "ज");
car = car.replace(/\u200bझ/g, "झ");
car = car.replace(/\u200bञ/g, "ञ");
car = car.replace(/\u200bट/g, "ट");
car = car.replace(/\u200bठ/g, "ठ");
car = car.replace(/\u200bड/g, "ड");
car = car.replace(/\u200bढ/g, "ढ");
car = car.replace(/\u200bण/g, "ण");
car = car.replace(/\u200bत/g, "त");
car = car.replace(/\u200bथ/g, "थ");
car = car.replace(/\u200bद/g, "द");
car = car.replace(/\u200bध/g, "ध");
car = car.replace(/\u200bन/g, "न");
car = car.replace(/\u200bप/g, "प");
car = car.replace(/\u200bफ/g, "फ");
car = car.replace(/\u200bब/g, "ब");
car = car.replace(/\u200bभ/g, "भ");
car = car.replace(/\u200bम/g, "म");
car = car.replace(/\u200bक़/g, "क़");
car = car.replace(/\u200bख़/g, "ख़");
car = car.replace(/\u200bग़/g, "ग़");
car = car.replace(/\u200bज़/g, "ज़");
car = car.replace(/\u200bड़/g, "ड़");
car = car.replace(/\u200bढ़/g, "ढ़");
car = car.replace(/\u200bफ़/g, "फ़");
car = car.replace(/\u200bय/g, "य");
car = car.replace(/\u200bर/g, "र");
car = car.replace(/\u200bल/g, "ल");
car = car.replace(/\u200bळ/g, "ळ");
car = car.replace(/\u200bव/g, "व");
car = car.replace(/\u200bह/g, "ह");
car = car.replace(/\u200bश/g, "श");
car = car.replace(/\u200bष/g, "ष");
car = car.replace(/\u200bस/g, "स");
car = car.replace(/\u200b /g, " ");

// accents 
car = car.replace(/\u200b\॓/g, "॓");
car = car.replace(/\u200b\॔/g, "॔");

// anusvara
car = car.replace(/[MṃṂṁ]/g, "ं");
car = car.replace(/\u200bं/g, "ं");
car = car.replace(/्ं/g, "ं");
// + candrabindu 
car = car.replace(/ंं/g, "ँ");
car = car.replace(/ँं/g, "");
car = car.replace(/\u200bँ/g, "ँ");
//OM
car = car.replace(/O/g, "ॐ");
car = car.replace(/ॐं/g, "ॐ");
// visarga
car = car.replace(/[HḥḤ]/g, "ः");
car = car.replace(/्ः/g, "ः");
car = car.replace(/\u200b\ः/g, "ः");
// + nukta
car = car.replace(/=/g, "़");
car = car.replace(/\u200b़/g, "़");
// anudatta + udatta
car = car.replace(/_/g, "॒");
car = car.replace(/\u200b॒/g, "॒");
car = car.replace(/॒॒/g, "॑");
car = car.replace(/॒॑/g, "");
car = car.replace(/\u200b॑/g, "॑");


// alternative : car = car.replace(/:/g, "ः");
// avagraha
car = car.replace(/\'/g, "ऽ");
car = car.replace(/’/g, "ऽ");

//half conso pour sanskrit
car = car.replace(/x/g, "\u200d");
car = car.replace(/\u200d\u200d/g, "\u200c");


// ponctuation
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

car = car.replace(/0\+/g, "०");
car = car.replace(/1\+/g, "१");
car = car.replace(/2\+/g, "२");
car = car.replace(/3\+/g, "३");
car = car.replace(/4\+/g, "४");
car = car.replace(/5\+/g, "५");
car = car.replace(/6\+/g, "६");
car = car.replace(/7\+/g, "७");
car = car.replace(/8\+/g, "८");
car = car.replace(/9\+/g, "९");

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