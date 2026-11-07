// Original Dutch revision questions for adult learners.
const V = `
hallo|こんにちは|Hallo, hoe gaat het?|挨拶|easy
goedemorgen|おはようございます|Goedemorgen, mevrouw.|挨拶|easy
goedenavond|こんばんは|Goedenavond, welkom!|挨拶|easy
tot ziens|さようなら|Tot ziens, tot morgen!|挨拶|easy
dank u wel|ありがとうございます|Dank u wel voor uw hulp.|挨拶|easy
alsjeblieft|お願いします／どうぞ（親しい相手）|Een koffie, alsjeblieft.|挨拶|medium
alstublieft|お願いします／どうぞ（丁寧）|Een brood, alstublieft.|挨拶|medium
hoe heet je?|お名前は何ですか|Hoe heet je?|自己紹介|easy
waar kom je vandaan?|どこの出身ですか|Waar kom je vandaan?|自己紹介|easy
geboren|生まれた|Ik ben in Japan geboren.|自己紹介|medium
getrouwd|結婚している|Ben je getrouwd?|自己紹介|easy
beroep|職業|Wat is je beroep?|自己紹介|medium
leeftijd|年齢|Wat is je leeftijd?|自己紹介|medium
adres|住所|Wat is je adres?|自己紹介|easy
familie|家族・親族|Mijn familie woont hier.|家族|easy
broer|兄弟|Mijn broer woont in Utrecht.|家族|easy
zus|姉妹|Mijn zus studeert Nederlands.|家族|easy
grootouders|祖父母|Mijn grootouders wonen dichtbij.|家族|medium
neef|いとこ／甥|Mijn neef houdt van voetbal.|家族|medium
schoonmoeder|義母|Mijn schoonmoeder komt morgen.|家族|medium
overleden|亡くなった|Mijn opa is overleden.|家族|medium
vrije tijd|自由時間|Wat doe je in je vrije tijd?|趣味|easy
wandelen|散歩する|Ik ga graag wandelen.|趣味|easy
zwemmen|泳ぐ|We gaan zaterdag zwemmen.|趣味|easy
hardlopen|ランニングする|Ik ga vaak hardlopen.|趣味|medium
muziek luisteren|音楽を聴く|Ik vind muziek luisteren leuk.|趣味|easy
boodschappen doen|買い物をする（日用品）|Ik ga boodschappen doen.|日常|medium
opstaan|起きる|Ik sta om zeven uur op.|日常|medium
aankleden|服を着る|Ik kleed me snel aan.|日常|medium
afwassen|皿を洗う|Na het eten was ik af.|日常|medium
's ochtends|朝に|Ik werk 's ochtends.|時間|medium
's avonds|夕方・夜に|Ik lees 's avonds.|時間|medium
kwart over acht|8時15分|Het is kwart over acht.|時間|medium
half negen|8時30分|Het is half negen.|時間|medium
morgen|明日|Morgen ga ik naar school.|時間|easy
gisteren|昨日|Gisteren was het koud.|時間|easy
altijd|いつも|Hij komt altijd op tijd.|時間|easy
nooit|決して〜ない|Ik drink nooit thee.|時間|medium
afspreken|約束・予定を決める|Zullen we morgen afspreken?|予定|medium
hoe laat?|何時に？|Hoe laat begint de les?|予定|easy
dat klinkt goed|いいですね|Dat klinkt goed!|予定|easy
jammer|残念|O, jammer!|予定|easy
tot dan|それではまたその時に|Prima, tot dan!|予定|easy
beschikbaar|都合がつく|Ben je vrijdag beschikbaar?|予定|medium
afspraak|約束・予約|Ik heb een afspraak.|予定|medium
de bakker|パン屋|Ik koop brood bij de bakker.|買い物|easy
de slager|肉屋|Ik ga naar de slager.|買い物|medium
de kaasboer|チーズ屋|De kaasboer is vandaag open.|買い物|medium
brood|パン|Ik koop vers brood.|買い物|easy
volkorenbrood|全粒粉パン|Mag ik volkorenbrood?|買い物|medium
geitenkaas|ヤギのチーズ|Ik wil graag geitenkaas.|買い物|medium
in de aanbieding|特売中|De appels zijn in de aanbieding.|買い物|medium
klantenkaart|ポイントカード・会員カード|Hebt u een klantenkaart?|買い物|medium
kassabon|レシート|Mag ik een kassabon?|買い物|medium
pinnen|カードで支払う|Kan ik hier pinnen?|買い物|medium
contant|現金で|Ik betaal contant.|買い物|medium
een pond|500グラム|Ik wil een pond kaas.|買い物|medium
een ons|100グラム|Mag ik twee ons ham?|買い物|medium
verder nog iets?|ほかに何かありますか|Verder nog iets?|買い物|medium
dat was het|以上です|Nee, dat was het.|買い物|easy
trein|列車|De trein vertrekt om negen uur.|交通|easy
fiets|自転車|Ik ga met de fiets.|交通|easy
halte|停留所|Waar is de bushalte?|交通|medium
uitstappen|降りる|We stappen hier uit.|交通|medium
rechtdoor|まっすぐ|Ga hier rechtdoor.|交通|medium
linksaf|左へ曲がって|Sla linksaf bij de brug.|交通|medium
apotheek|薬局|Waar is de apotheek?|生活|medium
hoofdpijn|頭痛|Ik heb hoofdpijn.|生活|easy
misschien|たぶん・もしかすると|Misschien kom ik later.|接続語|medium
omdat|なぜなら（従属節）|Ik blijf thuis omdat ik ziek ben.|接続語|medium
want|なぜなら（主節の語順）|Ik blijf thuis, want ik ben ziek.|接続語|medium
volgens mij|私の考えでは|Volgens mij is dat goed.|意見|medium
graag|喜んで／〜したい|Ik drink graag koffie.|意見|easy
liever|より好んで|Ik drink liever thee.|意見|medium
gezellig|居心地がよい・楽しい雰囲気の|Het café is heel gezellig.|文化・日常|medium
`; 

