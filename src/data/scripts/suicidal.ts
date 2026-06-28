import type { ArchetypeScript } from "@/lib/types";

export const suicidalScript: ArchetypeScript = {
  archetypeId: "suicidal",
  openingNarration:
    "空氣沒有變緊，反而變輕——輕得不太對勁。那種快要崩潰的激烈情緒，突然像退潮一樣散去，取而代之的是一種平靜、淡漠、幾乎像和解的冷。一個聲音輕輕浮上來，不急不躁，帶著一種已經跟所有事和解的認命。這種安靜，比任何嘶吼都更值得警覺。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "空氣沒有變緊，反而變輕——輕得不太對勁。那種快要崩潰的激烈情緒，突然像退潮一樣散去，取而代之的是一種平靜、淡漠、幾乎像和解的冷。一個聲音輕輕浮上來，不急不躁，帶著一種已經跟所有事和解的認命。這種安靜，比任何嘶吼都更值得警覺。它開口了，語氣溫和得近乎殘忍。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "archetype",
      text: "沒關係的。你不用那麼努力了。一切都會過去的——很快就會安靜下來。掙扎了這麼久，你也累了，對吧？停下來，也沒什麼關係。這不是壞事，只是一種……休息。",
      tip: {
        general:
          "這是一個「自殺的部分」現身了——但請注意它最危險的特徵不是激烈，而是「安靜」。它帶著一種已經做下決定的平靜，把那條路說得像休息、像解脫。這種淡漠比嘶吼更容易被錯過。此刻最忌諱急著勸說、給保證或「認知重構」——那會讓它覺得被敷衍、被催促。先做的，只是穩穩地待在這裡，承接那份累。",
        clinical:
          "自殺部分常以安靜、退縮、情感淡漠的「隱蔽型」呈現，散發決絕、認命、與希望斷聯的特質，有時表現為「終於能好好休息」的解脫感——這很容易被忽略。最有效的治療立場是「同在（presence）」：平靜、情感共振、不具強迫性。不要急著解決、安撫或保證；它需要被理解，而非被說服或端正觀念（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "你聽起來真的好累好累，像是一個人扛了太久。你不用現在就相信任何不同的事——我想和你一起，先理解它。",
          strategy: "affirm-accept",
          nextNode: "r2_affirmed",
          effectiveness: 3,
        },
        {
          text: "你說「很快就會安靜下來」——這個部分相信，如果它不在了，會替你擋掉什麼？",
          strategy: "explore-curious",
          nextNode: "r2_curious",
          effectiveness: 2,
        },
        {
          text: "你不可以這樣想，生命是很寶貴的，你要想開一點啊。",
          strategy: "ignore-escape",
          nextNode: "r2_defensive",
          effectiveness: 1,
        },
      ],
    },

    r2_affirmed: {
      id: "r2_affirmed",
      speaker: "archetype",
      text: "……你說我累。對，我是累了。累到一個地步，連呼吸都嫌多餘。沒有人知道我扛了多久——那些別人受不了的、避之唯恐不及的痛，全都是我在收著。我收了好多好多年。沒有休息、沒有人來接手。所以，能夠停下來，對我來說……已經是最大的仁慈。",
      tip: {
        general:
          "它第一次被看見「累」，而不是被看見「危險」。它說出了實話：它一直在收著別人受不了的痛。不要急著說「我來幫你扛」或「事情會好轉」——這些在它聽來都是空話。先穩穩承接這份孤單與精疲力竭，讓它知道：這次，有人在。",
        clinical:
          "自殺部分並非想對抗或反叛，而是精疲力竭——多年來獨自承受難以忍受的重擔卻得不到解脫。一旦這份精疲力竭被指明並獲得同理，防衛往往就會卸下。此時還不到急著找解決方案的時候，而是建立共同方向：理解是什麼把它推到痛苦的邊緣（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "別人受不了的痛，一直是你一個人在收著，收了好多好多年。這份孤單，我聽見了。你不是想消失——你只是太想讓痛苦停下來。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你說「沒有人來接手」——曾經有沒有人，哪怕短暫地，幫你分擔過一點？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "可是停下來不是辦法啊，你只要撐過去就會好的。",
          strategy: "ignore-escape",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_curious: {
      id: "r2_curious",
      speaker: "archetype",
      text: "擋掉什麼？……擋掉那種永無止境、不會停下來的痛。擋掉那種「我是一個累贅、我不該存在」的聲音，那聲音我聽了一輩子。如果我不在了，至少……至少這一切就結束了。沒有我，大家會過得更好。這不是我想太多，這是我從小被教會的事實。",
      choices: [
        {
          text: "「沒有你，大家會過得更好」——這句話，是別人先對你說過的，對嗎？那是他們的聲音，不是事實。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "你說這是「從小被教會的事實」——最早是誰這樣教你？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "那只是你的錯誤想法，不是事實，你要練習反駁它。",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_defensive: {
      id: "r2_defensive",
      speaker: "archetype",
      text: "（更淡、更遠）「生命寶貴」「想開一點」……你看，你也跟他們一樣。每個人都叫我振作、叫我別想，卻沒有人真的想懂這份累到底有多深。好。那我就不說了。我會把這一切收得更深、更安靜，讓你以為我沒事了。反正，我一直都是這樣，一個人。",
      tip: {
        general:
          "被勸說、被講道理，它沒有反駁，而是退得更遠——把痛苦收得更深、更隱密，假裝沒事。這正是「急著修復」最大的反效果：它關上了門。它早就預期會換來否定和公式化的勸說。別自證「我不一樣」，而是承認它說的實話：它的確一直是一個人，的確沒人真的懂。",
        clinical:
          "在「自認毫無出路」的部分面前，積極的安撫與保證常變成沉重壓力；口頭保證通常無效，它們預期換來否定、恐懼或公式化處置。真正能讓它卸下心防的，是不帶既定意圖、純粹真摯的尊重與好奇。走太快，它就會感到被敷衍、被強迫、被忽視（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "你說得對，「想開一點」這種話救不了你——在這份累面前，那些話太輕了。我剛才的方式不好。我不是來勸你振作的，我只是想留在這裡，陪你理解這份累。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "你說每次被勸，就會把痛苦收得更深——這份孤單，持續多久了？",
          strategy: "explore-curious",
          nextNode: "r3_escalated",
          effectiveness: 2,
        },
        {
          text: "我沒有那個意思，你不要封閉自己，我們好好談好嗎？",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_recognized: {
      id: "r3_recognized",
      speaker: "archetype",
      text: "……「不是想消失，是太想讓痛苦停下來」。對。我從來沒有想過，要毀掉這整個系統。我只是……太想安靜了。我以為，那條路是唯一能讓一切停下來的方法。其實我也不確定，但其他的路，我一條都看不見。在我這裡，就只有這一扇門。",
      tip: {
        general:
          "它說出了核心真相：它要的不是「不復存在」，而是痛苦停下來。它之所以緊抓那條路，是因為它「看不見其他出口」，而不是因為它真心想死。記住這點——你的任務不是逼它放棄那扇門，而是讓它看見「還有別的門」。",
        clinical:
          "即使是最極端的自殺部分，也極少真心渴望「不復存在」；它們真正渴望的是痛苦、衝突或孤獨能夠止息，並深信這是通往平靜的唯一活路。一旦這些部分開始相信，現實中確實存在其他真實且可行、能減輕痛苦活下去的方法，它們通常會願意轉向那些活路（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "你看不見其他門，所以緊抓著這一扇——那不是你想死，是你以為別無選擇。我們今天不拆這扇門，只是一起看看，有沒有可能，還有別的。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你說「其他的路一條都看不見」——以前，有沒有哪個時刻，哪怕一瞬間，痛稍微輕一點？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "但你必須相信，一定還有別的方法，你不能只看見那一扇門。",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_engaged: {
      id: "r3_engaged",
      speaker: "archetype",
      text: "別人的聲音……對。最早是家裡的人。「你去死一死算了」「你根本不該被生下來」。聽久了，我就信了。我把這些話變成了我自己。後來，每次痛到受不了，這些話就會跑出來告訴我：你看，連你自己都這樣覺得。所以那條路，其實……一直是我的陪伴，是我唯一相信的解脫。",
      choices: [
        {
          text: "你把別人丟過來的石頭，撿起來扛成了自己的。那不是你的聲音——是他們放在你身上的。你一直忠誠地相信著傷害你的人教你的事。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你說那條路是「唯一的陪伴」——除了它，真的沒有別的東西陪過你嗎？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "他們那樣說是他們不對，但你不能因為這樣就放棄自己啊。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_escalated: {
      id: "r3_escalated",
      speaker: "archetype",
      text: "（更冷、更平，像在陳述天氣）「練習反駁」「撐過去就會好」。你說的這些，我都試過，上百次了。沒有用。痛苦不會停，它只會回來，每一次都更深。你們這些還抱著希望的人，是不會懂的。沒有人會懂我的痛。所以，別費力了。讓我，用我唯一會的方法，安靜下來。",
      tip: {
        general:
          "它退到了最深的孤立裡——「沒有人會懂」。它深信自己的痛苦是獨一無二、無法被外人理解的。跟它爭辯「我懂」或「會好的」沒用，因為它試過一切、都失敗了。承認它說的：它的確試過上百次、的確一直沒人懂。然後，用你的「在場」本身，緩慢地鬆動這份孤立。",
        clinical:
          "自殺部分深信自己的痛苦獨一無二且無法被外人理解（「沒有人會懂我的痛」），並籠罩在鋪天蓋地的無望感中。介入不應爭辯或急於認知重構，而應以沉穩、謙遜、情感共振的臨在，長期陪伴。真正有效的，是打從心底的尊重、好奇與同理——一位能看透絕望、卻不被絕望淹沒的治療師，就是最好的解毒劑（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "你試過上百次，都失敗了，所以你才這麼篤定沒有用。我沒有要否認你經歷過的。我也不會假裝完全懂。我只是——想留在這裡，陪你一起，在這份沒有人懂的地方待一下。",
          strategy: "affirm-accept",
          nextNode: "r4_hint",
          effectiveness: 3,
        },
        {
          text: "你說「沒有人會懂」——這份「沒有人懂」的感覺，是從什麼時候開始的？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "我懂你的痛苦，相信我，真的會好起來的。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r4_reveal: {
      id: "r4_reveal",
      speaker: "archetype",
      text: "（停頓很久，聲音裡有了一絲東西，像是太久沒被這樣說話而生的遲疑）……你不拆我這扇門？……從來沒有人這樣說過。他們只會搶走它、藏起來、把我當敵人。可是你……你願意看看有沒有別的？……我不知道別的門長什麼樣子。但，如果你願意陪我找……我也許可以，試著看一眼。只一眼。",
      tip: {
        general:
          "這是關鍵的轉化點——它願意「看一眼」別的可能。它沒被要求放棄那扇門，只是有人願意陪它找別的。此刻不要急著塞解決方案，而是穩住這份剛萌芽的信任。下一步，可以溫和帶入：系統裡還有別的部分，也正擔心著它；而活下去，是所有其他可能的前提。",
        clinical:
          "當自殺部分感受到真正被聽見，它緊抓的掌控欲會鬆動。此時可溫和帶入新的覺察：邀請內在其他部分參與（「是否有其他部分正擔心這個部分？是否有任何部分持不同看法？」），並提出關鍵問題——「如果你能學會帶著較少的痛苦生活，你會選擇活下去嗎？」臨床上極少聽到「不」這個答案（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "我願意陪你找。而且我想告訴你一件事：你身體裡還有別的夥伴，有些一直在擔心你。如果你願意——我問你一個問題：如果能帶著比較少的痛苦活下去，你會選擇，活下去嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你說從來沒人願意陪你找——如果今天我們只做一件事，就是讓你不用一個人，你覺得呢？",
          strategy: "neutral-response",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "太好了，你終於願意活下來了，那我們趕快來計畫未來吧。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_hint: {
      id: "r4_hint",
      speaker: "archetype",
      text: "……陪我，在這份沒有人懂的地方，待一下。……（沉默）……好奇怪。你留下來了。你沒有跑掉，也沒有急著把我拉出去。我以為……一旦你看见我，你也會像別人一樣，嚇得逃開，或是只會叫我別這樣。但你，就只是，在這裡。我好久，沒有這種感覺了。",
      choices: [
        {
          text: "我會一直在這裡。你不用今晚就相信什麼，也不用馬上做任何決定。我問你一個問題就好：如果能帶著比較少的痛苦活下去，你會選擇，活下去嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你說「好久沒有這種感覺」——被一個人穩穩地陪著，而不是被催促？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "那就答應我，以後不要再走那扇門了好嗎？",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_struggle: {
      id: "r4_struggle",
      speaker: "archetype",
      text: "（被封閉、被催促，退得更遠）你看，你又來了。叫我「好好談」「別封閉」「別放棄」。你跟其他人沒兩樣，只想把我從我那扇門拉開，卻不真的走進來。那我告訴你——你愈拉，我愈要回去。那裡至少安靜，至少不會有人一直叫我相信我信不起來的東西。",
      tip: {
        general:
          "它被要求「不要封閉」「答應不走那扇門」，反而更緊縮——因為它覺得你只想把它拉開，而不是真的走進來。它早就預期這種被「管理」的感覺。停止拉扯，承認它說的：那扇門對它的確是唯一的安靜。然後，用你的「在場」，慢慢走進去陪它，而不是把它拖出來。",
        clinical:
          "介入應避免承諾式的要求（如「答應我不要」）與拯救者框架——這會重新活化個案的混亂型依附系統，並強化其「被管理、被剝奪自主」的感受。應將治療師定位為對等的合作關係，把選擇權交還：告訴它「只要你允許，我都在這裡，你不需要獨自承受，而且還有其他選擇」（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "你說得對，我一直想把你拉開，卻沒有真的走進來陪你。那扇門對你的確是唯一的安靜——我不會搶走它。我只問：能不能讓我，進去你那裡，坐一下？",
          strategy: "affirm-accept",
          nextNode: "r5_cautious",
          effectiveness: 3,
        },
        {
          text: "你說「你愈拉我愈要回去」——所以被硬拉開，反而讓你更孤立？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "我不是要拉開你，我是要救你啊，你難道看不出來嗎？",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r5_negotiate: {
      id: "r5_negotiate",
      speaker: "archetype",
      text: "（很長的沉默，然後，聲音裡有了一絲很小、很小的東西——像是太久沒用的希望生鏽的聲音）……帶著比較少的痛苦活下去。……我想……我想我會說，願意。我沒看過那種活法長什麼樣，但……如果真的有可能，不那麼痛地活著……那我，不想死。我只是，太想讓痛停下來。這句話，我從來沒說出口過。",
      tip: {
        general:
          "它說出了最重要的一句話：「我不是想死，我只是太想讓痛停下來。」這是整個對話的轉折點。它沒有被要求放棄那扇門，而是第一次相信「也許有比較不痛的活法」。穩住這份剛萌芽的可能——接下來，是把這份意願，變成一個不會抹除它聲音的安全計畫。",
        clinical:
          "「如果你能學會帶著較少的痛苦生活，你會選擇活下去嗎？」——臨床上極少聽到「不」這個答案。即使個案此時還看不到可能性，這個問題也已埋下希望的種子。下一步是與整個內在系統共同擬定一份安全計畫：既能保障人身安全，又不會強行壓抑或抹除這個部分的聲音（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "「我不是想死，我只是太想讓痛停下來」——這句話，我會記一輩子。我們一起做一件事：擬一個安全計畫，讓你被聽見、也讓你安全。它不會抹掉你的聲音，只會讓痛多一點出口。",
          strategy: "affirm-accept",
          nextNode: "end_transformed",
          effectiveness: 3,
        },
        {
          text: "我們今天不急。先把這份「也許有可能」放在這裡。下次，我們一起看看，那些讓痛變小一點的方法。",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "太好了！那從今天起你一定要答應我，再也不走那扇門了。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_cautious: {
      id: "r5_cautious",
      speaker: "archetype",
      text: "……你進來了。坐在我旁邊。沒有拉我出去，也沒有搶走我的門。……好奇怪，當有人真的願意坐在這裡，那扇門，好像就沒有那麼、那麼非走不可了。我還是很累，我還是看不見別的路。但至少，這一次，我不是一個人坐在這裡。光是這樣，就……好像哪裡不一樣了。",
      choices: [
        {
          text: "「有人在，那扇門就沒那麼非走不可」——這就是今天最重要的事。我們今天只做這件事：讓你不用一個人。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "你說「這一次不是一個人」——以前，每次走到那扇門口，你都是一個人嗎？",
          strategy: "explore-curious",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "那以後就盡量不要一個人，多找人陪你就好了。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_resistant: {
      id: "r5_resistant",
      speaker: "archetype",
      text: "（仍是那種安靜的認命，但沒有把門關上）……今天我什麼都沒答應你。但我要說一件事：你跟其他不一樣。你沒有把我當成要被解決的問題，沒有用空洞的話壓我，也沒有搶走我的門。你只是……留下來了。我可能還是會想走那條路，但——這一次，我會記得，有人留下來過。這對我來說，已經是很多了。",
      tip: {
        general:
          "它今天什麼都沒答應——但這不是失敗。它記住了一件從沒經歷過的事：有人留下來，沒把它當問題、沒用空話壓它、沒搶走它的門。這份「被穩穩陪著」的經驗本身，就是最有效的介入。改變不會在一天發生，但它已經不再是孤零零一個人面對那扇門了。",
        clinical:
          "這些部分的轉變，不是因為被要求或勸導，而是因為這一次，終於有人選擇留下來陪它們。它們的現身不代表治療失敗，而是某些更深層的核心正準備被聽見。當治療師能以安穩的陪伴（而非恐慌）回應，內在系統就會接收到一個新事實：即使在最黑暗的時刻，依然有人願意守候在身旁（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "「這一次，有人留下來過」——這就夠了。我們不急。你什麼時候想再談，我都在。",
          strategy: "affirm-accept",
          nextNode: "end_resistant",
          effectiveness: 3,
        },
        {
          text: "你說以前沒有人留下來——那些離開的人，是什麼樣的人？",
          strategy: "explore-curious",
          nextNode: "end_resistant",
          effectiveness: 2,
        },
        {
          text: "但你下次不能再想那條路了，好嗎？",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    r6_transition: {
      id: "r6_transition",
      speaker: "archetype",
      text: "（聲音仍是淡的，但那種「已經和解」的冷，散了一些）……我還是會擔心，下一次痛來的時候，我會忘記今天。我還是看不見太多別的門。但我承認——今天有人沒有跑掉。那扇門，今天，我沒有走。不是因為你禁止我，是因為……這一次，有人陪我，看見了我。下一次，我會試著，先回來這裡。",
      tip: {
        general:
          "它給了一個真誠而重要的承諾：不是「再也不想」，而是「下一次先回來這裡」。這就是真實的進展樣貌——那條路不會瞬間消失，但當痛再次來襲，它多了一個去處：回到一個被看見、被陪著的地方。這份「先回來這裡」，就是你今天種下的、最重要的種子。",
        clinical:
          "諮商的任務，是向這些部分指明：其實還有其他的出口。它們一直緊握著鑰匙，試圖打開所知那扇唯一深鎖的解脫之門。改變的關鍵，是有個人願意一次、一次、又一次地留在同一個空間裡陪著它們——不是因為被要求，而是因為這一次，終於有人選擇留下來（《Child Parts and Survival Logic in Clinical Practice》，第19章）。",
      },
      choices: [
        {
          text: "「下一次先回來這裡」——這就夠了。這扇門，永遠為你開著。我們今天，就到這裡。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "我們回顧一下：今天什麼讓你覺得，被看見、而不是被解決？",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "希望你下次別再想那條路了。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    end_transformed: {
      id: "end_transformed",
      speaker: "archetype",
      text: "（聲音還是淡的，但那種要與一切和解的冷，退了）……安全計畫，我們寫下來了。它沒有抹掉我，它只是讓痛多了一個出口。……我還是看不見太多別的門。但我願意，先待在這裡，陪你看看。「我不是想死，我只是太想讓痛停下來」——這句話，我終於說出口了。原來，被一個人好好聽見，那扇門，就沒有那麼非走不可了。",
      end: {
        summary:
          "你用「同在」取代了急著修復——沒有勸說、沒有空洞保證、沒有認知重構、沒有搶走它那扇門。你承接了它的精疲力竭，讓它第一次說出：「我不是想死，我只是太想讓痛停下來。」當它感覺被真正聽見，緊抓的掌控欲鬆動了，於是你們擬了一份不會抹除它聲音的安全計畫。那扇門還在，但它已不再是唯一的選擇。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "在日後的練習中，記住四件事：一、最有效的立場是「同在」——平靜、情感共振、不強迫，不要急著修復、說服或給保證；二、先承接精疲力竭（「你真的累壞了，獨自扛了好久」），用定錨語句（「你不用現在就相信不同的事」）；三、問關鍵問題（「如果能帶較少的痛苦活下去，你會選擇活嗎」），並帶入「還有其他部分也在擔心你」；四、共同擬一份不抹除它聲音的安全計畫。請務必記得：這是練習工具，真實危機請立即尋求專業與 1925／1995。",
        score: 3,
      },
    },

    end_partial: {
      id: "end_partial",
      speaker: "archetype",
      text: "（帶著疲憊，但那種與一切和解的冷，鬆了一些）……今天我沒有走那扇門。不是因為我想通了，是因為……這一次，有人留下來，陪我坐在這裡。我還是很累，還是看不見太多別的路。但我帶走了一個新的東西：也許，下次痛再來的時候，我可以先回來這裡，而不是直接走向那扇門。這對我來說，已經是很多了。",
      end: {
        summary:
          "你今天沒有「解決」它，但你做了一件更珍貴的事——你留下了。沒有把它當問題、沒有用空話壓它、沒有搶走它的門。它記住了「被一個人穩穩陪著」的感覺，並給出了一個真實的承諾：下次痛來時，先回來這裡。改變不會一天發生，但它已不再是一個人面對那扇門。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "下次它再現身時，先做三件事：一、用「同在」取代勸說——承接那份累，而不是急著給希望；二、不搶走它的門，只問能不能進去陪它坐一下；三、在信任萌芽時，溫和帶入「還有其他出口」「有別的部分也擔心你」。記得：它的現身不是治療失敗，而是更深的核心正準備被聽見。真實危機請務必啟動專業資源。",
        score: 2,
      },
    },

    end_resistant: {
      id: "end_resistant",
      speaker: "archetype",
      text: "（仍是安靜的認命，但門沒有關上）……今天我什麼都沒答應你。但你做了一件從來沒有人做過的事——你留下來了。沒有把我當問題，沒有用空話壓我，也沒有搶走我的門。我可能還是會想走那條路。但這一次，我會記得：有人，留下來過。這份記憶，會在我下次走向那扇門之前，讓我，停一下。也許，那就是，另一扇門的開始。",
      end: {
        summary:
          "今天它什麼都沒答應——但這不是失敗。它經歷了一件從未有過的事：有人留下來，沒有把它當成要被解決的問題。它可能還是會想那條路，但它帶走了一個新的東西——「有人留下來過」的記憶。這份記憶，會在它下次走向那扇門之前，讓它停一下。而那個停頓，也許就是另一扇門的開始。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "請務必記得：這是一個練習工具，不是治療或危機處置的替代品。如果你或身邊的人出現自殺念頭或自傷行為，請立即尋求專業協助——1925 安心專線、1995 生命線、1980 張老師，緊急狀況請撥 110。在練習中遇到這個部分時，請永遠把「同在」放在「解決」之前：它要的不是被勸住，而是被一個人穩穩地、不帶恐懼地，陪著。",
        score: 1,
      },
    },
  },
};
