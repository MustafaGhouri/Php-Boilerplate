//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
// cas du ri li 
car = car.replace(/\u200b-r/g, "ྲྀ");
car = car.replace(/\u200b-l/g, "ླྀ");

car = car.replace(/k/g, "ཀ\u200b");
car = car.replace(/z/g, "ཟ\u200b");
car = car.replace(/s/g, "ས\u200b");
car = car.replace(/y/g, "ཡ\u200b");
car = car.replace(/t/g, "ཏ\u200b");
car = car.replace(/ཏ\u200bh/g, "ཐ\u200b");
car = car.replace(/d/g, "ད\u200b");
car = car.replace(/ད\u200bh/g, "དྷ\u200b");
car = car.replace(/ཀ\u200bh/g, "ཁ\u200b");
car = car.replace(/g/g, "ག\u200b");
car = car.replace(/ག\u200bh/g, "གྷ\u200b");
car = car.replace(/n/g, "ན\u200b");
car = car.replace(/ན\u200bག\u200b/g, "ང\u200b"); // ng
car = car.replace(/G/g, "ང\u200b"); 
car = car.replace(/c/g, "ཅ\u200b");
car = car.replace(/ཅ\u200bh/g, "ཆ\u200b");
car = car.replace(/j/g, "ཇ\u200b");
car = car.replace(/ན\u200bཡ\u200b/g, "ཉ\u200b"); //ny
car = car.replace(/[Jñ]/g, "ཉ\u200b");
// nn N car = car.replace(/ན\u200bན\u200b/g, "ཎ\u200b");
// T car = car.replace(/ཏ\u200bཏ\u200b/g, "ཊ\u200b");
// Th car = car.replace(/ཊ\u200bཧ\u200b/g, "ཋ\u200b");
// D car = car.replace(/ད\u200bད\u200b/g, "ཌ\u200b");
// Dh? car = car.replace(/ཌ\u200bཧ\u200b/g, "ཌྷ\u200b");
car = car.replace(/p/g, "པ\u200b");
car = car.replace(/པ\u200bh/g, "ཕ\u200b");
car = car.replace(/b/g, "བ\u200b");
car = car.replace(/བ\u200bh/g, "བྷ\u200b");
car = car.replace(/m/g, "མ\u200b");
car = car.replace(/ཏ\u200bས\u200b/g, "ཙ\u200b");
car = car.replace(/ཙ\u200bh/g, "ཚ\u200b");
car = car.replace(/ད\u200bཟ\u200b/g, "ཛ\u200b");
car = car.replace(/ཛ\u200bཧ\u200b/g, "ཛྷ\u200b");
car = car.replace(/w/g, "ཝ\u200b");
car = car.replace(/ཟ\u200bh/g, "ཞ\u200b");
car = car.replace(/-a/g, "འ\u200b");
car = car.replace(/r/g, "ར\u200b");
car = car.replace(/R/g, "ཪ\u200b");
car = car.replace(/l/g, "ལ\u200b");
car = car.replace(/[çś]/g, "ཤ\u200b"); // sh
car = car.replace(/ས\u200bh/g, "ཤ\u200b"); // sh
// Sh car = car.replace(/ས\u200bས\u200b/g, "ཥ\u200b");

car = car.replace(/T/g, "ཊ\u200b");
car = car.replace(/ཊ\u200bh/g, "ཋ\u200b");
car = car.replace(/D/g, "ཌ\u200b");
car = car.replace(/ཌ\u200bh/g, "ཌྷ\u200b");
car = car.replace(/N/g, "ཎ\u200b");
car = car.replace(/[SṢ]/g, "ཥ\u200b");
car = car.replace(/ཀ\u200bཥ\u200b/g, "ཀྵ/u200b"); //kS

car = car.replace(/h/g, "ཧ\u200b");

// cas du a (q)
car = car.replace(/q/g, "ཨ\u200b");

// cas du a consonne double emploi
// car=car.replace(/a/g, "ཨ");

