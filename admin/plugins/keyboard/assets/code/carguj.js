//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;

car = car.replace(/a/g, "અ");
car = car.replace(/[Aā]/g, "આ");
car = car.replace(/i/g, "ઇ");
car = car.replace(/[Iī]/g, "ઈ");
car = car.replace(/u/g, "ઉ");
car = car.replace(/[Uū]/g, "ઊ");
car = car.replace(/અઅ/g, "આ");
car = car.replace(/ઇઇ/g, "ઈ");
car = car.replace(/ઉઉ/g, "ઊ");
car = car.replace(/e/g, "એ");
car = car.replace(/[Eē]/g, "ઍ");
car = car.replace(/એએ/g, "ઍ");
car = car.replace(/o/g, "ઓ");
car = car.replace(/[Oō]/g, "ઑ");
car = car.replace(/ઓઓ/g, "ઑ");
car = car.replace(/અઇ/g, "ઐ");
car = car.replace(/અઉ/g, "ઔ");


// suppression du virama 
car = car.replace(/્અ/g, "\u200b");
car = car.replace(/\u200bઅ/g, "ા");
car = car.replace(/\u200bઇ/g, "ૈ");
car = car.replace(/\u200bઉ/g, "ૌ");
car = car.replace(/્આ/g, "ા");
car = car.replace(/્ઇ/g, "િ");
car = car.replace(/્ઈ/g, "ી");
car = car.replace(/્ઉ/g, "ુ");
car = car.replace(/્ઊ/g, "ૂ");
car = car.replace(/્ઍ/g, "ૅ");
car = car.replace(/્ઑ/g, "ૉ");
car = car.replace(/્ઋ/g, "ૃ");
car = car.replace(/્ૠ/g, "ૄ");
car = car.replace(/્ઌ/g, "ૢ");
car = car.replace(/્ૡ/g, "ૣ ");
car = car.replace(/્એ/g, "ે");
car = car.replace(/્ઓ/g, "ો");
car = car.replace(/ેએ/g, "ૅ");
car = car.replace(/ોઓ/g, "ૉ");
car = car.replace(/િઈ/g, "ી");
car = car.replace(/ુઉ/g, "ૂ");
car = car.replace(/િઇ/g, "ી");
car = car.replace(/્ /g, " ");

//cons
car = car.replace(/k/g, "ક્");
car = car.replace(/g/g, "ગ્");
car = car.replace(/c/g, "ચ્");
car = car.replace(/j/g, "જ્");
car = car.replace(/z/g, "ઝ્");
car = car.replace(/[TṬṭ]/g, "ટ્");
car = car.replace(/[DḌḍ]/g, "ડ્");
car = car.replace(/[NṆṇ]/g, "ણ્");
car = car.replace(/t/g, "ત્");
car = car.replace(/d/g, "દ્");
car = car.replace(/n/g, "ન્");
car = car.replace(/p/g, "પ્");
car = car.replace(/f/g, "ફ્");
car = car.replace(/b/g, "બ્");
car = car.replace(/m/g, "મ્");
car = car.replace(/y/g, "ય્");
car = car.replace(/r/g, "ર્");
car = car.replace(/l/g, "લ્");
car = car.replace(/[LḶḷ]/g, "ળ્");
car = car.replace(/v/g, "વ્");
car = car.replace(/w/g, "વ્");
car = car.replace(/s/g, "સ્");
car = car.replace(/h/g, "હ્");
car = car.replace(/[SṢṣ]/g, "ષ્");

// cas particuliers
car = car.replace(/[Gṅ]/g, "ઙ્");
car = car.replace(/[Jñ]/g, "ઞ્");
car = car.replace(/ન્ગ્/g, "ઙ્");
car = car.replace(/ન્જ્/g, "ઞ્");

