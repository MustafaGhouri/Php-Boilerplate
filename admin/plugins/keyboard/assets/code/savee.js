function save(){
    var text = document.getElementById("bar").value;
    text = text.replace(/\n/g, "\r\n"); 
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "file.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }