//  copyright lexilogos.com
var car;

function yidlat() {
car = document.transcription.text1.value;
// combinaisons
car = car.replace(/אַ/g, "a");
car = car.replace(/אָ/g, "o");
car = car.replace(/בּ/g, "b");
car = car.replace(/בֿ/g, "v");
car = car.replace(/כּ/g, "k");
car = car.replace(/פּ/g, "p");
car = car.replace(/פֿ/g, "f");
car = car.replace(/שׂ/g, "s");
car = car.replace(/תּ/g, "t");
car = car.replace(/וּ/g, "וּ");
car = car.replace(/וֹ/g, "וֹ");
car = car.replace(/יִ/g, "יִ");
car = car.replace(/ײַ/g, "ײַ");

// uniques
car = car.replace(/ב/g, "b");
car = car.replace(/בּ/g, "b");
car = car.replace(/בֿ/g, "v");
car = car.replace(/ג/g, "g");
car = car.replace(/ד/g, "d");
car = car.replace(/ה/g, "h");
car = car.replace(/ז/g, "z");
car = car.replace(/ח/g, "kh");
car = car.replace(/ט/g, "t");
car = car.replace(/כּ/g, "k");
car = car.replace(/כ/g, "kh");
car = car.replace(/ך/g, "kh");
car = car.replace(/ל/g, "l");
car = car.replace(/מ/g, "m");
car = car.replace(/ם/g, "m");
car = car.replace(/נ/g, "n");
car = car.replace(/ן/g, "n");
car = car.replace(/ס/g, "s");
car = car.replace(/פּ/g, "p");
car = car.replace(/פ/g, "f"); // cas
car = car.replace(/פֿ/g, "f");
car = car.replace(/ף/g, "f");
car = car.replace(/צ/g, "ts");
car = car.replace(/ץ/g, "ts");
car = car.replace(/ק/g, "k");
car = car.replace(/ר/g, "r");
car = car.replace(/שׂ/g, "s");
car = car.replace(/ש/g, "sh");
car = car.replace(/ת/g, "S");
car = car.replace(/תּ/g, "t");

car = car.replace(/אַ/g, "a");
car = car.replace(/אָ/g, "o");
car = car.replace(/ע/g, "e");
car = car.replace(/ו/g, "u");
car = car.replace(/וּ/g, "u");
car = car.replace(/װ/g, "v");
car = car.replace(/וֹ/g, "v");

car = car.replace(/ױ/g, "oy");
car = car.replace(/ײ/g, "ey");
car = car.replace(/ײַ/g, "ay");
car = car.replace(/י/g, "y");
car = car.replace(/יִ/g, "i");

// modif 
car = car.replace(/yy/g, "ey");
car = car.replace(/uy/g, "oy");
car = car.replace(/uu/g, "v");

car = car.replace(/א/g, "O");
car = car.replace(/Oy/g, "i");
car = car.replace(/O/g, "");
car = car.replace(/uS/g, "es");
car = car.replace(/S/g, "s");
car = car.replace(/zsh/g, "zh");

car = car.replace(/by/g, "bi");
car = car.replace(/vy/g, "vi");
car = car.replace(/dy/g, "di");
car = car.replace(/ty/g, "ti");
car = car.replace(/hy/g, "hi");
car = car.replace(/sy/g, "si");
car = car.replace(/ry/g, "ri");
car = car.replace(/ky/g, "ki");
car = car.replace(/fy/g, "fi");
car = car.replace(/py/g, "pi");
car = car.replace(/my/g, "mi");
car = car.replace(/ny/g, "ni");
car = car.replace(/ly/g, "li");
car = car.replace(/zy/g, "zi");
car = car.replace(/־/g, "-");
document.transcription.text2.value = car;
}


