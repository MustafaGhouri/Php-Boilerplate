//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/\'/g, "\̕");

car = car.replace(/a/g, "ա");
car = car.replace(/b/g, "բ");
car = car.replace(/g/g, "գ");
car = car.replace(/d/g, "դ");
car = car.replace(/[eè]/g, "ե");
car = car.replace(/z/g, "զ");
car = car.replace(/[ēêé]/g, "է");
car = car.replace(/եե/g, "է");
car = car.replace(/ë/g, "ը");
car = car.replace(/ե̕/g, "ը");
car = car.replace(/ե=/g, "ը");
car = car.replace(/ը=/g, "ե");
car = car.replace(/ž/g, "ժ");
car = car.replace(/i/g, "ի");
car = car.replace(/l/g, "լ");
car = car.replace(/x/g, "խ");
car = car.replace(/[çc]/g, "ծ");
car = car.replace(/k/g, "կ");
car = car.replace(/h/g, "հ");
car = car.replace(/j/g, "ձ");
car = car.replace(/ġ/g, "ղ");
car = car.replace(/č̣/g, "ճ");
car = car.replace(/m/g, "մ");
car = car.replace(/y/g, "յ");
car = car.replace(/n/g, "ն");
car = car.replace(/š/g, "շ");
car = car.replace(/o/g, "ո");
car = car.replace(/č/g, "չ");
car = car.replace(/p/g, "պ");
car = car.replace(/ǰ/g, "ջ");
car = car.replace(/ṙ/g, "ռ");
car = car.replace(/s/g, "ս");
car = car.replace(/v/g, "վ");
car = car.replace(/t/g, "տ");
car = car.replace(/r/g, "ր");
car = car.replace(/[uw]/g, "ւ");
car = car.replace(/[òōô]/g, "օ");
car = car.replace(/ոո/g, "օ");
car = car.replace(/ո=/g, "օ");
car = car.replace(/f/g, "ֆ");

car = car.replace(/պ̕/g, "փ");
car = car.replace(/կ̕/g, "ք");
car = car.replace(/տ̕/g, "թ");
car = car.replace(/ծ̕/g, "ց"); // c
car = car.replace(/ր̕/g, "ռ");

car = car.replace(/պ=/g, "փ");
car = car.replace(/կ=/g, "ք");
car = car.replace(/տ=/g, "թ");
car = car.replace(/ծ=/g, "ց");
car = car.replace(/ր=/g, "ռ");

car = car.replace(/կհ/g, "խ"); // kh
car = car.replace(/տս/g, "ծ"); // ts
car = car.replace(/դզ/g, "ձ"); // dz
car = car.replace(/զհ/g, "ժ"); // zh
car = car.replace(/զ=/g, "ժ"); // z
car = car.replace(/գհ/g, "ղ"); // gh
car = car.replace(/գ=/g, "ղ"); // g
car = car.replace(/ծհ/g, "ճ"); // ch
car = car.replace(/ց=/g, "ճ");
car = car.replace(/սհ/g, "շ"); // sh
car = car.replace(/ս=/g, "շ"); // s
car = car.replace(/ճ̕/g, "չ"); // ch'
car = car.replace(/ճ=/g, "չ");
car = car.replace(/տծ/g, "չ"); // tc
car = car.replace(/ծ̕/g, "ց"); // ts'
car = car.replace(/ձհ/g, "ջ"); // dzh
car = car.replace(/ձ=/g, "ջ"); //j
car = car.replace(/րր/g, "ռ"); // rr

car = car.replace(/եւ=/g, "և"); //ew

