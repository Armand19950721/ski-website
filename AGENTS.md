# Client Website Rules

This is a ski & snowboard school brochure site (Vite + React, static).
Design reference: dark navy + gold, single page, sections in this order:
Header → Hero collage → Booking widget → Team → About → Introduction (courses + guides) → Process → Footer.

## Content updates (most requests)

For normal content changes (prices, courses, coaches, contact,
about text, guides/FAQ), ONLY edit JSON files inside `/content`.
Do not touch `/src`.

| File | What it controls |
| --- | --- |
| `content/site.json` | site name, logo, nav links, company name (footer), copyright |
| `content/hero.json` | `youtubeId` + `videoPortrait` (true for Shorts/直式), `heading`, `subheading`, `text`, `cta[]`, `caption`; when `youtubeId` is empty the photo collage `images[]` + badge is shown |
| `content/booking.json` | booking widget: steps, Google Form ID + entry IDs, locations, pax options, 課程介紹 link text, LINE link, success text |
| `content/team.json` | coaches: name, title, langs[], certs[], bio, image |
| `content/about.json` | 關於我們 text (`paragraphs[]`), `services` list (教學與服務內容), feature boxes, images |
| `content/courses.json` | ONLY the course names in the booking dropdown (`items[].name`); not shown elsewhere |
| `content/guides.json` | 行程介紹 section: `groups[]` (課程介紹 / 詳細內容), each with accordion `items[]` of `sections[]` (label + lines[]) |
| `content/process.json` | 上課流程 5 steps |
| `content/contact.json` | LINE link (header + footer 線上客服), email, phone |

Rules for editing JSON:

- Keep the JSON valid (quotes, commas). Keep the existing keys; change values.
- Prices are plain strings, e.g. `"￥74,800"`, so write them exactly as they should display.
- Emoji prefixes (✅ 🔸 ⚠️ ❌) in lines are just text, keep or remove freely.
- Images go in `/public/images/...` and are referenced as `/images/<path>`.

## Hero video

Preferred: a self-hosted mp4. Put the file in `public/videos/` (H.264, no audio, under ~5 MB, portrait is fine) and set
`content/hero.json` → `video` (e.g. `/videos/hero.mp4`), `videoPoster` (a jpg frame) and `videoAspect`
(e.g. `"3 / 4"` or `"9 / 16"`, the shape of the desktop frame). This plays with no YouTube UI.

Fallback: `youtubeId`: the 11-character ID from a YouTube URL
(`https://www.youtube.com/watch?v=<ID>` or `https://youtu.be/<ID>`). The video must be public or unlisted and allow embedding.
It plays muted, looped, without controls. `videoPortrait: true` (直式 Shorts) shows it in a phone-style frame on desktop and full-screen on mobile; `false` (16:9) covers the whole hero. Leave `youtubeId` empty to fall back to the photo collage.

## Booking widget → Google Form

`content/booking.json`:
- `googleFormId` — the long ID in the form's URL `https://docs.google.com/forms/d/e/<ID>/viewform`.
- `entries.*` — `entry.xxxxxxx` IDs from the form's "取得預先填入的連結".
- Leave `googleFormId` empty to disable submission (the widget still shows the success screen).

## Layout / component changes

Do not modify `/src` (layout, styling, components) unless the user
explicitly asks for a design or layout change.

## Before publishing

Run `npm run build` and make sure it succeeds and the page renders
correctly in preview before publishing.
