    function showResult(str) {
        if (!str || str.length < 2) {
            document.getElementById("livesearch").innerHTML = "";
           // document.getElementById("livesearch").style.border = "0px";
            return;
        }
        var xmlhttp = undefined;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {  // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var values = JSON.parse(this.responseText);
                console.log(values);
                var result = "";
                if (values.error) {
                    result = values.error;
                } else if (Array.isArray(values) && values.length > 0) {
                    var max = values.length;
                    var parts = [];
                    for (var i = 0; i < max; i++) {
                        var element = values[i].replace("'", "\'");
                        parts.push(element);
                    }
                    result = parts.join('<br />');
                } else {
                    result = "No suggestion for this keyword &gt;&nbsp;<input type='submit' class='envoi' value='Search in the Pages'>";
                }

                document.getElementById("livesearch").innerHTML = result;
             //   document.getElementById("livesearch").style.border = "0px";
            }
        };
        xmlhttp.open("GET", "livesearch.php?q=" + str, true);
        xmlhttp.send();
    }
				
// delete
				
			function delResult() {
            document.getElementById("livesearch").innerHTML = "";
            document.getElementById("livesearch").style.border = "0px";
            return;
        }