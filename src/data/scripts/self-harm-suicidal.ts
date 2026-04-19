import type { ArchetypeScript } from "@/lib/types";

export const selfHarmSuicidalScript: ArchetypeScript = {
  archetypeId: "self-harm-suicidal",
  openingNarration:
    "房間裡安靜得像被棉花塞滿了。窗外的光線灰濛濛的，好像連太陽都不願意多看一眼。你感覺到內心深處有什麼東西蜷縮在角落，很輕、很暗，像是快要熄滅的燭火。那是一個背對著你坐在黑暗中的身影，肩膀微微顫抖。你知道它在那裡很久了——也許比你能記得的還要久。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你深吸一口氣，走向那個蜷縮的身影。空氣很沉，每一步都像踩在深雪裡。當你靠近時，你感覺到一股幾乎聽不見的聲音，像是風穿過裂縫——微弱，卻持續著。",
      next: "v1",
    },

    v1: {
      id: "v1",
      speaker: "archetype",
      text: "……你好。我是你裡面那個……一直想要消失的部分。",
      choices: [
        {
          text: "我感覺到你很疲憊。你已經撐了很久嗎？",
          strategy: "驗證感受＋探索痛苦源頭",
          nextNode: "v2_open",
          effectiveness: 3,
        },
        {
          text: "我聽見你了。你在這裡。",
          strategy: "溫和承認存在",
          nextNode: "v2_guarded",
          effectiveness: 2,
        },
        {
          text: "不要說這種話，你不應該有這種感覺。",
          strategy: "否定感受",
          nextNode: "v2_guarded",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "當一個人表達絕望時，最需要的是被聽見，而非被糾正。先承認對方的感受，比急著給建議更能建立連結。",
        clinical:
          "面對自傷或自殺相關的聲音時，治療師的第一步是穩定自身情緒，避免恐懼反應主導回應。以平靜、不帶評價的態度回應，能讓這個部分感到安全。切記：不要急著進行風險評估，先建立關係。",
      },
    },

    v2_open: {
      id: "v2_open",
      speaker: "archetype",
      text: "……撐了很久。久到我不記得是從什麼時候開始的。好像從有記憶以來，我就一直坐在這裡。每一種感覺都太重了……悲傷太重，恐懼太重，連呼吸都覺得累。我只是想要……安靜下來。",
      choices: [
        {
          text: "那些沉重的感覺是什麼？它們是從哪裡來的？",
          strategy: "探索痛苦根源",
          nextNode: "narrator_insight",
          effectiveness: 3,
        },
        {
          text: "我理解你想要安靜。",
          strategy: "承認需求",
          nextNode: "v3_surface",
          effectiveness: 2,
        },
        {
          text: "你只是需要轉移注意力。",
          strategy: "轉移迴避",
          nextNode: "v3_surface",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "當對方說「太累了」「想要安靜」時，這往往不是字面上的疲倦，而是情感上被壓垮的感覺。試著溫柔地探索這些感覺的源頭。",
      },
    },

    v2_guarded: {
      id: "v2_guarded",
      speaker: "archetype",
      text: "……你真的聽見了嗎？還是只是覺得你應該這樣說？很多人說他們在乎，但最後都只是叫我要「加油」、要「想開一點」。你不會懂的……這種累不是睡一覺就會好的。",
      choices: [
        {
          text: "你說得對，我可能無法完全體會。但我願意試著了解你的累。",
          strategy: "謙遜承認＋願意理解",
          nextNode: "v3_deep",
          effectiveness: 3,
        },
        {
          text: "我不是要叫你加油，我只是想陪著你。",
          strategy: "陪伴承諾",
          nextNode: "v3_surface",
          effectiveness: 2,
        },
        {
          text: "每個人都會累，你只是需要休息。",
          strategy: "輕描淡寫",
          nextNode: "v3_surface",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "被反覆敷衍過的人，對「我在乎」這類話語會特別防備。承認自己的有限，反而更能建立信任。",
        clinical:
          "絕望的部分經常測試治療師的真誠度。承認「我不完全理解但願意學習」比宣稱「我懂」更有效，因為它展現了真實與謙遜。",
      },
    },

    narrator_insight: {
      id: "narrator_insight",
      speaker: "narrator",
      text: "那個蜷縮的身影微微轉過頭來。你第一次隱約看見它的表情——不是憤怒，不是責備，而是一種深沉的、無聲的哀傷。像是一個從來沒有人問過它「你怎麼了」的孩子。它的眼睛裡積滿了長久以來無處安放的眼淚。",
      next: "v3_deep",
    },

    v3_deep: {
      id: "v3_deep",
      speaker: "archetype",
      text: "沒有人……這樣問過我。你真的想知道嗎？我背著這些東西背了好久好久……有時候是被丟下的感覺，有時候是覺得自己根本不應該存在。那些感覺像石頭一樣堆在一起，壓得我喘不過氣。我不知道還能怎麼讓它停下來……除了……除了讓一切都結束。",
      choices: [
        {
          text: "你背負了好多。我想知道——你想結束的，是那個痛苦，還是你自己？",
          strategy: "區分痛苦與自我",
          nextNode: "v4_insight",
          effectiveness: 3,
        },
        {
          text: "謝謝你願意告訴我這些。",
          strategy: "感謝揭露",
          nextNode: "v4_struggle",
          effectiveness: 2,
        },
        {
          text: "不要說這種話，事情沒那麼嚴重。",
          strategy: "貶低痛苦",
          nextNode: "v4_struggle",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "「你想結束的是痛苦，還是你自己？」這個問題非常重要。它可以幫助對方區分「想要消失」和「想要結束痛苦」——這兩者本質上完全不同。",
        clinical:
          "這是聽覺幻覺治療中的關鍵轉折點：幫助當事人理解自傷衝動的對象是痛苦而非自我。這個區分為建立替代性應對策略開啟了可能性。Mosquera（第7章）強調，這個聲音的功能是「終止痛苦的最後手段」。",
      },
    },

    v3_surface: {
      id: "v3_surface",
      speaker: "archetype",
      text: "……我不知道從哪裡說起。就……活著本身就很累。每一天醒來都要假裝沒事，都要撐著。有時候我覺得，如果可以就這樣不要醒來……那應該很安靜吧。",
      choices: [
        {
          text: "每一天都在假裝……那你真正想停下來的是什麼？",
          strategy: "探索停止的本質",
          nextNode: "v4_insight",
          effectiveness: 3,
        },
        {
          text: "聽起來你真的很渴望安靜。",
          strategy: "反映需求",
          nextNode: "v4_struggle",
          effectiveness: 2,
        },
        {
          text: "不要想了，往前看就好。",
          strategy: "壓抑迴避",
          nextNode: "v4_struggle",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "「想要安靜」「不想醒來」背後是對喘息空間的渴望。比起表面的行為描述，更值得關注的是這份渴望本身。",
      },
    },

    v4_insight: {
      id: "v4_insight",
      speaker: "archetype",
      text: "……你說得對。我想要結束的……從來不是我自己。是那個痛。那個一直一直咬著我的痛。我不想消失，我只是……不想再痛了。我不知道還有什麼辦法可以不痛。",
      choices: [
        {
          text: "你一直在找讓痛苦停下來的方法。如果我們一起找，也許能找到別的出口？",
          strategy: "合作探索替代方案",
          nextNode: "narrator_hope",
          effectiveness: 3,
        },
        {
          text: "不痛就好。還有別的方式可以不痛嗎？",
          strategy: "引導替代思考",
          nextNode: "v5_confused",
          effectiveness: 2,
        },
        {
          text: "你應該去想一些開心的事。",
          strategy: "不當正向思考",
          nextNode: "v5_confused",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "當對方終於說出「我不想消失，我只是不想再痛了」，這是一個重要的突破。這意味著他們開始區分自我與痛苦，為尋找替代方案打開了門。",
        clinical:
          "此時治療師的回應至關重要。避免過快提出解決方案，而是以合作的姿態邀請對方一起探索。使用「我們」而非「你應該」，能降低對方的防禦。",
      },
    },

    v4_struggle: {
      id: "v4_struggle",
      speaker: "archetype",
      text: "……你說得好像很簡單。但對我來說，這是我唯一知道的方法。你不懂那種感覺——整個人像是被抽空了，什麼都感覺不到，只有痛是真實的。至少……讓自己痛的時候，我還能感覺到自己活著。",
      choices: [
        {
          text: "所以對你來說，那是一種確認自己還在的方式？",
          strategy: "理解保護功能",
          nextNode: "v5_aware",
          effectiveness: 3,
        },
        {
          text: "我可能不完全理解，但我願意試著學習。",
          strategy: "謙遜承認＋開放學習",
          nextNode: "v5_confused",
          effectiveness: 2,
        },
        {
          text: "你應該找別的方式讓自己感覺活著。",
          strategy: "未理解即指導",
          nextNode: "v5_confused",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "理解對方行為背後的功能（它為對方做了什麼），比急著改變行為更重要。當對方感覺被理解，才有可能考慮其他選項。",
        clinical:
          "Mosquera指出，自傷的部分具有「確認存在感」和「調節情緒」的保護功能。在提出替代方案之前，必須先充分理解並承認這個功能，否則對方會覺得你在剝奪它唯一的因應工具。",
      },
    },

    narrator_hope: {
      id: "narrator_hope",
      speaker: "narrator",
      text: "一絲非常微弱的暖意，像是有人用冰冷的手捧住了一小杯溫水。那個蜷縮的身影抬起頭，眼神裡有了不一樣的東西——不是希望，還談不上，但至少是一絲好奇。像是「也許真的有別的可能」的那種好奇。",
      next: "v5_aware",
    },

    v5_aware: {
      id: "v5_aware",
      speaker: "archetype",
      text: "……你說得對。我從來沒有學過……怎麼讓自己不痛。從來沒有人教過我。所以我自己想了一個辦法。那不是好辦法，我知道……但那是我僅有的。如果……如果有別的方法可以不痛……我願意試試看嗎？我不確定。但我可以聽聽看。",
      choices: [
        {
          text: "你已經邁出很大一步了。我們可以一起慢慢找。",
          strategy: "肯定進展＋合作承諾",
          nextNode: "v6_trust",
          effectiveness: 3,
        },
        {
          text: "慢慢來，不用急。",
          strategy: "耐心等待",
          nextNode: "v6_hesitate",
          effectiveness: 2,
        },
        {
          text: "那就快點開始找別的方法吧。",
          strategy: "催促解決",
          nextNode: "v6_hesitate",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "當對方說「我可以聽聽看」時，這已經是巨大的勇氣。肯定這一步，不要急著推進到解決方案。節奏由對方決定。",
        clinical:
          "這個階段需要特別注意節奏。過快提出替代策略可能讓對方感到被催促，而過慢則可能讓它覺得你不認真。關鍵是跟隨對方的步調，同時保持穩定的陪伴。",
      },
    },

    v5_confused: {
      id: "v5_confused",
      speaker: "archetype",
      text: "我不知道……你說的有道理，但我真的很害怕。這是我唯一知道的……如果連這個都放下了，我還能怎麼辦？那個痛會不會把我吞掉？",
      choices: [
        {
          text: "你害怕放下唯一的方法之後會更痛，這是很真實的擔心。你不是一個人面對。",
          strategy: "驗證恐懼＋承諾陪伴",
          nextNode: "v6_trust",
          effectiveness: 3,
        },
        {
          text: "不會的，我們會想辦法。",
          strategy: "口頭保證",
          nextNode: "v6_hesitate",
          effectiveness: 2,
        },
        {
          text: "你不要想那麼多。",
          strategy: "否定擔憂",
          nextNode: "v6_hesitate",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "恐懼是真實的。承認恐懼的存在，比否認它更能讓對方感到安全。「你不是一個人」這句話的力量，來自於它背後真誠的承諾。",
      },
    },

    v6_trust: {
      id: "v6_trust",
      speaker: "archetype",
      text: "……好吧。我不知道接下來會怎樣。但至少……你不是轉身就走的那種人。那我……願意再試一下。多走一步看看。",
      choices: [
        {
          text: "謝謝你信任我。你值得被溫柔地對待。",
          strategy: "感謝信任＋肯定價值",
          nextNode: "v7_connected",
          effectiveness: 3,
        },
        {
          text: "我們一步一步來。",
          strategy: "穩步前進",
          nextNode: "v7_open_door",
          effectiveness: 2,
        },
        {
          text: "走吧，不要再猶豫了。",
          strategy: "催促推進",
          nextNode: "v7_seed",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "信任是脆弱的東西，尤其在這個部分身上。每一次肯定它的價值，都在幫助它重新建立「我值得」的信念。",
      },
    },

    v6_hesitate: {
      id: "v6_hesitate",
      speaker: "archetype",
      text: "……我不想再被傷害了。我已經被傷害太多次了。每一次相信別人，最後都……但是你還在這裡。至少你還在。我不知道該怎麼辦，但……你好像跟別人不一樣。",
      choices: [
        {
          text: "我會一直在這裡。你不用一次相信全部，慢慢來。",
          strategy: "承諾陪伴＋漸進信任",
          nextNode: "v7_connected",
          effectiveness: 3,
        },
        {
          text: "我跟你在一起。",
          strategy: "簡短陪伴",
          nextNode: "v7_open_door",
          effectiveness: 2,
        },
        {
          text: "你要學會信任別人。",
          strategy: "要求信任",
          nextNode: "v7_seed",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "「慢慢來」這三個字對受傷的人來說非常有力。它代表尊重對方的節奏，也代表你不會離開。",
        clinical:
          "此時可適度引入安全感建立的工作。注意不要給出無法兌現的承諾，例如「一切都會好的」，而是以「我會在這裡陪你」這種可持續的承諾為基礎。",
      },
    },

    v7_connected: {
      id: "v7_connected",
      speaker: "archetype",
      text: "那個身影緩緩站了起來。它還是很瘦弱，肩膀還是有些駝，但眼睛裡有了一點點光。不是火光，更像是黎明前天空最暗的那個時刻裡，第一顆星星。「我從來不知道……有人會願意聽我說完。謝謝你沒有害怕。我知道我還有很長的路要走。但至少現在我知道了——痛不等於我。我值得去找到別的方式。」",
      end: {
        summary:
          "你成功地與這個絕望的部分建立了深刻的連結。通過傾聽、驗證和陪伴，你幫助它理解了自己想要結束的是痛苦而非自我，並開啟了尋找替代方式的可能性。",
        strategiesUsed: [
          "驗證感受",
          "區分痛苦與自我",
          "理解保護功能",
          "探索替代方案",
          "承諾陪伴",
        ],
        suggestion:
          "繼續保持與這個部分的溫柔對話。在安全的環境中，可以開始探索更多調節痛苦的健康方式，例如正念練習、身體覺察或尋求專業支持。記住，這個部分需要被持續地溫柔對待。",
        score: 5,
      },
      tip: {
        general:
          "這是最好的結果。你做到了最重要的事：讓一個絕望的部分感到被理解、被接住。這不代表結束，而是一個新的開始。",
        clinical:
          "即使建立了良好連結，後續仍需持續的安全評估與支持。建議與當事人共同制定安全計畫（safety plan），並建立可及的危機資源清單。每一次對話都在強化新的神經路徑。",
      },
    },

    v7_open_door: {
      id: "v7_open_door",
      speaker: "archetype",
      text: "那個身影沒有站起來，但它把身體轉過來了一點。你現在可以更清楚地看見它的臉——很蒼白，很疲倦，但嘴角好像有一點點弧度。「我不知道你會不會一直都在。但你今天在這裡。那就……先這樣吧。也許下次……還可以再聊聊。」",
      end: {
        summary:
          "你與這個絕望的部分開始了初步的對話。雖然它還沒有完全信任，但它願意再次開口，這本身就是一個重要的進展。門沒有關上。",
        strategiesUsed: ["溫和承認", "耐心陪伴", "不急於推進"],
        suggestion:
          "持續以穩定、不急迫的態度與這個部分保持連結。建立信任需要時間，每一次真誠的對話都在累積安全感。建議在專業人員的陪伴下持續探索。",
        score: 3,
      },
      tip: {
        general:
          "門開了一條縫，這已經很珍貴了。下一次，試著更深入地探索它的痛苦源頭，讓它感覺到你真的想了解它。",
        clinical:
          "處於此階段的個案需要穩定且可預測的治療關係。建議增加會談頻率，聚焦於安全感建立和基本情緒調節技巧的建立。可以開始引入辨識保護功能的對話。",
      },
    },

    v7_seed: {
      id: "v7_seed",
      speaker: "archetype",
      text: "那個身影又縮回去了，背對著你。但它的肩膀沒有之前那麼緊繃了。沉默了很久，它輕輕地說了一句：「至少你來過。」然後又安靜了。你感覺到，雖然這次沒有真正走近它，但有一顆小小的種子可能落在了那片黑暗的土壤裡。",
      end: {
        summary:
          "這次對話雖然沒有深入，但你踏出了第一步。這個絕望的部分仍然封閉著，但它沒有完全拒絕你的存在。改變需要時間和更多的練習。",
        strategiesUsed: ["嘗試對話"],
        suggestion:
          "回顧這次對話中可以改進的地方：試著更多地傾聽和驗證感受，減少催促和建議。這個部分需要被理解，而非被修正。下一次，試著放慢腳步，先讓它感覺被聽見。",
        score: 1,
      },
      tip: {
        general:
          "不要氣餒。每一次嘗試都有意義。這個部分需要反覆體驗「有人願意聽我說」的感覺，才會慢慢放下防備。",
        clinical:
          "此結果可能反映了治療關係尚未穩固，或治療師的回應方式需要調整。建議檢視是否出現了過度催促、輕描淡寫或不當正向思考的回應模式。在後續會談中，優先建立關係，推遲探索性介入。",
      },
    },
  },
};