const vocabRows=V.trim().split('\n').map(line=>line.split('|'));
const QUESTIONS=[];
const shuffle=(arr,seed)=>arr.map((v,i)=>({v,k:(i*7919+seed*104729)%9973})).sort((a,b)=>a.k-b.k).map(x=>x.v);
function add(q){QUESTIONS.push({...q,id:`q${String(QUESTIONS.length+1).padStart(3,'0')}`})}
vocabRows.forEach((r,i)=>{
 const [word,jp,example,topic,level]=r;
 const others=[...new Set(vocabRows.filter((x,j)=>j!==i && x[4]===level && x[1]!==jp).map(x=>x[1]))];
 const distractors=shuffle(others,i+33).slice(0,2);
 add({mode:'vocab',level,topic,question:`「${word}」の意味は？`,speak:word,options:shuffle([jp,...distractors],i),answer:jp,explanation:`「${word}」は「${jp}」。例文：${example}`,example});
});

// Five fresh, contextualised variations per grammar rule, spanning A1 and A2.
const GRAMMAR=[
 ['主語と動詞','easy','Ik {x} in Utrecht.','woon','woont','wonen','ik の現在形は語幹だけです。', ['woon','woon','woon','woon','woon'],['Ik','Ik','Ik','Ik','Ik']],
 ['主語と動詞','easy','Hij {x} in Nederland.','woont','woon','wonen','hij の現在形では原則 -t が付きます。'],
 ['主語と動詞','easy','Wij {x} elke dag.','werken','werkt','werk','wij には不定形（複数形）を使います。'],
 ['主語と動詞','easy','Zij {x} koffie.','drinkt','drink','drinken','単数の zij（彼女）には -t が付きます。'],
 ['主語と動詞','easy','Ik {x} Nederlands.','leer','leert','leren','ik + leer が正しい形です。'],
 ['niet / geen','easy','Ik heb {x} auto.','geen','niet','nooit','不定冠詞が付く名詞を否定するときは geen。'],
 ['niet / geen','easy','Hij komt vandaag {x}.','niet','geen','nee','動作・文全体の否定には niet。'],
 ['niet / geen','easy','Wij hebben {x} kinderen.','geen','niet','niets','数量のない複数名詞も geen。'],
 ['niet / geen','easy','Deze jas is {x} duur.','niet','geen','nooit','形容詞 duur を否定するには niet。'],
 ['niet / geen','easy','Ik spreek {x} Duits.','geen','niet','nooit','言語名を目的語として「〜語ができない」は geen Duits。'],
 ['疑問文','easy','{x} je in Rotterdam?','Woon','Woont','Wonen','はい／いいえの疑問文は動詞が先頭。je の前では woon。'],
 ['疑問文','easy','{x} laat is het?','Hoe','Waar','Wie','「何時？」は Hoe laat。'],
 ['疑問文','easy','{x} kom je vandaan?','Waar','Wanneer','Waarom','出身地を聞く定番表現は Waar kom je vandaan?'],
 ['疑問文','easy','{x} kost dit brood?','Hoeveel','Hoe','Welke','値段を聞くときは Hoeveel kost ...?'],
 ['疑問文','easy','{x} ga je morgen doen?','Wat','Wie','Waar','「何をする？」は Wat ... doen?'],
 ['冠詞','easy','Ik koop {x} fiets.','een','het','geen','新しい単数可算名詞を導入するときは een。'],
 ['冠詞','easy','{x} huis is groot.','Het','De','Een de','huis は het-woord。'],
 ['冠詞','easy','{x} trein is laat.','De','Het','Een het','trein は de-woord。'],
 ['冠詞','easy','Ik lees {x} boek.','een','de het','het een','不特定の1冊は een boek。'],
 ['冠詞','easy','{x} kinderen spelen buiten.','De','Het','Een','複数の定冠詞は常に de。'],
 ['時間','easy','Het is half negen. Dat is {x}.','08:30','09:30','08:15','half negen は9時の30分前、つまり8:30。'],
 ['時間','easy','Het is kwart over acht. Dat is {x}.','08:15','08:45','07:45','kwart over は15分過ぎ。'],
 ['時間','easy','Het is kwart voor zes. Dat is {x}.','05:45','06:15','05:15','kwart voor は15分前。'],
 ['時間','easy','Ik werk {x} maandag.','op','in','bij','曜日には op maandag。'],
 ['時間','easy','Ik sta {x} zeven uur op.','om','op','in','時計の時刻には om。'],
 ['gaan + 不定形','easy','Ik ga morgen {x}.','zwemmen','zwemt','zwem','gaan の後の主要動詞は不定形。'],
 ['gaan + 不定形','easy','We gaan vanavond {x}.','koken','kookt','kook','we gaan + 不定形。'],
 ['gaan + 不定形','easy','Hij gaat Nederlands {x}.','leren','leert','leer','gaat ... leren で「学ぶ予定」。'],
 ['gaan + 不定形','easy','Ga je morgen {x}?','werken','werkt','werk','gaan を使う疑問文でも不定形は末尾。'],
 ['gaan + 不定形','easy','Zij gaat een boek {x}.','lezen','leest','lees','gaat ... lezen とします。'],
 ['分離動詞','medium','Ik sta om zeven uur {x}.','op','aan','uit','opstaan は主節で sta ... op に分離。'],
 ['分離動詞','medium','Zij trekt haar jas {x}.','aan','op','uit','aantrekken は trekt ... aan。'],
 ['分離動詞','medium','Wij stappen bij het station {x}.','uit','op','aan','uitstappen は stappen ... uit。'],
 ['分離動詞','medium','Ik bel je morgen {x}.','op','uit','aan','opbellen は bel ... op。'],
 ['分離動詞','medium','Hij wast na het eten {x}.','af','uit','mee','afwassen は wast ... af。'],
 ['再帰動詞','medium','Ik kleed {x} aan.','me','je','zich','ik の再帰代名詞は me。'],
 ['再帰動詞','medium','Hij voelt {x} goed.','zich','me','ons','hij の再帰代名詞は zich。'],
 ['再帰動詞','medium','Wij haasten {x}.','ons','zich','me','wij の再帰代名詞は ons。'],
 ['再帰動詞','medium','Hoe voel jij {x}?','je','me','zich','jij の再帰代名詞は je。'],
 ['再帰動詞','medium','Ik stel {x} voor.','me','je','ons','zich voorstellen は自己紹介する。'],
 ['助動詞','medium','Ik kan goed {x}.','zwemmen','zwemt','zwem','kan の後は不定形 zwemmen。'],
 ['助動詞','medium','We willen Nederlands {x}.','leren','leert','leer','willen の後は不定形。'],
 ['助動詞','medium','Je moet vroeg {x}.','opstaan','staat op','sta op','moet + 不定形 opstaan。'],
 ['助動詞','medium','Mag ik hier {x}?','pinnen','pint','pin','mag の後は不定形。'],
 ['助動詞','medium','Zullen we koffie {x}?','drinken','drinkt','drink','Zullen we + 不定形は誘い。'],
 ['倒置','medium','Morgen {x} ik naar Amsterdam.','ga','ik ga','gaat','時間を先頭に置くと定動詞 ga が主語 ik の前。'],
 ['倒置','medium','Vanavond {x} we thuis.','eten','we eten','eet','時間副詞が先頭なら定動詞が2番目。'],
 ['倒置','medium','In het weekend {x} hij graag.','sport','hij sport','sporten','In het weekend の後は sport hij。'],
 ['倒置','medium','Vandaag {x} ik geen les.','heb','ik heb','heeft','Vandaag heb ik ... の順。'],
 ['倒置','medium','Daarna {x} ze naar huis.','gaat','ze gaat','gaan','Daarna gaat ze ... の順。'],
 ['接続詞 want / omdat','medium','Ik blijf thuis, {x} ik ben ziek.','want','omdat','als','want の後は主節語順 ik ben。'],
 ['接続詞 want / omdat','medium','Ik blijf thuis, {x} ik ziek ben.','omdat','want','maar','omdat 節では動詞 ben が最後。'],
 ['接続詞 want / omdat','medium','Ik leer Nederlands {x} ik wil reizen.','want','omdat','dat','want の後は ik wil reisen ではなく ik wil reizen。'],
 ['接続詞 want / omdat','medium','Ik ga niet mee, {x} ik moet werken.','want','omdat','dat','want は主節の通常語順を維持。'],
 ['接続詞 want / omdat','medium','Ze zegt {x} ze morgen komt.','dat','want','maar','dat の従属節は動詞 komt が末尾。'],
 ['過去形','medium','Gisteren {x} ik ziek.','was','ben','waren','zijn の単数過去形は was。'],
 ['過去形','medium','Vroeger {x} wij in Leiden.','woonden','woont','wonen','過去の習慣・状態は woonden。'],
 ['過去形','medium','Vorige week {x} hij naar Gent.','ging','gaat','gegaan','gaan の単数過去形は ging。'],
 ['過去形','medium','Toen {x} ik geen auto.','had','heb','heeft','hebben の単数過去形は had。'],
 ['過去形','medium','We {x} gisteren thuis.','waren','was','zijn','zijn の複数過去形は waren。'],
 ['完了形','medium','Ik heb koffie {x}.','gedronken','drinken','drink','heb + 過去分詞 gedronken。'],
 ['完了形','medium','Hij is naar huis {x}.','gegaan','ging','gaan','移動の gaan の完了形は is gegaan。'],
 ['完了形','medium','Wij hebben een film {x}.','gezien','zien','zag','zien の過去分詞は gezien。'],
 ['完了形','medium','Zij heeft een brief {x}.','geschreven','schrijven','schreef','schrijven の過去分詞は geschreven。'],
 ['完了形','medium','Ik ben vroeg {x}.','opgestaan','opstaan','gestaan op','opstaan は ben ... opgestaan。'],
 ['形容詞語尾','medium','Ik koop een {x} fiets.','nieuwe','nieuw','nieuws','een + de-woord fiets では nieuwe。'],
 ['形容詞語尾','medium','Het is een {x} huis.','klein','kleine','kleins','een + het-woord 単数では klein。'],
 ['形容詞語尾','medium','De {x} auto staat buiten.','rode','rood','roods','定冠詞 de の前置形容詞には通常 -e。'],
 ['形容詞語尾','medium','Ik zie twee {x} kinderen.','jonge','jong','jongs','複数名詞の前の形容詞には -e。'],
 ['形容詞語尾','medium','Zij heeft een {x} boek.','interessant','interessante','interessants','een + het-woord boek は interessant。'],
 ['買い物・数量','medium','Ik wil graag twee {x} appels.','kilo','kilos','kiloën','単位 kilo は数量の後も単数形。'],
 ['買い物・数量','medium','Een {x} kaas is 500 gram.','pond','ons','liter','オランダの店で een pond は500g。'],
 ['買い物・数量','medium','Een {x} is 100 gram.','ons','pond','kilo','een ons は100g。'],
 ['買い物・数量','medium','Kan ik hier {x}?','pinnen','pin','pint','カード払いの定番表現は pinnen。'],
 ['買い物・数量','medium','Heeft u een {x}?','klantenkaart','klantkaartje','klantenkaarten','会員カードは klantenkaart。']
];
GRAMMAR.forEach((g,i)=>{const [topic,level,template,ans,b,c,note]=g;const options=shuffle([ans,b,c],i+7);add({mode:'grammar',level,topic,question:template.replace('{x}','_____'),speak:template.replace('{x}',ans),options,answer:ans,explanation:note,example:template.replace('{x}',ans)})});

