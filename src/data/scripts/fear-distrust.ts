import type { ArchetypeScript } from "@/lib/types";

export const fearDistrustScript: ArchetypeScript = {
  archetypeId: "fear-distrust",
  openingNarration:
    "你感覺到空氣裡有什麼。不是聲音，不是影子，而是一種幾乎無法辨識的……存在感。像是一個把自己縮到最小的孩子，躲在房間最深的角落裡，屏住呼吸，祈禱不被任何人發現。每次你試著靠近，那個存在就往更深處退去。它不是在對抗你——它是在躲。躲得那麼徹底，彷彿「被看見」本身就是最大的危險。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你感覺到空氣裡有什麼。不是聲音，不是影子，而是一種幾乎無法辨識的……存在感。像是一個把自己縮到最小的孩子，躲在房間最深的角落裡，屏住呼吸，祈禱不被任何人發現。",
      next: "voice-silence-1",
    },

    "voice-silence-1": {
      id: "voice-silence-1",
      speaker: "archetype",
      text: "……",
      tip: {
        general:
          "這個聲音幾乎無法聽見。它不是沉默，而是一種極度的壓抑——把自己藏起來，是它唯一的生存方式。耐心是最重要的回應。",
        clinical:
          "恐懼與不信任的部分通常源於生命早期（零至二歲）基本信任未能建立。這類聲音的溝通模式是「不可見性」——透過讓自己消失來避免危險。介入時應避免任何形式的壓迫，包括過多的言語。Mosquera（2012）指出，此類部分需要的是「被允許不存在」的空間。",
      },
      choices: [
        {
          text: "不信任是很正常的，你以前經歷過很多危險。現在是安全的嗎？",
          strategy: "affirm-accept",
          nextNode: "r2-normalize",
          effectiveness: 3,
        },
        {
          text: "沒關係，我可以等你",
          strategy: "neutral-response",
          nextNode: "r2-patient",
          effectiveness: 2,
        },
        {
          text: "你一定要說話才行",
          strategy: "confront-suppress",
          nextNode: "r2-forced",
          effectiveness: 1,
        },
      ],
    },

    "r2-normalize": {
      id: "r2-normalize",
      speaker: "archetype",
      text: "……你……說安全……？……他們……也說過……",
      tip: {
        general:
          "它聽到了「安全」這個詞，但立刻聯想到過去被打破的承諾。這是信任創傷的核心——每一次保證，都伴隨一次失望。",
        clinical:
          "此時聲音正在測試你的可信度。有效的策略是承認過去的失信經驗，同時不急於用言語保證自己的不同。行動的一致性比言語保證更具說服力。",
      },
      choices: [
        {
          text: "你說得對，他們說過卻沒做到。但我想請你觀察——到目前為止，我有傷害你嗎？",
          strategy: "explore-curious",
          nextNode: "r3-emerge",
          effectiveness: 3,
        },
        {
          text: "我不會勉強你相信，我只是想在這裡",
          strategy: "neutral-response",
          nextNode: "r3-slowly",
          effectiveness: 2,
        },
        {
          text: "你不能一輩子不相信人吧",
          strategy: "confront-suppress",
          nextNode: "r3-back",
          effectiveness: 1,
        },
      ],
    },

    "r2-patient": {
      id: "r2-patient",
      speaker: "archetype",
      text: "……等……我？……沒有人……願意等……",
      tip: {
        general:
          "「等待」對這個聲音來說是陌生的經驗。它習慣的是被催促、被要求，或者更常見的——被丟棄。",
        clinical:
          "展現耐心是建立初步接觸的關鍵。恐懼型依附的個體對「持久性」特別敏感——他們需要反覆驗證對方不會離開，才能開始考慮打開自己。",
      },
      choices: [
        {
          text: "你習慣了被丟下，對嗎？那是因為你遇到的人沒有好好對你。但我不是他們",
          strategy: "affirm-accept",
          nextNode: "r3-emerge",
          effectiveness: 3,
        },
        {
          text: "我會一直在這裡，你準備好了再說",
          strategy: "neutral-response",
          nextNode: "r3-slowly",
          effectiveness: 2,
        },
        {
          text: "你到底在怕什麼？",
          strategy: "confront-suppress",
          nextNode: "r3-back",
          effectiveness: 1,
        },
      ],
    },

    "r2-forced": {
      id: "r2-forced",
      speaker: "archetype",
      text: "……（退得更遠了）",
      tip: {
        general:
          "強迫只會讓它躲得更深。這個聲音存在的理由就是「被看見等於被傷害」，你的催促正好驗證了它的恐懼。",
        clinical:
          "當聲音退縮時，治療師需要立即調節自己的焦慮。承認自己的急躁並道歉，是修復接觸的有效方式。此時不應追逐，而是原地等待。",
      },
      choices: [
        {
          text: "對不起……我太急了。你在那裡就好，不用做任何事",
          strategy: "affirm-accept",
          nextNode: "r3-slowly",
          effectiveness: 2,
        },
        {
          text: "算了，不想說就算了",
          strategy: "ignore-escape",
          nextNode: "ending-early",
          effectiveness: 1,
        },
      ],
    },

    "r3-emerge": {
      id: "r3-emerge",
      speaker: "archetype",
      text: "……你……還沒有……傷害我……但是……我好害怕……一直都很害怕……如果被看見……就會被傷害……",
      tip: {
        general:
          "它開始承認自己的恐懼了。這是一個重要的時刻——它選擇向你透露自己的脆弱，而非繼續隱藏。",
        clinical:
          "聲音從沉默過渡到表達恐懼，顯示初步的安全感正在形成。此時最有效的介入是正常化其恐懼反應，並協助區辨過去與現在的差異（Mosquera, 2012, ch.10）。避免急於消除恐懼，而是承認恐懼的合理性。",
      },
      choices: [
        {
          text: "害怕是被允許的。你經歷過那些危險，所以你學會了害怕——那是你保護自己的方式。但現在，我們可以一起看看，這裡是不是真的不一樣",
          strategy: "affirm-accept",
          nextNode: "r4-open",
          effectiveness: 3,
        },
        {
          text: "被看見的感覺很可怕，我理解",
          strategy: "neutral-response",
          nextNode: "r4-share",
          effectiveness: 2,
        },
        {
          text: "你不應該一直活在恐懼裡",
          strategy: "confront-suppress",
          nextNode: "r3-back",
          effectiveness: 1,
        },
      ],
    },

    "r3-slowly": {
      id: "r3-slowly",
      speaker: "archetype",
      text: "……你還在……？……大部分的人……早就走了……",
      tip: {
        general:
          "它注意到你沒有離開，但還不敢確定這代表什麼。對它來說，「沒有離開」本身就已經是一種善意。",
        clinical:
          "持續存在（consistent presence）是修復信任創傷的核心要素。每一次你留下，都在改寫它對關係的預期。不需要多說什麼，留下本身就是治療。",
      },
      choices: [
        {
          text: "你經歷過很多承諾被打破的經驗吧？所以不信任是合理的。我只想讓你知道——你可以慢慢觀察我",
          strategy: "explore-curious",
          nextNode: "r4-open",
          effectiveness: 3,
        },
        {
          text: "我會繼續在這裡",
          strategy: "neutral-response",
          nextNode: "r4-share",
          effectiveness: 2,
        },
        {
          text: "你不能一直這樣躲著",
          strategy: "confront-suppress",
          nextNode: "r3-back",
          effectiveness: 1,
        },
      ],
    },

    "r3-back": {
      id: "r3-back",
      speaker: "archetype",
      text: "……我不應該……被看見的……對不起……",
      tip: {
        general:
          "它在道歉——因為「被看見」讓它感到羞恥和恐懼。它不是在拒絕你，而是在保護自己。",
        clinical:
          "羞恥感是恐懼型依附的核心情緒之一。聲音的道歉反映了深層信念「我的存在是個麻煩」。此時需要傳達「你的存在是被允許的」而非「你不需要道歉」——後者可能在無意中否定了它的感受。",
      },
      choices: [
        {
          text: "躲起來也沒關係。我會在這裡，等你準備好",
          strategy: "affirm-accept",
          nextNode: "r4-share",
          effectiveness: 2,
        },
        {
          text: "你這樣下去不行",
          strategy: "confront-suppress",
          nextNode: "ending-early",
          effectiveness: 1,
        },
      ],
    },

    "r4-open": {
      id: "r4-open",
      speaker: "archetype",
      text: "……小時候……我學會了……不要相信任何人……因為……每一個我信的人……都讓我受傷……所以……我把自己藏起來……看不見我……就傷不了我……",
      tip: {
        general:
          "它開始訴說自己的故事了。這些話可能很輕、很斷續，但每一個字都是從極深的隱蔽處傳出來的。",
        clinical:
          "此時聲音正在進行創傷敘事。關鍵介入點在於協助區辨「過去的危險」與「現在的安全」，同時肯定其防禦策略的適應性。Mosquera（2012）強調，不要急著「修正」這個部分的世界觀，而是先讓它感覺被理解。",
      },
      choices: [
        {
          text: "你那麼小就學會了這件事……那個小小的你，一定很害怕、很孤單。但現在的你已經長大了，我們可以一起分辨——誰是安全的，誰不是",
          strategy: "affirm-accept",
          nextNode: "r5-trust",
          effectiveness: 3,
        },
        {
          text: "那些經驗一定很痛",
          strategy: "neutral-response",
          nextNode: "r5-warming",
          effectiveness: 2,
        },
        {
          text: "但現在環境已經不同了啊",
          strategy: "confront-suppress",
          nextNode: "r5-retreat",
          effectiveness: 1,
        },
      ],
    },

    "r4-share": {
      id: "r4-share",
      speaker: "archetype",
      text: "……我躲在這裡……很久了……我以為……只要不被看見……就不會再痛了……可是……躲著……也好孤單……",
      tip: {
        general:
          "它第一次承認了「孤單」。躲起來雖然安全，但也讓它與世界完全隔絕。這是矛盾的核心——安全與連結無法兼得。",
        clinical:
          "這是治療的轉折點之一。聲音開始覺察到防禦策略的代價。介入應聚焦在「承認兩難」而非「選擇其中一方」。幫助它理解：安全感與連結感不是對立的，而是可以同時存在的。",
      },
      choices: [
        {
          text: "不被看見就安全了……這是你找到的保護方式。你很聰明。但躲起來也讓你很孤單，對嗎？也許……有一種方式可以又安全、又不用那麼孤單",
          strategy: "explore-curious",
          nextNode: "r5-trust",
          effectiveness: 3,
        },
        {
          text: "你在這裡躲了很長很長的時間",
          strategy: "neutral-response",
          nextNode: "r5-warming",
          effectiveness: 2,
        },
        {
          text: "躲著解決不了問題",
          strategy: "confront-suppress",
          nextNode: "r5-retreat",
          effectiveness: 1,
        },
      ],
    },

    "r5-trust": {
      id: "r5-trust",
      speaker: "archetype",
      text: "……你真的……沒有要傷害我……？……我……不確定……可是你……一直都沒有離開……也沒有……生氣……我……好像……有一點點……相信了……可是又好怕……",
      tip: {
        general:
          "它在信任的邊緣徘徊。「相信」對它來說是世界上最危險的事——因為每一次相信之後，都是更深的受傷。",
        clinical:
          "此時聲音正在經歷「信任衝突」（trust conflict）。一方面有新的正面經驗，另一方面舊有的警戒系統仍在運作。有效的介入是肯定其觀察能力，並保留其「隨時可以退回」的權利——這反而能增加它前進的意願。",
      },
      choices: [
        {
          text: "你不需要立刻相信。你可以慢慢觀察我、慢慢感受。如果你發現我不安全，你隨時可以退回去——你的保護能力一直都在",
          strategy: "affirm-accept",
          nextNode: "r6-visible",
          effectiveness: 3,
        },
        {
          text: "你的直覺在告訴你一些事情，慢慢聽",
          strategy: "neutral-response",
          nextNode: "r6-hesitant",
          effectiveness: 2,
        },
        {
          text: "你就試著相信一次嘛",
          strategy: "confront-suppress",
          nextNode: "r6-close",
          effectiveness: 1,
        },
      ],
    },

    "r5-warming": {
      id: "r5-warming",
      speaker: "archetype",
      text: "……也許……你是不同的……我不確定……但……你一直在這裡……這是……真的嗎……？有人真的……願意留下來嗎……",
      tip: {
        general:
          "它在小心翼翼地測試一個可能性——也許，這一次不一樣。但「不一樣」這個想法本身，就讓它害怕。",
        clinical:
          "聲音正在進行「現實檢驗」（reality testing）。它開始將你的實際行為與過去的負面預期進行比較。此時提供具體的觀察線索比情感保證更有效——讓它自己「看見」你與過去的人不同。",
      },
      choices: [
        {
          text: "你觀察到我一直都在——這本身就是一種真實的經驗。過去的經驗告訴你不能信任，但新的經驗正在發生，你可以親自感受它",
          strategy: "explore-curious",
          nextNode: "r6-visible",
          effectiveness: 3,
        },
        {
          text: "沒關係，慢慢來就好",
          strategy: "neutral-response",
          nextNode: "r6-hesitant",
          effectiveness: 2,
        },
        {
          text: "你要學著相信",
          strategy: "confront-suppress",
          nextNode: "r6-close",
          effectiveness: 1,
        },
      ],
    },

    "r5-retreat": {
      id: "r5-retreat",
      speaker: "archetype",
      text: "……不……我不能再冒險了……每一次相信……都是一次新的傷口……我……還是躲著好了……",
      tip: {
        general:
          "它退回了。理性上的「環境不同」不足以改變它——它需要的是被允許慢慢體驗，而非被告知。",
        clinical:
          "當聲音退縮時，最重要的是不要追逐或說服。承認它的恐懼，同時表達你會持續存在。修復信任不是線性的過程——進進退退是正常的，甚至是必要的。",
      },
      choices: [
        {
          text: "我理解。你不需要冒任何險。但我想讓你知道——我會一直在這裡",
          strategy: "affirm-accept",
          nextNode: "r6-hesitant",
          effectiveness: 2,
        },
        {
          text: "隨便你吧",
          strategy: "ignore-escape",
          nextNode: "ending-hiding",
          effectiveness: 1,
        },
      ],
    },

    "r6-visible": {
      id: "r6-visible",
      speaker: "archetype",
      text: "……如果……我不再躲了……會怎樣……？你真的會……看見我嗎……？不是為了……傷害我……而是……只是……看見我……？從來沒有人……只是想看見我……",
      tip: {
        general:
          "這是它第一次認真考慮「被看見」的可能性。它不敢相信有人只是想看見它，而不帶任何傷害的意圖。",
        clinical:
          "此時聲音正在經歷「可見性悖論」（visibility paradox）——最渴望的同時也是最恐懼的。回應時應肯定其存在本身的價值，而非其功能或表現。Mosquera（2012）指出，讓這個部分感受到「被看見是安全的」是治療的里程碑。",
      },
      choices: [
        {
          text: "是的，我看見你了。不是為了傷害你，是為了認識你。你一直一個人保護著自己，辛苦了",
          strategy: "affirm-accept",
          nextNode: "ending-bloom",
          effectiveness: 3,
        },
        {
          text: "我想看見你。如果你願意的話，可以慢慢來",
          strategy: "neutral-response",
          nextNode: "ending-emerging",
          effectiveness: 2,
        },
        {
          text: "你終於願意出來了",
          strategy: "confront-suppress",
          nextNode: "r6-hesitant",
          effectiveness: 1,
        },
      ],
    },

    "r6-hesitant": {
      id: "r6-hesitant",
      speaker: "archetype",
      text: "……我不知道……能不能相信……但是……你讓我覺得……也許……可以試試看……？只是……一點點……",
      tip: {
        general:
          "「一點點」是它能給出的最大勇氣了。對它來說，即使只是考慮信任，都已經跨過了一座巨大的山。",
        clinical:
          "聲音正在進行「微量信任實驗」（micro-trust experiment）。此時應肯定其勇氣，並讓它知道即使實驗失敗也沒有關係。這種無條件的接納是修復信任創傷的最後一哩路。",
      },
      choices: [
        {
          text: "你願意試試看就已經很勇敢了。我們不需要快，只需要慢慢往前走一小步就夠了",
          strategy: "affirm-accept",
          nextNode: "ending-emerging",
          effectiveness: 3,
        },
        {
          text: "我在這裡陪你，不管多慢",
          strategy: "neutral-response",
          nextNode: "ending-emerging",
          effectiveness: 2,
        },
        {
          text: "你到底要不要出來",
          strategy: "confront-suppress",
          nextNode: "ending-hiding",
          effectiveness: 1,
        },
      ],
    },

    "r6-close": {
      id: "r6-close",
      speaker: "archetype",
      text: "……我想要躲回去……可是……好像……又有一點點……不想躲了……我一直躲……好累……",
      tip: {
        general:
          "它在兩種衝動之間搖擺——一個是習慣性的躲避，另一個是長久以來的疲憊。信任太可怕，但一直躲也很累。",
        clinical:
          "這是防禦系統疲勞（defensive exhaustion）的表現。聲音已經維持高度警覺太久了，開始出現「想要放下但又不敢」的矛盾。此時的介入應聚焦在「安全的疲憊」——讓它知道可以在安全的狀態下休息。",
      },
      choices: [
        {
          text: "一直躲著一定很累。在這裡，你可以休息。不需要時刻保持警覺",
          strategy: "affirm-accept",
          nextNode: "ending-emerging",
          effectiveness: 2,
        },
        {
          text: "那就繼續躲吧",
          strategy: "ignore-escape",
          nextNode: "ending-hiding",
          effectiveness: 1,
        },
      ],
    },

    "ending-bloom": {
      id: "ending-bloom",
      speaker: "archetype",
      text: "……你看見我了……？……你真的……看見我了……（聲音不再顫抖了）……原來……被看見……也可以是……安全的……謝謝你……等我這麼久……",
      end: {
        summary:
          "隱形的守候者終於從陰影中走出來了。它花了很久很久，才確定被看見不會帶來傷害。你的耐心、接納與持續的存在，讓它理解了一件事：信任不是一次性的跳躍，而是一段被允許慢慢走的旅程。",
        strategiesUsed: [
          "肯定與接納",
          "探索與好奇",
          "正常化恐懼反應",
          "區辨過去與現在",
          "尊重步調與界線",
        ],
        suggestion:
          "恐懼與不信任的部分需要持續的、可預測的安全體驗。在未來的互動中，繼續保持一致的態度，讓它累積更多「被看見是安全的」經驗。每一次的穩定回應，都在幫助它重建對關係的信任。",
        score: 21,
      },
    },

    "ending-emerging": {
      id: "ending-emerging",
      speaker: "archetype",
      text: "……我還不是……完全確定……但……我想……我可以試著……不再躲那麼深了……也許……下次……你可以再來嗎……？",
      end: {
        summary:
          "守候者還沒有完全走出陰影，但它已經願意讓你看見一點點輪廓了。它開始理解，也許不是所有人都會帶來傷害——但這個理解需要更多的時間與經驗來鞏固。",
        strategiesUsed: [
          "中性回應",
          "肯定與接納",
          "持續存在",
        ],
        suggestion:
          "這個部分正在緩慢地建立信任基礎。持續提供穩定、可預測的互動經驗，避免催促它加快步調。每一次的接觸，即使只是短暫的，都是信任的累積。",
        score: 14,
      },
    },

    "ending-hiding": {
      id: "ending-hiding",
      speaker: "archetype",
      text: "……（聲音慢慢變小，退回了更深的地方）……也許……下次吧……如果你還在的話……",
      end: {
        summary:
          "守候者選擇繼續隱藏。它在最後一刻沒有完全消失，而是留下了一個小小的可能性——「如果你還在的話」。這代表它還沒有完全放棄被理解的可能。",
        strategiesUsed: [
          "持續存在",
          "耐心等待",
        ],
        suggestion:
          "與恐懼型部分的對話可能需要多次嘗試。重點不是一次就讓它走出來，而是讓它反覆體驗「你不會因為它躲起來就離開」。耐心是通往這個部分的唯一路徑。",
        score: 7,
      },
    },

    "ending-early": {
      id: "ending-early",
      speaker: "archetype",
      text: "……（那個微弱的存在感，完全消失了。空氣恢復了原本的安靜。）",
      end: {
        summary:
          "守候者在感受到壓力後完全退回了黑暗之中。它選擇了最熟悉的保護方式——徹底消失。這不代表它不需要被理解，而是它還沒有找到足夠的理由相信，被看見可以是安全的。",
        strategiesUsed: [
          "耐心等待",
        ],
        suggestion:
          "恐懼與不信任的部分對壓迫極度敏感。未來的接觸需要從更小的步伐開始——甚至可以先從「只是待在同一個空間裡」開始，不要求任何回應。讓它慢慢習慣你的存在，再逐步展開對話。",
        score: 3,
      },
    },
  },
};
