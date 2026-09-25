# Client Website Rules

This is a small ski & snowboard school brochure site (Vite + React).

## Content updates (most requests)

For normal content changes such as:

- prices
- course information
- instructor information
- announcements
- contact information
- FAQ
- hero text

Only edit JSON files inside `/content`. Do not touch `/src`.

Files:

- `content/site.json` — site name, tagline, footer
- `content/hero.json` — homepage headline and buttons
- `content/announcements.json` — announcement list (shown at top)
- `content/courses.json` — courses and prices
- `content/instructors.json` — instructor list
- `content/faq.json` — FAQ list
- `content/contact.json` — LINE, email, phone, location

Images go in `/public/images` and are referenced as `/images/<filename>`.

## Layout / component changes

Do not modify `/src` (layout, styling, components) unless the user
explicitly asks for a design or layout change.

## Before publishing

Run `npm run build` and make sure it succeeds and the page renders
correctly in preview before publishing.
