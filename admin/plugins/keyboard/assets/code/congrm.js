// copyright lexilogos.com
var car;

function gremolat() {
car = " " + document.transcription.text1.value;
car = car.replace(/\n/g, "\n ");
car = car.replace(/,/g, ", ");
car = car.replace(/:/g, ": ");
car = car.replace(/;/g, "\? ");
car = car.replace(/·/g, "\; ");
car = car.replace(/\./g, "\. ");
car = car.replace(/!/g, "! ");
car = car.replace(/ευβ/g, "ev");
car = car.replace(/Ευβ/g, "Ev");
car = car.replace(/εύβ/g, "év");
car = car.replace(/Εύβ/g, "Év");
car = car.replace(/ευφ/g, "ef");
car = car.replace(/Ευφ/g, "Ef");
car = car.replace(/εύφ/g, "éf");
car = car.replace(/Εύφ/g, "Éf");

car = car.replace(/ηυ/g, "if");
car = car.replace(/αυ/g, "af");
car = car.replace(/ευ/g, "ef");
car = car.replace(/ου/g, "ou");
car = car.replace(/Αυ/g, "Af");
car = car.replace(/Ευ/g, "Ef");
car = car.replace(/Ηυ/g, "If");
car = car.replace(/Ου/g, "Ou");
car = car.replace(/ηύ/g, "íf");
car = car.replace(/αύ/g, "áf");
car = car.replace(/εύ/g, "éf");
car = car.replace(/ού/g, "oú");
car = car.replace(/Αύ/g, "Áf");
car = car.replace(/Εύ/g, "Éf");
car = car.replace(/Ηύ/g, "Íf");
car = car.replace(/Ού/g, "Oú");

car = car.replace(/α/g, "a");
car = car.replace(/β/g, "v");
car = car.replace(/γ/g, "g");
car = car.replace(/δ/g, "d");
car = car.replace(/ε/g, "e");
car = car.replace(/ζ/g, "z");
car = car.replace(/η/g, "i");
car = car.replace(/θ/g, "th");
car = car.replace(/ι/g, "i");
car = car.replace(/κ/g, "k");
car = car.replace(/λ/g, "l");
car = car.replace(/μ/g, "m");
car = car.replace(/ν/g, "n");
car = car.replace(/ξ/g, "x");
car = car.replace(/ο/g, "o");
car = car.replace(/π/g, "p");
car = car.replace(/ρ/g, "r");
car = car.replace(/ς/g, "s");
car = car.replace(/σ/g, "s");
car = car.replace(/τ/g, "t");
car = car.replace(/υ/g, "i");
car = car.replace(/φ/g, "ph");
car = car.replace(/χ/g, "kh");
car = car.replace(/ψ/g, "ps");
car = car.replace(/ω/g, "o");
car = car.replace(/ά/g, "á");
car = car.replace(/έ/g, "é");
car = car.replace(/ή/g, "í");
car = car.replace(/ί/g, "í");
car = car.replace(/ό/g, "ó");
car = car.replace(/ύ/g, "í");
car = car.replace(/ώ/g, "ó");
car = car.replace(/ΰ/g, "ï");
car = car.replace(/ΐ/g, "ï");
car = car.replace(/ϊ/g, "ï");
car = car.replace(/ϋ/g, "ï");

car = car.replace(/ΕΥΒ/g, "EV");
car = car.replace(/ΕΎΒ/g, "ÉV");
car = car.replace(/ΕΥΦ/g, "EF");
car = car.replace(/ΕΎΦ/g, "ÉF");

car = car.replace(/Α/g, "A");
car = car.replace(/Β/g, "V");
car = car.replace(/Γ/g, "G");
car = car.replace(/Δ/g, "D");
car = car.replace(/Ε/g, "E");
car = car.replace(/Ζ/g, "Z");
car = car.replace(/Η/g, "I");
car = car.replace(/Θ/g, "Th");
car = car.replace(/Ι/g, "I");
car = car.replace(/Κ/g, "K");
car = car.replace(/Λ/g, "L");
car = car.replace(/Μ/g, "M");
car = car.replace(/Ν/g, "N");
car = car.replace(/Ξ/g, "X");
car = car.replace(/Ο/g, "O");
car = car.replace(/Π/g, "P");
car = car.replace(/Ρ/g, "R");
car = car.replace(/Σ/g, "S");
car = car.replace(/Τ/g, "T");
car = car.replace(/Υ/g, "I");
car = car.replace(/Φ/g, "Ph");
car = car.replace(/Χ/g, "Kh");
car = car.replace(/Ψ/g, "Ps");
car = car.replace(/Ω/g, "O");
car = car.replace(/Ά/g, "Á");
car = car.replace(/Έ/g, "É");
car = car.replace(/Ή/g, "Í");
car = car.replace(/Ί/g, "Í");
car = car.replace(/Ό/g, "Ó");
car = car.replace(/Ύ/g, "Í");
car = car.replace(/Ώ/g, "Ó");
car = car.replace(/ΰ/g, "Ï");
car = car.replace(/ΐ/g, "Ï");
car = car.replace(/Ϊ/g, "Ï");
car = car.replace(/Ϋ/g, "Ï");

car = car.replace(/oi/g, "i");
car = car.replace(/ei/g, "i");
car = car.replace(/ui/g, "i");
car = car.replace(/gai/g, "yai");
car = car.replace(/ge/g, "ye");
car = car.replace(/gaí/g, "yai");
car = car.replace(/gé/g, "yé");
car = car.replace(/gí/g, "yí");
car = car.replace(/gi/g, "yi");
car = car.replace(/oí/g, "í");
car = car.replace(/eí/g, "í");
car = car.replace(/uí/g, "í");
car = car.replace(/Ay/g, "Av");
car = car.replace(/Ey/g, "Ev");
car = car.replace(/Oi/g, "I");
car = car.replace(/Ei/g, "I");
car = car.replace(/Ui/g, "I");
car = car.replace(/Gai/g, "Yai");
car = car.replace(/Ge/g, "Ye");
car = car.replace(/Gi/g, "Yi");
car = car.replace(/Oí/g, "Í");
car = car.replace(/Eí/g, "Í");
car = car.replace(/Uí/g, "Í");
car = car.replace(/Gaí/g, "Yaí");
car = car.replace(/Gé/g, "Yé");
car = car.replace(/Gí/g, "Yí");

car = car.replace(/gg/g, "ng");
car = car.replace(/gy/g, "ng");
car = car.replace(/gx/g, "nx");
car = car.replace(/gk/g, "ng");
car = car.replace(/ngh/g, "nkh");
car = car.replace(/ ng/g, " g");
car = car.replace(/ mp/g, " b");
car = car.replace(/mp /g, "b ");
car = car.replace(/mp\,/g, "b\,");
car = car.replace(/mp\./g, "b\.");
car = car.replace(/mp\;/g, "b\;");
car = car.replace(/mp\:/g, "b\:");
car = car.replace(/mp\!/g, "b\!");
car = car.replace(/mp\?/g, "b\?");
car = car.replace(/ nt/g, " d");
car = car.replace(/ Ng/g, " G");
car = car.replace(/ Mp/g, " B");
car = car.replace(/ Nt/g, " D");

car = car.replace(/fv/g, "vv");
car = car.replace(/fg/g, "vg");
car = car.replace(/fd/g, "vd");
car = car.replace(/fz/g, "vz");
car = car.replace(/fl/g, "vl");
car = car.replace(/fm/g, "vm");
car = car.replace(/fn/g, "vn");
car = car.replace(/fr/g, "vr");
car = car.replace(/fa/g, "va");
car = car.replace(/fe/g, "ve");
car = car.replace(/fi/g, "vi");
car = car.replace(/fu/g, "vu");
car = car.replace(/fo/g, "vo");
car = car.replace(/fy/g, "vy");
car = car.replace(/fá/g, "vá");
car = car.replace(/fé/g, "vé");
car = car.replace(/fí/g, "ví");
car = car.replace(/fú/g, "vú");
car = car.replace(/fó/g, "vó");

car = car.replace(/AΥ/g, "AV");
car = car.replace(/EΥ/g, "EV");
car = car.replace(/OI/g, "I");
car = car.replace(/EI/g, "I");
car = car.replace(/UI/g, "I");
car = car.replace(/GAI/g, "YAI");
car = car.replace(/GE/g, "YE");
car = car.replace(/GI/g, "YI");

car = car.replace(/OÍ/g, "Í");
car = car.replace(/EÍ/g, "Í");
car = car.replace(/UÍ/g, "Í");
car = car.replace(/GAÍ/g, "YAÍ");
car = car.replace(/GÉ/g, "YÉ");
car = car.replace(/GÍ/g, "YÍ");

car = car.replace(/FV/g, "VV");
car = car.replace(/FG/g, "VG");
car = car.replace(/FD/g, "VD");
car = car.replace(/FZ/g, "VZ");
car = car.replace(/FM/g, "VM");
car = car.replace(/FL/g, "VL");
car = car.replace(/FN/g, "VN");
car = car.replace(/FR/g, "VR");
car = car.replace(/FA/g, "VA");
car = car.replace(/FE/g, "VE");
car = car.replace(/FI/g, "VI");
car = car.replace(/FU/g, "VU");
car = car.replace(/FO/g, "VO");
car = car.replace(/FY/g, "VY");
car = car.replace(/FÁ/g, "VÁ");
car = car.replace(/FÉ/g, "VÉ");
car = car.replace(/FÍ/g, "VÍ");
car = car.replace(/FÚ/g, "VÚ");
car = car.replace(/FÓ/g, "VÓ");

car = car.replace(/GG/g, "NG");
car = car.replace(/GY/g, "NG");
car = car.replace(/GX/g, "NX");
car = car.replace(/GK/g, "NG");
car = car.replace(/NGH/g, "NKH");
car = car.replace(/ NG/g, " G");
car = car.replace(/ MP/g, " B");
car = car.replace(/ NT/g, " D");

car = car.replace(/hR/g, "HR");
car = car.replace(/hL/g, "HL");
car = car.replace(/hT/g, "HT");
car = car.replace(/hA/g, "HA");
car = car.replace(/hE/g, "HE");
car = car.replace(/hI/g, "HI");
car = car.replace(/hU/g, "HU");
car = car.replace(/hO/g, "HO");
car = car.replace(/hÁ/g, "HÁ");
car = car.replace(/hÉ/g, "HÉ");
car = car.replace(/hÍ/g, "HÍ");
car = car.replace(/hÚ/g, "HÚ");
car = car.replace(/hÓ/g, "HÓ");
car = car.replace(/sA/g, "SA");
car = car.replace(/sE/g, "SE");
car = car.replace(/sI/g, "SI");
car = car.replace(/sU/g, "SU");
car = car.replace(/sO/g, "SO");
car = car.replace(/sÁ/g, "SÁ");
car = car.replace(/sÉ/g, "SÉ");
car = car.replace(/sÍ/g, "SÍ");
car = car.replace(/sÚ/g, "SÚ");
car = car.replace(/sÓ/g, "SÓ");

car = car.replace(/\n /g, "\n");
document.transcription.text2.value = car;
}