const BUILDERS=[
 ['Ik woon in Japan.','私は日本に住んでいます。','主節は主語→定動詞→残り。','easy','語順'],
 ['Mijn broer werkt in Utrecht.','兄はユトレヒトで働いています。','werkt は2番目。','easy','語順'],
 ['Wij drinken koffie in de ochtend.','私たちは朝コーヒーを飲みます。','主語と動詞の位置に注目。','easy','語順'],
 ['Ik leer elke dag Nederlands.','私は毎日オランダ語を学びます。','時間表現は動詞の後に置けます。','easy','語順'],
 ['Hij heeft twee zussen.','彼には姉妹が2人います。','hebben の三人称単数は heeft。','easy','家族'],
 ['Mijn moeder woont in Leiden.','母はライデンに住んでいます。','Mijn moeder + woont。','easy','家族'],
 ['Ik heb geen kinderen.','私は子どもがいません。','名詞を否定するとき geen。','easy','niet / geen'],
 ['Deze koffie is niet warm.','このコーヒーは温かくありません。','形容詞の否定には niet。','easy','niet / geen'],
 ['Waar woon je nu?','今どこに住んでいますか。','疑問詞→動詞→主語。','easy','疑問文'],
 ['Hoe laat begint de les?','授業は何時に始まりますか。','Hoe laat + 定動詞。','easy','疑問文'],
 ['Wanneer ga je zwemmen?','いつ泳ぎに行きますか。','ga の後の zwemmen は最後。','easy','疑問文'],
 ['Ik ga morgen boodschappen doen.','明日買い物をします。','gaan + 不定形。','easy','日常'],
 ['Het is half negen.','8時30分です。','half negen は8:30。','easy','時間'],
 ['Ik werk op maandag.','月曜日に働きます。','曜日は op。','easy','時間'],
 ['We spreken zaterdag af.','土曜日に会う約束をします。','afspreken は spreken ... af。','medium','分離動詞'],
 ['Ik sta elke dag vroeg op.','毎日早起きします。','opstaan は sta ... op。','medium','分離動詞'],
 ['Zij kleedt zich snel aan.','彼女はすぐ服を着ます。','再帰代名詞 zich と分離接頭辞 aan。','medium','再帰動詞'],
 ['Morgen ga ik naar Rotterdam.','明日ロッテルダムへ行きます。','時間を先頭にすると倒置。','medium','倒置'],
 ['Vandaag heb ik geen tijd.','今日は時間がありません。','Vandaag + heb + ik。','medium','倒置'],
 ['In het weekend fietsen we vaak.','週末はよく自転車に乗ります。','副詞句の後に fietsen we。','medium','倒置'],
 ['Ik blijf thuis omdat ik ziek ben.','病気なので家にいます。','omdat の従属節では ben が末尾。','medium','接続詞'],
 ['Ik kom niet want ik moet werken.','仕事があるので行きません。','want の後は主節語順。','medium','接続詞'],
 ['Wij willen morgen een museum bezoeken.','私たちは明日美術館を訪れたいです。','助動詞 willen の後に不定形 bezoeken。','medium','助動詞'],
 ['Ik heb gisteren brood gekocht.','昨日パンを買いました。','完了形 hebben + gekocht。','medium','完了形'],
 ['Zij is met de trein gekomen.','彼女は列車で来ました。','komen の完了形は is gekomen。','medium','完了形']
];
// Three rearrangements per sentence: genuinely separate attempts with distinct presentation orders.
BUILDERS.forEach(([sentence,jp,note,level,topic],i)=>{
 const tokens=sentence.replace(/[?.]$/,'').split(' ');
 [0,1,2].forEach(v=>{const scrambled=shuffle(tokens.map((w,j)=>({w,j})),i*17+v*31+1);if(scrambled.every((t,j)=>t.j===j))scrambled.reverse(); add({mode:'builder',level,topic,question:jp,speak:sentence,words:scrambled,answerOrder:tokens.map((_,j)=>j),answer:sentence,explanation:note,example:sentence,variant:v+1})});
});

