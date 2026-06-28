import type { ArchetypeScript } from "@/lib/types";

export const homicidalScript: ArchetypeScript = {
  archetypeId: "homicidal",
  openingNarration:
    "你還來不及開口，整個空間的氣壓就变了。一股冰冷、篤定的力量壓過來，像法庭，也像手術室。它不带情緒，只有一種不容質疑的「必須」。它盯著你，眼神裡沒有憤怒，只有審判。它要談的，不是要不要做，而是「什麼時候做完」。",
  totalRounds: 7,
  nodes: {
    start: {
      id: "start",
      speaker: "narrator",
      text: "你還來不及開口，整個空間的氣壓就变了。一股冰冷、篤定的力量壓過來，像法庭，也像手術室。它不带情緒，只有一種不容質疑的「必須」。它盯著你，眼神裡沒有憤怒，只有審判。它要談的，不是要不要做，而是「什麼時候做完」。它先你一步開了口。",
      next: "r1",
    },

    r1: {
      id: "r1",
      speaker: "archetype",
      text: "別浪費時間。我已經決定了——那個部分必須消失。她是污染源，是禍害，她讓整個系統變得軟弱、危險。只要她還在，我們遲早會被她拖垮。這不是商量，是通知。你不要想來勸我「放下」。",
      tip: {
        general:
          "一個「內在執法者」現身了。它說的是「消除另一個內在部分」，不是對外的暴力。它帶著強烈的篤定與緊迫，並且預期你會反對、會跟它爭辯。此刻最忌諱兩件事：羞辱它、或跟它爭奪主導權。先肯定它背後的保護意圖，同時堅定、不帶評價地立下唯一不能妥協的原則。",
        clinical:
          "介入第一優先是建立無談判空間的安全防線：「我們共用同一個身體、共享同一個生命，不容許受到任何傷害。」驅動它的多重認知扭曲包含時間定向感瓦解、階級受威脅、僵化的道德準則。應先處理安全，再把它的手段轉譯回正向保護目的，全程維持其尊嚴（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "我聽到你是在保護這個系統，免於你認為危險的事傷害。但在這裡有一條我們共同遵守、不妥協的原則：所謂的保護，必須讓每個人都安全活著，其中也包括你。",
          strategy: "affirm-accept",
          nextNode: "r2_affirmed",
          effectiveness: 3,
        },
        {
          text: "在你眼裡，那個部分帶來最大的危險是什麼？我想先理解。",
          strategy: "explore-curious",
          nextNode: "r2_curious",
          effectiveness: 2,
        },
        {
          text: "你這種想法太可怕、太不正常了，我絕對不能讓你這樣做。",
          strategy: "confront-suppress",
          nextNode: "r2_defensive",
          effectiveness: 1,
        },
      ],
    },

    r2_affirmed: {
      id: "r2_affirmed",
      speaker: "archetype",
      text: "……保護。對，我就是在保護。你以為我喜歡這樣？如果她把那些東西展現出來——那些記憶、那些發抖、那些噁心的需求——整個系統會崩潰。我守這條線守了很久，不會讓任何人把它弄壞。「包括我」是什麼意思？我本來就是在為大家。",
      tip: {
        general:
          "它接受了「保護」這個命名——這是關鍵裂縫。它說出了真正的恐懼：怕那個部分把無法承受的東西展現出來、怕系統崩潰。它還沒意識到「包括你」的涵義（共用同一個身體）。順著它的保護意圖走，別急著一次講完。",
        clinical:
          "當保護意圖被命名而未遭羞辱，防衛強度通常會下降。此時可逐步帶入「共用同一個身體」的覺察：該部分常因注意力隧道效應與時間感瓦解，而忽略其目標與自身共用同一個主體。應以提問而非說教引入（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "你守了很久，怕她把系統弄崩潰。我想確認一件事——當你說要讓她「消失」，你預期這對你們每一個人、包括你自己，意味著什麼？",
          strategy: "affirm-accept",
          nextNode: "r3_recognized",
          effectiveness: 3,
        },
        {
          text: "你最怕她展現出來的是什麼？是某種記憶，還是某種感覺？",
          strategy: "explore-curious",
          nextNode: "r3_engaged",
          effectiveness: 2,
        },
        {
          text: "你們共用同一個身體，你懂嗎？你傷她就是傷你自己。",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_curious: {
      id: "r2_curious",
      speaker: "archetype",
      text: "危險？她身上帶著那些——那些讓人無法忍受的東西。她髒。她不配。只要她靠近，一切都會被污染，我們會再也站不起來。我必須在她把一切拖下去之前，先把她處理掉。這是唯一的方法。",
      choices: [
        {
          text: "你說她「髒」——你是不是擔心，她身上承載了某些讓系統無法忍受的記憶或感受，一旦靠近就會崩潰？",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "先不做任何動作。我們一起回到現在——今天星期幾？你現在在哪裡？",
          strategy: "neutral-response",
          nextNode: "r3_recognized",
          effectiveness: 2,
        },
        {
          text: "她不是髒，她是一個受傷的部分，你這樣標籤她是不對的。",
          strategy: "confront-suppress",
          nextNode: "r3_escalated",
          effectiveness: 1,
        },
      ],
    },

    r2_defensive: {
      id: "r2_defensive",
      speaker: "archetype",
      text: "（氣勢瞬間飆升，語氣更冷）「不正常」？你看，你跟其他人一樣，一聽到就想壓我、就想用「你有病」來羞辱我。我告訴你，在這裡，誰比較清醒還不知道。你愈想壓我，我就愈確定——非做不可。你攔不住我的。",
      tip: {
        general:
          "被羞辱、被壓制，它的氣勢不降反升——這正是它最危險的觸發點。它把你的話解讀為「敵意與階級壓制」，於是更篤定自己才是對的。停止爭辯，主動放低姿態，用客觀、尊重的語言，明確告訴它你不是來制伏它的。",
        clinical:
          "臨床禁忌之首：避免與該部分陷入權力爭奪或氣勢對立，因為這會加深它「外在世界充滿敵意」的根本假設，激化其緊迫感與反撲。應主動降低自身權威階級，用基於尊重許可的語言，表明想延攬它的專業經驗共同制定安全計畫（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "我剛才的話讓你覺得被壓制、被羞辱，那是我的方式不好。我不是來制伏你的——我想理解你拼命在守什麼。",
          strategy: "affirm-accept",
          nextNode: "r3_engaged",
          effectiveness: 3,
        },
        {
          text: "我們先不爭這個。你可以告訴我，你最早是從哪裡學到「必須先發制人」這套方法的嗎？",
          strategy: "explore-curious",
          nextNode: "r3_escalated",
          effectiveness: 2,
        },
        {
          text: "我沒有要羞辱你，但你必須冷靜下來，不然我沒辦法繼續。",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_recognized: {
      id: "r3_recognized",
      speaker: "archetype",
      text: "意味著什麼？（停頓，像第一次被這樣問）……她從來沒這樣想過。我們……共用同一個身體？不，這不一樣。她是問題，我是解決問題的人。我們怎麼會是同一個……（聲音出現裂縫，但很快又冷硬回來）就算一個身體又怎樣？把生病的部分切除，身體才能活。",
      tip: {
        general:
          "它第一次動搖了——「共用同一個身體」這個事實短暫進到它的意識裡。它隨即用「切除生病部分」的比喻把它推開，但裂縫已經出現。別趁機說教；順著它的醫療比喻，把它引向「不開刀也能保護身體」的方向。",
        clinical:
          "關鍵轉折是建立自我分化與時間定向：該部分常因創傷時間（trauma-time）的運作，把內在另一個部分視為獨立的威脅。當「共用同一個身體」的覺察浮現，即是介入的窗口。應穩住這個覺察，並引導其區分此時此刻與創傷當時（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "你說「切除生病部分，身體才能活」——所以你的核心職責，是讓整個系統安全運作，而不是為了傷害而傷害。對嗎？",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "你說她「生病」——你具體擔心她身上哪一部分會把系統拖垮？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "切除？你在說什麼，這又不是真的手術！",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_engaged: {
      id: "r3_engaged",
      speaker: "archetype",
      text: "她身上……是那些記憶。那個晚上。那種全身發抖、那種想被在乎的噁心渴望。只要這些一出來，我們就會被看穿、被嘲笑、被擊碎。她根本不該抱任何希望。我非要她閉嘴不可——我已經忍她忍到極限了。",
      tip: {
        general:
          "它說出了核心：它無法忍受的，是那個部分承載的創傷記憶與脆弱需求。它嘴裡的「噁心」「不配」，其實是它自己承受不了的痛苦，投射成對方的缺陷。把它道德批判的詞，溫和地轉成「心理描述」——這能削弱那股要把對方消滅的迫切感。",
        clinical:
          "厭惡感是激化衝突的助燃劑。應將道德批判語言轉譯為中性心理描述：把「她很髒」轉為「她現在是一個承載著無法忍受記憶、全身發抖、需要空間的小孩」。這種敘事能減少去人性化、降低迫切感，並找回主體性（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "你忍到極限了——因為你一直在替整個系統，獨自擋住那些你們都承受不了的記憶。那份重量，從來沒有人幫你分擔過。",
          strategy: "affirm-accept",
          nextNode: "r4_reveal",
          effectiveness: 3,
        },
        {
          text: "我們先停下來，回到現在：說出今天日期、你所在的地方，還有眼前一個不屬於過去的東西。",
          strategy: "neutral-response",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "你不能再逼她閉嘴了，那只會讓事情更糟，你難道看不出來嗎？",
          strategy: "confront-suppress",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r3_escalated: {
      id: "r3_escalated",
      speaker: "archetype",
      text: "（冰冷、隧道般的篤定）你問我從哪裡學的？從那個必須靠這套才能活下去的地方。在那裡，示弱就是死。我學得很快，所以我能站在這裡。你沒資格評斷我當時的選擇。現在，讓開，讓我把該做的做完。",
      tip: {
        general:
          "它回到了「創傷時間」——在那個時空，先發制人確實是保命唯一解。它的篤定不是惡意，而是過去的有效策略。別評斷它的過去；承認那套在當時是真的有用，然後把它帶回「現在已經不同」。",
        clinical:
          "該部分的篤定、速度與道德黑白，反映的是創傷時間留下的生存學習，而非惡意。介入應承接其良善初衷，並重建時間定向：協助系統區分「此時此刻」與「當時」，直到內心重新感受到「自己是有選擇的」（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "在那個地方，這套確實是唯一能讓你活下去的方法。我沒有資格評斷。我想問的是——現在這個房間、這個時間，跟那時一樣嗎？",
          strategy: "affirm-accept",
          nextNode: "r4_hint",
          effectiveness: 3,
        },
        {
          text: "你說「示弱就是死」——那個地方，是什麼樣的地方？",
          strategy: "explore-curious",
          nextNode: "r4_hint",
          effectiveness: 2,
        },
        {
          text: "但那都是過去的事了，你現在不能再這樣活下去。",
          strategy: "ignore-escape",
          nextNode: "r4_struggle",
          effectiveness: 1,
        },
      ],
    },

    r4_reveal: {
      id: "r4_reveal",
      speaker: "archetype",
      text: "……不是為了傷害而傷害。對。我的職責是讓系統安全運作。（漫長的沉默）……只是，這套方法……會帶來致命的危險。我自己也知道的。但我沒有別的工具。除了讓她消失，我不知道還能怎麼擋住那些會把我們擊碎的東西。",
      tip: {
        general:
          "它承認了方法的危險，也說出真正的困境：除了消除，它沒有別的工具。這是最關鍵的轉化點——它不是不肯放手，是不會別的方法。此刻你要做的，是給它一個能保留尊嚴、又能達成保護目的的「新角色」。不是要它放棄職責，而是升級它的工具。",
        clinical:
          "核心介入是「更新角色，而非抹煞初衷」：為該部分提議能保留良善初衷、又不必訴諸暴力的新角色——親近程度的守門人、步調調控者、早期預警與監測機制、邊界捍衛者。務必讓每項新角色具體可行：觸發訊號是什麼、由誰接收、接下來做什麼（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "你不是不肯放手，是沒有別的工具。那我們不取消你的職責，而是升級它——你願不願意試試，當系統的「警報器與邊界執法者」：當事物太靠近、太冒險，你發出訊號讓大家及時應變，而不是由你一個人去消除。",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "除了讓她消失，你過去試過哪些方法？哪些有效、哪些沒有效？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "那你現在就交給我，我來處理那個部分，你休息。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_hint: {
      id: "r4_hint",
      speaker: "archetype",
      text: "（呼吸變慢了一些，但眼神仍在掃描）……現在。今天是……（頓了一下）這裡是諮商室。窗外有……有光。不是那個晚上。……她還是很危險。但我不確定她是不是……真的必須消失。這個念頭，她是第一次有。",
      choices: [
        {
          text: "你剛剛把內在帶回了現在，這很不容易。我們順著這個——你的職責是擋住危險，不是消除任何人。對嗎？",
          strategy: "affirm-accept",
          nextNode: "r5_negotiate",
          effectiveness: 3,
        },
        {
          text: "你說「第一次有這個念頭」——是什麼讓你開始不確定？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "對吧，早就跟你說她不該消失了，你終於想通了。",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r4_struggle: {
      id: "r4_struggle",
      speaker: "archetype",
      text: "（被你刺激，重新冷硬）你看，你根本不懂。你只會叫我「冷靜」「放下」「交出去」。這些話我聽了一百遍，沒有一次有用。要是沒有我，這個系統早就被她拖去一起死了。我是撐住這裡的人。你卻只會嫌我手段難看。",
      tip: {
        general:
          "它又退回防衛——因為它感覺被否定、被急著「處理掉」。它說的是實話：它確實是撐住系統的人。承認這一點。它需要的，不是被說服放棄，而是被看見「沒有你，系統真的會崩潰」。先穩住關係，再談替代方案，否則只會反撲。",
        clinical:
          "若介入過快或流於道德教化，該部分會反撲並重申其必要性。應在不引發羞恥的前提下堅定畫界，同時承接其「我才是撐住系統的人」的真實經驗。把後續每一步都框架為「隨時可還原的實驗」，而非強硬指令（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "你說得對，沒有你，這個系統撐不到現在。你一直是那個擋在最前面的人。我沒有要取消你——我想幫你找到不會致命的方式，繼續做你一直在做的事。",
          strategy: "affirm-accept",
          nextNode: "r5_cautious",
          effectiveness: 3,
        },
        {
          text: "你說聽了一百遍都沒用——那麼，過去有沒有哪個方法，哪怕只有一點點，曾經讓系統穩住過？",
          strategy: "explore-curious",
          nextNode: "r5_cautious",
          effectiveness: 2,
        },
        {
          text: "好，那你自己說，你到底想怎樣？",
          strategy: "ignore-escape",
          nextNode: "r5_resistant",
          effectiveness: 1,
        },
      ],
    },

    r5_negotiate: {
      id: "r5_negotiate",
      speaker: "archetype",
      text: "（態度仍是冷的，但語氣裡多了一絲算計，像在評估）……警報器與邊界執法者。意思是，我還是負責危險，只是不用把她解決掉？……我可以聽聽。但你要給我一個明確的步驟——當我感覺她快要失控、快要把我們拖下去的時候，我到底要做什麼。我不能沒有動作。",
      tip: {
        general:
          "它接受「角色升級」了——這是重大進展。它要的不是放棄職責，而是一個「能立刻執行的具體動作」。給它一個簡短、可重複、隨時可喊停的「暫停程序」。它要的是工具，不是道理。",
        clinical:
          "為該部分提供簡短、可重複的暫停腳本作為程序橋樑：例如「這是現在。這是一個成年的身體。我們暫停。不造成傷害。」機制簡單，高度壓力下也能直覺提取，並具體到足以創造選擇的契機。後續共同制定壓力飆升時的停止訊號與冷卻流程（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "好。我給你一個動作：當你感覺她快要失控，先在心裡說「這是現在、這是成年的身體、我們暫停、不造成傷害」，然後輕敲兩下作為停止訊號，交給成人自我。我們先一起演練一次。",
          strategy: "affirm-accept",
          nextNode: "end_transformed",
          effectiveness: 3,
        },
        {
          text: "我們一起設計這個步驟——觸發訊號是什麼、由誰接手、接下來做什麼。你來定規則，我來補強。",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "不用這麼麻煩，你只要保證不再傷害那個部分就好。",
          strategy: "confront-suppress",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_cautious: {
      id: "r5_cautious",
      speaker: "archetype",
      text: "（語氣不再那麼篤定，帶著一絲疲憊）……不會致命的方式。我從來沒有想過，保護可以有很多種樣子。在我的世界裡，只有「消除」跟「被消除」。你說的這些……我聽得進去，但我需要時間。而且，我要先確定，你不會趁機把她放出來、把系統搞垮。",
      choices: [
        {
          text: "我答應你：在你準備好之前，我們不深入碰她。今天我們只做一件事——把那個「暫停」的動作練熟，讓你在壓力飆升時有工具可用。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "你的世界只有「消除」跟「被消除」——這個框架，是什麼時候成型的？",
          strategy: "explore-curious",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "你不放手，我們就沒辦法往前，你自己決定吧。",
          strategy: "ignore-escape",
          nextNode: "r6_transition",
          effectiveness: 1,
        },
      ],
    },

    r5_resistant: {
      id: "r5_resistant",
      speaker: "archetype",
      text: "（仍冷硬，但沒有離開）……今天我不會動手。不是因為你說服了我，是因為……她剛剛說了一句話，我還在消化。你沒有跟我硬碰，也沒有嫌我難看。這個我記下了。但門我還是守著。我守我的職責，只是……也許，保護不一定要靠消滅。這個念頭，我還在試著相信。",
      tip: {
        general:
          "它今天沒有行動——這不是失敗，而是危機被擋下來了。它說出了今天最重要的訊號：「保護不一定要靠消滅，這個念頭我還在試著相信。」這份「還在試著相信」，就是轉化的種子。在它離開前，至少把一個暫停動作安頓好。",
        clinical:
          "評估進展的指標，不是「消除衝動」是否完全消失，而是能否更快進入暫停狀態、情緒飆升頻率是否減少、能否穩定運用安全程序。即使部分仍在抗拒，只要危機被暫停、程序被植入，即為進展。會談結束前應共同制定務實的安全計畫，並訂出危機應變底線（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "今天你把危機帶進來談、沒有行動——這件事本身就很重要。我們至少帶一個工具走：那個20秒的暫停腳本，我們再演練一次。",
          strategy: "affirm-accept",
          nextNode: "end_resistant",
          effectiveness: 3,
        },
        {
          text: "「也許保護不一定要靠消滅」——這句話我記下了。我們今天先穩穩收尾。",
          strategy: "neutral-response",
          nextNode: "end_resistant",
          effectiveness: 2,
        },
        {
          text: "好啦，那希望你下次能真的放下。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    r6_transition: {
      id: "r6_transition",
      speaker: "archetype",
      text: "（態度不再像法庭，但仍嚴肅）……我不保證我不會再有那個念頭。它出現的時候，我還是會覺得那是唯一的辦法。但你給了我一個別的動作——停下來、敲兩下、把現在帶回來。我會試著用。我不能承諾它會消失，但我可以承諾：我會試著先暫停。",
      tip: {
        general:
          "它給出了一個誠實而重要的承諾：不是「念頭會消失」，而是「會試著先暫停」。這正是真實的進展樣貌。未來那個念頭還是會回來，但只要它能更快進入暫停、把現在帶回來，系統就多了一層安全。重複演練那個簡短動作，是它唯一的依靠。",
        clinical:
          "真正的安全感是從程序中長出來的：在身心平穩時反覆演練，並在壓力下能隨時提取的微小、可逆的因應動作。治療的進步從來不是指暴力念頭徹底絕跡，而是能更快速進入暫停、飆升頻率減少、有更乾淨的退場機制、與成人自我保持更穩定的協調（《Child Parts and Survival Logic in Clinical Practice》，第20章）。",
      },
      choices: [
        {
          text: "「會試著先暫停」——這就夠了。我們今天把這個暫停動作練熟，讓你在最需要的時候拿得出來。",
          strategy: "affirm-accept",
          nextNode: "end_partial",
          effectiveness: 3,
        },
        {
          text: "我們回顧一下：今天學到的暫停步驟，你會怎麼跟內在其他人說明？",
          strategy: "neutral-response",
          nextNode: "end_partial",
          effectiveness: 2,
        },
        {
          text: "希望你下次別再有這種念頭了。",
          strategy: "ignore-escape",
          nextNode: "end_resistant",
          effectiveness: 1,
        },
      ],
    },

    end_transformed: {
      id: "end_transformed",
      speaker: "archetype",
      text: "（語氣仍是冷的，但那股「必須立刻做完」的緊迫，散了）……「這是現在、這是成年的身體、我們暫停、不造成傷害。」……敲兩下。……我做了。她還在，我還在，我們都還在。原來保護可以不用靠消滅對方。我還是系統的執法者，只是從今天起，我的工作是守住邊界、發出警報，而不是去清除任何人。謝謝你沒有羞辱我，也沒有跟我爭。",
      end: {
        summary:
          "你堅守了不能妥協的安全防線，同時全程維護了它的尊嚴——沒有羞辱、沒有爭權。你把它激烈的手段轉譯回「保護」這個正向目的，引導它重建此時此刻的定向，並為它升級了角色：從「消滅者」轉為「警報器與邊界執法者」，還植入了一個它在壓力下能直覺提取的暫停程序。它沒有被消滅，而是被更新了。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "在日後的練習中，記住四件事：一、先把「我們共用同一個身體、不造成傷害」立為不可妥協的底線；二、絕不羞辱、不爭權——否則只會印證它對世界的敵意假設；三、把它的手段轉譯回正向保護目的，並為它升級一個能保留尊嚴的新角色；四、給它一個簡短、可重複、隨時可喊停的暫停動作。進步不是念頭絕跡，而是更快進入暫停。",
        score: 3,
      },
    },

    end_partial: {
      id: "end_partial",
      speaker: "archetype",
      text: "（態度嚴肅，但不再像要立刻行動）……暫停的步驟，我們訂好了。觸發訊號、誰接手、接下來做什麼，都講清楚了。今天我沒有放手我的職責，只是多了一個工具。我不能保證那個念頭不再出現，但我會試著——在它出現的時候，先暫停，而不是直接行動。這對我來說，已經是很大的讓步了。",
      end: {
        summary:
          "你與這個內在執法者建立了一個務實的安全協議：立下了不可妥協的底線、維護了它的尊嚴、並共同設計了壓力飆升時的暫停程序與停止訊號。它沒有放棄職責，但接受了升級。真實的進展不是念頭消失，而是它能更快進入暫停。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "會談結束前，務必共同制定一份務實的安全計畫：暫時避免獨處、減少接觸觸發源、壓力飆升時啟動暫停腳本。並訂出明確的危機應變底線——一旦傷害意圖變得強烈，必須立刻聯繫緊急醫療或危機支持管道。在身心平穩時，反覆演練那個暫停動作，讓神經系統能在危機中直覺提取。",
        score: 2,
      },
    },

    end_resistant: {
      id: "end_resistant",
      speaker: "archetype",
      text: "（仍冷硬，但已從法庭退回到守衛的位置）……今天我沒有行動。你沒有跟我硬碰，也沒有把我當怪物。那個暫停的腳本，我帶走了，雖然我還是覺得它有點……可憐。但我承認一件事：原來保護可以有很多種形式，不一定非得靠消滅對方。這個念頭，我還在試著相信。我可能還會生氣，但下次，我會試著先暫停。",
      end: {
        summary:
          "今天危機被擋下來了——它把計畫帶進對話裡、並且沒有行動，這本身就是系統「主動求助」的珍貴訊號。你沒有羞辱它、沒有與它爭權，並至少植入了一個暫停動作。它還在生氣，還在「試著相信保護可以不靠消滅」——這份猶豫，就是改變的種子。",
        strategiesUsed: ["肯定與接納", "中性回應"],
        suggestion:
          "下次遇到它現身時，先做三件事：一、立下「不造成傷害」的底線，但全程維護它的尊嚴；二、把它道德批判的詞（髒、禍害）溫和轉譯成心理描述（承載著無法忍受記憶、需要空間）；三、引導它回到此時此刻，並演練那個簡短的暫停腳本。它需要的是工具與尊重，不是道理與壓制。",
        score: 1,
      },
    },
  },
};
