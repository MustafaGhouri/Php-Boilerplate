//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value;
car = car.replace(/[äâ]/g, "e");
car = car.replace(/[êëē]/g, "é");

car = car.replace(/[əǝ]/g, "");  // 601 schwa 417 inversé retrait caractère

car = car.replace(/w/g, "ው");
car = car.replace(/ውe/g, "ወ");
car = car.replace(/ውu/g, "ዉ");
car = car.replace(/ውi/g, "ዊ");
car = car.replace(/ውa/g, "ዋ");
car = car.replace(/ውe/g, "ዌ");
car = car.replace(/ውé/g, "ዌ");
car = car.replace(/ውo/g, "ዎ");

car = car.replace(/h/g, "ህ");
car = car.replace(/ህe/g, "ሀ");
car = car.replace(/ህu/g, "ሁ");
car = car.replace(/ህi/g, "ሂ");
car = car.replace(/ህa/g, "ሃ");
car = car.replace(/ሀe/g, "ሄ");
car = car.replace(/ህé/g, "ሄ");
car = car.replace(/ህo/g, "ሆ");
car = car.replace(/ሃa/g, "ዏ");

car = car.replace(/[ḫẖxX]/g, "ኅ");  // second carac h tiret
car = car.replace(/ኅe/g, "ኀ");
car = car.replace(/ኅu/g, "ኁ");
car = car.replace(/ኅi/g, "ኂ");
car = car.replace(/ኅa/g, "ኃ");
car = car.replace(/ኀe/g, "ኄ");
car = car.replace(/ኅé/g, "ኄ");
car = car.replace(/ኅo/g, "ኆ");
car = car.replace(/ኃa/g, "ኋ");

car = car.replace(/[lL]/g, "ል");
car = car.replace(/ልe/g, "ለ");
car = car.replace(/ልu/g, "ሉ");
car = car.replace(/ልi/g, "ሊ");
car = car.replace(/ልa/g, "ላ");
car = car.replace(/ለe/g, "ሌ");
car = car.replace(/ልé/g, "ሌ");
car = car.replace(/ልo/g, "ሎ");
car = car.replace(/ላa/g, "ሏ");

car = car.replace(/ህህ/g, "ሕ");
car = car.replace(/[ḥH]/g, "ሕ");
car = car.replace(/ሕe/g, "ሐ");
car = car.replace(/ሕu/g, "ሑ");
car = car.replace(/ሕi/g, "ሒ");
car = car.replace(/ሕa/g, "ሓ");
car = car.replace(/ሐe/g, "ሔ");
car = car.replace(/ሕé/g, "ሔ");
car = car.replace(/ሕo/g, "ሖ");
car = car.replace(/ሓa/g, "ሗ");

car = car.replace(/[mM]/g, "ም");
car = car.replace(/ምe/g, "መ");
car = car.replace(/ምu/g, "ሙ");
car = car.replace(/ምi/g, "ሚ");
car = car.replace(/ምa/g, "ማ");
car = car.replace(/መe/g, "ሜ");
car = car.replace(/ምé/g, "ሜ");
car = car.replace(/ምo/g, "ሞ");
car = car.replace(/ማa/g, "ሟ");
car = car.replace(/ምY/g, "ፙ");
car = car.replace(/ፙa/g, "ፙ");

car = car.replace(/[rR]/g, "ር");
car = car.replace(/ርe/g, "ረ");
car = car.replace(/ርu/g, "ሩ");
car = car.replace(/ርi/g, "ሪ");
car = car.replace(/ርa/g, "ራ");
car = car.replace(/ረe/g, "ሬ");
car = car.replace(/ርé/g, "ሬ");
car = car.replace(/ርo/g, "ሮ");
car = car.replace(/ራa/g, "ሯ");
car = car.replace(/ርY/g, "ፘ");
car = car.replace(/ፘa/g, "ፘ");

car = car.replace(/s/g, "ስ");
car = car.replace(/ስe/g, "ሰ");
car = car.replace(/ስu/g, "ሱ");
car = car.replace(/ስi/g, "ሲ");
car = car.replace(/ስa/g, "ሳ");
car = car.replace(/ሰe/g, "ሴ");
car = car.replace(/ስé/g, "ሴ");
car = car.replace(/ስo/g, "ሶ");
car = car.replace(/ሳa/g, "ሷ");

