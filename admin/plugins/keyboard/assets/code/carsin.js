//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "අ");
car = car.replace(/[Aā]/g, "ආ");
car = car.replace(/අඅ/g, "ආ");
car = car.replace(/i/g, "ඉ");
car = car.replace(/[Iī]/g, "ඊ");
car = car.replace(/ඉඉ/g, "ඊ");
car = car.replace(/u/g, "උ");
car = car.replace(/[Uū]/g, "ඌ");
car = car.replace(/උඋ/g, "ඌ");
car = car.replace(/e/g, "එ");
car = car.replace(/[Eē]/g, "ඒ");
car = car.replace(/එඑ/g, "ඒ");
car = car.replace(/o/g, "ඔ");
car = car.replace(/[Oō]/g, "ඕ");
car = car.replace(/ඔඔ/g, "ඕ");
car = car.replace(/[äæ]/g, "ඇ");
car = car.replace(/[Äǣ]/g, "ඈ");
car = car.replace(/q/g, "ඇ");
car = car.replace(/Q/g, "ඈ");
car = car.replace(/ඇඇ/g, "ඈ");
car = car.replace(/අඑ/g, "ඇ");
car = car.replace(/ආඒ/g, "ඈ");
car = car.replace(/අඉ/g, "ඓ");
car = car.replace(/අඋ/g, "ඖ");


// suppression du virama 
car = car.replace(/්අ/g, "\u200b");
car = car.replace(/\u200bඅ/g, "ා");
car = car.replace(/\u200bඉ/g, "ෛ");
car = car.replace(/\u200bඋ/g, "ෞ");
car = car.replace(/\u200bඑ/g, "ැ");
// A
car = car.replace(/්ආ/g, "ා");
// voy  AE 
car = car.replace(/්ඇ/g, "ැ");
car = car.replace(/ැඇ/g, "ෑ");
car = car.replace(/ාඒ/g, "ෑ");
car = car.replace(/්ඈ/g, "ෑ");
// i u
car = car.replace(/්ඉ/g, "ි");
car = car.replace(/්ඊ/g, "ී");
car = car.replace(/ිඉ/g, "ී");
car = car.replace(/්උ/g, "ු");
car = car.replace(/්ඌ/g, "ූ");
car = car.replace(/ුඋ/g, "ූ");
// e o 
car = car.replace(/්එ/g, "ෙ");
car = car.replace(/්ඒ/g, "ේ");
car = car.replace(/ෙඑ/g, "ේ");
car = car.replace(/්ඔ/g, "ො");
car = car.replace(/්ඕ/g, "ෝ");
car = car.replace(/ොඔ/g, "ෝ");

// ya ra ksha
car = car.replace(/්ය/g, "්\u200dය");
car = car.replace(/්ර/g, "්\u200dර");
car = car.replace(/්ෂ/g, "්\u200dෂ");

// car = car.replace(/් /g, " ");

//cons
car = car.replace(/n/g, "න්");
car = car.replace(/k/g, "ක්");
car = car.replace(/g/g, "ග්");
car = car.replace(/c/g, "ච්");
car = car.replace(/j/g, "ජ්");
car = car.replace(/[TṭṬ]/g, "ට්");
car = car.replace(/[DḍḌ]/g, "ඩ්");
car = car.replace(/[NṇṆ]/g, "ණ්");
car = car.replace(/t/g, "ත්");
car = car.replace(/d/g, "ද්");
car = car.replace(/p/g, "ප්");
car = car.replace(/b/g, "බ්");
car = car.replace(/m/g, "ම්");
car = car.replace(/f/g, "ෆ්");
car = car.replace(/y/g, "ය්");
car = car.replace(/r/g, "ර්");
car = car.replace(/l/g, "ල්");
car = car.replace(/[LḷḶ]/g, "ළ්");
car = car.replace(/v/g, "ව්");
car = car.replace(/h/g, "හ්");
car = car.replace(/[SṣṢ]/g, "ෂ්");
car = car.replace(/s/g, "ස්");
// cas particuliers
car = car.replace(/ñ/g, "ඤ්");
// ng nng nj-kn jñ-gn ñj ND nd mb
car = car.replace(/න්ග්/g, "ඞ්");
car = car.replace(/න්ඞ්/g, "ඟ්");
car = car.replace(/න්ජ්/g, "ඤ්");
car = car.replace(/ක්න්/g, "ඤ්");
car = car.replace(/ජ්ඤ්/g, "ඥ්");
car = car.replace(/ග්න්/g, "ඥ්");
car = car.replace(/ඤ්ජ්/g, "ඦ්");
car = car.replace(/ණ්ඩ්/g, "ඬ්");
car = car.replace(/න්ද්/g, "ඳ්");
car = car.replace(/ම්බ්/g, "ඹ්");


