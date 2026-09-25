# Ski & Snowboard Class 網站

小型滑雪課程介紹網站。Vite + React，純靜態。

## 開發

```
npm install
npm run dev
```

## 修改內容

文字、價格、課程、教練、指南／FAQ、合作夥伴、聯絡方式都在 `content/*.json`，改完存檔即生效。各檔案用途見 `AGENTS.md`。
版面在 `src/`。給 AI Agent 的規則見 `AGENTS.md`。

## 建置

```
npm run build
```

輸出在 `dist/`，可直接部署到任何靜態主機（Replit Static、Cloudflare Pages、GitHub Pages）。
