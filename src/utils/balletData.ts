export interface BalletWord {
  id: string;
  kanji: string;       // Display text (e.g. "白鳥の湖 第２幕 湖畔の情景")
  hiragana: string;    // Typing target (e.g. "はくちょうのみずうみだいにはくこはんのじょうけい")
  price: number;       // Appreciation value in Yen
  category?: string;   // 演目と幕 / 主要登場人物 / 名場面 / ステップ
}

export const balletWords: BalletWord[] = [
  // =========================================================================
  // --- SHORT TERMS: Basic Steps, Props & Solo Characters (2-7 characters) ---
  // =========================================================================
  { id: "1", kanji: "プリエ", hiragana: "ぷりえ", price: 100, category: "ステップ" },
  { id: "2", kanji: "ルルベ", hiragana: "るるべ", price: 100, category: "ステップ" },
  { id: "3", kanji: "タンデュ", hiragana: "たんでゅ", price: 120, category: "ステップ" },
  { id: "4", kanji: "パッセ", hiragana: "ぱっせ", price: 120, category: "ステップ" },
  { id: "5", kanji: "シャッセ", hiragana: "しゃっせ", price: 120, category: "ステップ" },
  { id: "6", kanji: "ジュテ", hiragana: "じゅて", price: 150, category: "ステップ" },
  { id: "7", kanji: "ポワント", hiragana: "ぽわんと", price: 150, category: "ステップ" },
  { id: "8", kanji: "チュチュ", hiragana: "ちゅちゅ", price: 150, category: "衣装" },
  { id: "9", kanji: "ティアラ", hiragana: "てぃあら", price: 180, category: "小道具" },
  { id: "10", kanji: "トウシューズ", hiragana: "とうしゅーず", price: 200, category: "小道具" },
  { id: "11", kanji: "ピルエット", hiragana: "ぴるえっと", price: 200, category: "ステップ" },
  { id: "12", kanji: "アラベスク", hiragana: "あらべすく", price: 200, category: "ポーズ" },
  { id: "13", kanji: "アチチュード", hiragana: "あちちゅーど", price: 220, category: "ポーズ" },
  { id: "14", kanji: "アッサンブレ", hiragana: "あっさんぶれ", price: 220, category: "ステップ" },
  { id: "15", kanji: "シソンヌ", hiragana: "しそんぬ", price: 200, category: "ステップ" },
  { id: "16", kanji: "フェッテ", hiragana: "ふぇって", price: 250, category: "技" },
  { id: "17", kanji: "オデット", hiragana: "おでっと", price: 200, category: "主要人物" },
  { id: "18", kanji: "オディール", hiragana: "おでぃーる", price: 200, category: "主要人物" },
  { id: "19", kanji: "ジゼル", hiragana: "じぜる", price: 200, category: "主要人物" },
  { id: "20", kanji: "キトリ", hiragana: "きとり", price: 200, category: "主要人物" },
  { id: "21", kanji: "バジル", hiragana: "ばじる", price: 200, category: "主要人物" },
  { id: "22", kanji: "クララ", hiragana: "くらら", price: 200, category: "主要人物" },
  { id: "23", kanji: "フランツ", hiragana: "ふらんつ", price: 200, category: "主要人物" },
  { id: "24", kanji: "ニキヤ", hiragana: "にきや", price: 200, category: "主要人物" },
  { id: "25", kanji: "ソロル", hiragana: "そろる", price: 200, category: "主要人物" },
  { id: "26", kanji: "エスパーダ", hiragana: "えすぱーだ", price: 250, category: "主要人物" },
  { id: "27", kanji: "ミルタ", hiragana: "みるた", price: 200, category: "主要人物" },
  { id: "28", kanji: "カラボス", hiragana: "からぼす", price: 250, category: "主要人物" },
  { id: "29", kanji: "ロットバルト", hiragana: "ろっとばると", price: 250, category: "主要人物" },
  { id: "30", kanji: "コンラッド", hiragana: "こんらっど", price: 250, category: "主要人物" },
  { id: "31", kanji: "メドーラ", hiragana: "めどーら", price: 250, category: "主要人物" },
  { id: "32", kanji: "スワニルダ", hiragana: "すわにるだ", price: 250, category: "主要人物" },
  { id: "33", kanji: "ガムザッティ", hiragana: "がむざってぃ", price: 250, category: "主要人物" },
  { id: "34", kanji: "パ・ド・ドゥ", hiragana: "ぱどどぅ", price: 250, category: "構成" },
  { id: "35", kanji: "グラン・ジュテ", hiragana: "ぐらんじゅて", price: 250, category: "技" },

  // =========================================================================
  // --- MEDIUM TERMS: Famous Repertoires & Character Pairings (7-12 chars) ---
  // =========================================================================
  { id: "36", kanji: "白鳥の湖", hiragana: "はくちょうのみずうみ", price: 350, category: "代表演目" },
  { id: "37", kanji: "くるみ割り人形", hiragana: "くるみわりにんぎょう", price: 350, category: "代表演目" },
  { id: "38", kanji: "眠れる森の美女", hiragana: "ねむれるもりのびじょ", price: 350, category: "代表演目" },
  { id: "39", kanji: "ドン・キホーテ", hiragana: "どんきほーて", price: 350, category: "代表演目" },
  { id: "40", kanji: "ロミオとジュリエット", hiragana: "ろみおとじゅりえっと", price: 400, category: "代表演目" },
  { id: "41", kanji: "ラ・シルフィード", hiragana: "らしるふぃーど", price: 350, category: "代表演目" },
  { id: "42", kanji: "ラ・バヤデール", hiragana: "らばやでーる", price: 350, category: "代表演目" },
  { id: "43", kanji: "コッペリア", hiragana: "こっぺりあ", price: 350, category: "代表演目" },
  { id: "44", kanji: "海賊", hiragana: "かいぞく", price: 300, category: "代表演目" },
  { id: "45", kanji: "火の鳥", hiragana: "ひのとり", price: 300, category: "代表演目" },
  { id: "46", kanji: "ライモンダ", hiragana: "らいもんだ", price: 350, category: "代表演目" },
  { id: "47", kanji: "ジークフリート王子", hiragana: "じーくふりーとおうじ", price: 400, category: "主要人物" },
  { id: "48", kanji: "オデットとオディール", hiragana: "おでっととおでぃーる", price: 420, category: "主要人物" },
  { id: "49", kanji: "金平糖の精", hiragana: "こんぺいとうのせい", price: 350, category: "主要人物" },
  { id: "50", kanji: "オーロラ姫とデジレ王子", hiragana: "おーろらひめとでじれおうじ", price: 450, category: "主要人物" },
  { id: "51", kanji: "キトリとバジル", hiragana: "きとりとばじる", price: 380, category: "主要人物" },
  { id: "52", kanji: "アルブレヒト公爵", hiragana: "あるぶれひとこうしゃく", price: 400, category: "主要人物" },
  { id: "53", kanji: "悪魔ロットバルト", hiragana: "あくまろっとばると", price: 380, category: "主要人物" },
  { id: "54", kanji: "コッペリウス博士", hiragana: "こっぺりうすはかせ", price: 380, category: "主要人物" },
  { id: "55", kanji: "青い鳥とフロリナ王女", hiragana: "あおいとりとふろりなおうじょ", price: 450, category: "主要人物" },
  { id: "56", kanji: "奴隷アリとメドーラ", hiragana: "どれいありとめどーら", price: 400, category: "主要人物" },
  { id: "57", kanji: "リラの精とカラボス", hiragana: "りらのせいとからぼす", price: 420, category: "主要人物" },
  { id: "58", kanji: "ニキヤと戦士ソロル", hiragana: "にきやとせんしそろる", price: 400, category: "主要人物" },
  { id: "59", kanji: "スワニルダとフランツ", hiragana: "すわにるだとふらんつ", price: 400, category: "主要人物" },
  { id: "60", kanji: "四羽の白鳥の踊り", hiragana: "よんわのはくちょうのおどり", price: 420, category: "名場面" },
  { id: "61", kanji: "花のワルツ", hiragana: "はなのわるつ", price: 300, category: "名曲" },
  { id: "62", kanji: "ローズ・アダージョ", hiragana: "ろーずあだーじょ", price: 400, category: "名場面" },
  { id: "63", kanji: "グラン・パ・ド・ドゥ", hiragana: "ぐらんぱどどぅ", price: 420, category: "構成" },

  // =========================================================================
  // --- S-TIER / LONG TERMS: Repertoire Acts & Major Character Ensembles ---
  // =========================================================================
  // --- 白鳥の湖 (Swan Lake) ---
  { id: "64", kanji: "白鳥の湖 第２幕 湖畔の情景", hiragana: "はくちょうのみずうみだいにまくこはんのじょうけい", price: 650, category: "演目と幕" },
  { id: "65", kanji: "白鳥の湖 第３幕 王宮の舞踏会", hiragana: "はくちょうのみずうみだいさんまくおうきゅうのぶとうかい", price: 650, category: "演目と幕" },
  { id: "66", kanji: "白鳥オデットと悪魔ロットバルト", hiragana: "はくちょうおでっととあくまろっとばると", price: 600, category: "主要人物" },
  { id: "67", kanji: "ジークフリート王子と黒鳥オディール", hiragana: "じーくふりーとおうじとこくちょうおでぃーる", price: 650, category: "主要人物" },
  { id: "68", kanji: "王宮の花嫁選びと宮廷道化師の踊り", hiragana: "おうきゅうのはなよめえらびときゅうていどうけしのおどり", price: 700, category: "名場面" },
  { id: "69", kanji: "黒鳥オディールの三十回転グラン・フェッテ", hiragana: "こくちょうおでぃーるのさんじゅうかいてんぐらんふぇって", price: 750, category: "超絶技巧" },

  // --- くるみ割り人形 (The Nutcracker) ---
  { id: "70", kanji: "くるみ割り人形 第１幕 クリスマス・イブ", hiragana: "くるみわりにんぎょうだいいちまくくりすますいぶ", price: 680, category: "演目と幕" },
  { id: "71", kanji: "くるみ割り人形 第２幕 お菓子の国", hiragana: "くるみわりにんぎょうだいにまくおかしのくに", price: 620, category: "演目と幕" },
  { id: "72", kanji: "少女クララとドロッセルマイヤー伯父さん", hiragana: "しょうじょくららとどろっせるまいやーおじさん", price: 680, category: "主要人物" },
  { id: "73", kanji: "金平糖の精と王子のグラン・パ・ド・ドゥ", hiragana: "こんぺいとうのせいとおうじのぐらんぱどどぅ", price: 720, category: "主要人物" },
  { id: "74", kanji: "ねずみの王様とくるみ割り人形の決闘", hiragana: "ねずみのおうさまとくるみわりにんぎょうのけっとう", price: 700, category: "名場面" },
  { id: "75", kanji: "スペインの踊りとアラビアの踊りと中国の踊り", hiragana: "すぺいんのおどりとあらびあのおどりとちゅうごくのおどり", price: 750, category: "名場面" },
  { id: "76", kanji: "ロシアの踊りトレパックと葦笛の踊り", hiragana: "ろしあのおどりとれぱっくとあしぶえのおどり", price: 680, category: "名場面" },

  // --- 眠れる森の美女 (The Sleeping Beauty) ---
  { id: "77", kanji: "眠れる森の美女 プロローグ 誕生の祝宴", hiragana: "ねむれるもりのびじょぷろろーぐたんじょうのしゅくえん", price: 720, category: "演目と幕" },
  { id: "78", kanji: "眠れる森の美女 第１幕 糸つむぎの針", hiragana: "ねむれるもりのびじょだいいちまくいとつむぎのはり", price: 680, category: "演目と幕" },
  { id: "79", kanji: "眠れる森の美女 第３幕 オーロラ姫の結婚式", hiragana: "ねむれるもりのびじょだいさんまくおーろらひめのけっこんしき", price: 750, category: "演目と幕" },
  { id: "80", kanji: "オーロラ姫とデジレ王子とリラの精", hiragana: "おーろらひめとでじれおうじとりらのせい", price: 680, category: "主要人物" },
  { id: "81", kanji: "善の妖精リラの精と悪の妖精カラボス", hiragana: "ぜんのようせいりらのせいとあくのようせいからぼす", price: 700, category: "主要人物" },
  { id: "82", kanji: "青い鳥とフロリナ王女のパ・ド・ドゥ", hiragana: "あおいとりとふろりなおうじょのぱどどぅ", price: 680, category: "名場面" },
  { id: "83", kanji: "長靴をはいた猫と白い子猫のデュエット", hiragana: "ながぐつをはいたねことしろいこねこのでゅえっと", price: 700, category: "名場面" },
  { id: "84", kanji: "赤ずきんと狼のヴァリエーション", hiragana: "あかずきんとおおかみのゔぁりえーしょん", price: 650, category: "名場面" },

  // --- ドン・キホーテ (Don Quixote) ---
  { id: "85", kanji: "ドン・キホーテ 第１幕 バルセロナの広場", hiragana: "どんきほーてだいいちまくばるせろなのひろば", price: 680, category: "演目と幕" },
  { id: "86", kanji: "ドン・キホーテ 第２幕 風車の丘と夢の場", hiragana: "どんきほーてだいにまくふうしゃのおかとゆめのば", price: 700, category: "演目と幕" },
  { id: "87", kanji: "ドン・キホーテ 第３幕 キトリとバジルの結婚式", hiragana: "どんきほーてだいさんまくきとりとばじるのけっこんしき", price: 750, category: "演目と幕" },
  { id: "88", kanji: "宿屋の娘キトリと理髪師バジルの狂言自殺", hiragana: "やどやのむすめきとりとりはつしばじるのきょうげんじさつ", price: 750, category: "名場面" },
  { id: "89", kanji: "花形闘牛士エスパーダと踊り子メルセデス", hiragana: "はながたとうぎゅうしえすぱーだとおどりこめるせです", price: 720, category: "主要人物" },
  { id: "90", kanji: "ドン・キホーテと従者サンチョ・パンサ", hiragana: "どんきほーてとじゅうしゃさんちょぱんさ", price: 650, category: "主要人物" },
  { id: "91", kanji: "森の女王と愛の妖精キューピッド", hiragana: "もりのじょおうとあいのようせいきゅーぴっど", price: 680, category: "主要人物" },
  { id: "92", kanji: "キトリの扇子とグラン・パ・ド・ドゥ", hiragana: "きとりのせんそとぐらんぱどどぅ", price: 650, category: "名場面" },

  // --- ジゼル (Giselle) ---
  { id: "93", kanji: "ジゼル 第１幕 ぶどう収穫祭の村", hiragana: "じぜるだいいちまくぶどうしゅうかくさいのむら", price: 650, category: "演目と幕" },
  { id: "94", kanji: "ジゼル 第２幕 深夜の森とウィリの墓場", hiragana: "じぜるだいにまくしんやのもりとうぃりのはかば", price: 700, category: "演目と幕" },
  { id: "95", kanji: "可憐な村娘ジゼルとアルブレヒト公爵", hiragana: "かれんなむらむすめじぜるとあるぶれひとこうしゃく", price: 720, category: "主要人物" },
  { id: "96", kanji: "森番ヒラリオンと公爵の婚約者バチルド", hiragana: "もりばんひらりおんとこうしゃくのこんやくしゃばちるど", price: 720, category: "主要人物" },
  { id: "97", kanji: "精霊ウィリの女王ミルタと冷酷な精霊たち", hiragana: "せいれいうぃりのじょおうみるたとれいこくなせいれいたち", price: 750, category: "主要人物" },
  { id: "98", kanji: "ペザント・パ・ド・ドゥの軽快な跳躍", hiragana: "ぺざんとぱどどぅのけいかいなちょうやく", price: 680, category: "名場面" },

  // --- ロミオとジュリエット (Romeo and Juliet) ---
  { id: "99", kanji: "ロミオとジュリエット キャピュレット家の舞踏会", hiragana: "ろみおとじゅりえっときゃぴゅれっとけのぶとうかい", price: 750, category: "演目と幕" },
  { id: "100", kanji: "ロミオとジュリエット バルコニーの愛の場", hiragana: "ろみおとじゅりえっとばるこにーのあいのば", price: 720, category: "演目と幕" },
  { id: "101", kanji: "ロミオと親友マキューシオとティボルト", hiragana: "ろみおとしんゆうまきゅーしおとてぃぼると", price: 700, category: "主要人物" },

  // --- 海賊 (Le Corsaire) ---
  { id: "102", kanji: "海賊 第１幕 アドリア海の奴隷市場", hiragana: "かいぞくだいいちまくあどりあかいのどれいいちば", price: 680, category: "演目と幕" },
  { id: "103", kanji: "首領コンラッドとギリシャの娘メドーラ", hiragana: "しゅりょうこんらっどとぎりしゃのむすめめどーら", price: 720, category: "主要人物" },
  { id: "104", kanji: "忠実な奴隷アリと奴隷商人ランケデム", hiragana: "ちゅうじつなどれいありとどれいしょうにんらんけでむ", price: 700, category: "主要人物" },
  { id: "105", kanji: "花園の場 メドーラと美女ギュリナーラ", hiragana: "はなぞののばめどーらとびじょぎゅりなーら", price: 700, category: "名場面" },

  // --- コッペリア (Coppélia) ---
  { id: "106", kanji: "コッペリア 第１幕 ガリツィアの村の広場", hiragana: "こっぺりあだいいちまくがりつぃあのむらのひろば", price: 720, category: "演目と幕" },
  { id: "107", kanji: "コッペリア 第２幕 コッペリウス博士の仕事部屋", hiragana: "こっぺりあだいにまくこっぺりうすはかせのしごとべや", price: 750, category: "演目と幕" },
  { id: "108", kanji: "町娘スワニルダと婚約者の青年フランツ", hiragana: "まちむすめすわにるだとこんやくしゃのせいねんふらんつ", price: 750, category: "主要人物" },
  { id: "109", kanji: "コッペリウス博士とからくり人形コッペリア", hiragana: "こっぺりうすはかせとからくりにんぎょうこっぺりあ", price: 750, category: "主要人物" },

  // --- ラ・バヤデール (La Bayadère) ---
  { id: "110", kanji: "ラ・バヤデール 寺院の舞姫ニキヤとソロル", hiragana: "らばやでーるじいんのまいひめにきやとそろる", price: 720, category: "主要人物" },
  { id: "111", kanji: "勇敢な戦士ソロルとラジャの娘ガムザッティ", hiragana: "ゆうかんなせんしそろるとらじゃのむすめがむざってぃ", price: 750, category: "主要人物" },
  { id: "112", kanji: "大僧正ハイ・ブラフマンと黄金の神像", hiragana: "だいそうじょうはいぶらふまんとおうごんのしんぞう", price: 720, category: "主要人物" },
  { id: "113", kanji: "影の王国 幽玄な白いバレエの群舞ブランシュ", hiragana: "かげのおうこくゆうげんなしろいばれえのぐんぶぶらんしゅ", price: 780, category: "名場面" },

  // --- その他の名作演目・登場人物 ---
  { id: "114", kanji: "風の精シルフィードと青年ジェームズ", hiragana: "かぜのせいしるふぃーどとせいねんじぇーむず", price: 700, category: "主要人物" },
  { id: "115", kanji: "カルメンと伍長ドン・ホセと闘牛士エスカミーリョ", hiragana: "かるめんとごちょうどんほせととうぎゅうしえすかみーりょ", price: 780, category: "主要人物" },
  { id: "116", kanji: "火の鳥とイワン王子と魔王カシチェイ", hiragana: "ひのとりといわんおうじとまおうかしちぇい", price: 720, category: "主要人物" },
  { id: "117", kanji: "ライモンダ 第３幕 騎士ジャン・ド・ブリエンヌ", hiragana: "らいもんだだいさんまくきしじゃんどぶりえんぬ", price: 750, category: "演目と幕" },
  { id: "118", kanji: "シンデレラと舞踏会の王子と仙女の魔法", hiragana: "しんでれらとぶとうかいのおうじとせんにょのまほう", price: 750, category: "主要人物" },
  { id: "119", kanji: "パ・ド・カトル 四大ロマンティック・プリマ", hiragana: "ぱどかとるよんだいろまんてぃっくぷりま", price: 720, category: "名作" },
  { id: "120", kanji: "チャイコフスキー・パ・ド・ドゥの華麗なコーダ", hiragana: "ちゃいこふすきーぱどどぅのかれいなこーだ", price: 750, category: "名場面" },

  // =========================================================================
  // --- 1. バリエーション (Variations & Solos) ---
  // =========================================================================
  // 短め (B席)
  { id: "121", kanji: "サタネラ", hiragana: "さたねら", price: 200, category: "バリエーション" },
  { id: "122", kanji: "パキータ", hiragana: "ぱきーた", price: 200, category: "バリエーション" },
  { id: "123", kanji: "タリスマン", hiragana: "たりすまん", price: 220, category: "バリエーション" },
  { id: "124", kanji: "エスメラルダ", hiragana: "えすめらるだ", price: 250, category: "バリエーション" },
  { id: "125", kanji: "海賊の洞窟", hiragana: "かいぞくのどうくつ", price: 250, category: "バリエーション" },
  // 中くらい (A席)
  { id: "126", kanji: "オーロラのワルツ", hiragana: "おーろらのわるつ", price: 380, category: "バリエーション" },
  { id: "127", kanji: "キトリのバリエーション", hiragana: "きとりのばりえーしょん", price: 420, category: "バリエーション" },
  { id: "128", kanji: "ダイアナとアクティオン", hiragana: "だいあなとあくてぃおん", price: 420, category: "バリエーション" },
  { id: "129", kanji: "金平糖の精の踊り", hiragana: "こんぺいとうのせいのおどり", price: 450, category: "バリエーション" },
  { id: "130", kanji: "グラン・パ・クラシック", hiragana: "ぐらんぱくらしっく", price: 450, category: "バリエーション" },
  { id: "131", kanji: "黒鳥のグラン・パ・ド・ドゥ", hiragana: "こくちょうのぐらんぱどどぅ", price: 480, category: "バリエーション" },
  // 長め (S席)
  { id: "132", kanji: "金平糖の精のバリエーション", hiragana: "こんぺいとうのせいのばりえーしょん", price: 680, category: "バリエーション" },
  { id: "133", kanji: "黒鳥オディールのバリエーション", hiragana: "こくちょうおでぃーるのばりえーしょん", price: 700, category: "バリエーション" },
  { id: "134", kanji: "白鳥の湖 オデットのアダージョ", hiragana: "はくちょうのみずうみおでっとのあだーじょ", price: 720, category: "バリエーション" },
  { id: "135", kanji: "ドン・キホーテ 第３幕 キトリの扇子のバリエーション", hiragana: "どんきほーてだいさんまくきとりのせんそのばりえーしょん", price: 780, category: "バリエーション" },
  { id: "136", kanji: "眠れる森の美女 フロリナ王女のバリエーション", hiragana: "ねむれるもりのびじょふろりなおうじょのばりえーしょん", price: 760, category: "バリエーション" },
  { id: "137", kanji: "ラ・バヤデール 影の王国の第３ヴァリエーション", hiragana: "らばやでーるかげのおうこくのだいさんゔぁりえーしょん", price: 780, category: "バリエーション" },
  { id: "138", kanji: "海賊 メドーラの洞窟のヴァリエーション", hiragana: "かいぞくめどーらのどうくつのゔぁりえーしょん", price: 750, category: "バリエーション" },

  // =========================================================================
  // --- 2. ポーズ・ステップ・振付技法 (Poses & Steps) ---
  // =========================================================================
  // 短め (B席)
  { id: "139", kanji: "エシャッペ", hiragana: "えしゃっぺ", price: 150, category: "ステップ" },
  { id: "140", kanji: "グリッサード", hiragana: "ぐりっさーど", price: 160, category: "ステップ" },
  { id: "141", kanji: "バランセ", hiragana: "ばらんせ", price: 150, category: "ステップ" },
  { id: "142", kanji: "フォンデュ", hiragana: "ふぉんでゅ", price: 160, category: "ステップ" },
  { id: "143", kanji: "クロワゼ", hiragana: "くろわぜ", price: 160, category: "ポーズ" },
  { id: "144", kanji: "エファセ", hiragana: "えふぁせ", price: 160, category: "ポーズ" },
  { id: "145", kanji: "エカルテ", hiragana: "えかるて", price: 160, category: "ポーズ" },
  { id: "146", kanji: "ブリゼ", hiragana: "ぶりぜ", price: 180, category: "ステップ" },
  { id: "147", kanji: "アントルシャ", hiragana: "あんとるしゃ", price: 200, category: "技" },
  { id: "148", kanji: "カブリオール", hiragana: "かぶりおーる", price: 200, category: "技" },
  { id: "149", kanji: "デヴェロッペ", hiragana: "でゔぇろっぺ", price: 200, category: "ステップ" },
  { id: "150", kanji: "プロムナード", hiragana: "ぷろむなーど", price: 220, category: "ポーズ" },
  // 中くらい (A席)
  { id: "151", kanji: "アン・ドゥオール", hiragana: "あんどぅおーる", price: 320, category: "基本" },
  { id: "152", kanji: "アン・ドゥダン", hiragana: "あんどぅだん", price: 320, category: "基本" },
  { id: "153", kanji: "グラン・パディシャ", hiragana: "ぐらんぱでぃしゃ", price: 360, category: "技" },
  { id: "154", kanji: "イタリアン・フェッテ", hiragana: "いたりあんふぇって", price: 420, category: "技" },
  { id: "155", kanji: "アントルシャ・シス", hiragana: "あんとるしゃしす", price: 380, category: "技" },
  { id: "156", kanji: "グラン・アッサンブレ", hiragana: "ぐらんあっさんぶれ", price: 380, category: "ステップ" },
  { id: "157", kanji: "パンシェ・アラベスク", hiragana: "ぱんしぇあらべすく", price: 400, category: "ポーズ" },
  // 長め (S席)
  { id: "158", kanji: "グラン・フェッテ・アン・トゥールナン", hiragana: "ぐらんふぇってあんとぅーるなん", price: 680, category: "超絶技巧" },
  { id: "159", kanji: "グラン・ジュテ・アン・トゥールナン", hiragana: "ぐらんじゅてあんとぅーるなん", price: 680, category: "超絶技巧" },
  { id: "160", kanji: "オーケストラに合わせたマイムの演技", hiragana: "おーけすとらにあわせたまいむのえんぎ", price: 700, category: "演技" },

  // =========================================================================
  // --- 3. 舞台メイク・身だしなみ (Stage Makeup & Hair) ---
  // =========================================================================
  // 短め (B席)
  { id: "161", kanji: "ドーラン", hiragana: "どーらん", price: 150, category: "メイク" },
  { id: "162", kanji: "シニヨン", hiragana: "しによん", price: 150, category: "ヘア" },
  { id: "163", kanji: "アイライン", hiragana: "あいらいん", price: 160, category: "メイク" },
  { id: "164", kanji: "つけまつげ", hiragana: "つけまつげ", price: 180, category: "メイク" },
  { id: "165", kanji: "ハイライト", hiragana: "はいらいと", price: 180, category: "メイク" },
  { id: "166", kanji: "水おしろい", hiragana: "みずおしろい", price: 180, category: "メイク" },
  { id: "167", kanji: "ヘアネット", hiragana: "へあねっと", price: 160, category: "ヘア" },
  { id: "168", kanji: "マトメージュ", hiragana: "まとめーじゅ", price: 180, category: "ヘア" },
  { id: "169", kanji: "ダブルライン", hiragana: "だぶるらいん", price: 200, category: "メイク" },
  { id: "170", kanji: "シェーディング", hiragana: "しぇーでぃんぐ", price: 220, category: "メイク" },
  // 中くらい (A席)
  { id: "171", kanji: "舞台用ステージメイク", hiragana: "ぶたいようすてーじめいく", price: 380, category: "メイク" },
  { id: "172", kanji: "漆黒のリキッドアイライナー", hiragana: "しっこくのりきっどあいらいなー", price: 420, category: "メイク" },
  { id: "173", kanji: "シニヨンネットとアメリカピン", hiragana: "しによんねっととあめりかぴん", price: 450, category: "ヘア" },
  { id: "174", kanji: "華やかな舞台用グリッターラメ", hiragana: "はなやかなぶたいようぐりったーらめ", price: 450, category: "メイク" },

  // =========================================================================
  // --- 4. 舞台衣装・装飾・足元小物 (Costumes & Accessories) ---
  // =========================================================================
  // 短め (B席)
  { id: "175", kanji: "ボディス", hiragana: "ぼでぃす", price: 150, category: "衣装" },
  { id: "176", kanji: "パニエ", hiragana: "ぱにえ", price: 150, category: "衣装" },
  { id: "177", kanji: "ピンクタイツ", hiragana: "ぴんくたいつ", price: 180, category: "衣装" },
  { id: "178", kanji: "トウパッド", hiragana: "とうぱっど", price: 180, category: "小物" },
  { id: "179", kanji: "サテンリボン", hiragana: "さてんりぼん", price: 200, category: "小物" },
  { id: "180", kanji: "松やに", hiragana: "まつやに", price: 150, category: "小物" },
  { id: "181", kanji: "アームカバー", hiragana: "あーむかばー", price: 180, category: "衣装" },
  { id: "182", kanji: "ジョーゼット", hiragana: "じょーぜっと", price: 200, category: "衣装" },
  { id: "183", kanji: "レッグウォーマー", hiragana: "れっぐうぉーまー", price: 240, category: "ウォームアップ" },
  // 中くらい (A席)
  { id: "184", kanji: "クラシックチュチュ", hiragana: "くらしっくちゅちゅ", price: 320, category: "衣装" },
  { id: "185", kanji: "ロマンティックチュチュ", hiragana: "ろまんてぃっくちゅちゅ", price: 360, category: "衣装" },
  { id: "186", kanji: "足首に結ぶサテンのリボン", hiragana: "あしくびにむすぶさてんのりぼん", price: 420, category: "小物" },
  { id: "187", kanji: "透き通るチュールスカート", hiragana: "すきとおるちゅーるすかーと", price: 420, category: "衣装" },
  { id: "188", kanji: "金糸刺繍のクラシックチュチュ", hiragana: "きんしししゅうのくらしっくちゅちゅ", price: 460, category: "衣装" },
  // 長め (S席)
  { id: "189", kanji: "スワロフスキーの煌めくティアラ", hiragana: "すわろふすきーのきらめくてぃあら", price: 680, category: "装飾" },
  { id: "190", kanji: "トウシューズの先を固めるニス", hiragana: "とうしゅーずのさきをかためるにす", price: 680, category: "小物" }
];

