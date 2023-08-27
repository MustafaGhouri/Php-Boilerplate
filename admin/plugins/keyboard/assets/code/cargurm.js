//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ਅ");
car = car.replace(/[Aā]/g, "ਆ");
car = car.replace(/ਅਅ/g, "ਆ");
car = car.replace(/i/g, "ਇ");
car = car.replace(/[Iī]/g, "ਈ");
car = car.replace(/ਇਇ/g, "ਈ");
car = car.replace(/u/g, "ਉ");
car = car.replace(/[Uū]/g, "ਊ");
car = car.replace(/ਉਉ/g, "ਊ");
car = car.replace(/e/g, "ਏ");
car = car.replace(/ਅਇ/g, "ਐ");
car = car.replace(/o/g, "ਓ");
car = car.replace(/ਅਉ/g, "ਔ");



// suppression du virama 
//car = car.replace(/िइ/g, "ी");
//car = car.replace(/ुउ/g, "ू");
car = car.replace(/੍ਅ/g, "\u200b");
car = car.replace(/\u200bਅ/g, "ਾ");
car = car.replace(/\u200bਇ/g, "ੈ");
car = car.replace(/\u200bਉ/g, "ੌ");
car = car.replace(/੍ਆ/g, "ਾ");
car = car.replace(/੍ਇ/g, "ਿ");
car = car.replace(/੍ਈ/g, "ੀ");
car = car.replace(/੍ਉ/g, "ੁ");
car = car.replace(/੍ਊ/g, "ੂ");
car = car.replace(/੍ਏ/g, "ੇ");
car = car.replace(/੍ਐ/g, "ੈ");
car = car.replace(/੍ਓ/g, "ੋ");
car = car.replace(/੍ਔ/g, "ੌ");

car = car.replace(/ਿਇ/g, "ੀ");
car = car.replace(/ੁਉ/g, "ੂ");

car = car.replace(/੍ /g, " ");

//cons
car = car.replace(/k/g, "ਕ੍");
car = car.replace(/g/g, "ਗ੍");
car = car.replace(/c/g, "ਚ੍");
car = car.replace(/j/g, "ਜ੍");
car = car.replace(/[TṭṬ]/g, "ਟ੍");
car = car.replace(/t/g, "ਤ੍");
car = car.replace(/[DḍḌ]/g, "ਡ੍");
car = car.replace(/d/g, "ਦ੍");
car = car.replace(/[NṇṆ]/g, "ਣ੍");
car = car.replace(/n/g, "ਨ੍");
car = car.replace(/p/g, "ਪ੍");
car = car.replace(/b/g, "ਬ੍");
car = car.replace(/m/g, "ਮ੍");
car = car.replace(/y/g, "ਯ੍");
car = car.replace(/r/g, "ਰ੍");
car = car.replace(/l/g, "ਲ੍");
car = car.replace(/v/g, "ਵ੍");
car = car.replace(/s/g, "ਸ੍");
car = car.replace(/h/g, "ਹ੍");
car = car.replace(/z/g, "ਜ਼੍");
car = car.replace(/f/g, "ਫ਼੍");
car = car.replace(/[LḶḷ]/g, "ਲ਼੍");
car = car.replace(/[RṚṛ]/g, "ੜ੍");
car = car.replace(/[çśŚ]/g, "ਸ਼੍");
car = car.replace(/q/g, "ਖ਼੍");
car = car.replace(/X/g, "ਗ਼੍");

//cons aspirees
car = car.replace(/ਕ੍ਹ੍/g, "ਖ੍");
car = car.replace(/ਗ੍ਹ੍/g, "ਘ੍");
car = car.replace(/ਨ੍ਗ੍/g, "ਙ੍");
car = car.replace(/ਚ੍ਹ੍/g, "ਛ੍");
car = car.replace(/ਜ੍ਹ੍/g, "ਝ੍");
car = car.replace(/ਨ੍ਯ੍/g, "ਞ੍");
car = car.replace(/ਟ੍ਹ੍/g, "ਠ੍");
car = car.replace(/ਡ੍ਹ੍/g, "ਢ੍");
car = car.replace(/ਤ੍ਹ੍/g, "ਥ੍");
car = car.replace(/ਦ੍ਹ੍/g, "ਧ੍");
car = car.replace(/ਪ੍ਹ੍/g, "ਫ੍");
car = car.replace(/ਬ੍ਹ੍/g, "ਭ੍");
car = car.replace(/ਸ੍ਹ੍/g, "ਸ਼੍");