// aspirées
car = car.replace(/ක්හ්/g, "ඛ්")
car = car.replace(/ග්හ්/g, "ඝ්")
car = car.replace(/ච්හ්/g, "ඡ්")
car = car.replace(/ජ්හ්/g, "ඣ්")
car = car.replace(/ට්හ්/g, "ඨ්")
car = car.replace(/ඩ්හ්/g, "ඪ්")
car = car.replace(/ත්හ්/g, "ථ්")
car = car.replace(/ද්හ්/g, "ධ්")
car = car.replace(/ප්හ්/g, "ඵ්")
car = car.replace(/බ්හ්/g, "භ්")

// cas du s barre
car = car.replace(/ස්හ්/g, "ශ්");
car = car.replace(/[çś]/g, "ශ්");

// cas du ri li 
car = car.replace(/්-ර්/g, "ෘ");
car = car.replace(/-ර්/g, "ඍ");
car = car.replace(/ඍඋ/g, "ඎ");
car = car.replace(/ෘඋ/g, "ෲ");

car = car.replace(/්-ල්/g, "ෟ");
car = car.replace(/-ල්/g, "ඏ");
car = car.replace(/ඏඉ/g, "ඐ");
car = car.replace(/ෟඉ/g, "ෳ");

//suppression du zero
car = car.replace(/\u200bක/g, "ක");
car = car.replace(/\u200bඛ/g, "ඛ");
car = car.replace(/\u200bග/g, "ග");
car = car.replace(/\u200bඝ/g, "ඝ");
car = car.replace(/\u200bඞ/g, "ඞ");
car = car.replace(/\u200bඟ/g, "ඟ");
car = car.replace(/\u200bච/g, "ච");
car = car.replace(/\u200bඡ/g, "ඡ");
car = car.replace(/\u200bජ/g, "ජ");
car = car.replace(/\u200bඣ/g, "ඣ");
car = car.replace(/\u200bඤ/g, "ඤ");
car = car.replace(/\u200bඥ/g, "ඥ");
car = car.replace(/\u200bඦ/g, "ඦ");
car = car.replace(/\u200bට/g, "ට");
car = car.replace(/\u200bඨ/g, "ඨ");
car = car.replace(/\u200bඩ/g, "ඩ");
car = car.replace(/\u200bඪ/g, "ඪ");
car = car.replace(/\u200bණ/g, "ණ");
car = car.replace(/\u200bඬ/g, "ඬ");
car = car.replace(/\u200bත/g, "ත");
car = car.replace(/\u200bථ/g, "ථ");
car = car.replace(/\u200bද/g, "ද");
car = car.replace(/\u200bධ/g, "ධ");
car = car.replace(/\u200bන/g, "න");
car = car.replace(/\u200bඳ/g, "ඳ");
car = car.replace(/\u200bප/g, "ප");
car = car.replace(/\u200bඵ/g, "ඵ");
car = car.replace(/\u200bබ/g, "බ");
car = car.replace(/\u200bභ/g, "භ");
car = car.replace(/\u200bම/g, "ම");
car = car.replace(/\u200bඹ/g, "ඹ");
car = car.replace(/\u200bය/g, "ය");
car = car.replace(/\u200bර/g, "ර");
car = car.replace(/\u200bල/g, "ල");
car = car.replace(/\u200bළ/g, "ළ");
car = car.replace(/\u200bව/g, "ව");
car = car.replace(/\u200bහ/g, "හ");
car = car.replace(/\u200bශ/g, "ශ");
car = car.replace(/\u200bෂ/g, "ෂ");
car = car.replace(/\u200bස/g, "ස");
car = car.replace(/\u200bෆ/g, "ෆ");
car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200bං/g, "ං");
car = car.replace(/\u200bඃ/g, "ඃ");

// suppression virama
car = car.replace(/්=/g, "");

// anusvara
car = car.replace(/[Mṁ]/g, "ං");
car = car.replace(/්ං/g, "ං");
// visarga
car = car.replace(/H/g, "ඃ");
car = car.replace(/්ඃ/g, "ඃ");
// ponctuation
car = car.replace(/[wW]/g, "෴");


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