car = car.replace(/z/g, "ዝ");
car = car.replace(/ዝe/g, "ዘ");
car = car.replace(/ዝu/g, "ዙ");
car = car.replace(/ዝi/g, "ዚ");
car = car.replace(/ዝa/g, "ዛ");
car = car.replace(/ዘe/g, "ዜ");
car = car.replace(/ዝé/g, "ዜ");
car = car.replace(/ዝo/g, "ዞ");
car = car.replace(/ዛa/g, "ዟ");

// modif ss remplacé par sz
car = car.replace(/ś/g, "ሥ");
car = car.replace(/ስዝ/g, "ሥ");
car = car.replace(/ሥe/g, "ሠ");
car = car.replace(/ሥu/g, "ሡ");
car = car.replace(/ሥi/g, "ሢ");
car = car.replace(/ሥa/g, "ሣ");
car = car.replace(/ሠe/g, "ሤ");
car = car.replace(/ሥé/g, "ሤ");
car = car.replace(/ሥo/g, "ሦ");
car = car.replace(/ሣa/g, "ሧ");

car = car.replace(/š/g, "ሽ");
car = car.replace(/ስስ/g, "ሽ");
car = car.replace(/ስህ/g, "ሽ");
car = car.replace(/ሽe/g, "ሸ");
car = car.replace(/ሽu/g, "ሹ");
car = car.replace(/ሽi/g, "ሺ");
car = car.replace(/ሽa/g, "ሻ");
car = car.replace(/ሸe/g, "ሼ");
car = car.replace(/ሽé/g, "ሼ");
car = car.replace(/ሽo/g, "ሾ");
car = car.replace(/ሻa/g, "ሿ");


car = car.replace(/q/g, "ቅ");
car = car.replace(/ቅe/g, "ቀ");
car = car.replace(/ቅu/g, "ቁ");
car = car.replace(/ቅi/g, "ቂ");
car = car.replace(/ቅa/g, "ቃ");
car = car.replace(/ቀe/g, "ቄ");
car = car.replace(/ቅé/g, "ቄ");
car = car.replace(/ቅo/g, "ቆ");
car = car.replace(/ቃa/g, "ቋ");


car = car.replace(/ቅው/g, "ቍ");
car = car.replace(/ቍe/g, "ቈ");
car = car.replace(/ቍi/g, "ቊ");
car = car.replace(/ቍa/g, "ቋ");
car = car.replace(/ቈe/g, "ቌ");
car = car.replace(/ቍé/g, "ቌ");

//qh
car = car.replace(/ቅህ/g, "ቕ");
car = car.replace(/ቕe/g, "ቐ");
car = car.replace(/ቕu/g, "ቑ");
car = car.replace(/ቕi/g, "ቒ");
car = car.replace(/ቕa/g, "ቓ");
car = car.replace(/ቐe/g, "ቔ");
car = car.replace(/ቕé/g, "ቔ");
car = car.replace(/ቕo/g, "ቖ");


car = car.replace(/ቕው/g, "ቝ");
car = car.replace(/ቍe/g, "ቘ");
car = car.replace(/ቍi/g, "ቚ");
car = car.replace(/ቍa/g, "ቛ");
car = car.replace(/ቘe/g, "ቜ");
car = car.replace(/ቍé/g, "ቜ");
// xw
car = car.replace(/ኅው/g, "ኍ");
car = car.replace(/ኍe/g, "ቘ");
car = car.replace(/ኍi/g, "ቚ");
car = car.replace(/ኍa/g, "ቛ");
car = car.replace(/ቘe/g, "ቜ");
car = car.replace(/ኍé/g, "ቜ");


car = car.replace(/[bB]/g, "ብ");
car = car.replace(/ብe/g, "በ");
car = car.replace(/ብu/g, "ቡ");
car = car.replace(/ብi/g, "ቢ");
car = car.replace(/ብa/g, "ባ");
car = car.replace(/በe/g, "ቤ");
car = car.replace(/ብé/g, "ቤ");
car = car.replace(/ብo/g, "ቦ");
car = car.replace(/ባa/g, "ቧ");

