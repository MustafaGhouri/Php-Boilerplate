//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "అ");
car = car.replace(/[Aā]/g, "ఆ");
car = car.replace(/అఅ/g, "ఆ");
car = car.replace(/i/g, "ఇ");
car = car.replace(/[Iī]/g, "ఈ");
car = car.replace(/ఇఇ/g, "ఈ");
car = car.replace(/u/g, "ఉ");
car = car.replace(/[Uū]/g, "ఊ");
car = car.replace(/ఉ ఉ/g, "ఊ");
car = car.replace(/e/g, "ఎ");
car = car.replace(/[Eē]/g, "ఏ");
car = car.replace(/ఎఎ/g, "ఏ");
car = car.replace(/o/g, "ఒ");
car = car.replace(/[Oō]/g, "ఓ");
car = car.replace(/ఒఒ/g, "ఓ");
// ai au
car = car.replace(/అఇ/g, "ఐ");
car = car.replace(/అఉ/g, "ఔ");

// suppression du virama : ii, uu... + aa, ai, au
car = car.replace(/ిఇ/g, "ీ");
car = car.replace(/ుఉ/g, "ూ");
car = car.replace(/ెఎ/g, "ే");
car = car.replace(/ొఒ/g, "ో");
car = car.replace(/్అ/g, "\u200b");
car = car.replace(/\u200bఅ/g, "ా");
car = car.replace(/\u200bఇ/g, "ై");
car = car.replace(/\u200bఉ/g, "ౌ");

car = car.replace(/్ఆ/g, "ా");
car = car.replace(/్ఇ/g, "ి");
car = car.replace(/్ఈ/g, "ీ");
car = car.replace(/్ఉ/g, "ు");
car = car.replace(/్ఊ/g, "ూ");
car = car.replace(/్ఎ/g, "ె");
car = car.replace(/్ఏ/g, "ే");
car = car.replace(/్ఐ/g, "ై");
car = car.replace(/్ఒ/g, "ొ");
car = car.replace(/్ఓ/g, "ో");
car = car.replace(/్ఔ/g, "ౌ");
// modif 1907 car = car.replace(/్ /g, " ");

//cons
car = car.replace(/n/g, "న్");
car = car.replace(/k/g, "క్");
car = car.replace(/g/g, "గ్");
car = car.replace(/c/g, "చ్");
car = car.replace(/j/g, "జ్");
car = car.replace(/[TṬṭ]/g, "ట్"); 
car = car.replace(/[DḌḍ]/g, "డ్");
car = car.replace(/[NṆṇ]/g, "ణ్");
car = car.replace(/t/g, "త్");
car = car.replace(/d/g, "ద్");
car = car.replace(/p/g, "ప్");
car = car.replace(/b/g, "బ్");
car = car.replace(/m/g, "మ్");
car = car.replace(/y/g, "య్");
car = car.replace(/r/g, "ర్");
car = car.replace(/R/g, "ఱ్");
car = car.replace(/l/g, "ల్");
car = car.replace(/[LḶḷ]/g, "ళ్");
car = car.replace(/v/g, "వ్");
car = car.replace(/h/g, "హ్");
car = car.replace(/[SṢṣ]/g, "ష్");
car = car.replace(/s/g, "స్");

// cas particuliers
car = car.replace(/[Gṅ]/g, "ఙ్");
car = car.replace(/[ñJ]/g, "ఞ్");
car = car.replace(/న్గ్/g, "ఙ్");
car = car.replace(/న్జ్/g, "ఞ్");

// aspirées
car = car.replace(/క్హ్/g, "ఖ్");
car = car.replace(/గ్హ్/g, "ఘ్");
car = car.replace(/చ్హ్/g, "ఛ్");
car = car.replace(/జ్హ్/g, "ఝ్");
car = car.replace(/ట్హ్/g, "ఠ్");
car = car.replace(/డ్హ్/g, "ఢ్");
car = car.replace(/త్హ్/g, "థ్");
car = car.replace(/ద్హ్/g, "ధ్");
car = car.replace(/ప్హ్/g, "ఫ్");
car = car.replace(/బ్హ్/g, "భ్");

