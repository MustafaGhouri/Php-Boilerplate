<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Keyboard | Urdu</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="Keywords" content="">
	<style>
	@font-face {
		font-family: Aleem Urdu Unicode;
		src: url(font/Aleem_Urdu_Unicode_Regular.ttf);
	}

	.deva {
		font-size: 1em;
		/* color: #0000FF; */
	}
	</style>
	<link href="assets/css/style.css" rel="stylesheet" type="text/css"> 
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
</head>
<body onLoad="conversion.saisie.focus()">
	
	<div class="name">
		<br> <span class="kb-t">Urdu  &nbsp;  اردو</span> </div>
	<div class="cd">
		<a href="https://www.lexilogos.com/english/communication.htm"><img src="../images/don_e.png" class="imgdone" title="Donate: Thank you!"></a>
		<br>
		<a href="https://www.lexilogos.com/english/search.htm"><img src="../images/w_bouscateur.gif" width="26" height="27" class="img-0" title="Search on Lexilogos &amp; on the web" alt="search"></a>
		<br>
		<a href="https://www.lexilogos.com/clavier/urdu.htm"><img src="../images/fra.gif" width="17" height="11" class="imgflag" alt="French" title="in French / en français"></a>
	</div>
	<div class="esp"></div>
	<div class="ce"><a class="frp" href="https://www.lexilogos.com/english/urdu_dictionary.htm">Urdu dictionary</a></div>
	<div class="esp"></div>
	<div class="center">
		<form>
			<select name="select" onChange="window.location=this.options[this.selectedIndex].value">
				<option disabled selected>Select Language</option>
				<option value="arabic.html">Arabic</option>
				<option value="russian.html">Russian</option>
				<option value="korean.html">Korean</option>
				<option value="hindi.html">Hindi</option>
				<option value="urdu.html">Urdu</option>
			</select>
		<br>
		<form name="conversion">
			
			<textarea name="saisie" id="bar" onKeyUp="transcrire()" rows="4" class="cadr"></textarea>
			<br>
			<br>
			
			<div class="espc"></div>
			<div class="rtl">
				<div class="as">
                    <span class="positionss">a</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ا')" value="ا" title="alif">
					</p>
				</div>
                <div class="as">
                    <span class="positionss">ā</span>
					<p>
						<input type="button" class="bt" onclick="alpha('آ')" value="آ">
					</p>
				</div>
				<div class="as">
					<span class="positionss">b</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ب')" value="ب" title="ba">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">p</span>
					<p>
						<input type="button" class="bt" onclick="alpha('پ')" value="پ" title="pa">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">t</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ت')" value="ت" title="ta">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">ṭ</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ٹ')" value="ٹ" title="ṭa">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">s</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ث')" value="ث" title="sa">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">j</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ج')" value="ج" title="jīm">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">c</span>
					<p>
						<input type="button" class="bt" onclick="alpha('چ')" value="چ" title="cīm">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">H</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ح')" value="ح" title="baṛī ḥa">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">x</span>
					<p>
						<input type="button" class="bt" onclick="alpha('خ')" value="خ" title="ẖa">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">d</span>
					<p>
						<input type="button" class="bt" onclick="alpha('د')" value="د" title="dāl">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">ḍ</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ڈ')" value="ڈ" title="ḍāl">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">z</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ذ')" value="ذ" title="ẕāl">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">r</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ر')" value="ر" title="ra">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">ṛ</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ڑ')" value="ڑ" title="ṛa">
					</p>
				</div>
				<div class="as">
                    
                    <span class="positionss">z</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ز')" value="ز" title="zain">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">zh</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ژ')" value="ژ" title="žain">
					</p>
				</div>
				<div class="as">
                    
                    <span class="positionss">s</span>
					<p>
						<input type="button" class="bt" onclick="alpha('س')" value="س" title="sīn">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">sh</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ش')" value="ش" title="šīn">
					</p>
				</div>
				<div class="esp mobnul"></div>
				<div class="as">
                    <span class="positionss">S</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ص')" value="ص" title="ṣād">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">Ż</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ض')" value="ض" title="ẓād">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">T</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ط')" value="ط" title="t̤ā">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">Z</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ظ')" value="ظ" title="z̤ā">
					</p>
				</div>
				<div class="as">
                    <span class="positionss">'</span>
					<p>
						<input type="button" class="bt" onclick="alpha('ع')" value="ع" title="ʿain">
					</p>
				</div>
				<div class="as"><span class="deva">ग़</span>
					<br>ğ
					<p>
						<input type="button" class="bt" onclick="alpha('غ')" value="غ" title="ġain">
					</p>
				</div>
				<div class="as"><span class="deva">फ़</span>
					<br>f
					<p>
						<input type="button" class="bt" onclick="alpha('ف')" value="ف" title="fa">
					</p>
				</div>
				<div class="as"><span class="deva">क़</span>
					<br>q
					<p>
						<input type="button" class="bt" onclick="alpha('ق')" value="ق" title="qāf">
					</p>
				</div>
				<div class="as"><span class="deva">क</span>
					<br>k
					<p>
						<input type="button" class="bt" onclick="alpha('ک')" value="ک" title="kāf">
					</p>
				</div>
				<div class="as"><span class="deva">ग</span>
					<br>g
					<p>
						<input type="button" class="bt" onclick="alpha('گ')" value="گ" title="gāf">
					</p>
				</div>
				<div class="as"><span class="deva">ल</span>
					<br>l
					<p>
						<input type="button" class="bt" onclick="alpha('ل')" value="ل" title="lām">
					</p>
				</div>
				<div class="as"><span class="deva">म</span>
					<br>m
					<p>
						<input type="button" class="bt" onclick="alpha('م')" value="م" title="mīm">
					</p>
				</div>
				<div class="as"><span class="deva">न</span>
					<br>n
					<p>
						<input type="button" class="bt" onclick="alpha('ن')" value="ن" title="nūn">
					</p>
				</div>
				<div class="as"><span class="deva">ङ</span>
					<br>Ṅ
					<p>
						<input type="button" class="bt" onclick="alpha('ں')" value="ں" title="nūn ġunnah">
					</p>
				</div>
				<div class="as"><span class="deva">व</span>
					<br>v, ū
					<p>
						<input type="button" class="bt" onclick="alpha('و')" value="و" title="wāʾo">
					</p>
				</div>
				<div class="as"><span class="deva">ह</span>
					<br>h
					<p>
						<input type="button" class="bt" onclick="alpha('ہ')" value="ہ" title="ẖoṭī ha">
					</p>
				</div>
				<div class="as">ʰ
					<p>
						<input type="button" class="bt" onclick="alpha('ھ')" value="ھ" title="do cašmī ha">
					</p>
				</div>
				<div class="as"><span class="deva">य</span>
					<br>y, ī
					<p>
						<input type="button" class="bt" onclick="alpha('ی')" value="ی" title="choṭī ya">
					</p>
				</div>
				<div class="as"><span class="deva">ए</span>
					<br>e
					<p>
						<input type="button" class="bt" onclick="alpha('ے')" value="ے" title="baṛī ya">
					</p>
				</div>
			</div>
			<div class="esp"></div>
			<div class="as">-
				<p>
					<input type="button" class="bt" onclick="alpha('ء')" value="ء">
				</p>
			</div>
			<div class="as">
				<input type="button" value="ئ" onclick="alpha('ئ')" class="bt">
			</div>
			<div class="as">
				<input type="button" class="bt" onclick="alpha('ؤ')" value="ؤ">
			</div> <span class="esps"></span>
			<div class="as">
				<input type="button" value="ڙ" onclick="alpha('ڙ')" class="bt">
			</div>
			<div class="as">
				<input type="button" value="ڐ" onclick="alpha('ڐ')" class="bt">
			</div>
			<div class="as">
				<input type="button" value="ٿ" onclick="alpha('ٿ')" class="bt">
			</div> <span class="esps"></span>
			<div class="as">
				<input type="button" value="٘ " onclick="alpha('٘ ')" class="bt" title="nūn ġunna suscrit">
			</div>
			<div class="as">
				<input type="button" class="bt" title="tanwīn -an" onclick="alpha('ً')" value="ً ">
			</div>
			<div class="as">a
				<p>
					<input type="button" value="َ " onclick="alpha('َ')" class="bt" title="zabar">
				</p>
			</div>
			<div class="as">u
				<p>
					<input type="button" value="ُ " onclick="alpha('ُ')" class="bt" title="peš">
				</p>
			</div>
			<div class="as">i
				<p>
					<input type="button" value="ِ " onclick="alpha('ِ')" class="bt" title="zer">
				</p>
			</div>
			<div class="as">
				<input type="button" class="bt" title="alif suscrit" onclick="alpha('ٰ')" value="ٰ ">
			</div>
			<div class="as">
				<input type="button" class="bt" title="ḍamma inversé" onclick="alpha('ٗ')" value="ٗ ">
			</div>
			<div class="as">
				<input type="button" value="ّ " onclick="alpha('ّ')" class="bt" title="tašdīd">
			</div>
			<div class="esp"></div>
			<div class="as">
				<input type="button" class="bt" onclick="alpha('؟')" value="؟">
			</div>
			<div class="as">
				<input type="button" class="bt" onclick="alpha('!')" value="!">
			</div>
			<div class="as">
				<input type="button" class="bt" onclick="alpha('؛')" value="؛">
			</div>
			<div class="as">
				<input type="button" class="bt" onclick="alpha('،')" value="،">
			</div>
			<div class="as">
				<input type="button" class="bt" onclick="alpha('.')" value=".">
			</div>
			<div class="as">
				<input type="button" class="bt" title="tatwil" onclick="alpha('ـ')" value="ـ">
			</div>
			<div class="esp"></div>
			<div class="as">0
				<p>
					<input type="button" class="bt" onclick="alpha('۰')" value="۰">
				</p>
			</div>
			<div class="as">1
				<p>
					<input type="button" class="bt" onclick="alpha('۱')" value="۱">
				</p>
			</div>
			<div class="as">2
				<p>
					<input type="button" class="bt" onclick="alpha('۲')" value="۲">
				</p>
			</div>
			<div class="as">3
				<p>
					<input type="button" class="bt" onclick="alpha('۳')" value="۳">
				</p>
			</div>
			<div class="as">4
				<p>
					<input type="button" class="bt" onclick="alpha('۴')" value="۴">
				</p>
			</div>
			<div class="as">5
				<p>
					<input type="button" class="bt" onclick="alpha('۵')" value="۵">
				</p>
			</div>
			<div class="as">6
				<p>
					<input type="button" class="bt" onclick="alpha('۶')" value="۶">
				</p>
			</div>
			<div class="as">7
				<p>
					<input type="button" class="bt" onclick="alpha('۷')" value="۷">
				</p>
			</div>
			<div class="as">8
				<p>
					<input type="button" class="bt" onclick="alpha('۸')" value="۸">
				</p>
			</div>
			<div class="as">9
				<p>
					<input type="button" class="bt" onclick="alpha('۹')" value="۹">
				</p>
			</div>
		</form>
	</div>
	<div class="espb"></div>
	<div class="pa"><b>Instructions</b>
		<p>To type directly with the computer keyboard:</p>
		<ul>
			<li>Type aa to get &#257; </li>
			<li>To add a diacritic sign, type an apostrophe
				<br> example: t', j' (or c), H' (or x), d', s', S', T', G', k' (or g) </li>
			<li> Type tt, dd, rr for the Urdu special characters </li>
			<li> Type h' for <span class="arial">ʰ</span></li>
			<li> Type - for the <i>hamza</i> </li>
			<li> Type y-- for <span class="xa large">ئ</span></li>
			<li> Type &amp;a, &amp;u, &amp;i to add the diacritics and &amp;&amp; for the long consonant </li>
		</ul>
		<br>
		<p>Download &amp; install the font <a href="font/Aleem_Urdu_Unicode_Regular.ttf">Aleem Urdu Unicode</a> </p>
		<br>
		<br> Copy [Ctrl]+[C] &amp; Paste [Ctrl]+[V] </div>
	<br>
	<br>
	<p class="pp"><span class="jb">•</span> <a href="https://urdufonts.net/" target="_blank">UrduFonts</a>: Urdu fonts to download </p>
	<p class="ppc">Note: an Urdu font may be necessary to read the Urdu digits.</p>
	<div class="espa"></div>
	<p class="pp"><span class="ji">&#8594;</span> <a href="devanagari.html">Devanagari keyboard</a> </p>
	<p class="pp"><span class="ji">&#8594;</span> <a href="https://www.lexilogos.com/english/urdu_dictionary.htm">Urdu language</a>: dictionary, pronunciation, grammar </p>
	<p class="pp"><span class="ji">&#8594;</span> <a href="index.html">Multilingual keyboard</a>: index </p>
	<div class="espb"></div>
	<ul class="nav">
		<li>
			<a href="https://www.lexilogos.com/english/contact.php" title="send your comments!"><img src="../images/w_enveloppe.gif" class="img-0" alt="contact"></a> <a class="pie" href="https://www.lexilogos.com/english/contact.php">Comments</a></li>
		<li>
			<a href="https://www.lexilogos.com/english/search.htm" title="Search on Lexilogos &amp; on the web"><img src="../images/w_bouscateur.gif" class="img-0" alt="search"></a> <a class="pie" href="https://www.lexilogos.com/english/search.htm">Search</a></li>
		<li>
			<a href="https://www.lexilogos.com/english/new.htm" title="what's new?"><img src="../images/new.gif" class="img-0" alt="new"></a> <a class="pie" href="https://www.lexilogos.com/english/new.htm">What's new?</a> </li>
		<li>
			<a href="https://www.lexilogos.com/english/index.htm" title="homepage"><img src="../images/w_accueil.gif" class="img-0" alt="homepage"></a> <a class="pie" href="https://www.lexilogos.com/english/index.htm">Homepage</a></li>
		<li>
			<a href="https://www.lexilogos.com/english/communication.htm" title="Support Lexilogos!"><img src="../images/w_cor.gif" class="img-0" alt="support"></a> <a class="pie" href="https://www.lexilogos.com/english/communication.htm">Donation</a></li>
	</ul>
	<div class="esp"></div>
	<div class="center"><a class="co" href="https://www.lexilogos.com/contact.php">Xavier Nègre &nbsp;  ©  Lexilogos 2002-2022</a></div>
	<div class="espd"></div>
	<script src="assets/code/base.js"></script>
	<script src="assets/code/carurd.js"></script>
	<script src="assets/code/clipboard.js"></script>
	<script src="assets/code/savee.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
</body>

</html>
<script>
    	$('#newLineButton').click(function () {
		var inp = $('#bar').val();
		$('#bar').val(inp+'\r\n').focus();
	})

	
	function onPressBackspace() {
	var myTextarea = document.getElementById("bar");
    myTextarea.value = myTextarea.value.substring(0, myTextarea.value.length - 1);
	myTextarea.focus();
	}
    var clipboard = new Clipboard('.bf');
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
    </script>