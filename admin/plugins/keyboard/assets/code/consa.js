//  copyright lexilogos.com
var car;

function devlat() {
car = document.transcription.text1.value;
car = car.replace(/्/g, "\u200b");
car = car.replace(/अ/g, "a");
car = car.replace(/आ/g, "ā");
car = car.replace(/ा/g, "ā");
car = car.replace(/इ/g, "i");
car = car.replace(/ि/g, "i");
car = car.replace(/ई/g, "ī");
car = car.replace(/ी/g, "ī");
car = car.replace(/उ/g, "u");
car = car.replace(/ु/g, "u");
car = car.replace(/ऊ/g, "ū");
car = car.replace(/ू/g, "ū");
car = car.replace(/ऋ/g, "ṛ");
car = car.replace(/ृ/g, "ṛ");
car = car.replace(/ॠ/g, "ṝ");
car = car.replace(/ॄ/g, "ṝ");
car = car.replace(/ऌ/g, "ḷ");
car = car.replace(/ॢ/g, "ḷ");
car = car.replace(/ॡ/g, "ḹ");
car = car.replace(/ॣ/g, "ḹ");
car = car.replace(/ए/g, "e");
car = car.replace(/े/g, "e");
car = car.replace(/ऐ/g, "ai");
car = car.replace(/ै/g, "ai");
car = car.replace(/ओ/g, "o");
car = car.replace(/ो/g, "o");
car = car.replace(/औ/g, "au");
car = car.replace(/ौ/g, "au");
car = car.replace(/क/g, "kA");     
car = car.replace(/ख/g, "khA");
car = car.replace(/ग/g, "gA");
car = car.replace(/घ/g, "ghA");
car = car.replace(/ङ/g, "ṅA");
car = car.replace(/च/g, "cA");
car = car.replace(/छ/g, "chA");
car = car.replace(/ज/g, "jA");
car = car.replace(/झ/g, "jhA");
car = car.replace(/ञ/g, "ñA");
car = car.replace(/ट/g, "ṭA");
car = car.replace(/ठ/g, "ṭhA");
car = car.replace(/ड/g, "ḍA");
car = car.replace(/ढ/g, "ḍhA");
car = car.replace(/ण/g, "ṇA");
car = car.replace(/त/g, "tA");
car = car.replace(/थ/g, "thA");
car = car.replace(/द/g, "dA");
car = car.replace(/ध/g, "dhA");
car = car.replace(/न/g, "nA");
car = car.replace(/प/g, "pA");
car = car.replace(/फ/g, "phA");
car = car.replace(/ब/g, "bA");
car = car.replace(/भ/g, "bhA");
car = car.replace(/म/g, "mA");
car = car.replace(/य/g, "yA");
car = car.replace(/र/g, "rA");
car = car.replace(/ल/g, "lA");
car = car.replace(/व/g, "vA");
car = car.replace(/श/g, "śA");
car = car.replace(/ष/g, "ṣA");
car = car.replace(/स/g, "sA");
car = car.replace(/ह/g, "hA");
car = car.replace(/ळ/g, "ḻA");
car = car.replace(/ॐ/g, "oṃ");
car = car.replace(/ऽ/g, "’");
car = car.replace(/।/g, "|");
car = car.replace(/॥/g, "||");

car = car.replace(/A\u200b/g, "");
car = car.replace(/Aā/g, "ā");

car = car.replace(/Aai/g, "ai");
car = car.replace(/Aau/g, "au");
car = car.replace(/Ai/g, "i");
car = car.replace(/Au/g, "u");
car = car.replace(/Ae/g, "e");
car = car.replace(/Ao/g, "o");
car = car.replace(/Aī/g, "ī");
car = car.replace(/Aū/g, "ū");
car = car.replace(/Aṛ/g, "ṛ");
car = car.replace(/Aṝ/g, "ṝ");
car = car.replace(/Aḷ/g, "ḷ");
car = car.replace(/Aḹ/g, "ḹ");
car = car.replace(/A/g, "a");
// car = car.replace(/aa/g, "a");


car = car.replace(/०/g, "0");
car = car.replace(/१/g, "1");
car = car.replace(/२/g, "2");
car = car.replace(/३/g, "3");
car = car.replace(/४/g, "4");
car = car.replace(/५/g, "5");
car = car.replace(/६/g, "6");
car = car.replace(/७/g, "7");
car = car.replace(/८/g, "8");
car = car.replace(/९/g, "9");	

car = car.replace(/ं/g, "ṃ");
car = car.replace(/ँ/g, "ṁ");
car = car.replace(/ः/g, "ḥ");

car = car.replace(/॑/g, "̍");	
car = car.replace(/᳚/g, "̎");	

car = car.replace(/॓/g, "̀");	
car = car.replace(/॔/g, "́");		
car = car.replace(/॒/g, "̱");	
car = car.replace(/᳒/g, "̄");
car = car.replace(/᳓/g, "̋");
car = car.replace(/᳐/g, "̂");

// inversion diacritiques
car = car.replace(/ṃ̱/g, "̱ṃ");
car = car.replace(/ṁ̱/g, "̱ṁ");
car = car.replace(/ḥ̱/g, "̱ḥ");
car = car.replace(/ṃ̍/g, "̍ṃ");
car = car.replace(/ṁ̍/g, "̍ṁ");
car = car.replace(/ḥ̍/g, "̍ḥ");
  
document.transcription.text2.value = car;
}

