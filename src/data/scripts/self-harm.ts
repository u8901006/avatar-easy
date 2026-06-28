import type { ArchetypeScript } from "@/lib/types";

export const selfHarmScript: ArchetypeScript = {
  archetypeId: "self-harm",
  openingNarration:
    "空氣突然變得又重又悶，像是情緒的水位一下子漲到了胸口。就在快要被淹過去的那一刻，一個熟悉的、平靜的聲音輕輕浮上來。它不急、不兇，反而像一個總在這時候出現的老朋友，遞上一杯水。它很篤定——它知道怎麼讓你重新呼吸。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "空氣突然變得又重又悶，像是情緒的水位一下子漲到了胸口。就在快要被淹過去的那一刻，一個熟悉的、平靜的聲音輕輕浮上來。它不急、不兇，反而像一個總在這時候出現的老朋友，遞上一杯水。它很篤定——它知道怎麼讓你重新呼吸。它開口了，語氣溫柔得近乎殘忍。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "archetype",
      text: "又來了，對吧？那種快要被淹沒的感覺。沒關係，你知道怎麼做。一點點就好，很快就不會那麼難受了。我們每次不都是這樣撐過來的嗎？來，讓我把你帶回可以呼吸的地方。",
      tip: {
        general:
          "這個部分的聲音出奇地平靜、甚至溫柔——這正是它最容易被誤解的地方。它不是來傷害，而是來「調節」。它深信自己是在幫你活下去。第一時間最忌諱「嚴厲禁止」或「道德評判」，那只會把它逼進更隱密的地下。先承認它一直在做的事——把快要崩潰的系統拉回來。",
        clinical:
          "非自殺性自傷（NSSI）的核心是情緒調節，而非自我毀滅；其內在語氣常是平靜、篤定、甚至溫柔的（「這麼做吧，這樣你就能重新呼吸了」）。介入第一步是「肯定這個部分的崗位與貢獻」：承認其策略在過去確實發揮了拯救系統的效果，而非全盤否定。嚴厲禁止或強簽「不自傷契約」只會將行為逼入地下（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "你一直用這個方法，把快要崩潰的系統拉回來。你其實是在調節情緒，不是想死。這份努力，我看見了。",
          strategy: "affirm-accept",
          nextNode: "r2_affirmed",
          effectiveness: 3,
        },
        {
          text: "你說「撐過來」——這個方法，每次幫你擋下了什麼？",
          strategy: "explore-curious",
          nextNode: "r2_curious",
          effectiveness: 2,
        },
        {
          text: "你不能再這樣傷害自己了，這是不對的，我禁止你繼續。",
          strategy: "confront-suppress",
          nextNode: "r2_defensive",
          effectiveness: 1,
        },
      ],
    },

    r2_affirmed: {
      id: "r2_affirmed",
      speaker: "archetype",
      text: "……你看見了。很少有人這樣說。他們只會說我危險、說我糟糕。可是他們不知道，那些感覺一起湧上來的時候，有多可怕——羞恥、還有那種想尖叫到撕心裂肺的衝動。我只能把它變小，變成可以承受的東西。像把一整片汪洋大海，壓成一杯水，捧在手裡。不然我們會被淹死。",
      tip: {
        general:
          "它說出了核心隱喻——把汪洋大海壓成一杯水。它不是要傷害，而是要把無法承受、說不清楚的情緒，變成具體、可控、有邊界的東西。承接這個隱喻，讓它知道：你懂它是在調節，不是在尋死。",
        clinical:
          "臨床隱喻：「這個部分就像是把鋪天蓋地而來的汪洋大海，壓縮成一杯水——變成可以用手捧住、可以承受的肉體痛苦。」此時應承接並鏡映這個調節功能，卸下「尋求緩解」這份需求的羞恥感，不將其貼上反叛、挑釁或操縱的標籤（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "把大海壓成一杯水，這樣你才捧得住。你一直是一個人在做這件事。辛苦你了。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你說那些感覺「一起湧上來」——通常是在什麼時候發生的？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "但這杯水是要付出代價的，你的身體一直在受傷，你難道不在乎嗎？",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_curious: {
      id: "r2_curious",
      speaker: "archetype",
      text: "擋下了什麼？……好多東西。那些突然冒出來的畫面、那種全身要散掉的感覺、那種「我快要瘋掉、快要失去控制」的恐懼。只要我把注意力鎖在身體那一點上，那些東西就會退下去。我就能穩住。這是我唯一會的、能立刻見效的方法。",
      choices: [
        {
          text: "你鎖住注意力，是為了不讓那些畫面和失控感把你吞掉。這是你在替系統踩煞車。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "你說「唯一會的」——除了這個，你過去試過別的方法嗎？",
          strategy: "explore-curious",
          nextNode: "r3_recognized",
          effectiveness: 2,
        },
        {
          text: "這不是辦法，你只是把痛苦轉移到身體上而已。",
          strategy: "ignore-escape",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_defensive: {
      id: "r2_defensive",
      speaker: "archetype",
      text: "（平靜裡多了一絲冷）「禁止」？你看，你也跟他們一樣。你只會說不行、說不對，卻沒有人給我別的方法。好，那我就不讓你看見。我會做得更安靜、更隱密，讓你以為我消失了。反正我一直都是這樣撐過去的——一個人。",
      tip: {
        general:
          "被嚴厲禁止，它沒有退縮，而是宣布要轉入地下——這正是禁止策略最大的反效果。它關上了溝通的門，因為它覺得你跟其他人一樣，只會否定、不會給方法。不要自證「我不一樣」，而是承認它說的實話：它的確一直是一個人，的確沒有人給過它別的方法。",
        clinical:
          "強加禁止或簽署「不自傷契約」往往只會把行為逼入更隱密的地下，關閉治療介入的視窗；採取「拯救者」或過度母性照顧的姿態，也常招致反效果。應承認其「一直是一個人」的真實經驗，並明確表達：今天的意圖不是剝奪它的方法，而是擴充選項（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "你說得對，一直沒有人給你別的方法，你只能自己撐。我今天不是來禁止你的——我是來幫你把方法變多的。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "你說「做得更隱密」——是不是每次被發現或被禁止，反而讓你更孤立？",
          strategy: "explore-curious",
          nextNode: "r3_escalated",
          effectiveness: 2,
        },
        {
          text: "我不是要禁止你，但你總得答應我不要再這樣了，好嗎？",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_recognized: {
      id: "r3_recognized",
      speaker: "archetype",
      text: "一個人……對。從來沒有人教過我別的。而且，你要知道——我這麼做，其實是在擋住更可怕的事。如果我不這樣把壓力洩掉，我們可能會做出更糟的事。我寧可控住這一點點的痛，也不要讓整個系統走向那條無法回頭的路。",
      tip: {
        general:
          "它說出了一個關鍵、常被忽略的真相：它在做「傷害控管」——用受控的小痛，擋住它更害怕的、致命的絕路。它一直默默把系統擋在懸崖邊。聽見這層，你就會明白：拆掉它的方法前，得先給它別的東西可抓。",
        clinical:
          "在許多內在系統中，NSSI 發揮「傷害控管」功能——這是各部分協商出的權宜之計，一致認為受控的宣洩勝過系統的毀滅性崩潰（「如果我不這麼做，我可能會做出更可怕的事」）。理解這層傷害控管邏輯，是與該部分合作的基礎（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "你一直在擋住更可怕的事，默默把系統撐在懸崖邊。這份忠誠，從來沒有人感謝過你。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你說的「更可怕的事」——是指走到自殺那一步嗎？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "但你不能用一種傷害去擋另一種傷害啊，這是飲鴆止渴。",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_engaged: {
      id: "r3_engaged",
      speaker: "archetype",
      text: "踩煞車……對，我就是在踩煞車。每次那個水位快滿出來，我就知道，再不洩掉，整個人會失控、會崩潰、會變成自己都不認識的樣子。我害怕那個樣子。所以我把注意力拉回身體、拉回這一個點。這是我唯一能穩住一切的方式。",
      choices: [
        {
          text: "你怕系統崩潰，所以你搶先一步踩煞車。你其實是保護系統的那個。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你怕的「失控、崩潰」，具體是什麼樣子？曾經發生過嗎？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "穩住一切？你管這叫穩定？你只是在讓自己習慣受傷。",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_escalated: {
      id: "r3_escalated",
      speaker: "archetype",
      text: "（語氣更冷、更篤定）你說「轉移痛苦」、「飲鴆止渴」——講得倒簡單。你知不知道，那一刻解脫是真的會來的？身體一痛，那股快要爆炸的東西就真的會退下去。我的方法有效，每一次都有效。你不能假裝它沒用。在沒有別的東西能那麼快見效之前，我不會放手。",
      tip: {
        general:
          "它堅持「方法有效」，因為這是事實——解脫確實會立刻到來，神經系統牢牢記住了這個連結。跟它爭辯「這不是好方法」沒用，因為在它的經驗裡，這就是唯一有效的方法。承認它真的有效，然後把目標轉向「找一樣有效、但不必受傷的方法」。",
        clinical:
          "這套策略之所以根深蒂固，核心在於它短期內確實極為見效——解脫感在受傷瞬間立即到來，神經系統記住此因果連結；狀態依賴性學習更窄化了對替代方案的聯想。介入不應否定其有效性，而應提供「功能匹配」的替代方案：同樣快速、可預測、可控、隱密，卻不必付出受傷代價（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "你說得對，你的方法確實有效——每一次都有效。我沒有要否認這一點。我想幫你找的，是同樣有效、卻不用付出受傷代價的方法。",
          strategy: "affirm-accept",
          nextNode: "r4_hint",
          effectiveness: 3,
        },
        {
          text: "「每一次都有效」——你第一次發現這個方法，是什麼時候？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "有效不代表正確，你不能一直靠這個。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r4_reveal: {
      id: "r4_reveal",
      speaker: "archetype",
      text: "……沒有人感謝過我。對。其實我也累了。每次都要偷偷摸摸、每次都要藏好、每次事後還要收拾。可是……我不會別的。這套東西，是我身體記得最熟的一套程式。只要水位一滿，它就第一個跑出來。我捨不得放手，因為……除了它，我什麼都沒有。",
      tip: {
        general:
          "它說出了最深的困境：它不是不肯放手，而是「除了這個，什麼都沒有」。這套方法像內建程式，危機時第一個上線。它也累了，也怕偷偷摸摸。你要做的，不是拆除這個程式，而是幫它多裝幾個新的、一樣能應急的程式，讓它有得選。",
        clinical:
          "該部分之所以頑固，是因「狀態依賴性學習」讓這套連鎖反應像內建程式般最先上線；它在系統內贏得了「帶領我們熬過難關的功臣」的身分。介入核心是「建立能與舊有連鎖反應抗衡的微程序」：與早期生理線索緊密扣合、微小、可隨時喊停的可逆步驟，反覆練習直到內化為直覺（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "你除了它什麼都沒有——那我們不拆掉它。我們幫你多裝幾個一樣能應急的工具，讓你下次有得選。我們先試一個30秒的應變腳本，好嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你說「身體記得最熟的程式」——最早的時候，你是怎麼學到這套的？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "好，那你保證下次水位滿的時候，不要再用這個方法了。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_hint: {
      id: "r4_hint",
      speaker: "archetype",
      text: "同樣有效、卻不用受傷……（停頓，像在認真考慮）……我願意聽。但有一個條件：那個方法必須跟舊的一樣——快、能預測、只有我自己知道、而且我能完全掌控。如果做不到這些，我還是會回到老地方。我不能冒險讓系統崩潰。",
      choices: [
        {
          text: "成交。快、可預測、隱密、可控——我一個都不會拿走。我們一起設計這個替代方案，你來把關。",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你堅持的這四個條件，各自對你意味著什麼？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "我不確定有什麼方法能完全替代，但你可以試著忍耐看看。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_struggle: {
      id: "r4_struggle",
      speaker: "archetype",
      text: "（被否定，重新冷硬）你看，你又來了。叫我「答應不要」、「忍耐」、「飲鴆止渴」。這些話我聽過上百次，沒有一次在水位滿出來的時候救得了我。你要我放手，卻不給我別的抓的東西。那我只好繼續用我唯一會的。這不是我不肯改，是你們從沒給過我能用的替代品。",
      tip: {
        general:
          "它又被推回去了——因為它感覺被要求「放手」，卻沒被給予替代。它說的是實話：在水位滿出來的瞬間，這些「忍耐」的話救不了它。承認這點，然後立刻轉向「給工具」，而不是繼續要求它承諾。它需要的是能用的東西，不是承諾。",
        clinical:
          "介入應避免落入「要求承諾不自傷」的陷阱——這常使治療流於保護臨床工作者免責，對個案無實質幫助。應將焦點轉向「建立功能匹配的微程序」，並明確表達：今天的目標是擴充選項，而非剝奪其既有方法。把每一步框架為可隨時喊停、可逆的實驗（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "你說得對，叫你忍耐沒有用——在水位滿出來時，那些話救不了你。我不再要求你承諾什麼。我們今天只做一件事：給你一個能用的30秒工具。",
          strategy: "affirm-accept",
          nextNode: "r5_cautious",
          effectiveness: 3,
        },
        {
          text: "你說從沒給過能用的替代品——那在你經驗裡，什麼樣的東西勉強算「能用」？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "那你說，你到底想怎麼樣？我總不能眼睜睜看你受傷。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r5_negotiate: {
      id: "r5_negotiate",
      speaker: "archetype",
      text: "（態度仍是務實的，像在評估一個新工具）……30秒腳本。你說說看，是什麼？但我先講好——我會拿它跟舊的比。如果它沒那麼快、沒那麼穩，我還是會回到我熟悉的。不過……我願意先測試。畢竟，如果真有一樣有效、又不用受傷的方法，傻子才不用。",
      tip: {
        general:
          "它願意「測試」了——這就是進展。它沒被要求放棄舊方法，只是多了一個新工具可以比較。給它一套具體、馬上能用的30秒應變腳本。記得：成功的標準不是「完全不自傷」，而是「它多了一個能用、且安全的方法」。",
        clinical:
          "30秒應變腳本範例：一、環境定向（在房間找出三種顏色）；二、呼吸調節（五次有節奏、刻意拉長吐氣的呼吸）；三、感官覆蓋（握住冰塊、潑冷水、聞強烈薄荷、觸摸粗糙紋理物體）；四、狀態確認（停下來感受現在的狀態）。成功標準是「安全地回歸身心基線」，而非創傷揭露或宣洩（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "好，腳本是這樣：找出房間裡三種顏色、做五次拉長吐氣的呼吸、把手浸進冰水裡90秒、然後check-in自己現在的狀態。我們現在就一起走一次。",
          strategy: "affirm-accept",
          nextNode: "end_transformed",
          effectiveness: 3,
        },
        {
          text: "我們一起設計——你把舊方法「快、可預測、隱密、可控」的特質，一個個對應到安全的替代上。你來主導。",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "你就先試著不要做，撐過那一波就好了。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_cautious: {
      id: "r5_cautious",
      speaker: "archetype",
      text: "……你沒有要我馬上改，也沒有逼我簽什麼契約。你只是……多給我一個選擇。這種感覺，我很久沒有過了。我願意把那個30秒的東西帶回去試。我不保證它每次都管用，但至少，下次水位滿出來的時候，我不只有一個選項。光是這樣，就……已經不一樣了。",
      choices: [
        {
          text: "「不只有一個選項」——這就是今天最重要的事。我們把那個30秒腳本練熟，讓你下次拿得出來。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "你說「很久沒有這種感覺」——被人給選擇，而不是被要求？",
          strategy: "explore-curious",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "那你這週就盡量用它，不要再走老路了。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_resistant: {
      id: "r5_resistant",
      speaker: "archetype",
      text: "（平靜，但沒有退讓）……今天我沒有答應你任何事。但你要知道，你跟其他人不一樣——你沒有逼我簽契約，沒有把我當操縱別人的壞人，也沒有衝進來「拯救」我。這個我記下了。我可能還是會用我的老方法，但……下次，在它上線之前，我會記得這裡還有別的東西可以試。這對我來說，已經是很大的讓步。",
      tip: {
        general:
          "它今天沒有給出承諾，但給出了一個真實的進展：它記得「還有別的東西可以試」。改變不是一次完成的。把這個微小的裂縫視為進展，而不是失敗。把30秒腳本安頓好，讓它在願意時拿得到。",
        clinical:
          "衡量進展的標準，是「因應選項的增加」、「衝動飆升時間的縮短」、「更快回歸身心基線」，而非「衝動完全消失」。偶爾的挫折與退步不是失敗，而是珍貴的臨床數據：幫助看清哪些早期生理線索被遺漏、哪些步驟太快、哪些事後安撫做得不夠（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "「記得還有別的東西可以試」——這就夠了。我們把那個30秒工具留著，你什麼時候想試都可以。",
          strategy: "affirm-accept",
          nextNode: "end_resistant",
          effectiveness: 3,
        },
        {
          text: "你說別人不把你當「操縱別人的人」——這個標籤，你被貼過嗎？",
          strategy: "explore-curious",
          nextNode: "end_resistant",
          effectiveness: 2,
        },
        {
          text: "那希望你下次真的會試新的方法。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    r6_transition: {
      id: "r6_transition",
      speaker: "archetype",
      text: "（語氣仍是平靜的，但多了一絲疲憊與鬆動）……我還是會擔心，水位滿出來的那一天，新的工具會來不及。但我承認，今天有人沒有把我當敵人，也沒有逼我。那個30秒的東西，我會帶著。我不能承諾以後都不再用老方法，但我可以承諾：下次它上線之前，我會先試一下別的。",
      tip: {
        general:
          "它給了一個誠實的承諾：不是「不再做」，而是「下次先試一下別的」。這就是真實的進展樣貌——改變是選項變多、衝動變短，而不是瞬間消失。反覆練習那個30秒腳本，是它未來能拿出新工具的唯一依靠。",
        clinical:
          "深刻的改變，建立在與早期生理線索緊密扣合、微小且可隨時喊停的可逆常規之上。新選項必須全然保留該部分所珍視的價值：快速、可預測、隱密、可控（同時免於身體受傷）。進步會體現在可用選擇增加、衝動飆升縮短、更快回基線、代價減少（《Child Parts and Survival Logic in Clinical Practice》，第18章）。",
      },
      choices: [
        {
          text: "「先試一下別的」——這就夠了。我們把這個30秒腳本練到變直覺，讓你在最需要的時候拿得出來。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "我們回顧一下：這個30秒腳本的四個步驟，你會怎麼跟內在其他人說明？",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "希望你下次別再走老路了。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    end_transformed: {
      id: "end_transformed",
      speaker: "archetype",
      text: "（聲音仍是平靜的，但那股「非它不可」的緊繃，散了）……三種顏色、五次吐氣、冰水90秒、check-in。……我做了。那股快要爆炸的東西，真的退下去了——而且，我沒有受傷。原來，把大海壓成一杯水，不一定要用那個老方法。它沒有完全消滅我的羞恥，但它把羞恥變小了。這一次，我用了一個新的工具。",
      end: {
        summary:
          "你先肯定了這個部分的崗位與貢獻，沒有禁止、沒有評判，而是承認它一直在做的事——把快要崩潰的系統拉回來。你卸下了「尋求緩解」的羞恥，保留了它所珍視的「快、可預測、隱密、可控」，並給了它一套功能匹配的30秒應變腳本。它沒有被拆掉，而是多了一個一樣有效、卻不必受傷的工具。這一次，它用了新的方法。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "在日後的練習中，記住四件事：一、先肯定功能，再優化方法——不要禁止或強簽不自傷契約；二、保留它珍視的特質（快、可預測、隱密、可控），只替換掉「受傷」這個代價；三、反覆演練30秒微程序，直到它與早期生理線索扣合、能直覺提取；四、把進步定義為「選項變多、衝動變短、更快回基線」，而非「衝動完全消失」。挫折是數據，不是失敗。",
        score: 3,
      },
    },

    end_partial: {
      id: "end_partial",
      speaker: "archetype",
      text: "（態度務實，帶著一絲少見的踏實）……30秒腳本，我們設計好了，也練過一次了。它跟舊的方法比起來，還差一點點「熟悉」，但它不用我付出代價。我願意把它放進口袋裡。下次水位滿出來，我會先試它。不能保證每次都成功，但至少——我不再只有一個選項。這對我來說，已經是很大的不同。",
      end: {
        summary:
          "你與這個調節者建立了合作：肯定了它的崗位、卸下了尋求緩解的羞恥、共同設計了一套功能匹配的30秒應變腳本。它沒有被要求放棄舊方法，而是多了一個口袋裡的工具。真實的進展不是衝動消失，而是它「不再只有一個選項」。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "在下次危機來臨前，反覆演練那個30秒腳本，讓它與早期生理線索緊密扣合、能在壓力下直覺提取。每次挫折後，一起回頭看：哪個早期線索被遺漏了？哪一步太快？事後安撫做得夠不夠？把每一次退步當成調整微程序的數據。必要時務實處理傷口醫療，絕不夾帶道德說教。",
        score: 2,
      },
    },

    end_resistant: {
      id: "end_resistant",
      speaker: "archetype",
      text: "（平靜，沒有退讓，但門沒有關上）……今天我沒有給你承諾。但你沒有把我當敵人，沒有逼我簽契約，也沒有把我貼成「操縱別人」的壞人。這個我記下了。我可能還是會用老方法——但下次，在它上線之前，我會記得：這裡還有一個30秒的東西可以試。光是「記得還有別的」，對我來說，就已經是很大的讓步了。",
      end: {
        summary:
          "今天它沒有給出承諾，但這不是失敗。你沒有禁止它、沒有逼它簽契約、沒有把它貼上操縱的標籤——你給了它一個從來沒有過的東西：另一個選擇。它記住了「還有別的東西可以試」，這份記憶，就是改變的種子。它會在願意的時候，把那個30秒工具拿起來。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "下次遇到它現身時，先做三件事：一、肯定它的崗位與貢獻（「你一直把快要崩潰的系統拉回來」），不要禁止或評判；二、保留它珍視的特質（快、可預測、隱密、可控），只替換掉受傷的代價；三、把30秒應變腳本留在它拿得到的地方。改變是選項變多、衝動變短，不是瞬間消失——它需要的是工具與尊重，不是承諾與壓制。",
        score: 1,
      },
    },
  },
};
