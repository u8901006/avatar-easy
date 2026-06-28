import type { ArchetypeScript } from "@/lib/types";

export const adolescentScript: ArchetypeScript = {
  archetypeId: "adolescent",
  openingNarration:
    "你正準備靠近那個比較脆弱的內在部分，一道像刀一樣的聲音突然橫進來，擋在中間。它雙手交叉、下巴微抬，眼神裡全是警戒。它不是來吵架的——它是來畫線的。在它鬆口之前，你哪裡也到不了。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你正準備靠近那個比較脆弱的內在部分，一道像刀一樣的聲音突然橫進來，擋在中間。它雙手交叉、下巴微抬，眼神裡全是警戒。它不是來吵架的——它是來畫線的。在它鬆口之前，你哪裡也到不了。它盯著你看了幾秒，先發制人。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "archetype",
      text: "停。不要做你那一套內在小孩的把戲，你不准跟那個小的說話。還有，不要用那種溫柔的語氣，我受不了。規則先講好：你坐那裡、不要靠過來、不要問一堆私人問題。聽到了嗎？",
      tip: {
        general:
          "一個青少年保護者現身了，特徵是用抗議與規則來設界線、控制你能靠近的距離。它不是在挑釁，而是在保護更脆弱的部分。關鍵原則：不要說教、不要硬碰，先「命名它的功能」——讓它知道你看見它在守什麼。",
        clinical:
          "青少年部分以抗議作為界線設定的工具（boundary tool），常以身體位置、眼神接觸與規則來控制創傷暴露程度。五大介入原則之一是「先命名功能，再談內容」：在爭論細節之前，先反映它正在承擔的任務（創傷知情人格部分工作臨床手冊，第14章）。",
      },
      choices: [
        {
          text: "我看得出來，這是你想讓這個框架保持誠實、並保護那個更小部分的方式。我們就用這個來工作。",
          strategy: "affirm-accept",
          nextNode: "r2_affirmed",
          effectiveness: 3,
        },
        {
          text: "你列了這些規則——這些界線，是怎麼幫你們保持安全的？我想了解。",
          strategy: "explore-curious",
          nextNode: "r2_curious",
          effectiveness: 2,
        },
        {
          text: "你這樣什麼都設限，我們要怎麼往下走？你總得配合一點吧。",
          strategy: "confront-suppress",
          nextNode: "r2_defensive",
          effectiveness: 1,
        },
      ],
    },

    r2_affirmed: {
      id: "r2_affirmed",
      speaker: "archetype",
      text: "……哼。你倒是會說話。不過你以為說兩句好聽的我就會信你？每個大人都這樣，一開始很客氣，然後就開始踩線、開始說教、開始『為你好』。那個小的不能出來，他一出來一切都會崩潰。我守這裡守了很久了，我不會讓你弄壞他。",
      tip: {
        general:
          "它沒有退開，但也不再只是攻擊——它說出了真正的擔心：怕那個更小的部分崩潰。它扛著「守門」這件事很久了。繼續肯定它的守護，不要急著自證「我跟別人不一樣」。",
        clinical:
          "青少年部分常因反覆目睹大人失信而形成「規則只能由自己定」的信念。它同時啟動防衛與合作系統——在嚴格條件下其實願意合作。此時應肯定其守護功能，避免落入自證或空泛保證（第14章）。",
      },
      choices: [
        {
          text: "你守這裡守了很久，一個人扛著怕系統崩潰。辛苦你了。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你說「每個大人都踩線」——以前發生過什麼事？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "我不會像那些大人，你放心，我們就趕快開始吧。",
          strategy: "ignore-escape",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_curious: {
      id: "r2_curious",
      speaker: "archetype",
      text: "規則？你想知道規則？（戒備）……第一，不許用寶寶腔。第二，不許沒預警就靠近他。第三，我喊停就停，沒得商量。這些規則不是為難你，是……是因為以前沒有人守過這些。所以我只好自己來。",
      choices: [
        {
          text: "以前沒有人守，所以你自己接下來。這些規則，我會認真看待每一條。",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你說『以前沒有人守過』——那時候是什麼情況？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "這些規則有點太多了吧，我們能不能刪掉幾條？",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_defensive: {
      id: "r2_defensive",
      speaker: "archetype",
      text: "（冷笑）「配合」？你跟其他人一樣，只想繞過我去碰那個小的，好讓你覺得自己有進展。你不在乎過程會不會把他弄壞——收拾的人是我，不是你。所以規則我來定，你照著走就是了。",
      tip: {
        general:
          "被說教、被催促，它升級成測試——指控你跟其他大人一樣。這是它在試探：你會不會因此羞辱它、反駁它？不要自證、不要反駁，把選擇權還給它。承認事後收拾的真的是它。",
        clinical:
          "青少年部分會反覆測試治療師，以推翻其內在毒性信念；此觀點與 Control-Mastery Theory 一致（Weiss & Sampson, 1986）。測試是溝通，不是挑釁，應以好奇心而非控制回應。同時留意「動機糾纏」——它同時渴望連結又防衛（第14章）。",
      },
      choices: [
        {
          text: "你說得對，事後收拾的人是你，不是我。所以靠近的條件，由你來定。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "你怕我把那個小的弄壞——你最怕的是哪一種狀況？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "我是專業的，我知道分寸，你不信任我嗎？",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r3_recognized: {
      id: "r3_recognized",
      speaker: "archetype",
      text: "……你沒有反駁我，也沒有說教。（停頓）……很少人願意停下來聽。他們都覺得我是「阻抗」，是要被克服的障礙。可是沒有人問過我在守什麼。我守的是……他的尊嚴。還有我們的。如果讓別人隨便靠近他、看穿我們，那種被看扁的感覺……我受過一次就夠了。",
      tip: {
        general:
          "它透露了核心——它守的是尊嚴，怕被看扁。羞恥感是它的燃料。當你注意到並減輕這份羞恥，它的抗議往往會軟化。讓它知道：它的努力，被看見了。",
        clinical:
          "羞恥感是青少年部分運作的核心燃料；明確追蹤並減輕羞恥負荷，抗議通常會軟化。其防衛層次可這樣解讀：抗議是為了守尊嚴、形象管理是為了守歸屬、制定規則是為了調控親近距離——三者都指向「在安全條件下與他人連結」這個核心需求（第14章）。",
      },
      choices: [
        {
          text: "你守的是尊嚴——不讓任何人再把你们看扁。這份守護，我看見了。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "「被看扁的感覺，受過一次就夠了」——那次是怎麼發生的？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "沒有人會看扁你啦，你想太多了。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_engaged: {
      id: "r3_engaged",
      speaker: "archetype",
      text: "以前？……以前有個大人，說會尊重我們的規則。結果一到關鍵時刻，他就『為了我們好』，硬是衝進去了。那個小的崩潰了三天。是我把他拼回來的。從那以後我就發誓，規則我來定，誰都不能再越界。",
      choices: [
        {
          text: "你把他拼回來，守了三天。難怪你對規則這麼堅持——那是你用教訓換來的。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "那次之後，你訂下的規則，是為了擋住哪一種狀況再次發生？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "但不是每個大人都會那樣，你不能因為一個人就否定全部。",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_escalated: {
      id: "r3_escalated",
      speaker: "archetype",
      text: "你看，你又來了。嘴巴上說尊重，手已經伸過來了。我告訴你，在這個房間裡，靠近那個小的條件，由我來決定。你要嘛照規矩來，要嘛出去。不要想用「專業」這兩個字壓我，我吃過這套。",
      tip: {
        general:
          "它把你的話當成「權力壓制」——這正是它最戒備的東西。不要爭辯自己的專業或善意，那會踩到它的階級雷區。承認條件由它定，把控制權交還，反而能降低它的威脅感。",
        clinical:
          "青少年部分對權力階級（rank and power）極度敏感。五大原則之一是「尊重權力階級敏感度」：清楚說明決策如何形成、提供真實的選擇、遵守每一項協議——公平能穩定階級系統。避免任何帶有「壓制」意味的回應（第14章）。",
      },
      choices: [
        {
          text: "你說得對，條件由你定。我不會用任何理由越過你訂的規矩。",
          strategy: "affirm-accept",
          nextNode: "r4_hint",
          effectiveness: 3,
        },
        {
          text: "你說吃過這套——之前被「專業」壓過的經驗是什麼？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "我不是在壓你，我是想幫忙，你何必每次都把人推開？",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r4_reveal: {
      id: "r4_reveal",
      speaker: "archetype",
      text: "……你想知道條件？（戒備，但語氣鬆了一點）……第一，不能有驚喜，任何靠近事先講。第二，我喊停就停，立刻，一秒都不能拖。第三……不能讓我丟臉。如果你能做到這三點……也許，也許我們可以談談。但你要是敢踩線一次，就再也別想靠近。",
      tip: {
        general:
          "它開出條件了——這是重大進展。它把「不行」轉成了「在什麼條件下可以」。認真對待每一條，因為從現在起，你必須言出必行。它正盯著你會不會守信。",
        clinical:
          "解除青少年部分防衛的四個關鍵條件：明確的公平、可逆（可反悔）的步驟、真實的選擇、由成人自我引導的合作。把僵硬的拒絕轉化為可協商的條款，是建立合作關係的核心技術（第14章）。",
      },
      choices: [
        {
          text: "這三點我都答應，而且會做到。我們先做一件小事，隨時可喊停——由你的成人自我來帶，好嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "這些條件，是怎麼一步步形成的？哪一條對你最重要？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "好好好，那我們現在就開始，先試著叫那個小的出來看看。",
          strategy: "confront-suppress",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_hint: {
      id: "r4_hint",
      speaker: "archetype",
      text: "……你看起來……不像會嘲笑人的樣子。但我不能只靠感覺。我得測試你。我會一直測，直到我確定你是真的會停下來的人。這不是針對你，是……是我對那個小的責任。我答應過要守著他。",
      choices: [
        {
          text: "你答應過要守著他。那你的測試，我會一一接下來——這也是我對你的承諾。",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你會用哪些方式測？我想先知道，才不會誤觸。",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "不用測了啦，我是可以信任的人，你試了就知道。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_struggle: {
      id: "r4_struggle",
      speaker: "archetype",
      text: "（防衛更高）你又在催了。我說過不能急。你們這些大人都一樣，只看結果。你知不知道每次被你們推著走，事後收拾的是誰？是我。那個小的發抖發到天亮，也是我在陪。你以為你在幫忙，其實你在添亂。",
      tip: {
        general:
          "走太快喚醒了它的警戒——它怕事後反彈、怕又要替系統收拾。承認它在事後承擔的重量，把步調交還給它。它要的不是你的善意，而是你願意慢下來的證明。",
        clinical:
          "繞過青少年部分直接接觸兒童部分、或步調過快，是臨床大忌——晤談後的反彈常由青少年部分承擔。應承認其負擔，將步調控制權交還給系統，並以可逆的微小步驟前進（第14章）。",
      },
      choices: [
        {
          text: "你陪他發抖到天亮，沒有人看見。我今天不催了——步調交給你。",
          strategy: "affirm-accept",
          nextNode: "r5_cautious",
          effectiveness: 3,
        },
        {
          text: "你說「事後收拾的是我」——平常這些重量，你都自己扛嗎？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "好好好，那今天先不要碰，你們自己看著辦。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r5_negotiate: {
      id: "r5_negotiate",
      speaker: "archetype",
      text: "（成人自我的聲音漸漸進來，青少年部分仍在旁監督）……好。我們試試。但我有條件：今天只做一件事，讓那個小的知道有人在，不深入、不挖記憶。我可以坐在他旁邊，但你要在旁邊看著界線，一有不對就喊停。這樣……可以嗎？",
      tip: {
        general:
          "成人自我在青少年部分的監督下開始帶領了——這是最理想的合作形式。同意它的條件，並保證你會一起幫忙看著界線。青少年部分從「封鎖」轉為「監督合作」，這就是轉化。",
        clinical:
          "「由成人自我引導的合作」是解除防衛的第四條件。青少年部分從封鎖者轉為合作守護者，其角色功能獲得調整而非被消除——這正是療癒的目標。治療師的角色是陪著看住界線，而非代為領導（第14章）。",
      },
      choices: [
        {
          text: "可以。今天只讓他知道有人在。界線我陪你看著，你喊停我們就停。",
          strategy: "affirm-accept",
          nextNode: "end_transformed",
          effectiveness: 3,
        },
        {
          text: "我答應。不過我們先約一個明確的停止訊號，確保隨時可喊停。",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "只做這樣太少了，既然他願意，我們今天就多走幾步吧。",
          strategy: "confront-suppress",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_cautious: {
      id: "r5_cautious",
      speaker: "archetype",
      text: "……我們的步調。對。我其實……我也累了。守了這麼多年，我沒有一天放鬆過。但我不敢放手。萬一我放手，他又受傷了怎麼辦？那會是我的錯。我答應過要保護他的。",
      choices: [
        {
          text: "你累了，但不敢放手，因為你把他當成自己的責任。今天我們只穩穩收尾，不勉強。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "你說「那會是我的錯」——這份責任，是什麼時候開始扛上的？",
          strategy: "explore-curious",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "你不是一個人，放下來交給我吧，我來處理。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_resistant: {
      id: "r5_resistant",
      speaker: "archetype",
      text: "（青少年部分，仍守著門）……今天他不出來。你問我會不會失望？我不會，我鬆了一口氣。但你……你沒有硬闖，也沒有嘲笑我的規則。這個我記下了。下次再談。門我還是守著，但也許……也許下次，我可以把門開一條縫。",
      tip: {
        general:
          "今天沒接觸到那個更小的部分，但它記住了你尊重規則、沒有越界。它第一次說出「也許可以把門開一條縫」。這份信任的累積，就是今天的進展——它不是失敗。",
        clinical:
          "合作建立在「程序的可靠性」以及對階級與功能的尊重之上，而非安撫、洞察或挑戰。即使晤談中沒有實質接觸兒童部分，程序的可靠性本身就會累積信任，促成親近變得可能等微小質變（第14章）。",
      },
      choices: [
        {
          text: "今天門由你守，我尊重。下次依你的步調，我們再談。先穩穩收尾。",
          strategy: "affirm-accept",
          nextNode: "end_resistant",
          effectiveness: 3,
        },
        {
          text: "「也許可以把門開一條縫」——這句話我記下了。今天先到這裡。",
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
      text: "（青少年部分，語氣不再那麼尖銳）……規則我們訂好了：事先講、喊停就停、不讓任何人丟臉。我會看著你守不守。你要是守住了……也許我不用再把門關得那麼死。守門很累，但我只信任守得住規則的人。",
      tip: {
        general:
          "它把界線交給了規則，而不是自己的警戒——這是健康的轉變。接下來每次它又畫線時，溫柔地回到今天訂下的這幾條規則上。言出必行，是它唯一認得的信任語言。",
        clinical:
          "青少年部分的轉化目標，是讓它的角色從「封鎖」轉為「合作守護」。當其核心意圖被理解、因應方式獲得調整，它會放下過度防衛的武裝，融入更完整的內在系統。維持轉化的關鍵，是治療師對每一項協議的可靠履行（第14章）。",
      },
      choices: [
        {
          text: "規則在這裡，我會守。今天你很勇敢，願意把規則說出來。我們就到這裡。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "我們回顧一下：今天訂下的規則，哪一條你覺得最重要？",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "好吧，那希望下次能多談一點。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    end_transformed: {
      id: "end_transformed",
      speaker: "archetype",
      text: "（青少年部分，第一次語氣放軟）……你真的喊停了。而且你沒有趁機多挖一點。那個小的今天知道有人在，沒有崩潰，也沒有丟臉。我守了那麼久的門，今天……好像可以稍微放下手。你通過了我的測試。下次，我會讓你靠近一點。",
      end: {
        summary:
          "你成功地「先命名功能、再談內容」，尊重青少年部分對權力階級的敏感，共同建構了可協商的規則，並把領導權交給成人自我。這個門口的守衛者第一次放下手——它從封鎖者，轉變為願意合作的守護者。它測試了你，而你通過了。",
        strategiesUsed: ["肯定與接納", "探索與好奇"],
        suggestion:
          "在日後的練習中，記住三件事：一、把「不」視為界線工具而非挑釁；二、提供真實的選擇、言出必行——公平能穩定階級系統；三、明確追蹤羞恥感，當羞恥被看見，抗議往往就會軟化。它需要的不是你的善意，而是你「守得住規則」的證明。",
        score: 3,
      },
    },

    end_partial: {
      id: "end_partial",
      speaker: "archetype",
      text: "（青少年部分，帶著疲憊）……規則訂好了，停止訊號也約了。今天沒有走很遠，但那個小的知道有人在。我學到的是，不用每次都把門關得那麼死——只要對方願意照規矩來。下次，我會試著再放鬆一點。這條路很長，但方向，好像是對的。",
      end: {
        summary:
          "你與這個守門者建立了初步的合作：命名了它的守護功能、共同建構了規則、把步調交還給系統。門沒有全開，但門閂鬆了。這是一段需要言出必行與反覆驗證的旅程——它只信任守得住規則的人。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "持續以「程序的可靠性」累積信任：每一次都確實遵守協議、提供真實選擇、不給虛假承諾。下次它又畫線時，先回到你們訂下的規則上，而不是重新爭論。把每一次的測試，當作它對你的信任考題。",
        score: 2,
      },
    },

    end_resistant: {
      id: "end_resistant",
      speaker: "archetype",
      text: "（青少年部分，仍守著門，但姿態沒那麼緊繃）……今天他不出來。你沒有硬闖，也沒有把我當「阻抗」。這個我記住了。門我還是守著——但你要知道，很少人願意照我的規矩來。你願意。所以下次……下次我會考慮，把門開一條縫。",
      end: {
        summary:
          "今天青少年部分守住了門，那個更小的部分沒有現身——但這不是失敗。你沒有硬闖、沒有把它的抗議當成需要壓制的挑釁、也沒有給它虛假的承諾。它記住了你的尊重，而「下次考慮把門開一條縫」，是它給出的、最珍貴的承諾。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "把今天的「沒有接觸」理解為它在保護系統，而非拒絕你。下次遇到它畫線時，先做兩件事：一、命名它的守護功能（「我看得出來這是你保護那個更小部分的方式」）；二、提供真實的選擇，並且言出必行。它測試你，是因為它還抱著一絲希望——希望這次，有人會真的停下來。",
        score: 1,
      },
    },
  },
};
