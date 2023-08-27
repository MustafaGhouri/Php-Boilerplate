//  copyright lexilogos.com

function kb(item) {
    var input = document.conversion.saisie;
    if (document.selection) {
        input.focus();
        range = document.selection.createRange();
        range.text = item;
        range.select();
    }
    else if (input.selectionStart || input.selectionStart === '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos)
            + item
            + input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    }
    else {
        input.value += item;
        input.focus();
    }
}

function effacer() { 
document.conversion.saisie.value = "";
}

function verif() {
if (/ /.test(document.conversion.q.value))
{ car = document.conversion.q.value;
car = car.replace(/ /g, "");
document.conversion.q.value = car;
document.conversion.submit(); 
} 
}