// aspirées
car = car.replace(/ક્હ્/g, "ખ્");
car = car.replace(/ગ્હ્/g, "ઘ્");
car = car.replace(/ચ્હ્/g, "છ્");
car = car.replace(/જ્હ્/g, "ઝ્");
car = car.replace(/ટ્હ્/g, "ઠ્");
car = car.replace(/ડ્હ્/g, "ઢ્");
car = car.replace(/ત્હ્/g, "થ્");
car = car.replace(/દ્હ્/g, "ધ્");
car = car.replace(/પ્હ્/g, "ફ્");
car = car.replace(/બ્હ્/g, "ભ્");

// cas du s barre
car = car.replace(/સ્હ્/g, "શ્");
car = car.replace(/[çśŚ]/g, "શ્");

// cas du ri li 
car = car.replace(/્-ર્/g, "ૃ");
car = car.replace(/-ર્/g, "ઋ");
car = car.replace(/ઋઇ/g, "ૠ");
car = car.replace(/ૃઇ/g, "ૄ");

car = car.replace(/્-લ્/g, "ૢ");
car = car.replace(/-લ્/g, "ઌ");
car = car.replace(/ઌઇ/g, "ૡ");
car = car.replace(/ૢઇ/g, "ૣ");

//suppression du zero
car = car.replace(/\u200bક/g, "ક");
car = car.replace(/\u200bખ/g, "ખ");
car = car.replace(/\u200bગ/g, "ગ");
car = car.replace(/\u200bઘ/g, "ઘ");
car = car.replace(/\u200bઙ/g, "ઙ");
car = car.replace(/\u200bચ/g, "ચ");
car = car.replace(/\u200bછ/g, "છ");
car = car.replace(/\u200bજ/g, "જ");
car = car.replace(/\u200bઝ/g, "ઝ");
car = car.replace(/\u200bઞ/g, "ઞ");
car = car.replace(/\u200bટ/g, "ટ");
car = car.replace(/\u200bઠ/g, "ઠ");
car = car.replace(/\u200bડ/g, "ડ");
car = car.replace(/\u200bઢ/g, "ઢ");
car = car.replace(/\u200bણ/g, "ણ");
car = car.replace(/\u200bત/g, "ત");
car = car.replace(/\u200bથ/g, "થ");
car = car.replace(/\u200bદ/g, "દ");
car = car.replace(/\u200bધ/g, "ધ");
car = car.replace(/\u200bન/g, "ન");
car = car.replace(/\u200bપ/g, "પ");
car = car.replace(/\u200bફ/g, "ફ");
car = car.replace(/\u200bબ/g, "બ");
car = car.replace(/\u200bભ/g, "ભ");
car = car.replace(/\u200bમ/g, "મ");
car = car.replace(/\u200bય/g, "ય");
car = car.replace(/\u200bર/g, "ર");
car = car.replace(/\u200bલ/g, "લ");
car = car.replace(/\u200bળ/g, "ળ");
car = car.replace(/\u200bહ/g, "હ");
car = car.replace(/\u200bશ/g, "શ");
car = car.replace(/\u200bષ/g, "ષ");
car = car.replace(/\u200bસ/g, "સ");
car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200b\ં/g, "ં");
car = car.replace(/\u200b\ઃ/g, "ઃ");

// virama permanent
car = car.replace(/=/g, "\u200c");
// car = car.replace(/્્\u200c/g, "્\u200c");

// anusvara
car = car.replace(/[Mṁ]/g, "ં");
car = car.replace(/્ં/g, "ં");
// candrabindu 
car = car.replace(/ંં/g, "ઁ");

// visarga
car = car.replace(/[HḤḥ]/g, "ઃ");
car = car.replace(/્ઃ/g, "ઃ");

// avagraha
car = car.replace(/\'/g, "ઽ");
car = car.replace(/’/g, "ઽ");

//OM
car = car.replace(/W/g, "ૐ");

// ponctuation
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");

car = car.replace(/0/g, "૦");
car = car.replace(/1/g, "૧");
car = car.replace(/2/g, "૨");
car = car.replace(/3/g, "૩");
car = car.replace(/4/g, "૪");
car = car.replace(/5/g, "૫");
car = car.replace(/6/g, "૬");
car = car.replace(/7/g, "૭");
car = car.replace(/8/g, "૮");
car = car.replace(/9/g, "૯");

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