car = car.replace(/[vV]/g, "ቭ");
car = car.replace(/ቭe/g, "ቨ");
car = car.replace(/ቭu/g, "ቩ");
car = car.replace(/ቭi/g, "ቪ");
car = car.replace(/ቭa/g, "ቫ");
car = car.replace(/ቨe/g, "ቬ");
car = car.replace(/ቭé/g, "ቬ");
car = car.replace(/ቭo/g, "ቮ");
car = car.replace(/ቫa/g, "ቯ");

car = car.replace(/t/g, "ት");
car = car.replace(/ትe/g, "ተ");
car = car.replace(/ትu/g, "ቱ");
car = car.replace(/ትi/g, "ቲ");
car = car.replace(/ትa/g, "ታ");
car = car.replace(/ተe/g, "ቴ");
car = car.replace(/ትé/g, "ቴ");
car = car.replace(/ትo/g, "ቶ");
car = car.replace(/ታa/g, "ቷ");

car = car.replace(/[cč]/g, "ች");
car = car.replace(/ችe/g, "ቸ");
car = car.replace(/ችu/g, "ቹ");
car = car.replace(/ችi/g, "ቺ");
car = car.replace(/ችa/g, "ቻ");
car = car.replace(/ቸe/g, "ቼ");
car = car.replace(/ችé/g, "ቼ");
car = car.replace(/ችo/g, "ቾ");
car = car.replace(/ቻa/g, "ቿ");

car = car.replace(/n/g, "ን");
car = car.replace(/ንe/g, "ነ");
car = car.replace(/ንu/g, "ኑ");
car = car.replace(/ንi/g, "ኒ");
car = car.replace(/ንa/g, "ና");
car = car.replace(/ነe/g, "ኔ");
car = car.replace(/ንé/g, "ኔ");
car = car.replace(/ንo/g, "ኖ");
car = car.replace(/ናa/g, "ኗ");

car = car.replace(/N/g, "ኝ");
car = car.replace(/ñ/g, "ኝ");
car = car.replace(/ንy/g, "ኝ");
car = car.replace(/ኝe/g, "ኘ");
car = car.replace(/ኝu/g, "ኙ");
car = car.replace(/ኝi/g, "ኚ");
car = car.replace(/ኝa/g, "ኛ");
car = car.replace(/ኝe/g, "ኜ");
car = car.replace(/ኝé/g, "ኜ");
car = car.replace(/ኝo/g, "ኞ");
car = car.replace(/ኛa/g, "ኟ");


car = car.replace(/k/g, "ክ");
car = car.replace(/ክe/g, "ከ");
car = car.replace(/ክu/g, "ኩ");
car = car.replace(/ክi/g, "ኪ");
car = car.replace(/ክa/g, "ካ");
car = car.replace(/ከe/g, "ኬ");
car = car.replace(/ክé/g, "ኬ");
car = car.replace(/ክo/g, "ኮ");
car = car.replace(/ካa/g, "ኳ");


car = car.replace(/ክኅ/g, "ኽ");
car = car.replace(/ኽe/g, "ኸ");
car = car.replace(/ኽu/g, "ኹ");
car = car.replace(/ኽi/g, "ኺ");
car = car.replace(/ኽa/g, "ኻ");
car = car.replace(/ኸe/g, "ኼ");
car = car.replace(/ኽé/g, "ኼ");
car = car.replace(/ኽo/g, "ኾ");

car = car.replace(/ኽው/g, "ዅ");
car = car.replace(/ዅe/g, "ዀ");
car = car.replace(/ዅu/g, "ዂ");
car = car.replace(/ዅi/g, "ዂ");
car = car.replace(/ዅa/g, "ዃ");
car = car.replace(/ዀe/g, "ዄ");
car = car.replace(/ዅé/g, "ዄ");


// kw
car = car.replace(/ክው/g, "ኵ");
car = car.replace(/ኵe/g, "ኰ");
car = car.replace(/ኵi/g, "ኲ");
car = car.replace(/ኵa/g, "ኳ");
car = car.replace(/ኰe/g, "ኴ");
car = car.replace(/ኵé/g, "ኴ");

