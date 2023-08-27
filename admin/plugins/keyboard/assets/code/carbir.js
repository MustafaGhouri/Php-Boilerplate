//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "အ");
car = car.replace(/[Aā]/g, "အ"); //same
car = car.replace(/i/g, "ဣ");
car = car.replace(/[Iī]/g, "ဤ");
car = car.replace(/u/g, "ဥ");
car = car.replace(/[Uū]/g, "ဦ");
car = car.replace(/ဣဣ/g, "ဤ");
car = car.replace(/ဥဥ/g, "ဦ");
car = car.replace(/e/g, "ဧ");
car = car.replace(/o/g, "ဩ");
car = car.replace(/[Oō]/g, "ဪ");
car = car.replace(/ဩဩ/g, "ဪ");

// doubles voyelles 
car = car.replace(/ိဥ/g, "ို");

// suppression du virama
car = car.replace(/ိဣ/g, "ီ");
car = car.replace(/ုဥ/g, "ူ");
car = car.replace(/္အ/g, "\u200b");
car = car.replace(/\u200bအ/g, "ာ");
car = car.replace(/\u200bဣ/g, "ဲ");
car = car.replace(/္ဣ/g, "ိ");
car = car.replace(/္ဤ/g, "ီ");
car = car.replace(/္ဥ/g, "ု");
car = car.replace(/္ဦ/g, "ူ");
car = car.replace(/္ဧ/g, "ေ");
car = car.replace(/္ဩ/g, "ော");
car = car.replace(/ောဩ/g, "ော်");
// car = car.replace(/္ /g, " "); 

//cons
car = car.replace(/n/g, "န္");
car = car.replace(/k/g, "က္");
car = car.replace(/g/g, "ဂ္");
car = car.replace(/c/g, "စ္");
car = car.replace(/ç/g, "စ္"); // c=ç
car = car.replace(/j/g, "ဇ္");
car = car.replace(/z/g, "ဇ္"); // z=j
car = car.replace(/T/g, "ဋ္");
car = car.replace(/D/g, "ဍ္");
car = car.replace(/N/g, "ဏ္");
car = car.replace(/t/g, "တ္");
car = car.replace(/d/g, "ဒ္");
car = car.replace(/p/g, "ပ္");
car = car.replace(/b/g, "ဗ္");
car = car.replace(/m/g, "မ္");
car = car.replace(/y/g, "ယ္");
car = car.replace(/r/g, "ရ္");
car = car.replace(/l/g, "လ္");
car = car.replace(/L/g, "ဠ္");
car = car.replace(/w/g, "ဝ္");
car = car.replace(/h/g, "ဟ္");
car = car.replace(/s/g, "သ္");
car = car.replace(/S/g, "ဿ္");
// cas particuliers
car = car.replace(/G/g, "င္");
car = car.replace(/J/g, "ဉ္");
car = car.replace(/Z/g, "ဉ္"); // Z=J
car = car.replace(/ñ/g, "ဉ္");
car = car.replace(/Ñ/g, "ည္");
car = car.replace(/န္ဂ္/g, "င္");
car = car.replace(/န္ယ္/g, "ဉ္");
car = car.replace(/ဏ္ယ္/g, "ည္");

// aspirées
car = car.replace(/က္ဟ္/g, "ခ္");
car = car.replace(/ဂ္ဟ္/g, "ဃ္");
car = car.replace(/စ္ဟ္/g, "ဆ္");
car = car.replace(/ဇ္ဟ္/g, "ဈ္");
car = car.replace(/ဋ္ဟ္/g, "ဌ္");
car = car.replace(/ဍ္ဟ္/g, "ဎ္");
car = car.replace(/တ္ဟ္/g, "ထ္");
car = car.replace(/ဒ္ဟ္/g, "ဓ္");
car = car.replace(/ပ္ဟ္/g, "ဖ္");
car = car.replace(/ဗ္ဟ္/g, "ဘ္");

// cas du s barre

// cas du ri li 

//suppression du zero
car = car.replace(/\u200bက/g, "က");
car = car.replace(/\u200bခ/g, "ခ");
car = car.replace(/\u200bဂ/g, "ဂ");
car = car.replace(/\u200bဃ/g, "ဃ");
car = car.replace(/\u200bင/g, "င");
car = car.replace(/\u200bစ/g, "စ");
car = car.replace(/\u200bဆ/g, "ဆ");
car = car.replace(/\u200bဇ/g, "ဇ");
car = car.replace(/\u200bဈ/g, "ဈ");
car = car.replace(/\u200bဉ/g, "ဉ");
car = car.replace(/\u200bည/g, "ည");
car = car.replace(/\u200bဋ/g, "ဋ");
car = car.replace(/\u200bဌ/g, "ဌ");
car = car.replace(/\u200bဍ/g, "ဍ");
car = car.replace(/\u200bဎ/g, "ဎ");
car = car.replace(/\u200bဏ/g, "ဏ");
car = car.replace(/\u200bတ/g, "တ");
car = car.replace(/\u200bထ/g, "ထ");
car = car.replace(/\u200bဒ/g, "ဒ");
car = car.replace(/\u200bဓ/g, "ဓ");
car = car.replace(/\u200bန/g, "န");
car = car.replace(/\u200bပ/g, "ပ");
car = car.replace(/\u200bဖ/g, "ဖ");
car = car.replace(/\u200bဗ/g, "ဗ");
car = car.replace(/\u200bဘ/g, "ဘ");
car = car.replace(/\u200bမ/g, "မ");
car = car.replace(/\u200bယ/g, "ယ");
car = car.replace(/\u200bရ/g, "ရ");
car = car.replace(/\u200bလ/g, "လ");
car = car.replace(/\u200bဝ/g, "ဝ");
car = car.replace(/\u200bသ/g, "သ");
car = car.replace(/\u200bဟ/g, "ဟ");
car = car.replace(/\u200bဠ/g, "ဠ");
car = car.replace(/\u200bဿ/g, "ဿ");

// anusvara
car = car.replace(/M/g, "ံ");
car = car.replace(/္ံ/g, "ံ");
// point inf
car = car.replace(/_/g, "့");
// candrabindu 
// visarga
car = car.replace(/H/g, "း");
car = car.replace(/္း/g, "း");
// avagraha
// ponctuation
car = car.replace(/\|/g, "၊");
car = car.replace(/\//g, "၊");
car = car.replace(/၊၊/g, "။");

car = car.replace(/0/g, "၀");
car = car.replace(/1/g, "၁");
car = car.replace(/2/g, "၂");
car = car.replace(/3/g, "၃");
car = car.replace(/4/g, "၄");
car = car.replace(/5/g, "၅");
car = car.replace(/6/g, "၆");
car = car.replace(/7/g, "၇");
car = car.replace(/8/g, "၈");
car = car.replace(/9/g, "၉");

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