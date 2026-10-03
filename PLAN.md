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

## v0.1.0 客戶修改（2026-09-30）

需求原文在 `require/v0.1.0/`（只留在本機，已 gitignore）。

- 網頁標題改為「Ski & Snowboard Class 中文滑雪學校」。
- 拿掉公告條（刪除 `content/announcements.json`）。
- 修正手機上日期欄位顯示（iOS Safari 的 date input 置中／高度問題）。
- 行程改為四種：雙板／單板 × 全日／半日，價格待客戶提供（目前顯示「請洽客服」）。
- 地點改為「越後湯澤地區雪場」「日本其他雪場（需酌收交通費）」。
- 刪除合作夥伴區塊與導覽連結。
- 關於我們改為客戶提供的文案，新增「教學與服務內容」清單。
- Footer 只留線上客服按鈕與公司名（株式会社）、版權列。
- 連帶把 hero 字幕、雪場指南、教練簡介裡的二世谷改為越後湯澤。

## v0.1.1 客戶修改（2026-10-02）

需求原文在 `require/v0.1.1/`（只留在本機，已 gitignore）。

- 預約卡：移除「行程說明概要」，連結改為「課程介紹」（跳到下方 #courses）。人數選項加到 6 人。
- 關於我們特色框：專業團隊／中英教學／服務區域／全年服務。
- 行程介紹區塊：移除四個課程手風琴（課程名稱仍保留在 `courses.json` 供預約下拉用）。改為兩個群組：「課程介紹」（課程介紹、課程時間）與「詳細內容」（其餘指南）。內容搬到 `guides.json` 的 `groups[]`。最大人數改 6 人。
- 頁首改為 YouTube 背景影片（`hero.json` 的 `youtubeId`），客戶尚未提供影片連結，空值時仍顯示照片拼貼。
- 2026-10-02 補：客戶提供 YouTube Shorts（直式）`KK4lA9i5xdw`。桌面版改為左文案＋右手機框影片，手機版直式滿版；`hero.json` 的 `videoPortrait` 控制（16:9 影片設 false 會整片鋪滿）。
- 2026-10-02 補 2：YouTube 嵌入會跳出播放器 UI 無法關閉，改為自架 mp4（`public/videos/hero.mp4`，從客戶 Shorts 轉檔、裁掉上下黑邊、去音軌，1.7 MB），`hero.json` 的 `video` 優先於 `youtubeId`。桌面影片框改置中於右欄。

## v0.1.2 客戶修改（2026-10-03）

需求原文在 `require/v0.1.2/`（只留在本機，已 gitignore）。

- 全站「行程」改「課程」：預約卡（選擇課程、請選擇課程時間、請選擇課程）、選單、區塊副標。
- 頁首品牌文字拿掉「/ 戶外體驗」。選單改為：預約課程／滑雪教練／關於我們／課程介紹。
- 課程介紹區塊：群組「課程介紹」改「課程內容」（課前須知、上課時間、上課流程），群組「詳細內容」改「常見問題」（越後湯澤雪場介紹、滑雪服裝及裝備建議、滑雪建議年齡、其他問題、更多資訊…）。
- 上課流程從頁尾獨立區塊收進「課程內容」手風琴，步驟搬到 `guides.json` 該項目的 `steps[]`（刪除 `content/process.json` 與 `Process.jsx`）。步驟文字：自行前往集合地點／課程裝備著裝完成／課程體驗開始。
