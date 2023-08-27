//  copyright lexilogos.com 
var car;

function latarm() {
    car = document.transcription.text2.value;
    car = car.replace(/\'/g, "\̕");

    car = car.replace(/a/g, "ա");
    car = car.replace(/b/g, "բ");
    car = car.replace(/g/g, "գ");
    car = car.replace(/d/g, "դ");
    car = car.replace(/e/g, "ե");
    car = car.replace(/z/g, "զ");
    car = car.replace(/[ēê]/g, "է");
    car = car.replace(/ե=/g, "է");
    car = car.replace(/ë/g, "ը");
    car = car.replace(/է=/g, "ը");
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
    car = car.replace(/ծ̕/g, "ց"); // ts'
    car = car.replace(/ձհ/g, "ջ"); // dzh
    car = car.replace(/ձ=/g, "ջ"); //j
    car = car.replace(/րր/g, "ռ"); // rr

    car = car.replace(/եւ/g, "և"); //ew

    car = car.replace(/A/g, "Ա");
    car = car.replace(/B/g, "Բ");
    car = car.replace(/G/g, "Գ");
    car = car.replace(/D/g, "Դ");
    car = car.replace(/E/g, "Ե");
    car = car.replace(/Z/g, "Զ");
    car = car.replace(/[ĒÊ]/g, "Է");
    car = car.replace(/Ե=/g, "Է");
    car = car.replace(/Ë/g, "Ը");
    car = car.replace(/Է=/g, "Ը");
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

    car = car.replace(/ԵՒ/g, "և"); //EW

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

    car = car.replace(/Եւ/g, "և"); //ew

    car = car.replace(/\./g, "։");
    car = car.replace(/\?/g, "՞");
    car = car.replace(/\,/g, "՝");
    car = car.replace(/\!/g, "՜");

    document.transcription.text1.value = car;
}

function armlat() {
    car = document.transcription.text1.value;
    car = car.replace(/ա/g, "a");
    car = car.replace(/բ/g, "b");
    car = car.replace(/գ/g, "g");
    car = car.replace(/դ/g, "d");
    car = car.replace(/ե/g, "e");
    car = car.replace(/զ/g, "z");
    car = car.replace(/է/g, "ē");
    car = car.replace(/ը/g, "ë");
    car = car.replace(/թ/g, "t̕");
    car = car.replace(/ժ/g, "ž");
    car = car.replace(/ի/g, "i");
    car = car.replace(/լ/g, "l");
    car = car.replace(/խ/g, "x");
    car = car.replace(/ծ/g, "ç");
    car = car.replace(/կ/g, "k");
    car = car.replace(/հ/g, "h");
    car = car.replace(/ձ/g, "j");
    car = car.replace(/ղ/g, "ġ");
    car = car.replace(/ճ/g, "č̣");
    car = car.replace(/մ/g, "m");
    car = car.replace(/յ/g, "y");
    car = car.replace(/ն/g, "n");
    car = car.replace(/շ/g, "š");
    car = car.replace(/ո/g, "o");
    car = car.replace(/չ/g, "č");
    car = car.replace(/պ/g, "p");
    car = car.replace(/ջ/g, "ǰ");
    car = car.replace(/ռ/g, "ṙ");
    car = car.replace(/ս/g, "s");
    car = car.replace(/վ/g, "v");
    car = car.replace(/տ/g, "t");
    car = car.replace(/ր/g, "r");
    car = car.replace(/ց/g, "c̕");
    car = car.replace(/ւ/g, "w");
    car = car.replace(/փ/g, "p̕");
    car = car.replace(/ք/g, "k̕");
    car = car.replace(/օ/g, "ò");
    car = car.replace(/ֆ/g, "f");

    car = car.replace(/Ա/g, "A");
    car = car.replace(/Բ/g, "B");
    car = car.replace(/Գ/g, "G");
    car = car.replace(/Դ/g, "D");
    car = car.replace(/Ե/g, "E");
    car = car.replace(/Զ/g, "Z");
    car = car.replace(/Է/g, "Ē");
    car = car.replace(/Ը/g, "Ë");
    car = car.replace(/Թ/g, "T̕");
    car = car.replace(/Ժ/g, "Ž");
    car = car.replace(/Ի/g, "I");
    car = car.replace(/Լ/g, "L");
    car = car.replace(/Խ/g, "X");
    car = car.replace(/Ծ/g, "Ç");
    car = car.replace(/Կ/g, "K");
    car = car.replace(/Հ/g, "H");
    car = car.replace(/Ձ/g, "J");
    car = car.replace(/Ղ/g, "Ġ");
    car = car.replace(/Ճ/g, "Č̣");
    car = car.replace(/Մ/g, "M");
    car = car.replace(/Յ/g, "Y");
    car = car.replace(/Ն/g, "N");
    car = car.replace(/Շ/g, "Š");
    car = car.replace(/Ո/g, "O");
    car = car.replace(/Չ/g, "Č");
    car = car.replace(/Պ/g, "P");
    car = car.replace(/Ջ/g, "J̌");
    car = car.replace(/Ռ/g, "Ṙ");
    car = car.replace(/Ս/g, "S");
    car = car.replace(/Վ/g, "V");
    car = car.replace(/Տ/g, "T");
    car = car.replace(/Ր/g, "R");
    car = car.replace(/Ց/g, "C̕");
    car = car.replace(/Ւ/g, "W");
    car = car.replace(/Փ/g, "P̕");
    car = car.replace(/Ք/g, "K̕");
    car = car.replace(/Օ/g, "Ò");
    car = car.replace(/Ֆ/g, "F");

    car = car.replace(/և/g, "ew");

    car = car.replace(/։/g, ".");
    car = car.replace(/՞/g, "?");
    car = car.replace(/՝/g, ",");
    car = car.replace(/՜/g, "!");
    document.transcription.text2.value = car;
}

function armalat() {
    car = document.transcription.text1.value;
    car = car.replace(/ա/g, "a");
    car = car.replace(/բ/g, "b");
    car = car.replace(/գ/g, "g");
    car = car.replace(/դ/g, "d");
    car = car.replace(/ե/g, "e");
    car = car.replace(/զ/g, "z");
    car = car.replace(/է/g, "ē");
    car = car.replace(/ը/g, "ë");
    car = car.replace(/թ/g, "t̕");
    car = car.replace(/ժ/g, "zh");
    car = car.replace(/ի/g, "i");
    car = car.replace(/լ/g, "l");
    car = car.replace(/խ/g, "kh");
    car = car.replace(/ծ/g, "ts");
    car = car.replace(/կ/g, "k");
    car = car.replace(/հ/g, "h");
    car = car.replace(/ձ/g, "dz");
    car = car.replace(/ղ/g, "gh");
    car = car.replace(/ճ/g, "ch");
    car = car.replace(/մ/g, "m");
    car = car.replace(/յ/g, "y");
    car = car.replace(/ն/g, "n");
    car = car.replace(/շ/g, "sh");
    car = car.replace(/ո/g, "o");
    car = car.replace(/չ/g, "ch̕");
    car = car.replace(/պ/g, "p");
    car = car.replace(/ջ/g, "dzh");
    car = car.replace(/ռ/g, "rr");
    car = car.replace(/ս/g, "s");
    car = car.replace(/վ/g, "v");
    car = car.replace(/տ/g, "t");
    car = car.replace(/ր/g, "r");
    car = car.replace(/ց/g, "ts̕");
    car = car.replace(/ւ/g, "w");
    car = car.replace(/փ/g, "p̕");
    car = car.replace(/ք/g, "k̕");
    car = car.replace(/օ/g, "ò");
    car = car.replace(/ֆ/g, "f");

    car = car.replace(/Ա/g, "A");
    car = car.replace(/Բ/g, "B");
    car = car.replace(/Գ/g, "G");
    car = car.replace(/Դ/g, "D");
    car = car.replace(/Ե/g, "E");
    car = car.replace(/Զ/g, "Z");
    car = car.replace(/Է/g, "Ē");
    car = car.replace(/Ը/g, "Ë");
    car = car.replace(/Թ/g, "T̕");
    car = car.replace(/Ժ/g, "Zh");
    car = car.replace(/Ի/g, "I");
    car = car.replace(/Լ/g, "L");
    car = car.replace(/Խ/g, "Kh");
    car = car.replace(/Ծ/g, "Ts");
    car = car.replace(/Կ/g, "K");
    car = car.replace(/Հ/g, "H");
    car = car.replace(/Ձ/g, "Dz");
    car = car.replace(/Ղ/g, "Gh");
    car = car.replace(/Ճ/g, "Ch");
    car = car.replace(/Մ/g, "M");
    car = car.replace(/Յ/g, "Y");
    car = car.replace(/Ն/g, "N");
    car = car.replace(/Շ/g, "Sh");
    car = car.replace(/Ո/g, "O");
    car = car.replace(/Չ/g, "Ch̕");
    car = car.replace(/Պ/g, "P");
    car = car.replace(/Ջ/g, "Dzh");
    car = car.replace(/Ռ/g, "Rr");
    car = car.replace(/Ս/g, "S");
    car = car.replace(/Վ/g, "V");
    car = car.replace(/Տ/g, "T");
    car = car.replace(/Ր/g, "R");
    car = car.replace(/Ց/g, "Ts̕");
    car = car.replace(/Ւ/g, "W");
    car = car.replace(/Փ/g, "P̕");
    car = car.replace(/Ք/g, "K̕");
    car = car.replace(/Օ/g, "Ò");
    car = car.replace(/Ֆ/g, "F");

    car = car.replace(/և/g, "ew");

    car = car.replace(/։/g, ".");
    car = car.replace(/՞/g, "?");
    car = car.replace(/՝/g, ",");
    car = car.replace(/՜/g, "!");
    document.transcription.text2.value = car;
}

function armocclat() {
    car = document.transcription.text1.value;
    car = car.replace(/ա/g, "a");
    car = car.replace(/բ/g, "p");
    car = car.replace(/գ/g, "k");
    car = car.replace(/դ/g, "t");
    car = car.replace(/ե/g, "e");
    car = car.replace(/զ/g, "z");
    car = car.replace(/է/g, "ē");
    car = car.replace(/ը/g, "ë");
    car = car.replace(/թ/g, "t̕");
    car = car.replace(/ժ/g, "zh");
    car = car.replace(/ի/g, "i");
    car = car.replace(/լ/g, "l");
    car = car.replace(/խ/g, "kh");
    car = car.replace(/ծ/g, "dz");
    car = car.replace(/կ/g, "g");
    car = car.replace(/հ/g, "h");
    car = car.replace(/ձ/g, "ts");
    car = car.replace(/ղ/g, "gh");
    car = car.replace(/ճ/g, "j");
    car = car.replace(/մ/g, "m");
    car = car.replace(/յ/g, "y");
    car = car.replace(/ն/g, "n");
    car = car.replace(/շ/g, "sh");
    car = car.replace(/ո/g, "o");
    car = car.replace(/չ/g, "ch̕");
    car = car.replace(/պ/g, "b");
    car = car.replace(/ջ/g, "ch");
    car = car.replace(/ռ/g, "rr");
    car = car.replace(/ս/g, "s");
    car = car.replace(/վ/g, "v");
    car = car.replace(/տ/g, "d");
    car = car.replace(/ր/g, "r");
    car = car.replace(/ց/g, "ts̕");
    car = car.replace(/ւ/g, "w");
    car = car.replace(/փ/g, "p̕");
    car = car.replace(/ք/g, "k̕");
    car = car.replace(/օ/g, "ò");
    car = car.replace(/ֆ/g, "f");

    car = car.replace(/Ա/g, "A");
    car = car.replace(/Բ/g, "P");
    car = car.replace(/Գ/g, "K");
    car = car.replace(/Դ/g, "T");
    car = car.replace(/Ե/g, "E");
    car = car.replace(/Զ/g, "Z");
    car = car.replace(/Է/g, "Ē");
    car = car.replace(/Ը/g, "Ë");
    car = car.replace(/Թ/g, "T̕");
    car = car.replace(/Ժ/g, "Zh");
    car = car.replace(/Ի/g, "I");
    car = car.replace(/Լ/g, "L");
    car = car.replace(/Խ/g, "Kh");
    car = car.replace(/Ծ/g, "Ts");
    car = car.replace(/Կ/g, "G");
    car = car.replace(/Հ/g, "H");
    car = car.replace(/Ձ/g, "J");
    car = car.replace(/Ղ/g, "Gh");
    car = car.replace(/Ճ/g, "J");
    car = car.replace(/Մ/g, "M");
    car = car.replace(/Յ/g, "Y");
    car = car.replace(/Ն/g, "N");
    car = car.replace(/Շ/g, "Sh");
    car = car.replace(/Ո/g, "O");
    car = car.replace(/Չ/g, "Ch̕");
    car = car.replace(/Պ/g, "B");
    car = car.replace(/Ջ/g, "Ch");
    car = car.replace(/Ռ/g, "Rr");
    car = car.replace(/Ս/g, "S");
    car = car.replace(/Վ/g, "V");
    car = car.replace(/Տ/g, "D");
    car = car.replace(/Ր/g, "R");
    car = car.replace(/Ց/g, "Ts̕");
    car = car.replace(/Ւ/g, "W");
    car = car.replace(/Փ/g, "P̕");
    car = car.replace(/Ք/g, "K̕");
    car = car.replace(/Օ/g, "Ò");
    car = car.replace(/Ֆ/g, "F");

    car = car.replace(/և/g, "ew");

    car = car.replace(/։/g, ".");
    car = car.replace(/՞/g, "?");
    car = car.replace(/՝/g, ",");
    car = car.replace(/՜/g, "!");
    document.transcription.text2.value = car;
}