//  copyright lexilogos.com
var car;

function transcrire() {
car = document.conversion.saisie.value.toLowerCase();
car = car.replace(/[ôō]/g, "oー");
car = car.replace(/[ūû]/g, "uー");
car = car.replace(/[âā]/g, "aー");
car = car.replace(/[îī]/g, "iー");
car = car.replace(/[êē]/g, "eー");
car = car.replace(/_/g, "ー");

car = car.replace(/n/g, "ン");
car = car.replace(/v/g, "ヴ");
car = car.replace(/q/g, "ッ");
car = car.replace(/kya/g, "キャ");
car = car.replace(/kyu/g, "キュ");
car = car.replace(/kyo/g, "キョ");
car = car.replace(/ンya/g, "ニャ");
car = car.replace(/ンyu/g, "ニュ");
car = car.replace(/ンyo/g, "ニョ");
car = car.replace(/sha/g, "シャ");
car = car.replace(/shu/g, "シュ");
car = car.replace(/sho/g, "ショ");
car = car.replace(/cha/g, "チャ");
car = car.replace(/chu/g, "チュ");
car = car.replace(/cho/g, "チョ");
car = car.replace(/hya/g, "ヒャ");
car = car.replace(/hyu/g, "ヒュ");
car = car.replace(/hyo/g, "ヒョ");
car = car.replace(/mya/g, "ミャ");
car = car.replace(/myu/g, "ミュ");
car = car.replace(/myo/g, "ミョ");
car = car.replace(/rya/g, "リャ");
car = car.replace(/ryu/g, "リュ");
car = car.replace(/ryo/g, "リョ");
car = car.replace(/gya/g, "ギャ");
car = car.replace(/gyu/g, "ギュ");
car = car.replace(/gyo/g, "ギョ");
car = car.replace(/bya/g, "ビャ");
car = car.replace(/byu/g, "ビュ");
car = car.replace(/byo/g, "ビョ");
car = car.replace(/pya/g, "ピャ");
car = car.replace(/pyu/g, "ピュ");
car = car.replace(/pyo/g, "ピョ");
car = car.replace(/ja/g, "ジャ");
car = car.replace(/ju/g, "ジュ");
car = car.replace(/jo/g, "ジョ");

car = car.replace(/tsu/g, "ツ");
car = car.replace(/dzu/g, "ヅ"); 
car = car.replace(/dju/g, "ヅ");
car = car.replace(/dji/g, "ヂ");
car = car.replace(/shi/g, "シ");
car = car.replace(/chi/g, "チ");

car = car.replace(/ba/g, "バ");
car = car.replace(/da/g, "ダ");
car = car.replace(/ga/g, "ガ");
car = car.replace(/ha/g, "ハ");
car = car.replace(/ka/g, "カ");
car = car.replace(/ma/g, "マ");
car = car.replace(/ンa/g, "ナ");
car = car.replace(/pa/g, "パ");
car = car.replace(/ra/g, "ラ");
car = car.replace(/sa/g, "サ");
car = car.replace(/ta/g, "タ");
car = car.replace(/wa/g, "ワ");
car = car.replace(/ya/g, "ヤ");
car = car.replace(/za/g, "ザ");
car = car.replace(/be/g, "ベ");
car = car.replace(/de/g, "デ");
car = car.replace(/ge/g, "ゲ");
car = car.replace(/he/g, "ヘ");
car = car.replace(/ke/g, "ケ");
car = car.replace(/me/g, "メ");
car = car.replace(/ンe/g, "ネ");
car = car.replace(/pe/g, "ペ");
car = car.replace(/re/g, "レ");
car = car.replace(/se/g, "セ");
car = car.replace(/te/g, "テ");
car = car.replace(/we/g, "ヱ");
car = car.replace(/ze/g, "ゼ");
car = car.replace(/bi/g, "ビ");
car = car.replace(/gi/g, "ギ");
car = car.replace(/hi/g, "ヒ");
car = car.replace(/ki/g, "キ");
car = car.replace(/si/g, "シ");
car = car.replace(/ti/g, "チ");
car = car.replace(/mi/g, "ミ");
car = car.replace(/ンi/g, "ニ");
car = car.replace(/pi/g, "ピ");
car = car.replace(/ri/g, "リ");
car = car.replace(/wi/g, "ヰ");
car = car.replace(/ji/g, "ジ");
car = car.replace(/zi/g, "ジ");
car = car.replace(/bo/g, "ボ");
car = car.replace(/do/g, "ド");
car = car.replace(/go/g, "ゴ");
car = car.replace(/ho/g, "ホ");
car = car.replace(/ko/g, "コ");
car = car.replace(/mo/g, "モ");
car = car.replace(/ンo/g, "ノ");
car = car.replace(/po/g, "ポ");
car = car.replace(/ro/g, "ロ");
car = car.replace(/so/g, "ソ");
car = car.replace(/to/g, "ト");
car = car.replace(/wo/g, "ヲ");
car = car.replace(/yo/g, "ヨ");
car = car.replace(/zo/g, "ゾ");
car = car.replace(/bu/g, "ブ");
car = car.replace(/gu/g, "グ");
car = car.replace(/fu/g, "フ");
car = car.replace(/hu/g, "フ");
car = car.replace(/tu/g, "ツ");
car = car.replace(/ku/g, "ク");
car = car.replace(/mu/g, "ム");
car = car.replace(/ンu/g, "ヌ");
car = car.replace(/pu/g, "プ");
car = car.replace(/ru/g, "ル");
car = car.replace(/su/g, "ス");
car = car.replace(/yu/g, "ユ");
car = car.replace(/zu/g, "ズ");

//archaic
car = car.replace(/ye/g, "𛄡");
car = car.replace(/yi/g, "𛄠");
car = car.replace(/wu/g, "𛄢");

// cas des doublons
car = car.replace(/di/g, "ヂ");
car = car.replace(/ジ=/g, "ヂ");
car = car.replace(/du/g, "ヅ");
car = car.replace(/ズ=/g, "ヅ");

car = car.replace(/a/g, "ア");
car = car.replace(/[eé]/g, "エ");
car = car.replace(/i/g, "イ");
car = car.replace(/o/g, "オ");
car = car.replace(/u/g, "ウ");

car = car.replace(/ア=/g, "ァ");
car = car.replace(/イ=/g, "ィ");
car = car.replace(/ウ=/g, "ゥ");
car = car.replace(/エ=/g, "ェ");
car = car.replace(/オ=/g, "ォ");
car = car.replace(/ツ=/g, "ッ");
car = car.replace(/ヤ=/g, "ャ");
car = car.replace(/ユ=/g, "ュ");
car = car.replace(/ヨ=/g, "ョ");

// 2e série
car = car.replace(/ク=/g, "ㇰ");
car = car.replace(/シ=/g, "ㇱ");
car = car.replace(/ス=/g, "ㇲ");
car = car.replace(/ト=/g, "ㇳ");
car = car.replace(/ヌ=/g, "ㇴ");
car = car.replace(/ハ=/g, "ㇵ");
car = car.replace(/ヒ=/g, "ㇶ");
car = car.replace(/フ=/g, "ㇷ");
car = car.replace(/ヘ=/g, "ㇸ");
car = car.replace(/ホ=/g, "ㇹ");
car = car.replace(/ム=/g, "ㇺ");
car = car.replace(/ラ=/g, "ㇻ");
car = car.replace(/リ=/g, "ㇼ");
car = car.replace(/ル=/g, "ㇽ");
car = car.replace(/レ=/g, "ㇾ");
car = car.replace(/ロ=/g, "ㇿ");

car = car.replace(/\./g, "。");
car = car.replace(/\,/g, "、");
car = car.replace(/\!/g, "！");
car = car.replace(/\?/g, "？");
car = car.replace(/\:/g, "：");
car = car.replace(/\(/g, "（");
car = car.replace(/\)/g, "）");
car = car.replace(/\[/g, "［");
car = car.replace(/\]/g, "］");
car = car.replace(/\«/g, "「");
car = car.replace(/\»/g, "」");

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