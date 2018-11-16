/**
 * 生成KanaAnki使用的Json格式数据
 */

var kanas = new Array();

/**
 * 日语假名
 * 
 * @param {*} hira 平假名
 * @param {*} kata 片假名
 * @param {*} hebon 平文式罗马字
 * @param {*} kunrei 训令式罗马字
 */
function Kana (hira, kata, hebon, kunrei) {
    if (!(this instanceof Kana)) {
        return new Kana(hira, kata, hebon, kunrei);
    }

    this.hira = hira;
    this.kata = kata;
    this.hebon = hebon;
    this.kunrei = kunrei;
}

// 五十音图的假名数据
kanas.push(new Kana('あ', 'ア', 'a', 'a'));
kanas.push(new Kana('い', 'イ', 'i', 'i'));
kanas.push(new Kana('う', 'ウ', 'u', 'u'));
kanas.push(new Kana('え', 'エ', 'e', 'e'));
kanas.push(new Kana('お', 'オ', 'o', 'o'));

kanas.push(new Kana('か', 'カ', 'ka', 'ka'));
kanas.push(new Kana('き', 'キ', 'ki', 'ki'));
kanas.push(new Kana('く', 'ク', 'ku', 'ku'));
kanas.push(new Kana('け', 'ケ', 'ke', 'ke'));
kanas.push(new Kana('こ', 'コ', 'ko', 'ko'));

kanas.push(new Kana('さ', 'サ', 'sa', 'sa'));
kanas.push(new Kana('し', 'シ', 'shi', 'si'));
kanas.push(new Kana('す', 'ス', 'su', 'su'));
kanas.push(new Kana('せ', 'セ', 'se', 'se'));
kanas.push(new Kana('そ', 'ソ', 'so', 'so'));

kanas.push(new Kana('た', 'タ', 'ta', 'ta'));
kanas.push(new Kana('ち', 'チ', 'chi', 'ti'));
kanas.push(new Kana('つ', 'ツ', 'tsu', 'tu'));
kanas.push(new Kana('て', 'テ', 'te', 'te'));
kanas.push(new Kana('と', 'ト', 'to', 'to'));

kanas.push(new Kana('な', 'ナ', 'na', 'na'));
kanas.push(new Kana('に', 'ニ', 'ni', 'ni'));
kanas.push(new Kana('ぬ', 'ヌ', 'nu', 'nu'));
kanas.push(new Kana('ね', 'ネ', 'ne', 'ne'));
kanas.push(new Kana('の', 'ノ', 'no', 'no'));

kanas.push(new Kana('は', 'ハ', 'ha', 'ha'));
kanas.push(new Kana('ひ', 'ヒ', 'hi', 'hi'));
kanas.push(new Kana('ふ', 'フ', 'fu', 'hu'));
kanas.push(new Kana('へ', 'ヘ', 'he', 'he'));
kanas.push(new Kana('ほ', 'ホ', 'ho', 'ho'));

kanas.push(new Kana('ま', 'マ', 'ma', 'ma'));
kanas.push(new Kana('み', 'ミ', 'mi', 'mi'));
kanas.push(new Kana('む', 'ム', 'mu', 'mu'));
kanas.push(new Kana('め', 'メ', 'me', 'me'));
kanas.push(new Kana('も', 'モ', 'mo', 'mo'));

kanas.push(new Kana('や', 'ヤ', 'ya', 'ya'));
kanas.push(new Kana('ゆ', 'ユ', 'yu', 'yu'));
kanas.push(new Kana('よ', 'ヨ', 'yo', 'yo'));

kanas.push(new Kana('ら', 'ラ', 'ra', 'ra'));
kanas.push(new Kana('り', 'リ', 'ri', 'ri'));
kanas.push(new Kana('る', 'ル', 'ru', 'ru'));
kanas.push(new Kana('れ', 'レ', 're', 're'));
kanas.push(new Kana('ろ', 'ロ', 'ro', 'ro'));

kanas.push(new Kana('わ', 'ワ', 'wa', 'wa'));
kanas.push(new Kana('を', 'ヲ', 'wo', 'wo'));

console.log('假名数据：')
console.log(JSON.stringify(kanas));