// cas du s barre
car = car.replace(/స్హ్/g, "శ్");
car = car.replace(/[çśŚ]/g, "శ్");

// cas du ri li 
car = car.replace(/్-ర్/g, "ృ");
car = car.replace(/-ర్/g, "ఋ");
car = car.replace(/ఋఇ/g, "ౠ");
car = car.replace(/ృఇ/g, "ౄ");

car = car.replace(/్-ల్/g, "ౢ");
car = car.replace(/-ల్/g, "ఌ");
car = car.replace(/ఌఇ/g, "ౡ");
car = car.replace(/ౢఇ/g, "ౣ");

//suppression du zero
car = car.replace(/\u200bక/g, "క");
car = car.replace(/\u200bక/g, "క");
car = car.replace(/\u200bఖ/g, "ఖ");
car = car.replace(/\u200bగ/g, "గ");
car = car.replace(/\u200bఘ/g, "ఘ");
car = car.replace(/\u200bఙ/g, "ఙ");
car = car.replace(/\u200bచ/g, "చ");
car = car.replace(/\u200bఛ/g, "ఛ");
car = car.replace(/\u200bజ/g, "జ");
car = car.replace(/\u200bఝ/g, "ఝ");
car = car.replace(/\u200bఞ/g, "ఞ");
car = car.replace(/\u200bట/g, "ట");
car = car.replace(/\u200bఠ/g, "ఠ");
car = car.replace(/\u200bడ/g, "డ");
car = car.replace(/\u200bఢ/g, "ఢ");
car = car.replace(/\u200bణ/g, "ణ");
car = car.replace(/\u200bత/g, "త");
car = car.replace(/\u200bథ/g, "థ");
car = car.replace(/\u200bద/g, "ద");
car = car.replace(/\u200bధ/g, "ధ");
car = car.replace(/\u200bన/g, "న");
car = car.replace(/\u200bప/g, "ప");
car = car.replace(/\u200bఫ/g, "ఫ");
car = car.replace(/\u200bబ/g, "బ");
car = car.replace(/\u200bభ/g, "భ");
car = car.replace(/\u200bమ/g, "మ");
car = car.replace(/\u200bయ/g, "య");
car = car.replace(/\u200bర/g, "ర");
car = car.replace(/\u200bఱ/g, "ఱ");
car = car.replace(/\u200bల/g, "ల");
car = car.replace(/\u200bళ/g, "ళ");
car = car.replace(/\u200bవ/g, "వ");
car = car.replace(/\u200bశ/g, "శ");
car = car.replace(/\u200bష/g, "ష");
car = car.replace(/\u200bస/g, "స");
car = car.replace(/\u200bహ/g, "హ");
car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200b\ం/g, "ం");
car = car.replace(/\u200b\ః/g, "ః");

// anusvara
car = car.replace(/M/g, "ం");
car = car.replace(/్ం/g, "ం");
// candrabindu 
car = car.replace(/ంం/g, "ఁ");
// visarga
car = car.replace(/H/g, "ః");
car = car.replace(/్ః/g, "ః");

//zwj après virama
car = car.replace(/x/g, "\u200d");
car = car.replace(/\u200d\u200d/g, "\u200c");

// ponctuation
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

car = car.replace(/0/g, "౦");
car = car.replace(/1/g, "౧");
car = car.replace(/2/g, "౨");
car = car.replace(/3/g, "౩");
car = car.replace(/4/g, "౪");
car = car.replace(/5/g, "౫");
car = car.replace(/6/g, "౬");
car = car.replace(/7/g, "౭");
car = car.replace(/8/g, "౮");
car = car.replace(/9/g, "౯");

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