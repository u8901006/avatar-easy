# Voice Archetypes Expansion — Design Spec

- **Date:** 2026-06-28
- **Project:** avatar-easy (Next.js 16 對話練習 App)
- **Status:** Approved → In Implementation
- **Source material:** 7 份 markdown（書籍萃取／衛教文章），位於 `content/sources/`

---

## 1. 背景與目標

`avatar-easy` 是創傷知情（trauma-informed）「內在聲音原型」對話練習工具。使用者（助人工作者／自助者）選擇一個內在聲音原型，透過分支對話練習回應技巧，並在回顧頁得到策略成效分析。

目前有 5 個原型（來自第 6–10 章）。本計畫依使用者提供的 7 份更新／補充素材，**擴充原型數量並升級部分現有原型的內容品質**。

### 目標
1. 新增 5 個可玩的內在聲音原型。
2. 升級 2 個現有原型的後設資料與臨床提示。
3. 將 7 份 markdown 原檔收入 repo 作為知識來源與日後更新依據。

### 非目標（本次不做）
- 不改寫對話引擎、計分邏輯、元件（`dialogue-engine.ts` / `scoring.ts` / components）。
- 不引入新的 Next.js 16 API（僅沿用既有資料檔＋動態路由模式）。
- 不新增策略（沿用現有 5 個 strategy id）。

---

## 2. 確認範圍

### 2.1 全新原型（5 個，各自獨立可玩）

| # | 顯示名 | 來源 | id | 章節 | 安全敏感度 |
|---|--------|------|----|------|-----------|
| 1 | 孩童部分 | article | `child` | Focus topic | 低 |
| 2 | 青少年部分 | article | `adolescent` | 第14章 | 低 |
| 3 | 謀殺的部分 | 第20章 | `homicidal` | 第20章 | 高 |
| 4 | 自傷的部分 | 第18章 | `self-harm` | 第18章 | 高 |
| 5 | 自殺的部分 | 第19章 | `suicidal` | 第19章 | 高 |

### 2.2 現有原型升級（2 個）

| 顯示名 | id | 新素材 |
|--------|----|--------|
| 批評性的聲音 | `critical` | 第16章 + `source1.md` + `source2.md`（內在批評／懲罰性） |
| 恐懼與不信任的部分 | `fear-distrust` | 恐懼與迴避 article |

### 2.3 保留不動
- 現有 `self-harm-suicidal`（第7章，顯示名「自傷或自殺的部分」）**保留**，與新拆出的 `self-harm`／`suicidal` 並存。顯示名是否微調以資區分，**待定（可選）**，不阻塞本次工作。

### 2.4 參考資料
- 7 份 markdown 原檔複製進 `content/sources/<主題>/`，納入版控。

---

## 3. 架構驗證（已確認）

新增原型純屬「資料＋註冊」變更，無需改邏輯碼：

- `src/app/practice/[archetype]/page.tsx:4` 與 `src/app/review/[archetype]/page.tsx:4` 皆以 `generateStaticParams()` 從 `archetypes` 陣列派生 → **新原型自動擁有練習頁＋回顧頁**。
- `src/app/practice/page.tsx` 以 `archetypes.map` 列出原型卡 → **新原型自動出現在選擇清單**。
- `dialogue-engine.ts` / `scoring.ts` / 所有 components 均為 archetype-agnostic。
- 策略固定 5 個：`affirm-accept`、`explore-curious`、`neutral-response`、`confront-suppress`、`ignore-escape`。

---

## 4. 變更清單

### 4.1 新增一個原型需動的 4 個檔案
1. `src/lib/types.ts` — `VoiceArchetypeId` 聯集新增 id。
2. `src/data/archetypes.ts` — 新增一筆 `ArchetypeInfo`（name, codename, emoji, chapter, color, features, protectiveFunction, origin, coreIntervention, contentWarning）。
3. **`src/data/scripts/<id>.ts`（新檔，主體）** — 完整 `ArchetypeScript`，依 §5 範本撰寫。
4. `src/app/practice/[archetype]/DialogueClient.tsx:29` — import 該腳本 + 加入 `scripts` map。

### 4.2 升級現有原型
- `src/data/archetypes.ts` 對應 entry 的 `features`／`protectiveFunction`／`origin`／`coreIntervention` 依新素材補強。
- `src/data/scripts/<id>.ts` 內 archetype 節點的 `tip.clinical` 提示補充新章節出處；對話結構不動。

### 4.3 參考資料
- 新增 `content/sources/`，依原資料夾結構置放 7 份 markdown。

---

## 5. 對話腳本標準範本

所有新原型腳本統一套用（仿 `src/data/scripts/critical.ts`）：