function latyid() {
car = document.transcription.text2.value;
car = car.replace(/a/g, "אַ");
car = car.replace(/אַ=/g, "א");
car = car.replace(/א=/g, "אַ");
car = car.replace(/o/g, "אָ");
car = car.replace(/u/g, "ו");
car = car.replace(/ו=/g, "וּ");
car = car.replace(/וּ=/g, "ו");
car = car.replace(/v/g, "װ");
car = car.replace(/װ=/g, "וֹ");
car = car.replace(/וֹ=/g, "װ");
car = car.replace(/[yi]/g, "י");
car = car.replace(/י=/g, "יִ");
car = car.replace(/יִ=/g, "י");
car = car.replace(/A/g, "ײַ");
car = car.replace(/E/g, "ײ");
car = car.replace(/O/g, "ױ");

car = car.replace(/b/g, "ב");
car = car.replace(/ב=/g, "בּ");
car = car.replace(/בּ=/g, "ב");
car = car.replace(/V/g, "בֿ");
car = car.replace(/g/g, "ג");
car = car.replace(/d/g, "ד");
car = car.replace(/h/g, "ה");
car = car.replace(/z/g, "ז");
car = car.replace(/[Hx]/g, "ח");
car = car.replace(/K/g, "כּ");
car = car.replace(/כ=/g, "כּ");
car = car.replace(/כּ=/g, "כ");
car = car.replace(/q/g, "כ");
car = car.replace(/כ\u0020/g, "ך\u0020");
car = car.replace(/l/g, "ל");
car = car.replace(/m/g, "מ");
car = car.replace(/מ\u0020/g, "ם\u0020");
car = car.replace(/n/g, "נ");
car = car.replace(/נ\u0020/g, "ן\u0020");
car = car.replace(/s/g, "ס");
car = car.replace(/e/g, "ע");
car = car.replace(/p/g, "פּ");
car = car.replace(/פּ=/g, "פ");
car = car.replace(/פ=/g, "פּ");
car = car.replace(/f/g, "פֿ");
car = car.replace(/פֿ\u0020/g, "ף\u0020");
car = car.replace(/k/g, "ק");
car = car.replace(/r/g, "ר");
car = car.replace(/w/g, "צ");
car = car.replace(/צ\u0020/g, "ץ\u0020");
car = car.replace(/c/g, "ש");
car = car.replace(/ש=/g, "שׂ");
car = car.replace(/שׂ=/g, "ש");
car = car.replace(/ç/g, "שׂ");
car = car.replace(/t/g, "ט");
car = car.replace(/T/g, "תּ");
car = car.replace(/S/g, "ת");
car = car.replace(/ת=/g, "תּ");
car = car.replace(/תּ=/g, "ת");

car = car.replace(/j/g, "זש");
car = car.replace(/זה/g, "זש"); //zh

car = car.replace(/כ\./g, "ך\.");
car = car.replace(/מ\./g, "ם\.");
car = car.replace(/נ\./g, "ן\.");
car = car.replace(/פֿ\./g, "ף\.");
car = car.replace(/צ\./g, "ץ\.");

car = car.replace(/כ\!/g, "ך\!");
car = car.replace(/מ\!/g, "ם\!");
car = car.replace(/נ\!/g, "ן\!");
car = car.replace(/פֿ\!/g, "ף\!");
car = car.replace(/צ\!/g, "ץ\!");

car = car.replace(/כ\?/g, "ך\?");
car = car.replace(/מ\?/g, "ם\?");
car = car.replace(/נ\?/g, "ן\?");
car = car.replace(/פֿ\?/g, "ף\?");
car = car.replace(/צ\?/g, "ץ\?");

car = car.replace(/כ\:/g, "ך\:");
car = car.replace(/מ\:/g, "ם\:");
car = car.replace(/נ\:/g, "ן\:");
car = car.replace(/פֿ\:/g, "ף\:");
car = car.replace(/צ\:/g, "ץ\:");

car = car.replace(/כ\;/g, "ך\;");
car = car.replace(/מ\;/g, "ם\;");
car = car.replace(/נ\;/g, "ן\;");
car = car.replace(/פֿ\;/g, "ף\;");
car = car.replace(/צ\;/g, "ץ\;");

car = car.replace(/כ\,/g, "ך\,");
car = car.replace(/מ\,/g, "ם\,");
car = car.replace(/נ\,/g, "ן\,");
car = car.replace(/פֿ\,/g, "ף\,");
car = car.replace(/צ\,/g, "ץ\,");

car = car.replace(/כ\-/g, "ך\-");
car = car.replace(/מ\-/g, "ם\-");
car = car.replace(/נ\-/g, "ן\-");
car = car.replace(/פֿ\-/g, "ף\-");
car = car.replace(/צ\-/g, "ץ\-");
document.transcription.text1.value = car;
}
