//copyrightlexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/a/g, "ឣ");
car = car.replace(/[Aā]/g, "ឤ");
car = car.replace(/i/g, "ឥ");
car = car.replace(/[Iī]/g, "ឦ");
car = car.replace(/u/g, "ឧ");
car = car.replace(/[Uū]/g, "ឩ");
car = car.replace(/ឣឣ/g, "ឤ");
car = car.replace(/ឥឥ/g, "ឦ");
car = car.replace(/ឧឧ/g, "ឩ");
car = car.replace(/ឱឱ/g, "ឲ");
car = car.replace(/e/g, "ឯ");
car = car.replace(/ឣឥ/g, "ឰ"); //ai
car = car.replace(/ឣឧ/g, "ឳ"); //au


// voy w
car = car.replace(/[wəœ]/g, "ឹ"); 
car = car.replace(/្ឹ/g, "ឹ");
car = car.replace(/ឹឹ/g, "ឺ");
car = car.replace(/[WƏŒ]/g, "ឺ");
//aw à voir
car = car.replace(/ុឥ/g, "ុិ"); //ui


//suppression du virama
car = car.replace(/ិឥ/g, "ី"); // ii
car = car.replace(/ុឧ/g, "ូ"); //uu
car = car.replace(/្ឣ/g, "\u200b");
car = car.replace(/\u200bឣ/g, "ា"); //a
car = car.replace(/\u200bឯ/g, "ែ");
car = car.replace(/\u200bउ/g, "ឥ");
car = car.replace(/\u200bឧ/g, "ៅ");
car = car.replace(/\u200bឥ/g, "ៃ");
car = car.replace(/្ឤ/g, "ា");
car = car.replace(/្ឥ/g, "ិ");
car = car.replace(/្ឧ/g, "ុ");
car = car.replace(/្ឩ/g, "ូ");
car = car.replace(/្ឯ/g, "េ");

car = car.replace(/្ ឰ /g, "ៃ"); //ai
car = car.replace(/្ ឳ/g, "ៅ"); //au
car = car.replace(/ិឯ/g, "ៀ"); //ie
car = car.replace(/ុឯ/g, "ឿ"); //ue
car = car.replace(/ុឣ/g, "ួ"); //ua

//o
car = car.replace(/o/g, "ឱ");
car = car.replace(/្ឱ/g, "\u200b");
car = car.replace(/\u200bឱ/g, "ោ"); //ao
car = car.replace(/\u200bឹ/g, "ើ"); //aw



//cons
car = car.replace(/n/g, "ន្");
car = car.replace(/k/g, "ក្");
car = car.replace(/g/g, "គ្");
car = car.replace(/c/g, "ច្");
car = car.replace(/j/g, "ជ្");
car = car.replace(/T/g, "ដ្");
car = car.replace(/D/g, "ឌ្");
car = car.replace(/N/g, "ណ្");
car = car.replace(/t/g, "ត្");
car = car.replace(/d/g, "ទ្");
car = car.replace(/b/g, "ប្");
car = car.replace(/p/g, "ព្");
car = car.replace(/m/g, "ម្");
car = car.replace(/y/g, "យ្");
car = car.replace(/r/g, "រ្");
car = car.replace(/l/g, "ល្");
car = car.replace(/v/g, "វ្");
car = car.replace(/h/g, "ហ្");
car = car.replace(/S/g, "ឞ្");
car = car.replace(/s/g, "ស្");
car = car.replace(/q/g, "អ្");
// voir 2e l

//casparticuliers
car = car.replace(/G/g, "ង្");
car = car.replace(/J/g, "ញ្");
car = car.replace(/ñ/g, "ញ្");

//aspirées
car = car.replace(/ក្ហ្/g, "ខ្");
car = car.replace(/គ្ហ្/g, "ឃ្");
car = car.replace(/ច្ហ្/g, "ឆ្");
car = car.replace(/ជ្ហ្/g, "ឈ្");
car = car.replace(/ដ្ហ្/g, "ឋ្");
car = car.replace(/ឌ្ហ្/g, "ឍ្");
car = car.replace(/ត្ហ្/g, "ថ្");
car = car.replace(/ទ្ហ្/g, "ធ្");
car = car.replace(/ប្ហ្/g, "ផ្");
car = car.replace(/ព្ហ្/g, "ភ្");

//cas du s barre
car = car.replace(/ស្ហ្/g, "ឝ្");
car = car.replace(/ç/g, "ឝ្");

// cas du ri li 
car = car.replace(/-រ្/g, "ឫ");
car = car.replace(/ឫឥ/g, "ឬ");

car = car.replace(/-ល្/g, "ឭ");
car = car.replace(/ឭឥ/g, "ឮ");


//suppression du zero
car = car.replace(/​\u200bក/g, "ក");
car = car.replace(/​\u200bខ/g, "ខ");
car = car.replace(/​\u200bគ/g, "គ");
car = car.replace(/​\u200bឃ/g, "ឃ");
car = car.replace(/​\u200bង/g, "ង");
car = car.replace(/​\u200bច/g, "ច");
car = car.replace(/​\u200bឆ/g, "ឆ");
car = car.replace(/​\u200bជ/g, "ជ");
car = car.replace(/​\u200bឈ/g, "ឈ");
car = car.replace(/​\u200bញ/g, "ញ");
car = car.replace(/​\u200bដ/g, "ដ");
car = car.replace(/​\u200bឋ/g, "ឋ");
car = car.replace(/​\u200bឌ/g, "ឌ");
car = car.replace(/​\u200bឍ/g, "ឍ");
car = car.replace(/​\u200bណ/g, "ណ");
car = car.replace(/​\u200bត/g, "ត");
car = car.replace(/​\u200bថ/g, "ថ");
car = car.replace(/​\u200bទ/g, "ទ");
car = car.replace(/​\u200bធ/g, "ធ");
car = car.replace(/​\u200bន/g, "ន");
car = car.replace(/​\u200bប/g, "ប");
car = car.replace(/​\u200bផ/g, "ផ");
car = car.replace(/​\u200bព/g, "ព");
car = car.replace(/​\u200bភ/g, "ភ");
car = car.replace(/​\u200bម/g, "ម");
car = car.replace(/​\u200bយ/g, "យ");
car = car.replace(/​\u200bរ/g, "រ");
car = car.replace(/​\u200bល/g, "ល");
car = car.replace(/​\u200bវ/g, "វ");
car = car.replace(/​\u200bឝ/g, "ឝ");
car = car.replace(/​\u200bឞ/g, "ឞ");
car = car.replace(/​\u200bស/g, "ស");
car = car.replace(/​\u200bហ/g, "ហ");
car = car.replace(/​\u200bឡ/g, "ឡ");
car = car.replace(/​\u200bអ/g, "អ");

//car=car.replace(/\u200b\ं/g,"ं");
//car=car.replace(/\u200b\ः/g,"ः");

car = car.replace(/0/g, "០");
car = car.replace(/1/g, "១");
car = car.replace(/2/g, "២");
car = car.replace(/3/g, "៣");
car = car.replace(/4/g, "៤");
car = car.replace(/5/g, "៥");
car = car.replace(/6/g, "៦");
car = car.replace(/7/g, "៧");
car = car.replace(/8/g, "៨");
car = car.replace(/9/g, "៩");

// signes
car = car.replace(/H/g, "ះ");
car = car.replace(/Q/g, "ៈ");
car = car.replace(/M/g, "ំ");

// ponctuation
car = car.replace(/\//g, "។");
car = car.replace(/\|/g, "។");
car = car.replace(/។។/g, "៕");

 

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