import type { ArchetypeScript } from "@/lib/types";

export const childScript: ArchetypeScript = {
  archetypeId: "child",
  openingNarration:
    "對話才進行到一半，對方整個人突然「縮」了起來。肩膀塌下、視線掉到地板、雙手在膝上絞成一團，聲音瞬間變得細小而遲疑，像是在聽另一個人說話。這不是此刻的成年人在退縮，而是某個更早的、卡在過去的部分，被觸發而浮現了。它還不知道，外面其實已經是安全的。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "對話才進行到一半，對方整個人突然「縮」了起來。肩膀塌下、視線掉到地板、雙手在膝上絞成一團，聲音瞬間變得細小而遲疑，像是在聽另一個人說話。這不是此刻的成年人在退縮，而是某個更早的、卡在過去的部分，被觸發而浮現了。它還不知道，外面其實已經是安全的。沉默了好一會兒，那個細小的聲音終於擠出幾個字。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "archetype",
      text: "……不要看我……我會很乖、我不吵……都是我的錯，對不起了……你不要生氣好不好……",
      tip: {
        general:
          "一個孩童部分浮現了——特徵是姿勢、語氣的突然轉變，伴隨道歉、想消失與強烈的討好。它不是在演戲，而是真的停留在某個「做錯事就會被罵」的時刻。此刻最重要的一步不是解決它的痛苦，而是「承認與看見」：讓它知道有人注意到、而且不帶評價。",
        clinical:
          "孩童部分是情緒經驗的內在心理表徵，凍結在創傷時間（trauma time）裡，常以身體緊繃、瑟縮、突然關機等非語言方式現身。安全接觸的第一步是「承認與看見」（acknowledge and validate），而非急著進入或重新養育（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "你的某個部分現在感到很害怕，這是可以理解的。我看見你了。",
          strategy: "affirm-accept",
          nextNode: "r2_affirmed",
          effectiveness: 3,
        },
        {
          text: "你現在身體感覺到什麼？可以慢慢說，沒有關係。",
          strategy: "explore-curious",
          nextNode: "r2_curious",
          effectiveness: 2,
        },
        {
          text: "乖～不怕不怕，來，過來給你抱抱，沒事沒事喔～",
          strategy: "ignore-escape",
          nextNode: "r2_defensive",
          effectiveness: 1,
        },
      ],
    },

    r2_affirmed: {
      id: "r2_affirmed",
      speaker: "archetype",
      text: "……你看見我了？……你、你不會罵我嗎？他們都說是我太多、是我害的……如果我更乖一點，也許他們就不會……都是我的錯。",
      tip: {
        general:
          "它的防衛稍微鬆了一點，因為有人「看見」了它。但緊接著浮現的，是它一直扛著的羞恥標籤——「我太多」「都是我的錯」。這些話不是事實，而是它當年為了留在關係裡所付出的代價。試著看見標籤背後那份未被滿足的渴望。",
        clinical:
          "孩童部分常作為「羞恥標籤的承擔者」（holder of shame labels），承載「我太多／我不夠好」的缺陷感。其生存邏輯是：「如果是我的錯，我就能修好它；當壞人比孤單一個人安全。」介入應看見標籤背後對連結與安慰的渴望（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "我聽到那個部分有多麼渴望被安慰、被好好對待。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "它說「都是我的錯」——這句話，是從誰那裡聽來的？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "別想那些了，過去的事就讓它過去，我們往前看。",
          strategy: "ignore-escape",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_curious: {
      id: "r2_curious",
      speaker: "archetype",
      text: "身體……很緊……動不了……（整個人縮得更小，像在把自己藏起來）……他們……會來嗎……門……有沒有鎖……",
      choices: [
        {
          text: "你的某個部分現在很害怕，怕有人會來。這是可以理解的。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "它感覺到「門沒有鎖」——這像是哪個時刻的畫面？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "這裡很安全啦，你放輕鬆一點，深呼吸就好。",
          strategy: "ignore-escape",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_defensive: {
      id: "r2_defensive",
      speaker: "archetype",
      text: "（聲音突然變了，變得尖銳、防衛）……你不要那樣跟我說話。我又不是真的小孩子。你以為哄一哄就會好嗎？你跟其他人有什麼不一樣……（底下那個細小的聲音又浮現）……你看，我讓你不舒服了……對不起……",
      tip: {
        general:
          "寶寶腔引發了反效果——它喚起了一個更年長、防衛性更強的部分（青少年／保護者），因為這種語氣讓整個系統覺得被當成小孩子貶低。同時原本那個孩童部分又自責「是我讓你不舒服」。這是一個修復的機會：承認剛剛的方式不對，把選擇權還給對方。",
        clinical:
          "對孩童部分使用寶寶腔是常見陷阱：孩童部分不是字面上的兒童，而是情緒經驗的心理表徵，童言童語會讓成人自我感到被貶低，並常觸發保護者部分（如青少年部分）以界線設定介入。此時應明確放下拯救者位置，邀請成人自我帶領（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "你說得對，那樣說話不合適，是我的方式不好。我們重新來：你的某個部分現在很害怕，這是可以理解的。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "剛剛那句話，讓你們哪個部分覺得不舒服？我想了解。",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "好好好，那我不哄你了，你趕快好起來好不好？",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r3_recognized: {
      id: "r3_recognized",
      speaker: "archetype",
      text: "……渴望安慰……（停頓很久）……對……它一直都在等……等一個不會傷害它的人來……可是沒有人來過……每次它一出來，就會有另一個聲音罵它「不准哭」「你太丟臉」，然後把它趕回去……所以它學會了躲起來。",
      tip: {
        general:
          "它說出了關鍵：孩童部分一出現，就會被系統裡其他「保護者」聲音攻擊與放逐。這不是那些保護者在欺負它，而是它們相信「壓住痛苦，系統才能運作」。此刻要追蹤這股內在動力——別急著靠近孩童部分，先看見這層保護。",
        clinical:
          "孩童部分常作為「內部警報器」（internal siren）：痛苦一外洩即招募敵意、懲罰性或與加害者結盟的部分來控制暴露。保護者攻擊孩童部分並非出於殘忍，而是盡責——它們相信壓住痛苦才能維持系統運作。介入第二步是「追蹤內在動力」，先與保護者協商（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "原來每次它出來，都會有別的部分把它趕回去。它們一定很努力在保護整個系統。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "那些把它趕回去的聲音，現在也在這裡嗎？它們想讓我知道什麼？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "不要理那些聲音，我們就直接面對這個小孩子就好。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_engaged: {
      id: "r3_engaged",
      speaker: "archetype",
      text: "……那個畫面……床……躲在被子下面……不敢呼吸……腳步聲在走廊上……它一直躲在那裡，不敢動，不敢哭……它不知道……不知道那個晚上已經過去了……它還在等腳步聲停下來。",
      choices: [
        {
          text: "它還躲在那張床上，等腳步聲停下來。它不知道那已經是過去的事了。我們陪它一起，好嗎？",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "它現在還感覺得到那個腳步聲嗎？還是這是記憶裡的聲音？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "那都是很久以前的事了，現在是 2025 年，不會有人來了。",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_escalated: {
      id: "r3_escalated",
      speaker: "archetype",
      text: "（一個更冷、更硬的聲音插進來）你說「放輕鬆」「過去就過去」，講得倒簡單。你以為你一句話它就不怕了？它怕的時候，是我們在擋。你沒先跟我們打招呼，就想直接碰它？不行。（底下那個細小的聲音在顫抖）……我、我又搞砸了……對不起……",
      tip: {
        general:
          "走太快或想直接「處理」孩童部分，喚醒了守門的保護者——它用拒絕與界線擋在中間。這不是抗拒，而是它在盡責。別和它對抗，也別繞過它。承認它的把關，把步調放慢，先得到系統的許可。",
        clinical:
          "保護者部分的界線設定不是「阻抗」（resistance），而是保護。創傷知情工作的核心原則之一：「猶豫不是阻抗，而是必要的內在保護。」把保護者的拒絕當成要突破的障礙，往往是晤談後反彈（backlash）的開始（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "你一直都在擋著、保護整個系統，辛苦你了。在你允許之前，我們不會貿然靠近。",
          strategy: "affirm-accept",
          nextNode: "r4_hint",
          effectiveness: 3,
        },
        {
          text: "你想讓我知道，在靠近它之前，需要先滿足什麼條件？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "我沒有不尊重你，只是想幫忙，你何必這麼防衛？",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r4_reveal: {
      id: "r4_reveal",
      speaker: "archetype",
      text: "……它一直在保護我們……對……那個躲在被子裡的它，用「不動、不哭、把自己縮到最小」撐過了那個晚上。它不是脆弱，它是那時候唯一能做的事……可是它真的不知道……不知道我們長大了，不知道門外現在是安全的。它還在等。",
      tip: {
        general:
          "這是轉化的關鍵時刻——它看見了那個部分的「生存邏輯」：縮起來不是懦弱，而是當時最能保住自己的方式。同時它點出核心：那個部分不知道現在已經安全了。接下來不必急著「帶它走出來」，而是邀請它自己的「成人自我」來陪伴。",
        clinical:
          "當案主辨識出孩童部分背後的生存邏輯，而非把它當作需要修復的症狀，療癒才可能發生。關鍵轉折是邀請「成人自我」（Adult Self）——案主立足於當下、清醒的意識——來注意、命名並陪伴孩童部分，而非由治療師跳入拯救者位置。真正要被見證的，是這份痛苦「曾經是真的」這個生命真相（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "此刻的你（成人自我）願不願意，坐到這個部分旁邊？距離多近，由你決定，我會完全配合你。",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你的成人自我現在在這裡嗎？它怎麼看待這個躲在被子裡的部分？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "那我們現在就把那個孩子帶出來，告訴他一切都過去了。",
          strategy: "confront-suppress",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_hint: {
      id: "r4_hint",
      speaker: "archetype",
      text: "……它需要先確定你是真的會停下來的人……以前都沒有人停下來過。如果你可以答應，任何時候它喊停，我們就停……那我們也許……也許可以試著，看一下那個躲在被子裡的它。就一下下。可是你不能走太快。",
      choices: [
        {
          text: "我們先約一個可以隨時喊停的訊號。任何一點不舒服，我們立刻停。好嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你說以前沒有人停下來過——那些人是誰？發生過什麼？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "放心，我不會讓你難過的，我們慢慢來就好。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_struggle: {
      id: "r4_struggle",
      speaker: "archetype",
      text: "（保護者的聲音）你看，你又想直接衝進去了。我們說了不行就是不行。它要是被你弄潰堤，收拾的是我們，不是你。（停頓）……不過……至少你停下來聽了。很少有人願意聽。我們不是要為難你，我們只是……怕它再受傷一次。",
      tip: {
        general:
          "即使被擋下來，保護者也露出了它的真實動機——怕孩童部分再受傷。它的堅持本身，就是一種忠誠的保護。回應它：肯定它的把關，明確承諾會以安全、而非接觸為優先。把速度交給整個系統決定。",
        clinical:
          "保護者部分即使在抗拒中也常透露被認可的渴望（「很少有人願意聽」）。承認其保護功能、不繞過它、以可逆且得到系統許可的微步前進，是建立合作關係的基礎。核心指導原則：「安全，而不是接觸。」（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "你怕它再受傷，所以一直擋著。謝謝你。我們把安全放在第一位，步調交給你們決定。",
          strategy: "affirm-accept",
          nextNode: "r5_cautious",
          effectiveness: 3,
        },
        {
          text: "你說「收拾的是我們」——平常它潰堤的時候，你們要承受什麼？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "好好好，那這次先不要碰它，你們自己看著辦吧。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r5_negotiate: {
      id: "r5_negotiate",
      speaker: "archetype",
      text: "（成人自我的聲音漸漸清晰）……好。我試著……坐到它旁邊。它縮得很小，一直在發抖。我跟它說「我看到你了」……它好像、好像稍微轉過來一點點。我不確定我做得對不對……我怕我弄壞什麼。它真的可以相信，那個晚上已經過去了嗎？",
      tip: {
        general:
          "成人自我開始帶領了——這正是療癒發生的位置。它需要你做的，不是代它發言，而是陪它穩穩地待在當下。用具體、身體層次的現實導向，幫它區分「那時」與「現在」，但不否定孩童部分的恐懼。一次一小口、可隨時喊停。",
        clinical:
          "成人自我領導下的「此時此刻的現實導向」（present-time orientation）：謹慎運用接地技巧，在身體感受層次區分「那時」與「現在」（例如指出創傷事件並非發生在眼前這個空間），但前提是不否定、不覆蓋孩童部分朝向過去的恐懼。步調須「拿捏與滴定」（pacing and titration），一次只接觸一小片段（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "我們一起看它十秒鐘，然後就停下來，好嗎？這十秒裡，你可以注意你的腳踩在地板上的感覺——那是現在。",
          strategy: "affirm-accept",
          nextNode: "end_transformed",
          effectiveness: 3,
        },
        {
          text: "你怕弄壞什麼——這份謹慎本身就是對它的照顧。我們今天只到這裡，先穩穩收尾。",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "不用怕，你儘管告訴它「一切都過去了，你安全了」，多說幾次它就會信。",
          strategy: "confront-suppress",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_cautious: {
      id: "r5_cautious",
      speaker: "archetype",
      text: "（成人自我，帶著遲疑）……我其實也很怕靠近它。從小到大，我們學到的是「不要去碰那些」。可是它一直躲在那裡……也許，也許它等的就是有人願意停在我身邊，而不是衝過去把它拉出來。我願意試……但只能一點點。",
      choices: [
        {
          text: "一點點就夠了。我們今天只做一件事：讓它知道，此刻有人陪著。然後就停。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "你說「等的就是有人願意停下來」——你怎麼看待這個部分？",
          strategy: "explore-curious",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "你願意試就很好，那趁現在有多一點時間，我們多走幾步。",
          strategy: "confront-suppress",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_resistant: {
      id: "r5_resistant",
      speaker: "archetype",
      text: "（保護者，鬆了一口氣但仍警戒）……你沒有硬闖，這點我記住了。它今天不會出來，門我守著。但……如果你下次還是這樣願意等，也許，也許我們可以再談談。它不是不想被看見，它只是……太久沒有人願意照我們的規矩來。",
      tip: {
        general:
          "今天沒有「達成接觸」，但這不是失敗——保護者記住了你願意等。這份信任是下一次靠近的地基。把今天的猶豫與守門，理解為系統在保護自己，而不是拒絕你。安全維持住了，就是今天最重要的成果。",
        clinical:
          "當保護者拒絕接觸，治療師應將其界定為保護而非阻抗，並維持「安全，而不是接觸」的原則。即使未進入孩童部分，信任的累積（保護者「記住了你願意等」）即為進展。晤談結束時應提供可預測的收尾：接地練習、回顧、並把晤談後可能的情緒動搖正常化（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "今天門由你守，我尊重。下次我們再依你的步調談。現在先一起穩穩收尾。",
          strategy: "affirm-accept",
          nextNode: "end_resistant",
          effectiveness: 3,
        },
        {
          text: "你說它不是不想被看見——這句話，我記下了。我們今天先到這裡。",
          strategy: "neutral-response",
          nextNode: "end_resistant",
          effectiveness: 2,
        },
        {
          text: "那也沒辦法，反正今天看來是沒辦法進行了。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    r6_transition: {
      id: "r6_transition",
      speaker: "archetype",
      text: "（聲音浮動著，孩童部分、保護者、成人自我交錯）……它聽到了「你安全了」，可是它不太敢信……它需要一次一次、一點一點地，自己慢慢感覺到現在跟那時不一樣。急不得。我們今天……就到這裡，好嗎？它需要休息，我也需要。",
      tip: {
        general:
          "即使走得急了一些，系統自己踩了煞車——這是健康的保護訊號。孩童部分不會因為被「說」安全就相信，它需要在一次次的微步裡，自己去感覺到現在与那時的不同。今天的收尾，是把安全重新交還給系統。",
        clinical:
          "孩童部分的轉化是漸進的：它需要反覆、微小的當下錨定經驗，才能慢慢從「被困住」轉向「被涵容」。若步調過快，系統的煞車本身就是保護訊號。收尾時應做接地練習、回顧今天什麼有幫助，並把晤談後可能出現的發抖、情緒動搖正常化（《Child Parts and Survival Logic in Clinical Practice》）。",
      },
      choices: [
        {
          text: "好，今天到這裡。先感覺一下你的腳踩在地板上、你的呼吸。它今天很勇敢，你也是。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "我們回顧一下：今天有什麼讓你覺得稍微安心一點？",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "好吧，那下次我們再努力多走一點。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    end_transformed: {
      id: "end_transformed",
      speaker: "archetype",
      text: "（成人自我，聲音沉穩下來）……十秒。我看著它，腳踩在地板上。它還在發抖，可是它……它抬起頭看了我一眼。那一眼裡，好像有什麼東西鬆開了。它第一次感覺到，也許，那個晚上真的過去了。我不需要把它拉出來——我只要，留在這裡，陪著它。謝謝你，沒有衝進去，而是陪我停下來。",
      end: {
        summary:
          "你成功地邀請案主的「成人自我」帶領，以「承認與看見」為起點，用微小的、可隨時喊停的步調靠近孩童部分。那個凍結在過去的部分，第一次在成人自我的陪伴下，稍微感覺到「現在」與「那時」的不同。這不是把痛苦拔除，而是讓一份長年未被見證的痛，終於被安全地看見。",
        strategiesUsed: ["肯定與接納", "探索與好奇"],
        suggestion:
          "在日後的練習中，記住三件事：一、永遠把「安全，而不是接觸」放在第一位；二、把領導權交還給成人自我，不踏入拯救者位置；三、用「我們」的語言——「如果我們一起看十秒鐘，然後就停下來，會怎麼樣？」——把選擇權留在案主手中。猶豫不是阻抗，而是保護。",
        score: 3,
      },
    },

    end_partial: {
      id: "end_partial",
      speaker: "archetype",
      text: "（成人自我，帶著疲憊但穩定）……今天沒有走很遠，可是它知道有人看見它了。我學到的是，不用急著把它帶出來——只要一次一點點，讓它自己去感覺現在是安全的。下次，我還會再試著坐到它旁邊。這條路很長，但至少，方向是對的。",
      end: {
        summary:
          "你與系統建立了初步的安全與信任：承認了孩童部分的存在、看見了保護者的把關、並把步調交還給成人自我。今天的接觸雖然有限，但「安全維持住了」就是最重要的成果。這是一段需要耐心與反覆練習的旅程。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "持續練習「承認與看見」作為第一步，並在每次靠近前，先追蹤內在動力、與保護者協商步調。每次結束時做簡短的接地練習，把晤談後可能的情緒動搖、發抖正常化：「如果今晚覺得特別不穩，那是正常的，不是你做錯了什麼。」",
        score: 2,
      },
    },

    end_resistant: {
      id: "end_resistant",
      speaker: "archetype",
      text: "（保護者，在最後守著門）……今天它沒有出來。你問我會不會失望——我不會，我鬆了一口氣。但……你沒有硬闖，這個我記住了。它還在裡面等，已經等了很久。也許，下次。門我先守著。它不是不想被看見，它只是，太久沒有人願意照我們的規矩來。",
      end: {
        summary:
          "今天保護者守住了門，孩童部分沒有現身——但這不是失敗，而是系統在保護自己。你沒有硬闖、沒有把猶豫當成阻抗，這份尊重本身，就是下一次靠近的地基。那個躲在被子裡的部分還在等，而它終於遇到一個願意停下來的人。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "把今天的「沒有接觸」理解為保護，而非抗拒。下次遇到孩童部分浮現時，先做兩件事：一、承認並肯定那股害怕（「你的某個部分現在很害怕，這是可以理解的」）；二、在靠近之前，先與保護者商量、約好可以隨時喊停的訊號。一次一小步，可逆，得到許可。",
        score: 1,
      },
    },
  },
};