car = car.replace(/K/g, "ኽ");
car = car.replace(/ክኅ/g, "ኽ");
car = car.replace(/ኽe/g, "ኸ");
car = car.replace(/ኽu/g, "ኹ");
car = car.replace(/ኽi/g, "ኺ");
car = car.replace(/ኽa/g, "ኻ");
car = car.replace(/ኽe/g, "ኼ");
car = car.replace(/ኽé/g, "ኼ");
car = car.replace(/ኽo/g, "ኾ");
car = car.replace(/ኽW/g, "ዃ");
car = car.replace(/ዃe/g, "ዀ");
car = car.replace(/ዃu/g, "ዅ");
car = car.replace(/ዃi/g, "ዂ");
car = car.replace(/ዃa/g, "ዃ");
car = car.replace(/ዀe/g, "ዄ");
car = car.replace(/ዃé/g, "ዄ");
car = car.replace(/ዃ'/g, "ዅ");

car = car.replace(/[Zž]/g, "ዥ");
car = car.replace(/ዝህ/g, "ዥ");
car = car.replace(/ዥe/g, "ዠ");
car = car.replace(/ዥu/g, "ዡ");
car = car.replace(/ዥi/g, "ዢ");
car = car.replace(/ዥa/g, "ዣ");
car = car.replace(/ዠe/g, "ዤ");
car = car.replace(/ዥé/g, "ዤ");
car = car.replace(/ዥo/g, "ዦ");
car = car.replace(/ዣa/g, "ዧ");

car = car.replace(/[yY]/g, "ይ");
car = car.replace(/ይe/g, "የ");
car = car.replace(/ይu/g, "ዩ");
car = car.replace(/ይi/g, "ዪ");
car = car.replace(/ይa/g, "ያ");
car = car.replace(/የe/g, "ዬ");
car = car.replace(/ይé/g, "ዬ");
car = car.replace(/ይo/g, "ዮ");
car = car.replace(/ያa/g, "ዯ");

car = car.replace(/d/g, "ድ");
car = car.replace(/ድe/g, "ደ");
car = car.replace(/ድu/g, "ዱ");
car = car.replace(/ድi/g, "ዲ");
car = car.replace(/ድa/g, "ዳ");
car = car.replace(/ደe/g, "ዴ");
car = car.replace(/ድé/g, "ዴ");
car = car.replace(/ድo/g, "ዶ");
car = car.replace(/ዳa/g, "ዷ");

car = car.replace(/ድድ/g, "ዽ");
car = car.replace(/[Dḍ]/g, "ዽ");
car = car.replace(/ዽe/g, "ዸ");
car = car.replace(/ዽu/g, "ዹ");
car = car.replace(/ዽi/g, "ዺ");
car = car.replace(/ዽa/g, "ዻ");
car = car.replace(/ዸe/g, "ዼ");
car = car.replace(/ዽé/g, "ዼ");
car = car.replace(/ዽo/g, "ዾ");
car = car.replace(/ዻa/g, "ዿ");

car = car.replace(/[jJ]/g, "ጅ");
car = car.replace(/ጅe/g, "ጀ");
car = car.replace(/ጅu/g, "ጁ");
car = car.replace(/ጅi/g, "ጂ");
car = car.replace(/ጅa/g, "ጃ");
car = car.replace(/ጀe/g, "ጄ");
car = car.replace(/ጅé/g, "ጄ");
car = car.replace(/ጅo/g, "ጆ");
car = car.replace(/ጃa/g, "ጇ");

car = car.replace(/g/g, "ግ");
car = car.replace(/ግe/g, "ገ");
car = car.replace(/ግu/g, "ጉ");
car = car.replace(/ግi/g, "ጊ");
car = car.replace(/ግa/g, "ጋ");
car = car.replace(/ገe/g, "ጌ");
car = car.replace(/ግé/g, "ጌ");
car = car.replace(/ግo/g, "ጎ");
car = car.replace(/ጋa/g, "ጓ");

// gw
car = car.replace(/ግው/g, "ጕ");
car = car.replace(/ጕe/g, "ጐ");
car = car.replace(/ጕi/g, "ጒ");
car = car.replace(/ጕa/g, "ጓ");
car = car.replace(/ጐe/g, "ጔ");
car = car.replace(/ጕé/g, "ጔ");


car = car.replace(/ግግ/g, "ጝ");
car = car.replace(/[ǧG]/g, "ጝ");
car = car.replace(/ጝe/g, "ጘ");
car = car.replace(/ጝu/g, "ጙ");
car = car.replace(/ጝi/g, "ጚ");
car = car.replace(/ጝa/g, "ጛ");
car = car.replace(/ጘe/g, "ጜ");
car = car.replace(/ጝé/g, "ጜ");
car = car.replace(/ጝo/g, "ጞ");
car = car.replace(/ጛa/g, "ጟ");

car = car.replace(/[Tṭ]/g, "ጥ");
car = car.replace(/ትህ/g, "ጥ");
car = car.replace(/ጥe/g, "ጠ");
car = car.replace(/ጥu/g, "ጡ");
car = car.replace(/ጥi/g, "ጢ");
car = car.replace(/ጥa/g, "ጣ");
car = car.replace(/ጠe/g, "ጤ");
car = car.replace(/ጥé/g, "ጤ");
car = car.replace(/ጥo/g, "ጦ");
car = car.replace(/ጣa/g, "ጧ");

car = car.replace(/[Cċ]/g, "ጭ");
car = car.replace(/ችህ/g, "ጭ");
car = car.replace(/ጭe/g, "ጨ");
car = car.replace(/ጭu/g, "ጩ");
car = car.replace(/ጭi/g, "ጪ");
car = car.replace(/ጭa/g, "ጫ");
car = car.replace(/ጨe/g, "ጬ");
car = car.replace(/ጭé/g, "ጬ");
car = car.replace(/ጭo/g, "ጮ");
car = car.replace(/ጫa/g, "ጯ");

car = car.replace(/p̣/g, "ጵ");
car = car.replace(/P/g, "ጵ");
car = car.replace(/ፕህ/g, "ጵ");
car = car.replace(/ጵe/g, "ጰ");
car = car.replace(/ጵu/g, "ጱ");
car = car.replace(/ጵi/g, "ጲ");
car = car.replace(/ጵa/g, "ጳ");
car = car.replace(/ጰe/g, "ጴ");
car = car.replace(/ጵé/g, "ጴ");
car = car.replace(/ጵo/g, "ጶ");
car = car.replace(/ጳa/g, "ጷ");

car = car.replace(/[Sṣ]/g, "ጽ");
car = car.replace(/ትስ/g, "ጽ");
car = car.replace(/ጽe/g, "ጸ");
car = car.replace(/ጽu/g, "ጹ");
car = car.replace(/ጽi/g, "ጺ");
car = car.replace(/ጽa/g, "ጻ");
car = car.replace(/ጸe/g, "ጼ");
car = car.replace(/ጽé/g, "ጼ");
car = car.replace(/ጽo/g, "ጾ");
car = car.replace(/ጻa/g, "ጿ");

car = car.replace(/ṣ́/g, "ፅ");
car = car.replace(/ትዝ/g, "ፅ");
car = car.replace(/ፅe/g, "ፀ");
car = car.replace(/ፅu/g, "ፁ");
car = car.replace(/ፅi/g, "ፂ");
car = car.replace(/ፅa/g, "ፃ");
car = car.replace(/ፀe/g, "ፄ");
car = car.replace(/ፅé/g, "ፄ");
car = car.replace(/ፅo/g, "ፆ");
car = car.replace(/ፃa/g, "ፇ");

car = car.replace(/[fF]/g, "ፍ");
car = car.replace(/ፍe/g, "ፈ");
car = car.replace(/ፍu/g, "ፉ");
car = car.replace(/ፍi/g, "ፊ");
car = car.replace(/ፍa/g, "ፋ");
car = car.replace(/ፈe/g, "ፌ");
car = car.replace(/ፍé/g, "ፌ");
car = car.replace(/ፍo/g, "ፎ");
car = car.replace(/ፋa/g, "ፏ");

// non identif
//car = car.replace(/ፍY/g, "ፚ");
//car = car.replace(/ፚa/g, "ፚ");

car = car.replace(/p/g, "ፕ");
car = car.replace(/ፕe/g, "ፐ");
car = car.replace(/ፕu/g, "ፑ");
car = car.replace(/ፕi/g, "ፒ");
car = car.replace(/ፕa/g, "ፓ");
car = car.replace(/ፐe/g, "ፔ");
car = car.replace(/ፕé/g, "ፔ");
car = car.replace(/ፕo/g, "ፖ");
car = car.replace(/ፓa/g, "ፗ");

// pharyngale 
car = car.replace(/ʿ/g, "ዕ");
car = car.replace(/\</g, "ዕ");
car = car.replace(/\"/g, "ዕ");
car = car.replace(/ዕe/g, "ዐ");
car = car.replace(/ዕu/g, "ዑ");
car = car.replace(/ዕi/g, "ዒ");
car = car.replace(/ዕa/g, "ዓ");
car = car.replace(/ዐe/g, "ዔ");
car = car.replace(/ዕé/g, "ዔ");
car = car.replace(/ዕo/g, "ዖ");

car = car.replace(/E/g, "ዐ");
car = car.replace(/U/g, "ዑ");
car = car.replace(/I/g, "ዒ");
car = car.replace(/A/g, "ዓ");
car = car.replace(/ዐዐ/g, "ዔ");
car = car.replace(/É/g, "ዔ");
car = car.replace(/O/g, "ዖ");

// glottales 
car = car.replace(/ʾ/g, "እ");
car = car.replace(/\>/g, "እ");
car = car.replace(/\'/g, "እ");
car = car.replace(/እe/g, "አ");
car = car.replace(/እu/g, "ኡ");
car = car.replace(/እi/g, "ኢ");
car = car.replace(/እa/g, "ኣ");
car = car.replace(/አe/g, "ኤ");
car = car.replace(/እé/g, "ኤ");
car = car.replace(/እo/g, "ኦ");
car = car.replace(/ኣa/g, "ኧ");

car = car.replace(/e/g, "አ");
car = car.replace(/u/g, "ኡ");
car = car.replace(/i/g, "ኢ");
car = car.replace(/a/g, "ኣ");
car = car.replace(/አአ/g, "ኤ");
car = car.replace(/é/g, "ኤ");
car = car.replace(/o/g, "ኦ");
car = car.replace(/ኣኣ/g, "ኧ");

//ponctuation 
car = car.replace(/-/g, "፡");
car = car.replace(/\./g, "።");
car = car.replace(/\,/g, "፣");
car = car.replace(/\;/g, "፤");
car = car.replace(/\:/g, "፥");
car = car.replace(/\!/g, "፦");
car = car.replace(/\?/g, "፧");
car = car.replace(/\//g, "፨");

car = car.replace(/1/g, "፩");
car = car.replace(/2/g, "፪");
car = car.replace(/3/g, "፫");
car = car.replace(/4/g, "፬");
car = car.replace(/5/g, "፭");
car = car.replace(/6/g, "፮");
car = car.replace(/7/g, "፯");
car = car.replace(/8/g, "፰");
car = car.replace(/9/g, "፱");
car = car.replace(/፩0/g, "፲");
car = car.replace(/፪0/g, "፳");
car = car.replace(/፫0/g, "፴");
car = car.replace(/፬0/g, "፵");
car = car.replace(/፭0/g, "፶");
car = car.replace(/፮0/g, "፷");
car = car.replace(/፯0/g, "፸");
car = car.replace(/፰0/g, "፹");
car = car.replace(/፱0/g, "፺");
car = car.replace(/፲0/g, "፻");
car = car.replace(/፳0/g, "፪፻");
car = car.replace(/፺0/g, "፱፻");
car = car.replace(/፻0/g, "፲፻");
car = car.replace(/፲፻0/g, "፼");


startPos = document.conversion.saisie.selectionStart;
endPos = document.conversion.saisie.selectionEnd;

beforeLen = document.conversion.saisie.value.length;
afterLen = car.length;
adjustment = afterLen - beforeLen;

document.conversion.saisie.value = car;

document.conversion.saisie.selectionStart = startPos + adjustment;
document.conversion.saisie.selectionEnd = endPos + adjustment;

var obj = document.conversion.saisie;
obj.focus();
obj.scrollTop = obj.scrollHeight;
}