function devisolat() {
car = document.transcription.text1.value;
car = car.replace(/्/g, "\u200b");
car = car.replace(/अ/g, "a");
car = car.replace(/आ/g, "ā");
car = car.replace(/ा/g, "ā");
car = car.replace(/इ/g, "i");
car = car.replace(/ि/g, "i");
car = car.replace(/ई/g, "ī");
car = car.replace(/ी/g, "ī");
car = car.replace(/उ/g, "u");
car = car.replace(/ु/g, "u");
car = car.replace(/ऊ/g, "ū");
car = car.replace(/ू/g, "ū");
car = car.replace(/ऋ/g, "r̥");
car = car.replace(/ृ/g, "r̥");
car = car.replace(/ॠ/g, "r̥̄");
car = car.replace(/ॄ/g, "r̥̄");
car = car.replace(/ऌ/g, "l̥");
car = car.replace(/ॢ/g, "l̥");
car = car.replace(/ॡ/g, "l̥̄");
car = car.replace(/ॣ/g, "l̥̄");
car = car.replace(/ए/g, "ē");
car = car.replace(/े/g, "ē");
car = car.replace(/ऎ/g, "e"); //sup
car = car.replace(/ऍ/g, "ê"); //sup
car = car.replace(/ऒ/g, "o"); //sup
car = car.replace(/ऑ/g, "ô"); //sup
car = car.replace(/ऐ/g, "ai");
car = car.replace(/ै/g, "ai");
car = car.replace(/ओ/g, "ō");
car = car.replace(/ो/g, "ō");
car = car.replace(/औ/g, "au");
car = car.replace(/ौ/g, "au");
car = car.replace(/क/g, "kA");     
car = car.replace(/ख/g, "khA");
car = car.replace(/ग/g, "gA");
car = car.replace(/घ/g, "ghA");
car = car.replace(/ङ/g, "ṅA");
car = car.replace(/च/g, "cA");
car = car.replace(/छ/g, "chA");
car = car.replace(/ज/g, "jA");
car = car.replace(/झ/g, "jhA");
car = car.replace(/ञ/g, "ñA");
car = car.replace(/ट/g, "ṭA");
car = car.replace(/ठ/g, "ṭhA");
car = car.replace(/ड/g, "ḍA");
car = car.replace(/ढ/g, "ḍhA");
car = car.replace(/ण/g, "ṇA");
car = car.replace(/त/g, "tA");
car = car.replace(/थ/g, "thA");
car = car.replace(/द/g, "dA");
car = car.replace(/ध/g, "dhA");
car = car.replace(/न/g, "nA");
car = car.replace(/प/g, "pA");
car = car.replace(/फ/g, "phA");
car = car.replace(/ब/g, "bA");
car = car.replace(/भ/g, "bhA");
car = car.replace(/म/g, "mA");
car = car.replace(/य/g, "yA");
car = car.replace(/र/g, "rA");
car = car.replace(/ल/g, "lA");
car = car.replace(/व/g, "vA");
car = car.replace(/श/g, "śA");
car = car.replace(/ष/g, "ṣA");
car = car.replace(/स/g, "sA");
car = car.replace(/ह/g, "hA");
car = car.replace(/ळ/g, "ḻA");
car = car.replace(/ॐ/g, "om̐");
car = car.replace(/ऽ/g, "’");
car = car.replace(/।/g, "|");
car = car.replace(/॥/g, "||");

car = car.replace(/A\u200b/g, "");
car = car.replace(/Aā/g, "ā");

car = car.replace(/Ai/g, "i");
car = car.replace(/Au/g, "u");
car = car.replace(/Ae/g, "e");
car = car.replace(/Ao/g, "o");
car = car.replace(/Aē/g, "ē");
car = car.replace(/Aō/g, "ō");
car = car.replace(/Aī/g, "ī");
car = car.replace(/Aū/g, "ū");
car = car.replace(/Ar̥/g, "r̥");
car = car.replace(/Ar̥̄/g, "r̥̄");
car = car.replace(/Al̥/g, "l̥");
car = car.replace(/Al̥̄/g, "l̥̄");
car = car.replace(/A/g, "a");
// car = car.replace(/aa/g, "a");

car = car.replace(/०/g, "0");
car = car.replace(/१/g, "1");
car = car.replace(/२/g, "2");
car = car.replace(/३/g, "3");
car = car.replace(/४/g, "4");
car = car.replace(/५/g, "5");
car = car.replace(/६/g, "6");
car = car.replace(/७/g, "7");
car = car.replace(/८/g, "8");
car = car.replace(/९/g, "9");	

car = car.replace(/ं/g, "ṁ");
car = car.replace(/ँ/g, "m̐"); 
car = car.replace(/ः/g, "ḥ");

car = car.replace(/॑/g, "̍");	
car = car.replace(/᳚/g, "̎");	

car = car.replace(/॓/g, "̀");	
car = car.replace(/॔/g, "́");		
car = car.replace(/॒/g, "̱");	
car = car.replace(/᳒/g, "̄");
car = car.replace(/᳓/g, "̋");
car = car.replace(/᳐/g, "̂");

// inversion diacritiques
car = car.replace(/ṃ̱/g, "̱ṃ");
car = car.replace(/ṁ̱/g, "̱ṁ");
car = car.replace(/ḥ̱/g, "̱ḥ");
car = car.replace(/ṃ̍/g, "̍ṃ");
car = car.replace(/ṁ̍/g, "̍ṁ");
car = car.replace(/ḥ̍/g, "̍ḥ");
  
document.transcription.text2.value = car;
}