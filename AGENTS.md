# Client Website Rules

This is a ski & snowboard school brochure site (Vite + React, static).
Design reference: dark navy + gold, single page, sections in this order:
Header → Hero collage → Booking widget → Team → About → Introduction (courses + guides) → Process → Partners → Footer.

## Content updates (most requests)

For normal content changes (prices, courses, coaches, announcements, contact,
about text, partners, guides/FAQ), ONLY edit JSON files inside `/content`.
Do not touch `/src`.

| File | What it controls |
| --- | --- |
| `content/site.json` | site name, logo, nav links, company info, copyright |
| `content/hero.json` | hero collage photos, badge, caption |
| `content/announcements.json` | announcement strip above the booking widget |
| `content/booking.json` | booking widget: steps, Google Form ID + entry IDs, locations, pax options, LINE link, success text |
| `content/team.json` | coaches: name, title, langs[], certs[], bio, image |
| `content/about.json` | 關於我們 text, feature boxes, images |
| `content/courses.json` | 行程類型: each course has `pricing[]` (label + tiers [[人數, 價格]]) and `details[]` (label + lines[]) |
| `content/guides.json` | 詳細內容 accordions (guides, FAQ, contact info) |
| `content/process.json` | 上課流程 5 steps |
| `content/partners.json` | partner logos + links |
| `content/contact.json` | LINE, email, phone, Instagram, Google 商家, recruit email |

Rules for editing JSON:

- Keep the JSON valid (quotes, commas). Keep the existing keys; change values.
- Prices are plain strings, e.g. `"￥74,800"`, so write them exactly as they should display.
- Emoji prefixes (✅ 🔸 ⚠️ ❌) in lines are just text, keep or remove freely.
- Images go in `/public/images/...` and are referenced as `/images/<path>`.

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