// cas particuliers
car = car.replace(/[ṅG]/g, "ਙ੍");
car = car.replace(/[Jñ]/g, "ਞ੍");



//suppression du zero
car = car.replace(/\u200bਕ/g, "ਕ");
car = car.replace(/\u200bਖ/g, "ਖ");
car = car.replace(/\u200bਗ/g, "ਗ");
car = car.replace(/\u200bਘ/g, "ਘ");
car = car.replace(/\u200bਙ/g, "ਙ");
car = car.replace(/\u200bਚ/g, "ਚ");
car = car.replace(/\u200bਛ/g, "ਛ");
car = car.replace(/\u200bਜ/g, "ਜ");
car = car.replace(/\u200bਝ/g, "ਝ");
car = car.replace(/\u200bਞ/g, "ਞ");
car = car.replace(/\u200bਟ/g, "ਟ");
car = car.replace(/\u200bਠ/g, "ਠ");
car = car.replace(/\u200bਡ/g, "ਡ");
car = car.replace(/\u200bਢ/g, "ਢ");
car = car.replace(/\u200bਣ/g, "ਣ");
car = car.replace(/\u200bਤ/g, "ਤ");
car = car.replace(/\u200bਥ/g, "ਥ");
car = car.replace(/\u200bਦ/g, "ਦ");
car = car.replace(/\u200bਧ/g, "ਧ");
car = car.replace(/\u200bਨ/g, "ਨ");
car = car.replace(/\u200bਪ/g, "ਪ");
car = car.replace(/\u200bਫ/g, "ਫ");
car = car.replace(/\u200bਬ/g, "ਬ");
car = car.replace(/\u200bਭ/g, "ਭ");
car = car.replace(/\u200bਮ/g, "ਮ");
car = car.replace(/\u200bਯ/g, "ਯ");
car = car.replace(/\u200bਰ/g, "ਰ");
car = car.replace(/\u200bਲ/g, "ਲ");
car = car.replace(/\u200bਲ਼/g, "ਲ਼");
car = car.replace(/\u200bਵ/g, "ਵ");
car = car.replace(/\u200bਸ਼/g, "ਸ਼");
car = car.replace(/\u200bਸ/g, "ਸ");
car = car.replace(/\u200bਹ/g, "ਹ");
car = car.replace(/\u200bਖ਼/g, "ਖ਼");
car = car.replace(/\u200bਗ਼/g, "ਗ਼");
car = car.replace(/\u200bਜ਼/g, "ਜ਼");
car = car.replace(/\u200bੜ/g, "ੜ");
car = car.replace(/\u200bਫ਼/g, "ਫ਼");

car = car.replace(/\u200b /g, " ");
car = car.replace(/\u200b\ਂ/g, "ਂ");
car = car.replace(/\u200b\ਃ/g, "ਃ");



// anusvara
car = car.replace(/M/g, "ਂ");
car = car.replace(/੍ਂ/g, "ਂ");
// candrabindu 
car = car.replace(/ਂਂ/g, "ਁ");

// visarga
car = car.replace(/H/g, "ਃ");
car = car.replace(/੍ਃ/g, "ਃ");



// nukta
car = car.replace(/=/g, "਼");


// chiffres
car = car.replace(/0/g, "੦");
car = car.replace(/1/g, "੧");
car = car.replace(/2/g, "੨");
car = car.replace(/3/g, "੩");
car = car.replace(/4/g, "੪");
car = car.replace(/5/g, "੫");
car = car.replace(/6/g, "੬");
car = car.replace(/7/g, "੭");
car = car.replace(/8/g, "੮");
car = car.replace(/9/g, "੯");


// ponctuation
car = car.replace(/\|/g, "।");
car = car.replace(/\//g, "।");
car = car.replace(/।।/g, "॥");





// nasale ee > n 
car = car.replace(/ੇਏ/g, "ੰ");

//zwj
car = car.replace(/x/g, "\u200d੍");
car = car.replace(/੍\u200d/g, "\u200d");


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