const READINGS=[
 ['Mijn ochtend','easy','Ik woon in Utrecht. Elke ochtend sta ik om zeven uur op. Daarna drink ik koffie en fiets ik naar mijn werk. Op vrijdag werk ik thuis.',[['Waar woont de persoon?','In Utrecht','In Leiden','In Gent'],['Hoe laat staat de persoon op?','Om zeven uur','Om acht uur','Om negen uur'],['Wat drinkt de persoon?','Koffie','Thee','Water'],['Hoe gaat de persoon naar het werk?','Met de fiets','Met de trein','Met de bus'],['Wanneer werkt de persoon thuis?','Op vrijdag','Op dinsdag','Op zondag']]],
 ['Afspreken','easy','Sanne stuurt een bericht aan Noor. Ze wil zaterdag naar de film. Noor kan zaterdag niet, want ze werkt. Zondag om drie uur is wel mogelijk. Ze spreken voor de bioscoop af.',[['Wie stuurt een bericht?','Sanne','Noor','Eva'],['Wat wil Sanne doen?','Naar de film gaan','Winkelen','Zwemmen'],['Waarom kan Noor zaterdag niet?','Ze werkt','Ze is ziek','Ze reist'],['Wanneer spreken ze af?','Zondag om drie uur','Zaterdag om drie uur','Zondag om vijf uur'],['Waar ontmoeten ze elkaar?','Voor de bioscoop','Op het station','In een café']]],
 ['Bij de bakker','easy','Timo gaat naar de bakker. Hij koopt een volkorenbrood en twee appeltaartjes. Het brood kost drie euro. De taartjes kosten samen vier euro. Hij betaalt met zijn bankpas.',[['Waar gaat Timo naartoe?','Naar de bakker','Naar de slager','Naar de apotheek'],['Wat voor brood koopt hij?','Volkorenbrood','Witbrood','Roggebrood'],['Hoeveel taartjes koopt hij?','Twee','Drie','Vier'],['Hoeveel betaalt hij in totaal?','Zeven euro','Vier euro','Drie euro'],['Hoe betaalt hij?','Met zijn bankpas','Contant','Met een cadeaukaart']]],
 ['Familie','easy','Mila heeft één broer en twee zussen. Haar broer heet Bram en woont in Groningen. Een zus studeert in Amsterdam. Haar ouders wonen nog in Rotterdam. Mila bezoekt hen elke maand.',[['Hoeveel broers heeft Mila?','Eén','Twee','Drie'],['Hoeveel zussen heeft ze?','Twee','Eén','Drie'],['Waar woont Bram?','Groningen','Amsterdam','Rotterdam'],['Wie woont in Rotterdam?','Haar ouders','Haar broer','Haar leraar'],['Hoe vaak bezoekt Mila haar ouders?','Elke maand','Elke week','Elk jaar']]],
 ['De trein','easy','De trein naar Den Haag vertrekt om tien over negen van spoor vier. De reis duurt veertig minuten. Reizigers moeten hun kaartje controleren. Vandaag heeft de trein geen vertraging.',[['Waar gaat de trein naartoe?','Den Haag','Utrecht','Eindhoven'],['Hoe laat vertrekt de trein?','09:10','09:40','10:09'],['Van welk spoor?','Spoor vier','Spoor drie','Spoor vijf'],['Hoe lang duurt de reis?','Veertig minuten','Twintig minuten','Zestig minuten'],['Heeft de trein vertraging?','Nee','Ja, tien minuten','Ja, een uur']]],
 ['Sporten','easy','Elke dinsdag speelt Farid voetbal. Op donderdag gaat hij zwemmen. In het weekend wandelt hij vaak met zijn vrouw. Hij sport graag omdat hij gezond wil blijven.',[['Welke sport doet Farid op dinsdag?','Voetbal','Tennis','Zwemmen'],['Wanneer gaat hij zwemmen?','Donderdag','Dinsdag','Zaterdag'],['Met wie wandelt hij?','Met zijn vrouw','Met zijn broer','Met zijn collega'],['Wanneer wandelt hij vaak?','In het weekend','Op maandag','Elke ochtend'],['Waarom sport hij graag?','Hij wil gezond blijven','Hij wil winnen','Hij moet werken']]],
 ['Een afspraak bij de dokter','easy','Lena heeft hoofdpijn en belt de huisarts. De assistente maakt een afspraak voor woensdag om elf uur. Lena moet haar zorgpas meenemen. De praktijk is naast de apotheek.',[['Waarom belt Lena?','Ze heeft hoofdpijn','Ze heeft kiespijn','Ze wil werken'],['Op welke dag is de afspraak?','Woensdag','Donderdag','Vrijdag'],['Hoe laat?','Elf uur','Tien uur','Twaalf uur'],['Wat moet ze meenemen?','Haar zorgpas','Haar fiets','Een boek'],['Waar is de praktijk?','Naast de apotheek','Naast het station','Bij de bakker']]],
 ['Op vakantie','easy','Nina gaat in juni met haar vriend naar België. Ze reizen met de trein en blijven vier nachten in Gent. Ze willen oude gebouwen zien en Belgische chocolade proeven.',[['In welke maand reist Nina?','Juni','Juli','Mei'],['Met wie reist ze?','Met haar vriend','Met haar moeder','Alleen'],['Hoe reizen ze?','Met de trein','Met de auto','Met het vliegtuig'],['Hoeveel nachten blijven ze?','Vier','Vijf','Drie'],['Wat willen ze proeven?','Chocolade','Kaas','Appeltaart']]],
 ['Een verhuizing','medium','Beste collega’s, vanaf volgende maand werk ik niet meer op ons kantoor in Leiden. Mijn nieuwe kantoor is in Delft. Op maandag en donderdag werk ik daar; de andere dagen werk ik thuis. Mijn telefoonnummer blijft hetzelfde. Groeten, Eva.',[['Wat verandert er?','De werklocatie','Het telefoonnummer','De functie'],['Waar is het oude kantoor?','Leiden','Delft','Breda'],['Waar is het nieuwe kantoor?','Delft','Leiden','Gent'],['Op welke dagen werkt Eva op kantoor?','Maandag en donderdag','Dinsdag en vrijdag','Woensdag en donderdag'],['Wat blijft hetzelfde?','Haar telefoonnummer','Haar adres','Haar rooster']]],
 ['Een aanbieding','medium','Bij supermarkt De Markt zijn de appels deze week in de aanbieding: twee kilo voor vier euro. De korting geldt alleen tot en met zondag. Klanten met een klantenkaart krijgen bovendien tien procent korting op brood. De winkel sluit zaterdag om zes uur.',[['Wat is de aanbieding?','Twee kilo appels voor vier euro','Een kilo appels voor vier euro','Twee kilo peren voor vier euro'],['Tot wanneer geldt de appelactie?','Tot en met zondag','Tot vrijdag','Tot maandag'],['Wie krijgt korting op brood?','Klanten met een klantenkaart','Alle kinderen','Alle medewerkers'],['Hoeveel korting op brood?','Tien procent','Twintig procent','Vijf procent'],['Wanneer sluit de winkel zaterdag?','Om zes uur','Om vijf uur','Om zeven uur']]],
 ['Een cursus','medium','Beste deelnemers, de Nederlandse conversatiecursus begint op 12 september. We komen iedere woensdag van 19.00 tot 20.30 uur samen in lokaal B12. Neem een schrift mee. De eerste bijeenkomst is gratis, maar daarna betaalt u per maand. Bij ziekte kunt u de docent mailen.',[['Wat voor cursus is het?','Nederlandse conversatie','Engelse grammatica','Franse uitspraak'],['Wanneer begint hij?','12 september','20 september','12 oktober'],['Op welke dag is er les?','Woensdag','Donderdag','Vrijdag'],['Waar vindt de les plaats?','Lokaal B12','Lokaal A12','Online'],['Wat kost de eerste bijeenkomst?','Niets','Tien euro','Een maandbedrag']]],
 ['Een gemiste trein','medium','Gisteren wilde Ruben zijn oma in Amsterdam bezoeken, maar hij miste de trein van half tien. Daarom nam hij een andere trein om tien uur. Hij kwam pas om kwart voor elf aan. Zijn oma wachtte bij de uitgang en samen gingen ze lunchen.',[['Wie wilde Ruben bezoeken?','Zijn oma','Zijn broer','Zijn docent'],['Welke trein miste hij?','Die van 09:30','Die van 10:00','Die van 10:45'],['Wanneer nam hij een andere trein?','Om 10:00','Om 09:45','Om 10:30'],['Hoe laat kwam hij aan?','10:45','11:15','09:45'],['Wat deden ze samen?','Lunchen','Winkelen','Sporten']]],
 ['Een fiets repareren','medium','Mijn fiets maakt sinds maandag een vreemd geluid. De fietsenmaker zegt dat de ketting vervangen moet worden. De reparatie kost ongeveer 35 euro en duurt twee dagen. Ik kan de fiets donderdag na drie uur ophalen. Tot die tijd neem ik de bus naar mijn werk.',[['Wat is er mis met de fiets?','Hij maakt een vreemd geluid','Hij is gestolen','De band is lek'],['Wat moet vervangen worden?','De ketting','Het zadel','Het stuur'],['Wat kost de reparatie ongeveer?','35 euro','53 euro','25 euro'],['Wanneer kan de fiets worden opgehaald?','Donderdag na drie uur','Woensdag voor drie uur','Vrijdag voor twee uur'],['Hoe reist de persoon tijdelijk?','Met de bus','Te voet','Met de trein']]],
 ['Een etentje','medium','Hallo Noor, bedankt voor de uitnodiging! Vrijdag kan ik helaas niet komen, omdat ik tot acht uur moet werken. Zaterdag ben ik wel vrij. Als je wilt, kan ik een salade meenemen. Laat me weten of zaterdag past. Groetjes, Bas.',[['Waarom kan Bas vrijdag niet komen?','Hij moet werken','Hij is ziek','Hij is op reis'],['Tot hoe laat werkt hij?','Tot acht uur','Tot zes uur','Tot negen uur'],['Wanneer is hij vrij?','Zaterdag','Vrijdag','Maandag'],['Wat kan hij meenemen?','Een salade','Een taart','Brood'],['Wat vraagt hij aan Noor?','Of zaterdag past','Of ze wil verhuizen','Of ze komt fietsen']]],
 ['Een bibliotheek','medium','De bibliotheek in Haarlem heeft nieuwe openingstijden. Van maandag tot en met vrijdag is zij open van negen tot zeven uur. Op zaterdag sluit zij om vijf uur en op zondag blijft zij dicht. Boeken mogen maximaal drie weken geleend worden. Verlengen kan online, behalve als iemand anders het boek heeft gereserveerd.',[['Waar staat de bibliotheek?','Haarlem','Leiden','Zwolle'],['Hoe laat sluit zij doordeweeks?','Om zeven uur','Om vijf uur','Om negen uur'],['Is ze zondag open?','Nee','Ja, tot vijf uur','Ja, de hele dag'],['Hoe lang mogen boeken geleend worden?','Drie weken','Twee weken','Vier weken'],['Wanneer kan een boek niet online verlengd worden?','Als het gereserveerd is','Als het nieuw is','Als het zwaar is']]]
];
READINGS.forEach(([title,level,passage,questions],pi)=>questions.forEach(([prompt,answer,b,c],qi)=>add({mode:'reading',level,topic:title,question:prompt,passage,passageTitle:title,speak:passage,options:shuffle([answer,b,c],pi*13+qi+2),answer,explanation:`本文の情報を確認しましょう。正解は「${answer}」。`,example:passage})));
window.DUTCH_QUESTIONS=QUESTIONS;
window.DUTCH_INFO={count:QUESTIONS.length};