// sub
car = car.replace(/\u200bཀ/g, "ྐ");
car = car.replace(/ྐ\u200bཧ/g, "ྑ"); //kh
car = car.replace(/\u200bཁ/g, "ྑ");
car = car.replace(/\u200bག/g, "ྒ");
car = car.replace(/\u200bགྷ/g, "ྒྷ"); //gh
car = car.replace(/\u200bང/g, "ྔ");
car = car.replace(/\u200bཅ/g, "ྕ");
car = car.replace(/\u200bཆ/g, "ྖ");
car = car.replace(/\u200bཇ/g, "ྗ");
car = car.replace(/\u200bཉ/g, "ྙ");
car = car.replace(/\u200bཏ/g, "ྟ");
car = car.replace(/\u200bཐ/g, "ྠ"); 
car = car.replace(/\u200bད/g, "ྡ");
car = car.replace(/\u200bདྷ/g, "ྡྷ"); //dh
car = car.replace(/\u200bན/g, "ྣ");
car = car.replace(/\u200bཔ/g, "ྤ");
car = car.replace(/ྤ\u200bཧ/g, "ྥ"); //ph
car = car.replace(/\u200bབ/g, "ྦ");
car = car.replace(/\u200bབྷ/g, "ྦྷ"); //bh
car = car.replace(/\u200bམ/g, "ྨ");
car = car.replace(/ྟ\u200bས/g, "ྩ"); //ts
car = car.replace(/ྩ\u200bཧ/g, "ྪ"); //tsh
car = car.replace(/ྡ\u200bཟ/g, "ྫ"); //dz
car = car.replace(/\u200bཛྷ/g, "ྫྷ"); //dzh
car = car.replace(/\u200bཝ/g, "ྭ");
car = car.replace(/\u200bཟ/g, "ྯ"); //z
car = car.replace(/ྯ\u200bཧ/g, "ྮ"); //zh
car = car.replace(/\u200bའ/g, "ྰ");
car = car.replace(/\u200bཡ/g, "ྱ");
car = car.replace(/\u200bར/g, "ྲ");
car = car.replace(/\u200bཪ/g, "ྼ"); //R
car = car.replace(/\u200bལ/g, "ླ");
car = car.replace(/\u200bས/g, "ྶ"); //s
car = car.replace(/ྶ\u200bཧ/g, "ྴ"); //sh
car = car.replace(/\u200bཨ/g, "ྸ");

car = car.replace(/\u200bཊ/g, "ྚ");
car = car.replace(/ྚ\u200bཧ/g, "ྛ"); //Th
car = car.replace(/\u200bཌ/g, "ྜ");
car = car.replace(/ྜ\u200bཧ/g, "ྜྷ"); //Dh
car = car.replace(/\u200bཌྷ/g, "ྜྷ");
car = car.replace(/\u200bཎ/g, "ྞ");
car = car.replace(/\u200bཥ/g, "ྵ"); //S
car = car.replace(/ྐ\u200bཥ/g, " ྐྵ "); //kS

car = car.replace(/\u200bཧ/g, "ྷ"); //h

// cas du a (q)
car = car.replace(/\u200bཨ/g, " ྸ");


// autres voyelles
car = car.replace(/\u200bi/g, "ི");
car = car.replace(/\u200bu/g, "ུ");
car = car.replace(/\u200be/g, "ེ");
car = car.replace(/\u200bo/g, "ོ");

car = car.replace(/ིi/g, "ཱི");
car = car.replace(/ུu/g, "ཱུ");
car = car.replace(/ེe/g, "ཻ");
car = car.replace(/ོo/g, "ཽ");

car = car.replace(/\u200bA/g, "ཱ");
car = car.replace(/\u200bI/g, "ཱི");
car = car.replace(/\u200bU/g, "ཱུ");
car = car.replace(/\u200bE/g, "ཻ");
car = car.replace(/\u200bO/g, "ཽ");

// replace a
car = car.replace(/a/g, "ཱ");
car = car.replace(/\u200bཱ/g, "");


// cas du rii lii 
car = car.replace(/ྲྀi/g, "ཷ");
car = car.replace(/ླྀi/g, "ཹ");


car = car.replace(/M/g, "ཾ");
car = car.replace(/ཾཾ/g, "ྃ");

//separation
car = car.replace(/\,/g, "\'");
car = car.replace(/\u200b\'/g, "་");
car = car.replace(/\'/g, "་");
car = car.replace(/\u200b\ /g, "");

// ponctuation
car = car.replace(/\!/g, "།");
//car = car.replace(/་།/g, "༏");

car = car.replace(/0/g, "༠");
car = car.replace(/1/g, "༡");
car = car.replace(/2/g, "༢");
car = car.replace(/3/g, "༣");
car = car.replace(/4/g, "༤");
car = car.replace(/5/g, "༥");
car = car.replace(/6/g, "༦");
car = car.replace(/7/g, "༧");
car = car.replace(/8/g, "༨");
car = car.replace(/9/g, "༩");


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