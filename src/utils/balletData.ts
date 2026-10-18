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
  { id: "190", kanji: "トウシューズの先を固めるニス", hiragana: "とうしゅーずのさきをかためるにす", price: 680, category: "小物" },

  // =========================================================================
  // --- 5. リラの精・リーズ・卒業舞踏会 (Lilac Fairy, Lise, Graduation Ball) ---
  // =========================================================================
  // 短め・中くらい (B席・A席)
  { id: "191", kanji: "リラの精", hiragana: "りらのせい", price: 220, category: "主要人物" },
  { id: "192", kanji: "リーズ", hiragana: "りーず", price: 200, category: "主要人物" },
  { id: "193", kanji: "コーラス", hiragana: "こーらす", price: 200, category: "主要人物" },
  { id: "194", kanji: "卒業舞踏会", hiragana: "そつぎょうぶとうかい", price: 380, category: "代表演目" },
  { id: "195", kanji: "無益な用心", hiragana: "むえきなようじん", price: 250, category: "代表演目" },
  { id: "196", kanji: "リーズとコーラス", hiragana: "りーずとこーらす", price: 380, category: "主要人物" },
  { id: "197", kanji: "リーズの結婚", hiragana: "りーずのけっこん", price: 350, category: "代表演目" },
  { id: "198", kanji: "リラの精の踊り", hiragana: "りらのせいのおどり", price: 400, category: "バリエーション" },
  { id: "199", kanji: "リーズのバリエーション", hiragana: "りーずのばりえーしょん", price: 420, category: "バリエーション" },
  { id: "200", kanji: "ラ・フィーユ・マル・ガルデ", hiragana: "らふぃーゆまるがるで", price: 420, category: "代表演目" },
  { id: "201", kanji: "卒業舞踏会の無窮動", hiragana: "そつぎょうぶとうかいのむきゅうどう", price: 480, category: "名場面" },
  // 長め (S席)
  { id: "202", kanji: "眠れる森の美女 善の妖精リラの精のバリエーション", hiragana: "ねむれるもりのびじょぜんのようせいりらのせいのばりえーしょん", price: 760, category: "バリエーション" },
  { id: "203", kanji: "ラ・フィーユ・マル・ガルデ リーズとピンクのリボン", hiragana: "らふぃーゆまるがるでりーずとぴんくのりぼん", price: 750, category: "名場面" },
  { id: "204", kanji: "卒業舞踏会 女学生と士官候補生の華やかなワルツ", hiragana: "そつぎょうぶとうかいじょがくせいとしかんこうほせいのはなやかなわるつ", price: 780, category: "名場面" },
  { id: "205", kanji: "卒業舞踏会 フェッテ競争と鼓手のバリエーション", hiragana: "そつぎょうぶとうかいふぇってきょうそうとこしのばりえーしょん", price: 760, category: "バリエーション" },

  // =========================================================================
  // --- 6. 基礎ステップ・ポジション・方向・身体の使い方 (Steps & Positions) ---
  // =========================================================================
  // 短め (B席: 2〜7文字)
  { id: "206", kanji: "ソテ", hiragana: "そて", price: 100, category: "ステップ" },
  { id: "207", kanji: "ピケ", hiragana: "ぴけ", price: 100, category: "ステップ" },
  { id: "208", kanji: "シェネ", hiragana: "しぇね", price: 120, category: "回転" },
  { id: "209", kanji: "アン・バ", hiragana: "あんば", price: 120, category: "ポジション" },
  { id: "210", kanji: "アン・オー", hiragana: "あんおー", price: 120, category: "ポジション" },
  { id: "211", kanji: "アン・ナヴァン", hiragana: "あんなゔぁん", price: 160, category: "ポジション" },
  { id: "212", kanji: "ア・ラ・スゴンド", hiragana: "あらすごんど", price: 180, category: "ポジション" },
  { id: "213", kanji: "カンブレ", hiragana: "かんぶれ", price: 140, category: "ステップ" },
  { id: "214", kanji: "デガジェ", hiragana: "でがじぇ", price: 140, category: "ステップ" },
  { id: "215", kanji: "フラッペ", hiragana: "ふらっぺ", price: 140, category: "ステップ" },
  { id: "216", kanji: "ルティレ", hiragana: "るてぃれ", price: 140, category: "ポーズ" },
  { id: "217", kanji: "ク・ド・ピエ", hiragana: "くどぴえ", price: 150, category: "ポジション" },
  { id: "218", kanji: "アロンジェ", hiragana: "あろんじぇ", price: 160, category: "ポーズ" },
  { id: "219", kanji: "スートニュ", hiragana: "すーとにゅ", price: 160, category: "ステップ" },
  { id: "220", kanji: "ピケ・ターン", hiragana: "ぴけたーん", price: 170, category: "回転" },
  { id: "221", kanji: "パ・ド・ブレ", hiragana: "ぱどぶれ", price: 150, category: "ステップ" },
  { id: "222", kanji: "パ・ド・シャ", hiragana: "ぱどしゃ", price: 150, category: "ステップ" },
  { id: "223", kanji: "パ・ド・バスク", hiragana: "ぱどばすく", price: 170, category: "ステップ" },
  { id: "224", kanji: "ソ・ド・バスク", hiragana: "そどばすく", price: 180, category: "跳躍" },
  { id: "225", kanji: "バロネ", hiragana: "ばろね", price: 140, category: "ステップ" },
  { id: "226", kanji: "バロッテ", hiragana: "ばろって", price: 150, category: "ステップ" },
  { id: "227", kanji: "ファイイ", hiragana: "ふぁいい", price: 150, category: "ステップ" },
  { id: "228", kanji: "シャンジュマン", hiragana: "しゃんじゅまん", price: 180, category: "跳躍" },
  { id: "229", kanji: "スーブルソー", hiragana: "すーぶるそー", price: 180, category: "跳躍" },
  { id: "230", kanji: "アントルラセ", hiragana: "あんとるらせ", price: 200, category: "跳躍" },
  { id: "231", kanji: "コントルタン", hiragana: "こんとるたん", price: 190, category: "ステップ" },
  { id: "232", kanji: "ポール・ド・ブラ", hiragana: "ぽーるどぶら", price: 200, category: "基本" },
  { id: "233", kanji: "エポールマン", hiragana: "えぽーるまん", price: 200, category: "基本" },
  { id: "234", kanji: "ロン・ド・ジャンブ", hiragana: "ろんどじゃんぶ", price: 210, category: "ステップ" },
  { id: "235", kanji: "ドゥミ・プリエ", hiragana: "どぅみぷりえ", price: 170, category: "基本" },
  { id: "236", kanji: "グラン・プリエ", hiragana: "ぐらんぷりえ", price: 180, category: "基本" },
  { id: "237", kanji: "ドゥミ・ポワント", hiragana: "どぅみぽわんと", price: 200, category: "基本" },
  { id: "238", kanji: "ターンアウト", hiragana: "たーんあうと", price: 180, category: "基本" },
  { id: "239", kanji: "アン・ファス", hiragana: "あんふぁす", price: 170, category: "方向" },
  { id: "240", kanji: "ドゥヴァン", hiragana: "どぅゔぁん", price: 160, category: "方向" },
  { id: "241", kanji: "デリエール", hiragana: "でりえーる", price: 170, category: "方向" },
  { id: "242", kanji: "ア・テール", hiragana: "あてーる", price: 150, category: "基本" },
  { id: "243", kanji: "アン・レール", hiragana: "あんれーる", price: 160, category: "基本" },
  { id: "244", kanji: "アン・クロワ", hiragana: "あんくろわ", price: 170, category: "基本" },
  // 中くらい (A席: 7〜14文字)
  { id: "245", kanji: "グラン・バットマン", hiragana: "ぐらんばっとまん", price: 320, category: "ステップ" },
  { id: "246", kanji: "プティ・バットマン", hiragana: "ぷてぃばっとまん", price: 320, category: "ステップ" },
  { id: "247", kanji: "バットマン・タンデュ", hiragana: "ばっとまんたんでゅ", price: 350, category: "ステップ" },
  { id: "248", kanji: "バットマン・フラッペ", hiragana: "ばっとまんふらっぺ", price: 350, category: "ステップ" },
  { id: "249", kanji: "バットマン・フォンデュ", hiragana: "ばっとまんふぉんでゅ", price: 360, category: "ステップ" },
  { id: "250", kanji: "ジュテ・アントルラセ", hiragana: "じゅてあんとるらせ", price: 380, category: "跳躍" },
  { id: "251", kanji: "シュール・ル・ク・ド・ピエ", hiragana: "しゅーるるくどぴえ", price: 380, category: "ポジション" },
  { id: "252", kanji: "ロン・ド・ジャンブ・アン・レール", hiragana: "ろんどじゃんぶあんれーる", price: 450, category: "ステップ" },
  { id: "253", kanji: "ロン・ド・ジャンブ・ア・テール", hiragana: "ろんどじゃんぶあてーる", price: 440, category: "ステップ" },
  { id: "254", kanji: "パ・ド・ブレ・スートニュ", hiragana: "ぱどぶれすーとにゅ", price: 400, category: "ステップ" },
  { id: "255", kanji: "ピケ・アラベスク", hiragana: "ぴけあらべすく", price: 320, category: "ポーズ" },
  { id: "256", kanji: "第１アラベスク", hiragana: "だいいちあらべすく", price: 350, category: "ポーズ" },
  { id: "257", kanji: "第２アラベスク", hiragana: "だいにあらべすく", price: 350, category: "ポーズ" },
  { id: "258", kanji: "第３アラベスク", hiragana: "だいさんあらべすく", price: 350, category: "ポーズ" },
  { id: "259", kanji: "第４アラベスク", hiragana: "だいよんあらべすく", price: 350, category: "ポーズ" },
  { id: "260", kanji: "トゥール・アン・レール", hiragana: "とぅーるあんれーる", price: 380, category: "技" },
  { id: "261", kanji: "フェッテ・アン・トゥールナン", hiragana: "ふぇってあんとぅーるなん", price: 450, category: "超絶技巧" },
  { id: "262", kanji: "ピルエット・アン・ドゥオール", hiragana: "ぴるえっとあんどぅおーる", price: 450, category: "回転" },
  { id: "263", kanji: "ピルエット・アン・ドゥダン", hiragana: "ぴるえっとあんどぅだん", price: 450, category: "回転" },

  // =========================================================================
  // --- 7. 人気バリエーション・コンクール定番演目・役柄 (Variations & Roles) ---
  // =========================================================================
  // 短め (B席)
  { id: "264", kanji: "ペザント", hiragana: "ぺざんと", price: 180, category: "バリエーション" },
  { id: "265", kanji: "キューピッド", hiragana: "きゅーぴっど", price: 200, category: "バリエーション" },
  { id: "266", kanji: "ドルシネア姫", hiragana: "どるしねあひめ", price: 220, category: "主要人物" },
  { id: "267", kanji: "森の女王", hiragana: "もりのじょおう", price: 220, category: "主要人物" },
  { id: "268", kanji: "ギュリナーラ", hiragana: "ぎゅりなーら", price: 220, category: "主要人物" },
  { id: "269", kanji: "オダリスク", hiragana: "おだりすく", price: 200, category: "バリエーション" },
  { id: "270", kanji: "コロンビーヌ", hiragana: "ころんびーぬ", price: 220, category: "主要人物" },
  { id: "271", kanji: "アレルキナーダ", hiragana: "あれるきなーだ", price: 250, category: "代表演目" },
  { id: "272", kanji: "パリの炎", hiragana: "ぱりのほのお", price: 220, category: "代表演目" },
  { id: "273", kanji: "ジャンヌ", hiragana: "じゃんぬ", price: 180, category: "主要人物" },
  { id: "274", kanji: "ナポリ", hiragana: "なぽり", price: 160, category: "代表演目" },
  { id: "275", kanji: "テレジーナ", hiragana: "てれじーな", price: 200, category: "主要人物" },
  { id: "276", kanji: "ローレンシア", hiragana: "ろーれんしあ", price: 220, category: "代表演目" },
  { id: "277", kanji: "シルヴィア", hiragana: "しるゔぃあ", price: 200, category: "代表演目" },
  { id: "278", kanji: "ピチカート", hiragana: "ぴちかーと", price: 200, category: "名曲" },
  { id: "279", kanji: "アスピシア", hiragana: "あすぴしあ", price: 200, category: "主要人物" },
  { id: "280", kanji: "ファラオの娘", hiragana: "ふぁらおのむすめ", price: 250, category: "代表演目" },
  { id: "281", kanji: "人形の精", hiragana: "にんぎょうのせい", price: 240, category: "代表演目" },
  { id: "282", kanji: "海と真珠", hiragana: "うみとしんじゅ", price: 220, category: "バリエーション" },
  { id: "283", kanji: "雪の女王", hiragana: "ゆきのじょおう", price: 220, category: "主要人物" },
  { id: "284", kanji: "勇気の精", hiragana: "ゆうきのせい", price: 220, category: "主要人物" },
  { id: "285", kanji: "優しさの精", hiragana: "やさしさのせい", price: 240, category: "主要人物" },
  { id: "286", kanji: "鷹揚の精", hiragana: "おうようのせい", price: 220, category: "主要人物" },
  { id: "287", kanji: "木靴の踊り", hiragana: "きぐつのおどり", price: 220, category: "名場面" },
  { id: "288", kanji: "麦穂の踊り", hiragana: "むぎほのおどり", price: 220, category: "名場面" },
  { id: "289", kanji: "パ・ド・トロワ", hiragana: "ぱどとろわ", price: 200, category: "構成" },
  { id: "290", kanji: "パ・ド・シス", hiragana: "ぱどしす", price: 180, category: "構成" },
  // 中くらい (A席)
  { id: "291", kanji: "ゼンツァーノの花祭り", hiragana: "ぜんつぁーののはなまつり", price: 420, category: "代表演目" },
  { id: "292", kanji: "ヴェネツィアの謝肉祭", hiragana: "ゔぇねつぃあのしゃにくさい", price: 420, category: "代表演目" },
  { id: "293", kanji: "ワルプルギスの夜", hiragana: "わるぷるぎすのよる", price: 380, category: "代表演目" },
  { id: "294", kanji: "騎兵隊の休止", hiragana: "きへいたいのきゅうし", price: 360, category: "代表演目" },
  { id: "295", kanji: "パ・ド・エスクラーヴ", hiragana: "ぱどえすくらーゔ", price: 380, category: "バリエーション" },
  { id: "296", kanji: "瀕死の白鳥", hiragana: "ひんしのはくちょう", price: 360, category: "名作" },
  { id: "297", kanji: "レ・シルフィード", hiragana: "れしるふぃーど", price: 320, category: "代表演目" },
  { id: "298", kanji: "せむしの仔馬", hiragana: "せむしのこうま", price: 320, category: "代表演目" },
  { id: "299", kanji: "不思議の国のアリス", hiragana: "ふしぎのくにのありす", price: 380, category: "代表演目" },
  { id: "300", kanji: "雪片のワルツ", hiragana: "せっぺんのわるつ", price: 320, category: "名場面" },
  { id: "301", kanji: "葦笛の踊り", hiragana: "あしぶえのおどり", price: 320, category: "名場面" },
  { id: "302", kanji: "花のワルツのソリスト", hiragana: "はなのわるつのそりすと", price: 400, category: "主要人物" },
  { id: "303", kanji: "ダイヤモンドの精", hiragana: "だいやもんどのせい", price: 360, category: "主要人物" },
  { id: "304", kanji: "サファイアの精", hiragana: "さふぁいあのせい", price: 340, category: "主要人物" },
  { id: "305", kanji: "エメラルドの精", hiragana: "えめらるどのせい", price: 340, category: "主要人物" },
  { id: "306", kanji: "金の精と銀の精", hiragana: "きんのせいとぎんのせい", price: 400, category: "主要人物" },
  { id: "307", kanji: "のんきなカナリア", hiragana: "のんきなかなりあ", price: 360, category: "主要人物" },
  { id: "308", kanji: "シモーヌ未亡人", hiragana: "しもーぬみぼうじん", price: 340, category: "主要人物" },
  { id: "309", kanji: "アランの赤い傘の踊り", hiragana: "あらんのあかいかさのおどり", price: 440, category: "名場面" },
  { id: "310", kanji: "ピンクのリボンのパ・ド・ドゥ", hiragana: "ぴんくのりぼんのぱどどぅ", price: 450, category: "名場面" },
  { id: "311", kanji: "リーズとコーラスの結婚", hiragana: "りーずとこーらすのけっこん", price: 420, category: "名場面" },
  { id: "312", kanji: "老将軍と女学院長", hiragana: "ろうしょうぐんとじょがくいんちょう", price: 460, category: "主要人物" },
  { id: "313", kanji: "ドルシネア姫のバリエーション", hiragana: "どるしねあひめのばりえーしょん", price: 460, category: "バリエーション" },
  { id: "314", kanji: "キューピッドのバリエーション", hiragana: "きゅーぴっどのばりえーしょん", price: 450, category: "バリエーション" },
  { id: "315", kanji: "ギュリナーラのバリエーション", hiragana: "ぎゅりなーらのばりえーしょん", price: 460, category: "バリエーション" },
  { id: "316", kanji: "ガムザッティのバリエーション", hiragana: "がむざってぃのばりえーしょん", price: 460, category: "バリエーション" },
  { id: "317", kanji: "スワニルダのワルツ", hiragana: "すわにるだのわるつ", price: 380, category: "バリエーション" },
  { id: "318", kanji: "ジゼル第１幕のバリエーション", hiragana: "じぜるだいいちまくのばりえーしょん", price: 480, category: "バリエーション" },

  // =========================================================================
  // --- 8. レッスン・発表会・コンクール・舞台用語 (Studio & Theater Life) ---
  // =========================================================================
  // 短め (B席)
  { id: "319", kanji: "バーレッスン", hiragana: "ばーれっすん", price: 200, category: "レッスン" },
  { id: "320", kanji: "アレグロ", hiragana: "あれぐろ", price: 150, category: "レッスン" },
  { id: "321", kanji: "アダージオ", hiragana: "あだーじお", price: 170, category: "レッスン" },
  { id: "322", kanji: "コーダ", hiragana: "こーだ", price: 140, category: "構成" },
  { id: "323", kanji: "アントレ", hiragana: "あんとれ", price: 150, category: "構成" },
  { id: "324", kanji: "フィナーレ", hiragana: "ふぃなーれ", price: 180, category: "構成" },
  { id: "325", kanji: "レヴェランス", hiragana: "れゔぇらんす", price: 220, category: "舞台" },
  { id: "326", kanji: "エトワール", hiragana: "えとわーる", price: 200, category: "階級" },
  { id: "327", kanji: "プリンシパル", hiragana: "ぷりんしぱる", price: 220, category: "階級" },
  { id: "328", kanji: "プリマドンナ", hiragana: "ぷりまどんな", price: 220, category: "階級" },
  { id: "329", kanji: "ソリスト", hiragana: "そりすと", price: 160, category: "階級" },
  { id: "330", kanji: "コリフェ", hiragana: "こりふぇ", price: 160, category: "階級" },
  { id: "331", kanji: "リハーサル", hiragana: "りはーさる", price: 180, category: "舞台" },
  { id: "332", kanji: "ゲネプロ", hiragana: "げねぷろ", price: 160, category: "舞台" },
  { id: "333", kanji: "場当たり", hiragana: "ばあたり", price: 160, category: "舞台" },
  { id: "334", kanji: "舞台袖", hiragana: "ぶたいそで", price: 170, category: "舞台" },
  { id: "335", kanji: "楽屋入り", hiragana: "がくやいり", price: 170, category: "舞台" },
  { id: "336", kanji: "衣裳合わせ", hiragana: "いしょうあわせ", price: 200, category: "衣装" },
  { id: "337", kanji: "ムシを作る", hiragana: "むしをつくる", price: 200, category: "衣装" },
  { id: "338", kanji: "レオタード", hiragana: "れおたーど", price: 180, category: "レッスン" },
  { id: "339", kanji: "巻きスカート", hiragana: "まきすかーと", price: 200, category: "レッスン" },
  { id: "340", kanji: "リノリウム", hiragana: "りのりうむ", price: 180, category: "舞台" },
  { id: "341", kanji: "ホリゾント", hiragana: "ほりぞんと", price: 180, category: "舞台" },
  { id: "342", kanji: "アンコール", hiragana: "あんこーる", price: 180, category: "舞台" },
  // 中くらい (A席)
  { id: "343", kanji: "センターレッスン", hiragana: "せんたーれっすん", price: 320, category: "レッスン" },
  { id: "344", kanji: "コール・ド・バレエ", hiragana: "こーるどばれえ", price: 320, category: "階級" },
  { id: "345", kanji: "メートル・ド・バレエ", hiragana: "めーとるどばれえ", price: 360, category: "階級" },
  { id: "346", kanji: "カーテンコール", hiragana: "かーてんこーる", price: 320, category: "舞台" },
  { id: "347", kanji: "グラン・デフィレ", hiragana: "ぐらんでふぃれ", price: 340, category: "舞台" },
  { id: "348", kanji: "バレエシューズ", hiragana: "ばれえしゅーず", price: 320, category: "小物" },
  { id: "349", kanji: "トウシューズをならす", hiragana: "とうしゅーずをならす", price: 400, category: "小物" },
  { id: "350", kanji: "発表会プログラム", hiragana: "はっぴょうかいぷろぐらむ", price: 420, category: "舞台" },
  { id: "351", kanji: "スタンディングオベーション", hiragana: "すたんでぃんぐおべーしょん", price: 480, category: "舞台" },

  // =========================================================================
  // --- 9. 世界の名門バレエ団・劇場・作曲家・S席特別フレーズ (World Ballet & S-Tier) ---
  // =========================================================================
  // 短め・中くらい (B席・A席)
  { id: "352", kanji: "パリ・オペラ座", hiragana: "ぱりおぺらざ", price: 240, category: "名門劇場" },
  { id: "353", kanji: "ガルニエ宮", hiragana: "がるにえきゅう", price: 220, category: "名門劇場" },
  { id: "354", kanji: "ロイヤル・バレエ", hiragana: "ろいやるばれえ", price: 320, category: "名門バレエ団" },
  { id: "355", kanji: "ボリショイ・バレエ", hiragana: "ぼりしょいばれえ", price: 350, category: "名門バレエ団" },
  { id: "356", kanji: "マリインスキー劇場", hiragana: "まりいんすきーげきじょう", price: 420, category: "名門劇場" },
  { id: "357", kanji: "チャイコフスキー", hiragana: "ちゃいこふすきー", price: 340, category: "作曲家" },
  { id: "358", kanji: "プロコフィエフ", hiragana: "ぷろこふぃえふ", price: 320, category: "作曲家" },
  { id: "359", kanji: "ストラヴィンスキー", hiragana: "すとらゔぃんすきー", price: 380, category: "作曲家" },
  { id: "360", kanji: "マリウス・プティパ", hiragana: "まりうすぷてぃぱ", price: 360, category: "振付家" },
  // 長め (S席: 14文字以上)
  { id: "361", kanji: "眠れる森の美女 百年の眠りとリラの精の魔法", hiragana: "ねむれるもりのびじょひゃくねんのねむりとりらのせいのまほう", price: 780, category: "名場面" },
  { id: "362", kanji: "眠れる森の美女 宝石の踊りダイヤモンドの精", hiragana: "ねむれるもりのびじょほうせきのおどりだいやもんどのせい", price: 750, category: "バリエーション" },
  { id: "363", kanji: "ラ・フィーユ・マル・ガルデ シモーヌ未亡人の木靴の踊り", hiragana: "らふぃーゆまるがるでしもーぬみぼうじんのきぐつのおどり", price: 780, category: "名場面" },
  { id: "364", kanji: "ラ・フィーユ・マル・ガルデ 黄金の麦穂と収穫祭の歓喜", hiragana: "らふぃーゆまるがるでおうごんのむぎほとしゅうかくさいのかんき", price: 780, category: "名場面" },
  { id: "365", kanji: "卒業舞踏会 ヨハン・シュトラウスの軽快な無窮動", hiragana: "そつぎょうぶとうかいよはんしゅとらうすのけいかいなむきゅうどう", price: 760, category: "名曲" },
  { id: "366", kanji: "パリの炎 ジャンヌとフィリップの情熱的なグラン・パ・ド・ドゥ", hiragana: "ぱりのほのおじゃんぬとふぃりっぷのじょうねつてきなぐらんぱどどぅ", price: 800, category: "名場面" },
  { id: "367", kanji: "アレルキナーダ コロンビーヌとアレルキンの恋の騒動", hiragana: "あれるきなーだころんびーぬとあれるきんのこいのそうどう", price: 760, category: "名場面" },
  { id: "368", kanji: "ドン・キホーテ 夢の場のドルシネア姫と森の女王", hiragana: "どんきほーてゆめのばのどるしねあひめともりのじょおう", price: 750, category: "名場面" },
  { id: "369", kanji: "くるみ割り人形 雪の女王と煌めく雪片のワルツ", hiragana: "くるみわりにんぎょうゆきのじょおうときらめくせっぺんのわるつ", price: 750, category: "名場面" },
  { id: "370", kanji: "カーテンコールの鳴り止まない拍手と薔薇の花束", hiragana: "かーてんこーるのなりやまないはくしゅとばらのはなたば", price: 740, category: "舞台" }
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
