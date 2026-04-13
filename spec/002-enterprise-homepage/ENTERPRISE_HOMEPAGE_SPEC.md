# Enterprise Homepage Redesign Specification

> **Goal:** Replace the current zen-style homepage with the "Outcome Engineering" enterprise copy.  
> **Source:** `C:\Source\Business\DELTAXY_ENTERPRISE_SERVICE_PAGE_COPY.md`  
> **Theme:** Keep existing DeltaXY zen design system (fonts, CSS vars, spacing). NO Hercules UI migration.  
> **Timeline source:** The Enterprise copy was written April 9, 2026.  
> **Date:** April 13, 2026

---

## Design Decision: Keep Current Theme

The current homepage uses the zen/paper theme with `fraunces` serif + instrument sans, warm paper tones, and calm spacing. The Enterprise copy is about tone, not visual redesign. **Don't swap themes mid-stream.** Update content, keep the vessel.

### Why NOT Hercules V2 theme on DeltaXY
- Hercules is a dark dashboard with sidebar nav, charts, and data tables
- DeltaXY is a warm, light marketing site
- The "Hercules theme" ≠ "DeltaXY should look like Hercules"
- The fonts (Fraunces + Instrument Sans) are already good — keep current setup

---

## File Changes

### 1. `src/app/page.tsx` — Full Rewrite

Replace all inline data objects and sections. New structure:

```
page.tsx
├── data objects (replaced)
│   ├── whoThisIsFor (NEW — replaces nothing)
│   ├── outcomes (NEW — replaces nothing)
│   ├── services (REWRITTEN — was "What we do", now 3 service tiers)
│   ├── howItWorks (REWRITTEN — was 4 steps, now 4 steps with different copy)
│   ├── deliveryModel (NEW — replaces nothing)
│   ├── whyDeltaxy (REWRITTEN — was 4 cards, now text + bullets)
│   ├── commercialPrinciple (NEW — replaces nothing)
│   └── faqs (REMOVED — enterprise page has no FAQ section)
├── imports (same — no new deps)
├── metadata (UPDATED — new title/description)
└── JSX (REWROTE sections below)
```

### 2. `src/components/Nav.tsx` — Minor Update

| Current | New |
|---------|-----|
| Nav links: Solutions, Industries, Proof, Partners, About, Contact | Nav links: Outcomes, Services, How It Works, Why DeltaXY, Contact |
| CTA: "Send 3 sample docs" | CTA: "Book a Working Session" |
| mailto: `hello@deltaxy.ai` | mailto: `satish@deltaxy.ai` |

### 3. `src/components/Footer.tsx` — Update Copy

| Current | New |
|---------|-----|
| Tagline: "AI agents that learn..." | Tagline: "DeltaXY — outcome engineering for document-heavy operations" |
| "Case Studies" column | Remove or replace with "Services" |
| Email: `hello@deltaxy.ai` | Email: `satish@deltaxy.ai` |

### 4. `src/app/layout.tsx` — No Changes

Same fonts, same providers. Metadata gets updated in page.tsx.

---

## Content Map: Old Homepage → New Enterprise Homepage

### Section 1: Hero

| Old | New |
|-----|-----|
| Eyebrow: "Document intelligence for regulated work" | **REMOVE** (no eyebrow on enterprise hero) |
| Headline: "Document workflows that feel under control" | **Headline:** "Outcome Engineering for Regulated, Document-Heavy Operations" |
| Sub: "DeltaXY designs and implements..." | **Sub:** "Most enterprise AI efforts fail in production — not because models are weak, but because workflows are not engineered for accuracy, controls, and adoption." |
| CTA: "Send 3 sample docs" | **CTA:** "Request an Executive Working Session" |
| Supporting: "Sanitized files are fine..." | **Supporting:** "You'll meet directly with DeltaXY leadership. No generic sales process." |
| Proof strip (5 metrics) | **KEEP** — same metrics in different layout |

### Section 2: Trust Statement → Who This Is For

| Old | New |
|-----|-----|
| "Built on real workflows, not demo-ware" | **HEADLINE:** "Built for Heads of Advisory, Compliance, Operations, Data, and AI" |
| Body: "DeltaXY works where documents are messy..." | Body: "Who own outcomes, budgets, and risk." |
| Blog link | **FIT FOR TEAMS WITH:** 4 bullet cards |
| | • high-volume document operations |
| | • high cost of errors (financial, regulatory, reputational) |
| | • fragmented review workflows across email, spreadsheets, and systems |
| | • pressure to move from pilot to production quickly |

### Section 3: Problem Section → Outcomes That Matter

