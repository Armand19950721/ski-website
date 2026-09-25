# 滑雪網站專案

小型滑雪課程介紹網站，客戶日後可用手機透過 Replit Agent 自行修改內容。

## 架構

```
模板網站 → Claude Code → GitHub（我的帳號）→ Replit（共用 Gmail）→ xxx.replit.app
```

- GitHub 是版面程式碼的中心，我用 Claude Code 維護。
- Replit 負責 hosting、Publish、客戶手機修改。
- 測試期全部免費，不接正式 domain。

## 帳號

| 項目 | 帳號 | 備註 |
|---|---|---|
| Gmail（共用） | 新開 | 設 2FA 與備援手機，之後整包交給客戶 |
| GitHub（共用） | 用共用 Gmail 開 | 只加為 repo collaborator |
| Replit | 用共用 Gmail 開 | Starter 免費方案 |
| GitHub repo | 我自己的帳號 | owner，之後可 transfer 給客戶 |
| Domain | 先不買 | skisnowboardclass.com 在寬限期，想要就掛 backorder |

## 步驟

1. 開共用 Gmail，設 2FA。
2. 用共用 Gmail 開 GitHub 帳號與 Replit 帳號。
3. 我的 GitHub 建 repo（public），加共用 GitHub 為 collaborator。
4. Claude Code 照模板網站做第一版，push 到 repo。
5. Replit 連 GitHub、import repo。
6. Replit Publish，選 Static，拿到 xxx.replit.app。
7. 手機裝 Replit App，登入共用帳號，測試跟 Agent 改內容、Preview、Publish。
8. 測試 Agent 改完能不能 push 回 GitHub。

## 專案結構（第一版要做到）

```
/
├── src/            版面與元件，不讓 Agent 隨便動
├── content/        文字內容，Agent 只改這裡
│   ├── hero.json
│   ├── courses.json
│   ├── instructors.json
│   ├── faq.json
│   └── contact.json
├── public/images/
└── AGENTS.md       給 Replit Agent 的規則
```

AGENTS.md 重點：一般內容更新（價格、課程、教練、公告、FAQ、聯絡方式）只改 /content，不動版面，改完先確認網站正常再 Publish。

## 免費方案限制

- 只能 1 個 published app。
- 發佈連結可能 30 天後下線，要重新 Publish。
- 每日 Agent credits 有限，模型較弱。
- 專案是公開的，不放任何金鑰。
- 正式上線要升 Core，約 US$20 到 25 每月，由客戶付。

## 待確認

- Replit Agent 改完後能否自動 push 回 GitHub。
- 免費方案 Publish 的實際存活時間。
- 要不要 backorder skisnowboardclass.com。


## UI 改版（2026-09-25）

- 版面仿照客戶提供的參考網站（深藍＋金色、單頁、教練圓形卡片、行程手風琴、合作夥伴 logo 牆）。
- 只複製版面與結構，圖片、文案、logo 全部是佔位，客戶需自行提供素材。
- 預約流程改為三步驟「選擇行程 → 填寫資料 → 送出完成」，送出後 POST 到 Google 表單（設定在 `content/booking.json`），不做購物車與線上付款。
- 內容檔案：見 `AGENTS.md` 的表格。