```
openingNarration          1 段沉浸式旁白（設定場景與情緒）
totalRounds: 7
nodes:
  start (narrator) → r1
  r1   (archetype + tip) → 3 選項
  r2_{affirmed, curious, defensive}
  r3_{recognized, engaged, escalated}
  r4_{reveal, hint, struggle}      ← 保護功能浮現（附 tip）
  r5_{negotiate (+tip), cautious, resistant (+tip)}
  r6_transition (+tip)
  end_transformed (score 3) / end_partial (score 2) / end_resistant (score 1)
```

**選項設計規則**
- 每個 archetype 節點 3 個選項，成效依序為 3 / 2 / 1：
  - 成效 3：`affirm-accept`（肯定與接納）
  - 成效 2：`explore-curious`（探索與好奇）或 `neutral-response`（中性回應）
  - 成效 1：`confront-suppress`（對抗／壓制）或 `ignore-escape`（忽視／逃避）

**提示設計規則**
- 每個 archetype 節點含 `tip.general`（一般模式可見）與 `tip.clinical`（專業模式可見）。
- `tip.clinical` 須含臨床概念與**來源章節出處**（如「(Mosquera & Ross, Chapter X)」或「(創傷知情人格部分工作臨床手冊)」）。

**內容警告**
- `contentWarning` 欄位須明確標示觸發內容；安全敏感原型（homicidal / self-harm / suicidal）採較高強度警示，並在結尾建議求助資源（App 已內建 1925／1995 等專線）。

---

## 6. 執行節奏

採「先做 1 個試風格再續做」。

### 第 0 步（前置）
建立 `content/sources/`，置入 7 份 markdown。

### 第 1 步（pilot，試風格）
完整做出 **`child`（孩童部分）** 一個原型。
> 選擇理由：全新無重疊、來源結構清晰（四類型表）、安全敏感度低，最適合校準風格／長度／選項／提示寫法。

完成後交付檢查點：腳本語氣、回合數、選項設計、general/clinical 提示、contentWarning。**確認 OK 後再續做其餘**。

### 第 2 步（續做，依核准風格）
依安全敏感度由低到高：`adolescent` → `homicidal` → `self-harm` → `suicidal`。

### 第 3 步（升級）
`critical`（第16章＋sources）→ `fear-distrust`（恐懼與迴避）的後設資料與 clinical 提示。

### 每步驗證
`pnpm lint` + `pnpm build`（確保靜態匯出無誤）。

---

## 7. 待定／風險

- **self-harm-suicidal 顯示名**：新拆出兩原型後三者並存，是否微調舊的顯示名以資區分（id 不改）→ 待使用者決定，不阻塞。
- **安全敏感內容**：homicidal / self-harm / suicidal 腳本須謹慎拿捏——忠實呈現臨床樣貌，但避免提供具體方法細節；強化求助資源。
- **來源出處正確性**：`tip.clinical` 引用章節須與 markdown 來源一致，不杜撰文獻。
- **Next.js 16**：本次僅用既有資料檔模式，不碰新框架 API；仍須以 `pnpm build` 驗證。

---

## 8. 驗收準則

- [x] 5 個新原型各自可在 `/practice/<id>` 完整走完分支對話並進入 `/review/<id>`（child／adolescent／homicidal／self-harm／suicidal）。
- [x] 選擇清單 `/practice` 正確顯示所有原型（含新舊共 10 個）。
- [x] `pnpm lint` 通過。
- [x] `pnpm build` 通過（靜態匯出成功，10 條 archetype 路由）。
- [x] 2 個升級原型（critical／fear-distrust）的後設資料與 clinical 提示含新章節出處（第16章／恐懼與迴避）。
- [x] `content/sources/` 收齊 9 份 markdown（7 主題）。

---

## 9. 實作紀錄（2026-06-28 完成）

**新增原型**：`child`（孩童部分）、`adolescent`（青少年部分，第14章）、`homicidal`（謀殺的部分，第20章）、`self-harm`（自傷的部分，第18章）、`suicidal`（自殺的部分，第19章）。

**升級原型**：`critical`（第8章＋第16章＋source1＋source2，深化後設資料與 5 處 clinical 提示）、`fear-distrust`（第10章＋恐懼與迴避 article，深化後設資料與 2 處 clinical 提示）。

**保留不動**：`self-harm-suicidal`（第7章）。

**安全設計**：homicidal／self-harm／suicidal 三個高敏感原型，方法與手段一律抽象處理（不提供具體細節），對話選項示範臨床最佳實踐（安全防線／同在／允許暫停／角色升級／微程序），結局均導向安全、求助資源與替代出口，contentWarning 附 1925／1995／110 等專線。
