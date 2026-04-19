import type { ArchetypeScript } from "@/lib/types";

export const criticalScript: ArchetypeScript = {
  archetypeId: "critical",
  openingNarration:
    "你感覺到一雙無形的眼睛正緊盯著你。那目光像一把尺，量測著你的每一個動作、每一句話。無論你多麼努力，總有一個聲音在耳邊低語：「還不夠好。」一個嚴厲的身影從陰影中浮現，雙手交叉在胸前，嘴角帶著一絲不屑。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你感覺到一雙無形的眼睛正緊盯著你。那目光像一把尺，量測著你的每一個動作、每一句話。無論你多麼努力，總有一個聲音在耳邊低語：「還不夠好。」一個嚴厲的身影從陰影中浮現，雙手交叉在胸前，嘴角帶著一絲不屑。它盯著你看了好一會兒，然後開口了。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "archetype",
      text: "你又在假裝自己很努力了？看看你做的這些——漏洞百出。你以為沒有人注意到嗎？大家都看在眼裡，只是不說而已。你永遠達不到標準的，何必白費力氣。",
      tip: {
        general:
          "批評性聲音通常會放大缺點、忽略努力。留意它使用的詞彙：「永遠」「總是」「什麼都」——這些都是絕對化的用語。試著辨認它真正想表達的是什麼。",
        clinical:
          "批評性聲音的語言特徵包括全稱否定（global devaluation）和絕對化思維。在對話初期，治療師應協助當事人辨識這些認知扭曲，而非直接挑戰聲音的內容（Mosquera & Ross, Chapter 8）。",
      },
      choices: [
        {
          text: "你觀察得很仔細。你指出這些問題，是擔心我會被別人批評嗎？",
          strategy: "affirm-accept",
          nextNode: "r2_affirmed",
          effectiveness: 3,
        },
        {
          text: "你說我有漏洞，具體是哪些？我想了解你的看法。",
          strategy: "explore-curious",
          nextNode: "r2_curious",
          effectiveness: 2,
        },
        {
          text: "你說得對，我果然什麼都做不好……",
          strategy: "ignore-escape",
          nextNode: "r2_defensive",
          effectiveness: 1,
        },
      ],
    },

    r2_affirmed: {
      id: "r2_affirmed",
      speaker: "archetype",
      text: "……你在說什麼？我不需要你的同情。我只是……在陳述事實。如果你連自己的問題都看不清楚，外面的世界可不會對你這麼客氣。你以為別人會像我這樣好好跟你說嗎？",
      tip: {
        general:
          "當你肯定批評性聲音的觀察力時，它可能會短暫愣住。這是因為很少有人認可它的存在。堅持用溫和但堅定的態度，不要被它的反彈嚇退。",
        clinical:
          "肯定技術（validation）能有效降低批評性聲音的防禦強度。研究顯示，當個體認可聲音的存在而非對抗時，聲音的頻率和強度通常會下降。注意聲音說「外面的世界不會客氣」——這暗示它對外部評價有深刻的恐懼。",
      },
      choices: [
        {
          text: "你說得對，外面的世界確實不客氣。所以你是在幫我提前做好準備，對嗎？",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你怎麼知道外面的人會怎麼對我？你經歷過嗎？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "你比外面的人還嚴格，我不需要你這樣「幫」我。",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_curious: {
      id: "r2_curious",
      speaker: "archetype",
      text: "你真的想知道？好吧。你說話的時候眼神閃躲、走路彎腰駝背、做事拖拖拉拉——我還可以繼續列。這些都是別人會拿來評斷你的東西。你最好趁早改掉，不然等別人開口就來不及了。",
      choices: [
        {
          text: "你列了這麼多，是因為你一直在幫我注意這些細節？謝謝你的用心。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你說的這些，有多少是真實發生的，有多少是你的擔心？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "你說的都對，我真是太糟糕了……",
          strategy: "ignore-escape",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_defensive: {
      id: "r2_defensive",
      speaker: "archetype",
      text: "看吧，你自己都承認了。你知道問題在哪卻不改，這才是最可悲的。讓我告訴你，如果你繼續這樣下去，沒有人會看得起你。你會一無是處，被所有人拋棄。你以為我在嚇你？我是實話實說。",
      choices: [
        {
          text: "等等，你說我會被拋棄——你是在擔心這件事真的發生嗎？",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "你說得這麼嚴重，是根據什麼判斷的？有具體的例子嗎？",
          strategy: "explore-curious",
          nextNode: "r3_escalated",
          effectiveness: 2,
        },
        {
          text: "你閉嘴！不要再用這種話攻擊我了！",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r3_recognized: {
      id: "r3_recognized",
      speaker: "archetype",
      text: "……我不需要你來分析我。我只是……只是不想讓你出醜而已。你以為我喜歡這樣說話嗎？每次看到你犯同樣的錯，我就知道別人會怎麼看你。那種眼神……我太熟悉了。那種看不起人的眼神，我見過太多次了。",
      tip: {
        general:
          "聲音開始透露它真正的擔憂——不是看不起你，而是害怕你被別人看不起。這是它的保護功能正在浮現。仔細聽它說「我太熟悉了」——它似乎也有自己的記憶和傷痛。",
        clinical:
          "批評性聲音的保護功能通常是「預先打擊」——用內在的批評來取代外在的可能批評，以減少被拒絕時的痛苦。理解這一點是轉化聲音的關鍵。此時聲音開始從「敘事位置」滑向「經驗位置」，透露自己也曾經歷過被批判的痛苦。",
      },
      choices: [
        {
          text: "你見過那種眼神。是有人曾經這樣看過你，還是看過我們？",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你說的「別人的眼光」，是真實發生過的事嗎？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "你不用替我擔心，我不在乎別人怎麼看。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_engaged: {
      id: "r3_engaged",
      speaker: "archetype",
      text: "擔心？哈，你以為我在擔心你？我只是……我只是不想看到你重蹈覆轍。以前你犯錯的時候，別人是怎麼對你的，你忘了嗎？那些嘲笑、那些冷眼、那些背後的議論……我不想再經歷一次那種感覺。",
      choices: [
        {
          text: "你記得那些嘲笑和冷眼。所以你批評我，是想讓我提前做好準備、避免受傷？",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你說的「以前」是什麼時候？那些人是誰？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "那都是過去的事了，你不要再提了。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_escalated: {
      id: "r3_escalated",
      speaker: "archetype",
      text: "你以為否認就能改變事實？可笑。你就是不肯面對現實。你知道嗎，我說的每一句話都是為你好，你卻只會逃避或者生氣。等別人真的當面嘲笑你的時候，你就會知道我是對的。到那時候，沒有人會來救你。",
      choices: [
        {
          text: "你一直在說別人會嘲笑我。你是不是曾經被這樣深深地傷害過？",
          strategy: "affirm-accept",
          nextNode: "r4_hint",
          effectiveness: 3,
        },
        {
          text: "你說為我好，但你的話讓我很難受。有沒有別的方式可以幫我？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "你根本就是想打擊我，少說什麼為我好！",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r4_reveal: {
      id: "r4_reveal",
      speaker: "archetype",
      text: "……是的。我批評你，是因為我不想讓你被別人傷害。如果你先把所有缺點都找出來，先對自己嚴厲，別人就沒有辦法用這些來攻擊你了。我知道我的方式很苛刻……但如果我不說，誰來保護你？那些曾經嘲笑你的人嗎？他們只會落井下石。",
      tip: {
        general:
          "聲音說出了它的核心保護功能——透過預先的自我批評，來抵擋外界的可能傷害。這是一種扭曲的保護，但出發點是關心。你可以試著跟它說：保護的意圖很好，但方式可以調整。",
        clinical:
          "此時可以開始與聲音協商：它的保護意圖是值得肯定的，但方式需要調整。引導當事人思考：「如果有一位朋友想保護你，但用了批評的方式，你會怎麼回應？」這個具像化隱喻能幫助個體從旁觀者角度重新看待內在批評者。",
      },
      choices: [
        {
          text: "我理解你是想保護我。但如果我們換一種方式，是不是也能達到同樣的效果，而且不會讓我這麼痛苦？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你的出發點我懂了。但你有沒有想過，你的批評其實也在傷害我？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "保護？你這根本就是在傷害我！你跟那些人有什麼區別？",
          strategy: "confront-suppress",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_hint: {
      id: "r4_hint",
      speaker: "archetype",
      text: "我只是……不想再看到你被傷害。以前有人因為你的缺點嘲笑你、否定你、把你看扁，我不希望那種事再發生。所以我把所有可能的問題都指出來，先發制人。這不是為了我，是為了你。至少……至少被自己罵，比被別人罵要好受一些。",
      choices: [
        {
          text: "你一直在替我擋住外界的傷害。辛苦你了。我們一起想想更好的方式好嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你說以前有人嘲笑我——那些人是誰？他們說了什麼？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "我不要這種保護，你只會讓我更難過。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_struggle: {
      id: "r4_struggle",
      speaker: "archetype",
      text: "你不懂！如果我不嚴厲一點，你就不會改！到時候吃虧的是你！……也許我的方式不太好，但至少我在努力讓你變得更好。你有更好的辦法嗎？你倒是說說看啊！……我不會道歉的。但至少……至少我沒有拋棄你。",
      tip: {
        general:
          "即使在最抗拒的時候，聲音也露出了脆弱的一面——它承認自己的方式「不太好」，它說「至少我沒有拋棄你」。這些都是它的求助信號，不要錯過。",
        clinical:
          "批評性聲音很少能有自省的時刻。當它說「也許我的方式不太好」時，這個裂縫就是介入的機會——不需要強迫它立刻改變，而是提出合作的邀請。注意最後那句「至少我沒有拋棄你」——這透露了聲音深層的忠誠與被認可的需求。",
      },
      choices: [
        {
          text: "你說得對，我們都在努力。也許我們可以一起找到更好的方法。",
          strategy: "affirm-accept",
          nextNode: "r5_cautious",
          effectiveness: 3,
        },
        {
          text: "你說你也在努力——這句話聽起來，你其實也很累吧？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "你少假裝在乎我了。",
          strategy: "confront-suppress",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r5_negotiate: {
      id: "r5_negotiate",
      speaker: "archetype",
      text: "更好的方式……？我……我沒有想過。我一直以為嚴厲就是最好的方法。從小到大，那些對我嚴格的人，好像都是「為我好」……也許……你可以告訴我，什麼樣的方式你比較能接受？我真的……想知道。",
      tip: {
        general:
          "聲音願意嘗試改變了！這是一個重要的時刻。你可以和它一起建立新的對話方式——從「批評」變成「建議」，從「你總是」變成「我注意到」。具體的建議會幫助它找到新的表達方式。",
        clinical:
          "這是聲音轉化的關鍵時刻。Mosquera 指出，當批評性聲音意識到自己的方式可以改變時，它有可能轉化為建設性的內在回饋系統。鼓勵當事人具體描述替代性的溝通方式，讓聲音有可遵循的新模式。",
      },
      choices: [
        {
          text: "如果每次你有建議的時候，用「我注意到……」開頭，而不是「你總是……」，會不會不太一樣？",
          strategy: "affirm-accept",
          nextNode: "end_transformed",
          effectiveness: 3,
        },
        {
          text: "我不確定具體怎麼做，但至少你可以先試著在批評之前暫停一下，好嗎？",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "我也不知道，反正你大概也不會真的改。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_cautious: {
      id: "r5_cautious",
      speaker: "archetype",
      text: "……你說得對，我是很累。每天都在找你的問題，每一天都在擔心你會不會又被別人看不起。我也想休息……但如果我不說話了，誰來提醒你？萬一你又犯錯了呢？萬一別人又嘲笑你呢？我不能放手……我不敢。",
      choices: [
        {
          text: "你可以休息。我們可以一起想辦法，不需要你一個人扛著這些擔心。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "如果犯錯了，我會自己承擔後果。你不需要為我的每一個錯誤負責。",
          strategy: "explore-curious",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "那你以後就少說點吧，我真的受不了了。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_resistant: {
      id: "r5_resistant",
      speaker: "archetype",
      text: "呵，你以為我在乎你的感受？我只是做我該做的事。……好吧，也許我說話的方式有點過分。但我不會道歉的。至少……至少我沒有拋棄你。那些曾經說要陪你的人呢？他們在哪裡？只有我一直都在。",
      tip: {
        general:
          "聲音在抗拒中帶著一絲委屈——它覺得自己才是那個從未離開的存在。這是它的另一面：忠誠。即使它用批評表達，它的堅持本身就是一種陪伴。",
        clinical:
          "批評性聲音的忠誠面向往往被忽視。它雖然嚴厲，但確實是少數「始終在場」的內在聲音。承認這一點可以為後續對話打開空間。「只有我一直都在」這句話值得被聽見——它表達了被認可的深層渴望。",
      },
      choices: [
        {
          text: "你說得對，你確實一直在。謝謝你沒有離開。我們可以試著改變說話的方式嗎？",
          strategy: "affirm-accept",
          nextNode: "r6_transition",
          effectiveness: 3,
        },
        {
          text: "你說那些人離開了——是誰離開了？你想跟我說說嗎？",
          strategy: "explore-curious",
          nextNode: "r6_transition",
          effectiveness: 2,
        },
        {
          text: "我才不需要你這種所謂的「陪伴」。",
          strategy: "confront-suppress",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    r6_transition: {
      id: "r6_transition",
      speaker: "archetype",
      text: "……改變說話的方式。你真的覺得有可能嗎？我已經這樣說了很多年了……但如果你願意試試……也許我可以……試著用溫和一點的語氣。但不要太期望，我不能保證。我只是……不想一直當壞人。",
      tip: {
        general:
          "改變不會一蹴可幾，但聲音願意嘗試，這就是起點。在未來的日子裡，當它又開始批評時，溫柔地提醒它：「我們說好了，要試試新的方式。」每一次的提醒，都在強化新的對話模式。",
        clinical:
          "聲音的轉化是一個漸進的過程。即使達成了初步協議，舊模式仍會反覆出現。治療師需要幫助當事人建立耐心，並在每次聲音回歸舊模式時，重複使用相同的對話策略。「不想一直當壞人」暗示聲音對自己的角色認同也感到疲憊。",
      },
      choices: [
        {
          text: "不急，我們慢慢來。每一次你願意嘗試，我都看見了。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "好的，我們先從一件小事開始：下次開口前，先深呼吸一次。",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "你果然還是改不了，說說而已。",
          strategy: "confront-suppress",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    end_transformed: {
      id: "end_transformed",
      speaker: "archetype",
      text: "我……我試試看。「我注意到你剛才好像有點緊張，要不要休息一下？」……這樣說，感覺好像不那麼刺耳了。也許我一直以來都不需要那麼嚴厲。如果我能變成那個提醒你、而不是打擊你的聲音……我想，我會比較喜歡那樣的自己。謝謝你願意聽我說。",
      end: {
        summary:
          "你成功地幫助批評性聲音看見了自己的保護意圖，並引導它從「嚴厲的監督者」轉變為「溫和的建議者」。聲音從純粹的批評，走向了建設性的回饋。這不是結束，而是一段新關係的開始。",
        strategiesUsed: ["肯定與接納", "探索與好奇"],
        suggestion:
          "在日常生活中，當你聽到批評性聲音時，試著溫柔地回應它：「我聽到你的擔心了。我們可以換一種方式說嗎？」持續練習這種對話，會讓新的溝通模式越來越穩固。你也可以主動邀請它練習：「你有什麼建議想告訴我嗎？」",
        score: 3,
      },
    },

    end_partial: {
      id: "end_partial",
      speaker: "archetype",
      text: "好吧……至少你聽了我說的話。也許我不需要每一句都那麼刻薄。我會……試著注意一下自己的語氣。但你知道，改變習慣需要時間。如果你也願意繼續跟我對話，而不是把我當敵人……我想，我們可以慢慢找到一個平衡。",
      end: {
        summary:
          "你與批評性聲音建立了初步的理解。它開始意識到自己的方式可以調整，願意嘗試改變，但轉化仍在進行中。這是一段持續的旅程，需要耐心與反覆練習。",
        strategiesUsed: ["探索與好奇", "中性回應"],
        suggestion:
          "持續與聲音保持對話，不要因為它偶爾回歸舊模式就放棄。每次它批評時，試著問它：「你想保護我什麼？」這個問題能幫助它回到建設性的軌道。每一次的對話，都在累積改變的力量。",
        score: 2,
      },
    },

    end_resistant: {
      id: "end_resistant",
      speaker: "archetype",
      text: "隨便你。你以為不理我就能解決問題？總有一天你會發現，我是對的。到時候別來找我。……但……如果你改變主意的話……我還是在這裡。我永遠都在。即使你不要我，我也不會走。",
      end: {
        summary:
          "批評性聲音仍然維持著嚴厲的姿態，但在最後時刻，它透露了不會離開的承諾。改變的大門還沒有完全關上，只是需要更多的耐心與嘗試。這個聲音還在等待被聽見。",
        strategiesUsed: ["中性回應"],
        suggestion:
          "與批評性聲音建立關係需要時間和勇氣。下次遇到它時，試著先深呼吸，然後用好奇而非對抗的態度回應：「你說這些話，是想告訴我什麼重要的訊息嗎？」每一次的嘗試都在為未來的對話鋪路。不需要完美，只需要願意。",
        score: 1,
      },
    },
  },
};
