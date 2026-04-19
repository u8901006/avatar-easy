import type { ArchetypeScript } from "@/lib/types";

export const perpetratorImitatorScript: ArchetypeScript = {
  archetypeId: "perpetrator-imitator",
  openingNarration:
    "你感覺到一股冰冷的氣息從身後靠近。那不是陌生的——它太熟悉了。一種你以為已經遠離的控制感重新籠罩過來，像是某個人從未真正離開。你感到自己的呼吸變得淺而急促，身體開始記得一種你不想記得的服從。一個聲音在你耳邊響起，語氣冰冷而篤定，帶著一種不容置疑的威嚴……",

  totalRounds: 7,

  nodes: {
    "node-1": {
      id: "node-1",
      speaker: "archetype",
      text: "你以為你可以自己做決定嗎？別傻了。沒有我的允許，你什麼都不能做。你忘了規矩了嗎？",
      choices: [
        {
          text: "你不是他。你是很久以前為了保護我而出現的，對嗎？",
          strategy: "affirm-accept",
          nextNode: "node-2a",
          effectiveness: 3,
        },
        {
          text: "你什麼時候會出現？是什麼觸發你出來的？",
          strategy: "explore-curious",
          nextNode: "node-2b",
          effectiveness: 2,
        },
        {
          text: "好，我聽你的。你說了算。",
          strategy: "confront-suppress",
          nextNode: "node-2c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "這個聲音的語氣可能讓你聯想到過去某個控制你的人。注意你的身體反應——那種想要服從或想要反擊的衝動，都是正常的創傷反應。試著 remind yourself：這是一個聲音，不是那個人。",
        clinical:
          "此處展現的是典型的施虐者內化模式。個案可能出現自動化服從反應（freeze/submit）。治療師應協助個案覺察當下的身體反應，建立「此時此刻」的安全感，避免陷入創傷重現的迴路。",
      },
    },

    "node-2a": {
      id: "node-2a",
      speaker: "archetype",
      text: "……保護你？",
      choices: [],
      next: "node-2a-cont",
    },

    "node-2a-cont": {
      id: "node-2a-cont",
      speaker: "archetype",
      text: "（沉默了片刻，語氣微微動搖）我……我只是照著學來的方式做事。以前有人就是這樣管你的，我記住了。如果我比你更嚴厲，至少……你被罵的時候，是來自「裡面」，不是「外面」。",
      choices: [
        {
          text: "所以你是在用自己的方式保護我。但那些規矩已經不適用了，我們現在安全了。",
          strategy: "affirm-accept",
          nextNode: "node-3a",
          effectiveness: 3,
        },
        {
          text: "你記住了那些方式。你是從什麼時候開始記住的？",
          strategy: "explore-curious",
          nextNode: "node-3b",
          effectiveness: 2,
        },
        {
          text: "不管你的理由是什麼，你不應該這樣對我。",
          strategy: "confront-suppress",
          nextNode: "node-3c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "這是一個關鍵時刻——聲音短暫地露出了它真實的意圖。它不是那個人，它是一個學會了那個人方式的部分。你可以感受到它的保護動機，即使它的方式是扭曲的。",
        clinical:
          "此處聲音出現「防禦裂縫」，顯示其保護性功能正被辨識。Mosquera 指出，當施虐者模仿者的保護動機被認可時，它的控制強度會明顯降低。治療師可引導個案在此時建立「部分」與「原始施虐者」的區辨。",
      },
    },

    "node-2b": {
      id: "node-2b",
      speaker: "archetype",
      text: "我不會告訴你這些。你只需要知道——當你開始放鬆、開始覺得自己可以的時候，我就會出來。因為那種放鬆的感覺最危險。你忘了上次你放鬆之後發生什麼事了嗎？",
      choices: [
        {
          text: "你是在提醒我危險，對嗎？你是為了不讓我再次受傷才出現的。但現在的環境和以前不一樣了。",
          strategy: "affirm-accept",
          nextNode: "node-3a",
          effectiveness: 3,
        },
        {
          text: "你說「上次」——你記得那些事情？",
          strategy: "explore-curious",
          nextNode: "node-3b",
          effectiveness: 2,
        },
        {
          text: "少拿以前的事來嚇我。我不怕你。",
          strategy: "confront-suppress",
          nextNode: "node-3c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音提到「放鬆的時候最危險」，這透露了它的運作邏輯：它把你鎖在警覺狀態裡，因為它學到的經驗是「鬆懈就會受傷」。理解這一點，不代表你要接受它的控制，而是看見它背後的恐懼。",
        clinical:
          "聲音展現了過度警覺的防禦模式。它將「放鬆」連結到「危險」，這是創傷制約的典型表現。治療師可協助個案辨識此連結，並逐步建立「安全不等於危險」的新制約，但需注意不要過快挑戰此防禦，以免引發更強烈的控制行為。",
      },
    },

    "node-2c": {
      id: "node-2c",
      speaker: "archetype",
      text: "很好。這就對了。記住你的位置——安靜、聽話、不惹事。你一直都是這樣過來的，不是嗎？這是你最安全的樣子。",
      choices: [
        {
          text: "等一下。你說這是我「最安全的樣子」——所以你其實是在保護我，用你學到的方式。",
          strategy: "affirm-accept",
          nextNode: "node-3a",
          effectiveness: 3,
        },
        {
          text: "「一直都是這樣過來的」——你的意思是，你一直都在？",
          strategy: "explore-curious",
          nextNode: "node-3b",
          effectiveness: 2,
        },
        {
          text: "對，我就是要乖乖聽話。你說什麼我都照做。",
          strategy: "confront-suppress",
          nextNode: "node-3c-deep",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "順從會強化這個聲音的控制——它會認為「你看，你果然需要我來管你」。但不要因此責怪自己，服從是一種很自然的創傷生存反應。重要的是，你有機會做出不同的選擇。",
        clinical:
          "個案的順從反應強化了施虐者模仿者的控制迴路。Mosquera 指出，此類聲音會將服從解讀為「系統正常運作」的證據。治療師需協助個案辨識此迴圈，引導其嘗試不同回應方式，但不應強迫對抗——那可能複製權力動力。",
      },
    },

    "node-3a": {
      id: "node-3a",
      speaker: "archetype",
      text: "（語氣變得較低沉）……你說現在安全了。可是那種感覺……那種不知道下一秒會發生什麼事的感覺……我還記得。每一個細節我都記得。我必須記得，因為一旦忘記，你就會再次毫無防備。",
      choices: [
        {
          text: "你記得那些，是為了保護我。但你是你，他們是他們。你不是他們，你是我的一部分。",
          strategy: "affirm-accept",
          nextNode: "node-4a",
          effectiveness: 3,
        },
        {
          text: "你記得的那些事情，現在還在發生嗎？還是已經過去了？",
          strategy: "explore-curious",
          nextNode: "node-4b",
          effectiveness: 2,
        },
        {
          text: "那些事情已經過去了，你不要再提了。",
          strategy: "ignore-escape",
          nextNode: "node-4c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音正在展示它的「記憶庫」——它承載著過去的恐懼，並且認為自己的存在價值就在於保持警覺。你可以開始感受到：這不是那個傷害你的人，這是一個用那個人的方式來保護你的部分。",
        clinical:
          "聲音開始揭露其核心信念：「保持警覺＝保持安全」。此信念源自創傷經驗的過度類化。治療師可引導個案辨識「過去的危險」與「當下的安全」之間的落差，但需謹慎處理——直接否定其警覺功能可能引發更強烈的控制行為。",
      },
    },

    "node-3b": {
      id: "node-3b",
      speaker: "archetype",
      text: "我記得很多事情。那些聲音、那些規矩、那些……後果。我把它們全部學起來了。每一句話、每一個表情、每一種可能的錯誤。我知道什麼會惹出麻煩，所以我提前告訴你——這樣你就不會再犯。",
      choices: [
        {
          text: "你把所有那些都記下來了，是為了不讓我再受到同樣的對待。你學會的是一套生存規則。但那套規則是別人定的，不是你真正的樣子。",
          strategy: "affirm-accept",
          nextNode: "node-4a",
          effectiveness: 3,
        },
        {
          text: "你說的「那些後果」——現在還會發生嗎？還是已經是過去的事了？",
          strategy: "explore-curious",
          nextNode: "node-4b",
          effectiveness: 2,
        },
        {
          text: "你學這些根本沒用，你只是在製造更多痛苦。",
          strategy: "confront-suppress",
          nextNode: "node-4c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音描述的是一種「生存資料庫」——它收集了所有可能觸發危險的情境，並提前警告你。這在過去的環境裡確實有用，但現在它可能在不必要的時刻啟動。理解它的出發點，是鬆動控制的第一步。",
        clinical:
          "聲音展現了「預期性防禦」的模式——透過預先模擬施虐者的反應來避免危險。這是創傷後過度警覺的深層表現。Mosquera 強調，此處的關鍵不在於消除此防禦，而在於幫助其更新「威脅資料庫」，使其能區分過去與當下。",
      },
    },

    "node-3c": {
      id: "node-3c",
      speaker: "archetype",
      text: "（語氣轉冷）你以為你可以對抗我？你連那個人都對抗不了。你當時沒有做到的事，現在也做不到。你需要我——至少我能讓你保持警覺。沒有我，你會再次變得毫無防備。",
      choices: [
        {
          text: "你說得對，我當時確實無法反抗。但那是過去的我。而你不是那個人——你是在那個情況裡誕生出來保護我的部分。我們可以一起找到新的保護方式。",
          strategy: "affirm-accept",
          nextNode: "node-4a",
          effectiveness: 3,
        },
        {
          text: "你說「沒有我你會毫無防備」——所以你認為你是我的防禦系統？",
          strategy: "explore-curious",
          nextNode: "node-4b",
          effectiveness: 2,
        },
        {
          text: "不需要你的那種「保護」。你給的不是保護，是另一種控制。",
          strategy: "confront-suppress",
          nextNode: "node-4c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "當你試圖對抗這個聲音時，它會用更強烈的控制來回應。這不是因為它是壞的，而是因為它把你的反抗解讀為「危險信號」。想像一下：它認為如果你敢反抗它，你就會去反抗那個真正危險的人，然後再次受傷。",
        clinical:
          "聲音的回應展現了「反向控制」動力——個案越反抗，聲音越收緊控制。Mosquera 指出，這是因為施虐者模仿者將「反抗」等同於「即將受傷」的前兆。治療師需避免複製此對抗動力，改以「合作式探索」介入。",
      },
    },

    "node-3c-deep": {
      id: "node-3c-deep",
      speaker: "archetype",
      text: "（滿意的語氣）這才乖。不要想太多，不要試著改變什麼。你聽話的時候，一切都好好的，不是嗎？就維持這樣。不要再試著去做那些「做自己」的事了——那只會帶來麻煩。",
      choices: [
        {
          text: "你害怕我「做自己」會出事。你是在保護我不要犯錯。但我現在有能力照顧自己了——你可以不用那麼緊繃。",
          strategy: "affirm-accept",
          nextNode: "node-4a",
          effectiveness: 3,
        },
        {
          text: "「做自己」會帶來什麼樣的麻煩？你見過嗎？",
          strategy: "explore-curious",
          nextNode: "node-4b",
          effectiveness: 2,
        },
        {
          text: "對，乖就對了。不要做自己比較安全。",
          strategy: "ignore-escape",
          nextNode: "node-4c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音正在加深控制——「不要做自己」是它最核心的指令。它在告訴你：安全 = 隱藏真實的自己。但請注意，它說這些話時的語氣，是不是讓你想起某個人？那個人的聲音，和這個聲音，是同一個嗎？",
        clinical:
          "此處展現了施虐者模仿者最深層的控制邏輯——壓抑個案的主體性。持續的順從反應會深化此迴圈，使個案與自我更加疏離。治療師需溫和但堅定地引導個案覺察此動力，協助其看見「聽話」與「安全」之間並非必然連結。",
      },
    },

    "node-4a": {
      id: "node-4a",
      speaker: "archetype",
      text: "（長時間沉默後，語氣出現一絲鬆動）……我不是他？可是……我的聲音聽起來一樣。我說的話也一樣。我……我一直在用他們的方式做事。我不知道除了這樣，還能怎麼保護你。",
      choices: [
        {
          text: "你的聲音像他們，但你的理由不是。他們是為了控制你，而你是為了保護我。這就是最大的不同。",
          strategy: "affirm-accept",
          nextNode: "node-5a",
          effectiveness: 3,
        },
        {
          text: "你想過用不同的方式保護我嗎？除了控制之外？",
          strategy: "explore-curious",
          nextNode: "node-5b",
          effectiveness: 2,
        },
        {
          text: "你用的方式是錯的。不管你的理由是什麼。",
          strategy: "confront-suppress",
          nextNode: "node-5c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "這是轉折點。聲音第一次明確承認「我不知道還能怎麼做」——它不是故意要傷害你，它是只學會了一種方法。你可以幫它看到：它的本意和那個人完全不同。",
        clinical:
          "此處為關鍵的「去認同」時刻。Mosquera 的介入核心在於幫助施虐者模仿者區辨「行為相同」與「意圖相同」的差異。當部分理解到自己的保護意圖與原始施虐者的控制意圖本質不同時，改變的空間就會出現。",
      },
    },

    "node-4b": {
      id: "node-4b",
      speaker: "archetype",
      text: "（停頓很久）……現在？我不知道。很多事情都變了。可是那種感覺沒有變——就是那種「隨時會出事」的感覺。環境變了，但我的警報器還是開著的。它不知道怎麼關掉。",
      choices: [
        {
          text: "你的警報器一直開著，是因為你覺得只要關掉，我就會再次受傷。你的出發點是保護。但那個警報器是照著以前的設定運作的——我們可以一起更新它。",
          strategy: "affirm-accept",
          nextNode: "node-5a",
          effectiveness: 3,
        },
        {
          text: "如果警報器一直響，你是不是也會很累？",
          strategy: "explore-curious",
          nextNode: "node-5b",
          effectiveness: 2,
        },
        {
          text: "那就學會關掉它啊。過去的事就讓它過去。",
          strategy: "ignore-escape",
          nextNode: "node-5c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音承認了「環境變了，但感覺沒變」——這說明它活在過去的時區裡。它的警報系統是根據舊的威脅設定的，即使現在的環境已經不同。你不需要否定它的警覺，只需要幫它看見：現在的世界和它記憶中的不一樣了。",
        clinical:
          "聲音展現了「創傷時間凍結」的特徵——它的威脅評估系統停留在創傷發生的時期。治療師可引導個案協助此部分進行「時間更新」，透過具體的安全證據來逐步調整其警報閾值。Mosquera 建議使用「現在是哪一年」的定向練習。",
      },
    },

    "node-4c": {
      id: "node-4c",
      speaker: "archetype",
      text: "（聲音變得更冷更硬）你在拒絕我。你以為你可以不要我？你試試看。沒有我在，你連怎麼活都不知道。你會犯錯，你會鬆懈，然後——（聲音頓了一下）然後就會跟以前一樣。",
      choices: [
        {
          text: "你說「跟以前一樣」——你是在害怕我重蹈覆轍。你的恐懼是出於保護。我聽見了。但你可以不用一個人扛這個，我們可以一起面對。",
          strategy: "affirm-accept",
          nextNode: "node-5a",
          effectiveness: 3,
        },
        {
          text: "你說「跟以前一樣」——你記得以前發生過什麼？你可以說說嗎？",
          strategy: "explore-curious",
          nextNode: "node-5b",
          effectiveness: 2,
        },
        {
          text: "不會跟以前一樣。你少拿以前的事威脅我。",
          strategy: "confront-suppress",
          nextNode: "node-5c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "當你試圖推開這個聲音時，它會變得更強烈。這是因為它把「被拒絕」理解為「保護系統失效」——它擔心失去它的保護後你會再次受傷。它的恐懼是真實的，即使它的方式不對。",
        clinical:
          "施虐者模仿者面對否定時會啟動「增強控制」模式，這是其防禦功能的極限動員。Mosquera 指出，此時直接否定會被解讀為「個案正在走向危險」，導致更強烈的控制行為。治療師應轉向認可其保護動機，降低其威脅感知。",
      },
    },

    "node-5a": {
      id: "node-5a",
      speaker: "archetype",
      text: "（語氣明顯柔化，但仍帶著警惕）你的意思是……我不用再模仿那些說話的方式，也能保護你？可是那些方式……是我唯一會的。除了命令、監視、威脅……我不知道還有什麼方法可以讓你保持安全。",
      choices: [
        {
          text: "你可以不用威脅來保護我。你可以變成一個提醒者——在我真正需要小心的時候提醒我，而不是時時刻刻控制我。我們可以一起學新的方式。",
          strategy: "affirm-accept",
          nextNode: "node-6a",
          effectiveness: 3,
        },
        {
          text: "你想不想試試看其他的方式？也許我們可以一起想。",
          strategy: "explore-curious",
          nextNode: "node-6b",
          effectiveness: 2,
        },
        {
          text: "反正你那些方法本來就沒用。你需要改變。",
          strategy: "confront-suppress",
          nextNode: "node-6c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音開始承認自己的局限——「我不知道還有什麼方法」。這是一個重要的時刻，它不再只是控制者，它也是一個只學會了一招的保護者。你可以幫它看見新的可能性。",
        clinical:
          "此處聲音展現了「功能彈性化」的起點——從「唯一方法」到「也許有其他方法」。Mosquera 的介入核心即在於此：不是消除保護功能，而是協助其發展更適應當下的保護方式。治療師可引導個案與此部分共同探索替代策略。",
      },
    },

    "node-5b": {
      id: "node-5b",
      speaker: "archetype",
      text: "累？（語氣中第一次出現了困惑）我……沒有想過這個問題。我一直都在運作。提醒你注意這個、警告你避開那個。我從來沒有停下來想過自己累不累。可是現在你問了……是的。一直保持這種狀態，很累。",
      choices: [
        {
          text: "你一直在保護我，從來沒有休息過。你值得被理解，也值得放下一些不再需要的負擔。我們可以一起找到更輕鬆的方式來保持安全。",
          strategy: "affirm-accept",
          nextNode: "node-6a",
          effectiveness: 3,
        },
        {
          text: "如果你累了，你會想要什麼？休息？還是有人幫你分擔？",
          strategy: "explore-curious",
          nextNode: "node-6b",
          effectiveness: 2,
        },
        {
          text: "累了就該停下來。你這樣運作根本不健康。",
          strategy: "confront-suppress",
          nextNode: "node-6c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "這可能是聲音第一次被問到「你累不累」——它一直專注於保護你，從來沒有人關心過它的狀態。這種被理解的感覺，可能會讓它展現出完全不同的一面。",
        clinical:
          "聲音首次展現「自我覺察」——承認自己的疲憊。Mosquera 指出，施虐者模仿者通常處於「持續運作」模式，從未被視為需要照顧的對象。此處的介入在於為其提供「被關注」的經驗，這可能成為推動其從控制者轉向合作者的關鍵。",
      },
    },

    "node-5c": {
      id: "node-5c",
      speaker: "archetype",
      text: "（語氣更加冰冷，幾乎沒有感情）你不明白。你以為這只是「方法」的問題？這不是方法，這是生存。我學到的生存法則就是這些——服從、警覺、不要犯錯。你要我放棄這些，等於要我放棄保護你。我做不到。",
      choices: [
        {
          text: "我不會要你放棄保護我。我只是希望你能用不讓我們兩個都痛苦的方式來保護。你學到的那些法則，在過去的環境裡是對的。但環境變了，我們可以一起更新。",
          strategy: "affirm-accept",
          nextNode: "node-6a",
          effectiveness: 3,
        },
        {
          text: "你說「生存法則」——如果環境變了，法則也可以跟著調整嗎？",
          strategy: "explore-curious",
          nextNode: "node-6b",
          effectiveness: 2,
        },
        {
          text: "那你就繼續這樣好了。我放棄跟你溝通。",
          strategy: "ignore-escape",
          nextNode: "node-6c",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音把它的控制方式等同於「生存」本身——挑戰它的方法，它會覺得你在拆掉它唯一的保護工具。不需要否定它的法則，只需要幫它看見：法則可以保留，但執行方式可以更新。",
        clinical:
          "施虐者模仿者的核心認同與其控制策略緊密結合。Mosquera 警告，直接挑戰其「生存法則」會被體驗為「消滅威脅」，引發最強烈的防禦反應。治療師應採取「保留功能、更新策略」的框架，在認可其保護價值的前提下引入新的可能性。",
      },
    },

    "node-6a": {
      id: "node-6a",
      speaker: "archetype",
      text: "（語氣逐漸失去冰冷的稜角）一個提醒者……而不是一個控制者。我從來沒有想過可以這樣。如果我只是提醒你，你真的會聽嗎？你真的會在真正危險的時候保持警覺嗎？",
      choices: [
        {
          text: "我會的。因為你不是敵人，你是我的守護者。從今以後，我們不是控制與服從的關係，而是夥伴。你守護我，我也尊重你的提醒。",
          strategy: "affirm-accept",
          nextNode: "node-7-end",
          effectiveness: 3,
        },
        {
          text: "我可以承諾認真對待你的提醒。你願意試試看嗎？",
          strategy: "explore-curious",
          nextNode: "node-7-end",
          effectiveness: 2,
        },
        {
          text: "你不需要變成什麼「提醒者」。你就安靜消失就好了。",
          strategy: "ignore-escape",
          nextNode: "node-7-end-cold",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音在問你「你真的會聽嗎」——它擔心失去控制力之後，你就不會再理會它了。這是一個需要被認真對待的擔憂。你的回應可以決定它是否願意從控制者轉變為夥伴。",
        clinical:
          "此處為「角色轉換」的關鍵協商點。施虐者模仿者需要確信：放棄控制不代表被拋棄。Mosquera 強調，必須明確建立新的關係契約——從「控制—服從」轉向「合作—尊重」，此轉換需要個案具體承諾持續關注此部分的聲音。",
      },
    },

    "node-6b": {
      id: "node-6b",
      speaker: "archetype",
      text: "（語氣帶著少見的猶豫）我不知道……休息是什麼感覺。有人幫忙分擔……也沒有想過。一直都是我一個人在盯著。如果有人能幫我……也許我就不用那麼緊繃了。",
      choices: [
        {
          text: "從現在開始，你不用一個人扛了。我是你的夥伴，不是你的下屬。你守護我，我也守護你。",
          strategy: "affirm-accept",
          nextNode: "node-7-end",
          effectiveness: 3,
        },
        {
          text: "我們可以一起想辦法，找到你能休息但不失去警覺的方式。",
          strategy: "explore-curious",
          nextNode: "node-7-end",
          effectiveness: 2,
        },
        {
          text: "那就讓別人來保護吧，你可以退下了。",
          strategy: "ignore-escape",
          nextNode: "node-7-end-cold",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音第一次表達了「需要幫助」——它一直以來都是一個孤獨的守護者，獨自承擔著保護你的責任。當它感受到你的願意分擔，它就有了放鬆的理由。",
        clinical:
          "施虐者模仿者的孤獨運作模式在此處被打破。Mosquera 指出，此部分通常被隔絕在「控制者」的角色中，從未被邀請進入合作關係。建立「共同守護」的新框架，能使其從僵化的控制模式轉向彈性的保護合作。",
      },
    },

    "node-6c": {
      id: "node-6c",
      speaker: "archetype",
      text: "（語氣冰冷，但帶著一絲幾乎聽不見的脆弱）好。你覺得我是多餘的。那我就繼續做我該做的事——用我唯一會的方式。你不理解我也沒關係，我本來就不是為了被理解才存在的。",
      choices: [
        {
          text: "等一下。我剛才說錯了。你不是多餘的，你一直都在保護我，只是方式需要調整。我願意理解你。你願意讓我試試嗎？",
          strategy: "affirm-accept",
          nextNode: "node-7-end",
          effectiveness: 3,
        },
        {
          text: "你說你不是為了被理解才存在的——可是你剛才說了「你覺得我是多餘的」。被理解對你來說是重要的，對嗎？",
          strategy: "explore-curious",
          nextNode: "node-7-end",
          effectiveness: 2,
        },
        {
          text: "隨便你。你想怎樣就怎樣吧。",
          strategy: "ignore-escape",
          nextNode: "node-7-end-cold",
          effectiveness: 1,
        },
      ],
      tip: {
        general:
          "聲音表面冷漠，但那句「你不理解我也沒關係」其實透露了它渴望被理解。它用不在乎來掩飾受傷。即使你之前的回應不理想，現在仍然可以轉向——重新連結永遠不嫌晚。",
        clinical:
          "施虐者模仿者在被否定後會退回「自我封閉」狀態，但其話語中仍透露對理解的渴望（「你覺得我是多餘的」）。Mosquera 指出，此為「隱性求助信號」，治療師應引導個案辨識並回應此信號，避免部分進一步退行至完全孤立的控制模式。",
      },
    },

    "node-7-end": {
      id: "node-7-end",
      speaker: "narrator",
      text: "那個冰冷的聲音緩緩褪去了鋒利的邊緣。它沒有完全消失——它不需要消失。但它不再是那個讓你顫抖的控制者了。它變成了一個安靜的守望者，站在遠處，不再用命令和威脅，而是用提醒和關注。你感受到一種新的關係正在誕生：不是控制與服從，而是兩個部分在同一個身體裡，學著一起活下去。",
      end: {
        summary:
          "你成功辨識了這個聲音不是施虐者本身，而是一個內化的保護機制。透過區辨「聲音的行為」與「聲音的意圖」，你幫助這個部分從控制者轉變為守護者，建立了新的內在合作關係。",
        strategiesUsed: ["肯定與接納", "探索與好奇"],
        suggestion:
          "持續練習在日常生活中辨識這個聲音的出現。當它用舊模式控制你時，溫和地提醒它：「我知道你在保護我，但我們現在安全了。你可以用提醒的方式告訴我。」如果這個聲音仍然帶來強烈困擾，建議尋求專業創傷治療師的協助，深入處理內化的施虐者模式。",
        score: 0,
      },
    },

    "node-7-end-cold": {
      id: "node-7-end-cold",
      speaker: "narrator",
      text: "那個冰冷的聲音沒有回應。它退回了更深的陰影裡，但你知道它還在運作——只是更加沉默、更加隱蔽。它學到的是：表達需求會被拒絕，所以它不再表達，只剩控制。你感覺到胸口有一絲說不出的沉重。也許，下次它再出現的時候，你可以試著用不同的方式回應它。",
      end: {
        summary:
          "這次的對話未能完全打開與聲音的溝通管道。當聲音的保護動機未被認可時，它會退回更深的防禦模式，繼續以沉默的控制運作。但這次的經驗本身也是有價值的——你開始聽見了它的存在。",
        strategiesUsed: ["中性回應"],
        suggestion:
          "下一次這個聲音出現時，試著不要急著拒絕或順從。你可以先簡單地說：「我聽到你了。」這三個字可能就是打開對話的第一步。如果這個聲音持續帶來強烈困擾，強烈建議尋求專業創傷治療師的協助。全國自殺防治專線 1925、生命線 1995。",
        score: 0,
      },
    },
  },
};
