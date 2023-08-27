//  copyright lexilogos.com 
var car;

function transcrire() {
car = document.conversion.saisie.value;
 car = car.replace (/α/g, "𐌀");
car = car.replace (/β/g, "𐌁");
car = car.replace (/γ/g, "𐌂");
car = car.replace (/δ/g, "𐌃");
car = car.replace (/ε/g, "𐌄");
car = car.replace (/ζ/g, "𐌆");
car = car.replace (/η/g, "𐌇");
car = car.replace (/θ/g, "𐌈");
car = car.replace (/ι/g, "𐌉");
car = car.replace (/κ/g, "𐌊");
car = car.replace (/λ/g, "𐌋");
car = car.replace (/μ/g, "𐌌");
car = car.replace (/ν/g, "𐌍");
car = car.replace (/ξ/g, "𐌎");
car = car.replace (/ο/g, "𐌏");
car = car.replace (/π/g, "𐌐");
car = car.replace (/ρ/g, "𐌓");
car = car.replace (/σ/g, "𐌔");
car = car.replace (/τ/g, "𐌕");
car = car.replace (/υ/g, "𐌖");
car = car.replace (/χ/g, "𐌗");
car = car.replace (/φ/g, "𐌘");
car = car.replace (/ψ/g, "𐌙");
car = car.replace (/a/g, "𐌀");
car = car.replace (/b/g, "𐌁");
car = car.replace (/[cg]/g, "𐌂");
car = car.replace (/d/g, "𐌃");
car = car.replace (/e/g, "𐌄");
car = car.replace (/f/g, "𐌅");
car = car.replace (/z/g, "𐌆");
car = car.replace (/h/g, "𐌇");
car = car.replace (/T/g, "𐌈");
car = car.replace (/i/g, "𐌉");
car = car.replace (/k/g, "𐌊");
car = car.replace (/l/g, "𐌋");
car = car.replace (/m/g, "𐌌");
car = car.replace (/n/g, "𐌍");
car = car.replace (/X/g, "𐌎");
car = car.replace (/o/g, "𐌏");
car = car.replace (/p/g, "𐌐");
car = car.replace (/[jJM]/g, "𐌑");
car = car.replace (/q/g, "𐌒");
car = car.replace (/r/g, "𐌓");
car = car.replace (/s/g, "𐌔");
car = car.replace (/t/g, "𐌕");
car = car.replace (/[vu]/g, "𐌖");
car = car.replace (/x/g, "𐌗");
car = car.replace (/P/g, "𐌘");
car = car.replace (/K/g, "𐌙");
car = car.replace (/F/g, "𐌚");


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