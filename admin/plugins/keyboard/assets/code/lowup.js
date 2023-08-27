function minmaj() {
    txt = document.transcription.text1.value;
    txt = txt.replace(/ΐ/g, "Ḯ");
    txt = txt.replace(/ΰ/g, "Ǘ");
    txt = txt.toUpperCase();
    document.transcription.text2.value = txt;
}

/*function majmin() {
    txt = document.transcription.text2.value;
    txt = txt.replace(/Ḯ/g, "ΐ");
    txt = txt.replace(/Ǘ/g, "ΰ");
    txt = txt.toLowerCase();
    document.transcription.text1.value = txt;
}*/

function majmin() {
    txt = document.transcription.text2.value.toLowerCase();
    document.transcription.text1.value = txt;
}

