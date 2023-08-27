var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/e/g, "i");
car = car.replace(/o/g, "o");
car = car.replace(/[kc]/g, "ᜃ᜔");
car = car.replace(/ᜃ᜔a/g, "ᜃ");
car = car.replace(/ᜃ᜔i/g, "ᜃᜒ");
car = car.replace(/ᜃ᜔u/g, "ᜃᜓ");
car = car.replace(/g/g, "ᜄ᜔");
car = car.replace(/ᜄ᜔a/g, "ᜄ");
car = car.replace(/ᜄ᜔i/g, "ᜄᜒ");
car = car.replace(/ᜄ᜔u/g, "ᜄᜓ");
car = car.replace(/n/g, "ᜈ᜔");
car = car.replace(/ᜈ᜔a/g, "ᜈ");
car = car.replace(/ᜈ᜔i/g, "ᜈᜒ");
car = car.replace(/ᜈ᜔u/g, "ᜈᜓ");
car = car.replace(/ᜈ᜔ᜄ᜔/g, "ᜅ᜔");
car = car.replace(/ᜅ᜔a/g, "ᜅ");
car = car.replace(/ᜅ᜔i/g, "ᜅᜒ");
car = car.replace(/ᜅ᜔u/g, "ᜅᜓ");
car = car.replace(/t/g, "ᜆ᜔");
car = car.replace(/ᜆ᜔a/g, "ᜆ");
car = car.replace(/ᜆ᜔i/g, "ᜆᜒ");
car = car.replace(/ᜆ᜔u/g, "ᜆᜓ");
car = car.replace(/r/g, "ᜍ᜔");
car = car.replace(/ᜍ᜔a/g, "ᜍ");
car = car.replace(/ᜍ᜔i/g, "ᜍᜒ");
car = car.replace(/ᜍ᜔u/g, "ᜍᜓ");
car = car.replace(/d/g, "ᜇ᜔");
car = car.replace(/ᜇ᜔a/g, "ᜇ");
car = car.replace(/ᜇ᜔i/g, "ᜇᜒ");
car = car.replace(/ᜇ᜔u/g, "ᜇᜓ");
car = car.replace(/f/g, "ᜉ᜔");
car = car.replace(/p/g, "ᜉ᜔");
car = car.replace(/ᜉ᜔a/g, "ᜉ");
car = car.replace(/ᜉ᜔i/g, "ᜉᜒ");
car = car.replace(/ᜉ᜔u/g, "ᜉᜓ");
car = car.replace(/v/g, "ᜊ᜔");
car = car.replace(/b/g, "ᜊ᜔");
car = car.replace(/ᜊ᜔a/g, "ᜊ");
car = car.replace(/ᜊ᜔i/g, "ᜊᜒ");
car = car.replace(/ᜊ᜔u/g, "ᜊᜓ");
car = car.replace(/m/g, "ᜋ᜔");
car = car.replace(/ᜋ᜔a/g, "ᜋ");
car = car.replace(/ᜋ᜔i/g, "ᜋᜒ");
car = car.replace(/ᜋ᜔u/g, "ᜋᜓ");
car = car.replace(/y/g, "ᜌ᜔");
car = car.replace(/ᜌ᜔a/g, "ᜌ");
car = car.replace(/ᜌ᜔i/g, "ᜌᜒ");
car = car.replace(/ᜌ᜔u/g, "ᜌᜓ");
car = car.replace(/l/g, "ᜎ᜔");
car = car.replace(/ᜎ᜔a/g, "ᜎ");
car = car.replace(/ᜎ᜔i/g, "ᜎᜒ");
car = car.replace(/ᜎ᜔u/g, "ᜎᜓ");
car = car.replace(/w/g, "ᜏ᜔");
car = car.replace(/ᜏ᜔a/g, "ᜏ");
car = car.replace(/ᜏ᜔i/g, "ᜏᜒ");
car = car.replace(/ᜏ᜔u/g, "ᜏᜓ");
car = car.replace(/s/g, "ᜐ᜔");
car = car.replace(/ᜐ᜔a/g, "ᜐ");
car = car.replace(/ᜐ᜔i/g, "ᜐᜒ");
car = car.replace(/ᜐ᜔u/g, "ᜐᜓ");
car = car.replace(/h/g, "ᜑ᜔");
car = car.replace(/ᜑ᜔a/g, "ᜑ");
car = car.replace(/ᜑ᜔i/g, "ᜑᜒ");
car = car.replace(/ᜑ᜔u/g, "ᜑᜓ"); 
car = car.replace(/a/g, "ᜀ");
car = car.replace(/i/g, "ᜁ");
car = car.replace(/u/g, "ᜂ");

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