| Old | New |
|-----|-----|
| "Why most document AI disappoints" | **KICKER:** "Outcomes that matter" |
| "The problem is rarely reading the file..." | **HEADLINE:** "Higher accuracy. Lower effort. Faster turnaround. Audit-ready." |
| 3 problem cards | **5 checkmark items** (not cards): |
| | • extraction and decision accuracy |
| | • lower manual review effort |
| | • faster turnaround for document-driven processes |
| | • audit-ready evidence trails and controls |
| | • production workflows integrated into existing systems |

### Section 4: What We Do → Service Offers

| Old | New |
|-----|-----|
| "Workflow diagnostic" | **1) 10-Day Document Accuracy Audit** |
| "3-file pilot" | **2) 30-Day Workflow Automation Sprint** |
| "Production implementation" | **3) 6-Week Production Rollout** |
| Each had "includes" list | Each has "What we deliver/ship/implement" list |
| Links to /contact | CTA: "Discuss this engagement" → /contact |

### Section 5: Industry Section → REMOVED

The enterprise page has no dedicated industry section. Remove this section entirely.

### Section 6: Proof Section → REMOVED

Move proof metrics to hero strip only. The enterprise page focuses on what DeltaXY does, not case studies. (Case studies live on /aviation, /compliance, /legal.)

### Section 7: Why DeltaXY → Why DeltaXY (Rewritten)

| Old | New |
|-----|-----|
| 4 cards: Reviewable, Regulated, Production-first, Senior | **HEADLINE:** "Most vendors optimize model output. We optimize business outcomes." |
| | **4 bullets (not cards):** |
| | • Outcome Engineering discipline, not ad-hoc automation |
| | • Production-first execution with measurable KPIs |
| | • Designed for regulated environments where errors are expensive |
| | • Built to be auditable, maintainable, and operationally adopted |

### Section 8: How It Works → How It Works (Rewritten)

| Old | New |
|-----|-----|
| Steps: Share, Assess, Pilot, Productionize | Steps: Executive Intake, Proof, Decision, Scale |
| "Start with 3 sample docs" | "Define business objective, risk constraints, and success metrics" |

### Section 9: Partner Section → Delivery Model (NEW)

| Old | New |
|-----|-----|
| Partner card with bullets | **HEADLINE:** "Delivery Model" |
| Partner CTA | Body: "You work with a focused DeltaXY team that combines document AI engineering, workflow design, and domain-aware validation." |

### Section 10: FAQ → Commercial Principle (NEW)

| Old | New |
|-----|-----|
| 5 FAQ accordions | **HEADLINE:** "Earned Expansion" |
| | "We scale only when outcomes are measured and verified. If we do not create measurable value, you should not continue." |

### Section 11: Final CTA → Book a Meeting (Rewritten)

| Old | New |
|-----|-----|
| "If your team is buried in documents, start with 3 sample files" | **Headline:** "Tell us about your document workflows, constraints, and goals" |
| **Sub:** "We'll show what can be extracted..." | **Sub:** "We'll recommend the fastest path to measurable outcomes" |
| **CTA:** "Send 3 sample docs" | **CTA:** "Request an Executive Working Session" |
| **Secondary:** "Contact us" → /contact | **Secondary:** "or email: satish@deltaxy.ai" |

---

## Section Order (Final Layout)

```
1. Hero (Outcome Engineering headline, proof strip)
2. Who This Is For (target audience + fit bullets)
3. Outcomes That Matter (5 outcome items)
4. Service Offers (3 tiers: 10-day, 30-day, 6-week)
5. How It Works (4 steps)
6. Delivery Model
7. Why DeltaXY (headline + 4 bullets)
8. Commercial Principle
9. Book a Meeting (final CTA)
```

---

## Technical Notes

- **No new dependencies.** Only standard React/Tailwind classes.
- **Email links:** All `mailto:` go to `satish@deltaxy.ai` with subject "Executive Working Session — DeltaXY"
- **Contact links:** Keep `/contact` for existing Calendly/integration
- **Scroll anchors:** Update `#solutions` → `#services`, `#industries` → remove, `#proof` → remove, `#partners` → remove, `#about` → remove
- **Metadata:** Update title to "DeltaXY — Outcome Engineering for Document-Heavy Operations"
- **Remove FAQ section** from homepage (no accordion needed on enterprise page)

---

## Acceptance Criteria

- [ ] `page.tsx` renders all 9 sections with enterprise copy
- [ ] `Nav.tsx` has updated links and CTA
- [ ] `Footer.tsx` has updated tagline and email
- [ ] No broken links or mailto refs
- [ ] Mobile responsive (test at 320px)
- [ ] Build succeeds (`npm run build`)
- [ ] Push to main

---

*Source: DELTAXY_ENTERPRISE_SERVICE_PAGE_COPY.md (created Apr 9, 2026)*