export interface SeatTier {
  id: string;
  name: string;
  ticketPrice: number;   // Ticket cost in Yen (鑑賞料)
  timeLimit: number;     // Performance duration in seconds
  minLen: number;
  maxLen: number;
  description: string;
  recommended?: boolean;
}

export const seatTiers: SeatTier[] = [
  {
    id: "b-tier",
    name: "B席・ビギナー鑑賞コース",
    ticketPrice: 3000,
    timeLimit: 60,
    minLen: 2,
    maxLen: 7,
    description: "基礎ステップや定番の小道具、主要人物のソロ名など、短く打ちやすい用語が中心の席です。"
  },
  {
    id: "a-tier",
    name: "A席・レギュラー鑑賞コース",
    ticketPrice: 6000,
    timeLimit: 90,
    minLen: 7,
    maxLen: 14,
    description: "有名演目タイトルや主役ふたりのペアリングなど、適度な長さのフレーズが揃った人気席です。",
    recommended: true
  },
  {
    id: "s-tier",
    name: "S席・特別ガラ公演コース",
    ticketPrice: 12000,
    timeLimit: 120,
    minLen: 14,
    maxLen: 50,
    description: "「白鳥の湖 第２幕」などの幕構成や主要人物トリオ、劇中名シーンを連打する本格クラシック席です。"
  }
];

export function getWordsForSeatTier(tier: SeatTier): BalletWord[] {
  return balletWords.filter(
    word => word.hiragana.length >= tier.minLen && word.hiragana.length <= tier.maxLen
  );
}