car = car.replace(/A/g, "Ա");
car = car.replace(/B/g, "Բ");
car = car.replace(/G/g, "Գ");
car = car.replace(/D/g, "Դ");
car = car.replace(/[EÈ]/g, "Ե");
car = car.replace(/Z/g, "Զ");
car = car.replace(/[ĒÊÉ]/g, "Է");
car = car.replace(/ԵԵ/g, "Է");
car = car.replace(/Ë/g, "Ը");
car = car.replace(/Ե=/g, "Ը");
car = car.replace(/Ե'/g, "Ը");
car = car.replace(/Ը=/g, "Ե");
car = car.replace(/Ž/g, "Ժ");
car = car.replace(/I/g, "Ի");
car = car.replace(/L/g, "Լ");
car = car.replace(/X/g, "Խ");
car = car.replace(/[ÇC]/g, "Ծ");
car = car.replace(/K/g, "Կ");
car = car.replace(/H/g, "Հ");
car = car.replace(/J/g, "Ձ");
car = car.replace(/Ġ/g, "Ղ");
car = car.replace(/Č̣/g, "Ճ");
car = car.replace(/M/g, "Մ");
car = car.replace(/Y/g, "Յ");
car = car.replace(/N/g, "Ն");
car = car.replace(/Š/g, "Շ");
car = car.replace(/O/g, "Ո");
car = car.replace(/Č/g, "Չ");
car = car.replace(/P/g, "Պ");
car = car.replace(/ǰ/g, "Ջ");
car = car.replace(/Ṙ/g, "Ռ");
car = car.replace(/S/g, "Ս");
car = car.replace(/V/g, "Վ");
car = car.replace(/T/g, "Տ");
car = car.replace(/R/g, "Ր");
car = car.replace(/[UW]/g, "Ւ");
car = car.replace(/[ÒŌÔ]/g, "Օ");
car = car.replace(/Ո=/g, "Օ");
car = car.replace(/ՈՈ/g, "Օ");
car = car.replace(/F/g, "Ֆ");

car = car.replace(/Պ̕/g, "Փ");
car = car.replace(/Կ̕/g, "Ք");
car = car.replace(/Տ̕/g, "Թ");
car = car.replace(/Ծ̕/g, "Ց"); // C
car = car.replace(/Ր̕/g, "Ռ");

car = car.replace(/Պ=/g, "Փ");
car = car.replace(/Կ=/g, "Ք");
car = car.replace(/Տ=/g, "Թ");
car = car.replace(/Ծ=/g, "Ց");
car = car.replace(/Ր=/g, "Ռ");

car = car.replace(/ԿՀ/g, "Խ"); // KH
car = car.replace(/ՏՍ/g, "Ծ"); // TS
car = car.replace(/ԴԶ/g, "Ձ"); // DZ
car = car.replace(/ԶՀ/g, "Ժ"); // ZH
car = car.replace(/Զ=/g, "Ժ"); // Z
car = car.replace(/ԳՀ/g, "Ղ"); // GH
car = car.replace(/Գ=/g, "Ղ"); // G
car = car.replace(/ԾՀ/g, "Ճ"); // CH
car = car.replace(/Ց=/g, "Ճ");
car = car.replace(/ՍՀ/g, "Շ"); // SH
car = car.replace(/Ս=/g, "Շ"); // S
car = car.replace(/Ճ̕/g, "Չ"); // CH'
car = car.replace(/Ճ=/g, "Չ");
car = car.replace(/Ծ̕/g, "Ց"); // TS'
car = car.replace(/ՁՀ/g, "Ջ"); // DZH
car = car.replace(/Ձ=/g, "Ջ"); //J

car = car.replace(/ԵՒ=/g, "և"); //EW
car = car.replace(/Եւ=/g, "և"); //Ew

car = car.replace(/Կհ/g, "Խ"); // kh
car = car.replace(/Տս/g, "Ծ"); // ts
car = car.replace(/Դզ/g, "Ձ"); // dz
car = car.replace(/Զհ/g, "Ժ"); // zh
car = car.replace(/Գհ/g, "ղ"); // gh
car = car.replace(/Ցհ/g, "Ղ"); // ch
car = car.replace(/Սհ/g, "Շ"); // sh
car = car.replace(/Ձհ/g, "Ջ"); // dzh
car = car.replace(/ՐՐ/g, "Ռ"); // RR
car = car.replace(/Րր/g, "Ռ");

car = car.replace(/\./g, "։");
car = car.replace(/\?/g, "՞");
car = car.replace(/\,/g, "՝");
car = car.replace(/\!/g, "՜");


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