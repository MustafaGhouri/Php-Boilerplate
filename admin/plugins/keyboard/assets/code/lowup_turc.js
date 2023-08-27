function minmaj() {
    txt = document.transcription.text1.value;
    txt = txt.replace(/i/g, "İ");
    txt = txt.replace(/ı/g, "I");
    txt = txt.toUpperCase();
    document.transcription.text2.value = txt;
}

function majmin() {
    txt = document.transcription.text2.value;
    txt = txt.replace(/İ/g, "i");
    txt = txt.replace(/I/g, "ı");
    txt = txt.toLowerCase();
    document.transcription.text1.value = txt;
}

