# DeltaXY homepage page spec

*Version 1 — March 31, 2026*  
*Purpose: implementation spec for the new DeltaXY homepage in the DeltaXY website codebase*  
*This document is for building the page, not for visual exploration.*

---

## 1. Page objective

Create a new homepage for DeltaXY that feels:
- calm
- trustworthy
- long-term
- precise
- proof-led

The page should communicate:
- DeltaXY handles document-heavy regulated workflows
- the company is credible because it has production proof
- the company reduces manual review and uncertainty
- the easiest next step is to send 3 sample documents

This page should **not** feel like:
- a generic AI startup landing page
- a dark SaaS dashboard homepage
- a vague consulting site
- a loud “agent” company

---

## 2. Primary audience

### Primary
- operations leaders
- heads of compliance
- advisory / consulting partners
- document-heavy teams in regulated environments

### Secondary
- aviation leasing stakeholders
- audit-style workflow owners
- boutique partners who may white-label or subcontract DeltaXY

### What they care about
- can this be trusted?
- will this reduce manual work?
- can the output be reviewed?
- is this real or just another AI demo?
- can we start small without risk?

---

## 3. Core message

### Positioning line
**Document intelligence for regulated work**

### Core promise
**Document workflows that feel under control**

### Supporting message
DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other review-heavy operations — with measurable accuracy, reviewable outputs, and production delivery in weeks.

---

## 4. Conversion goal

### Primary CTA
**Send 3 sample docs**

### Why this CTA
This is more concrete and lower-friction than:
- Book a demo
- Contact sales
- Get started

The page should be designed to move the user toward this action.

### Secondary CTA
**See proof**

Use only where needed inside the page. Do not create competing hero CTAs.

---

## 5. Brand and visual direction

This page should borrow from the calm editorial feel of **themindfulai.dev**.

### Visual references to reuse in spirit
- serif + sans pairing
- warm paper-like background
- muted earth/sage palette
- generous whitespace
- subtle borders
- soft shadows
- literary calm, not startup hype

### Recommended practical font choice
Use the same pair already proven in the blog:
- **Headings:** Crimson Text
- **Body/UI:** Inter

This is preferred over introducing a new font system for the first build.

### Recommended homepage palette
- Background: `#FAF7F2`
- Card background: `#FCFAF7`
- Primary text: `#3A3530`
- Secondary text: `#6B6358`
- Accent: `#8B7E6A`
- Accent light: `#B8AB96`
- Border: `#E9E4DC`
- Hover tint: `rgba(139, 126, 106, 0.06)`

### Visual rules
- light mode only for this page
- no blue-led brand feel
- no gradients
- no neon accents
- no glassmorphism
- no dashboard collage in hero
- no “AI blobs” or abstract glowing shapes

---

## 6. Layout system

### Desktop frame
- viewport target: 1440px wide
- content max width: 1120px
- outer horizontal padding: 80px minimum, 120px ideal on wide screens

### Tablet
- content max width: 720px–900px
- sections stack vertically where needed

### Mobile
- target width: 390px
- horizontal padding: 20px
- all multi-column sections collapse to single column

### Section spacing
- hero top padding: 96px
- standard section top/bottom padding: 72px–96px desktop
- mobile section padding: 48px–64px

### Grid
- use a 12-column desktop grid if the existing site supports it
- avoid rigid equal-width 3-card SaaS grids wherever possible
- prefer editorial rhythm: one large block + supporting smaller blocks

---

## 7. Page structure

The page order should be:

1. Header
2. Hero
3. Trust statement strip
4. Problem section
5. Services section
6. Industries section
7. Proof section
8. Why DeltaXY section
9. How it works section
10. Partner section
11. FAQ
12. Final CTA
13. Footer

---

## 8. Section-by-section implementation spec

## 8.1 Header

### Content
- Logo: DeltaXY
- Nav links: Solutions / Industries / Proof / Partners / About / Contact
- CTA button: Send 3 sample docs

### Layout
- full width
- very light header
- thin bottom border
- no filled dark nav background
- nav aligned horizontally on desktop
- hamburger on mobile

### Behavior
- sticky optional, but if sticky keep it subtle
- CTA remains visible on desktop

---

## 8.2 Hero

### Content
**Eyebrow:** Document intelligence for regulated work  
**Headline:** Document workflows that feel under control  
**Body:** DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other review-heavy operations — with measurable accuracy, reviewable outputs, and production delivery in weeks.  
**Primary CTA:** Send 3 sample docs  
**Supporting line:** Sanitized files are fine. We’ll show what can be extracted, where review is needed, and what production would require.

### Proof strip
- 95% extraction accuracy
- 40+ hours saved per week
- 10,000+ documents processed
- 6 weeks to production
- 500+ DORA requirements mapped

### Layout
- centered text block
- max text width: 760px
- CTA directly below supporting paragraph
- proof strip below CTA
- optional quiet visual panel below or beside the text, but not required

### Important notes
- use one clear CTA only in the hero
- no secondary hero button beside primary
- do not place dashboard screenshots all over the hero
- hero should feel like a deep breath

---

## 8.3 Trust statement strip

### Content
**Headline:** Built on real workflows, not demo-ware  
**Body:** DeltaXY works where the documents are messy, the review burden is real, and blind trust is not an option. Our systems are designed for human review, operational clarity, and measurable performance.

### Layout
- narrow centered section
- could be a single line + small paragraph
- use thin borders or quiet background shift to separate from hero

---

## 8.4 Problem section

### Content
**Eyebrow:** Why most document AI disappoints  
**Headline:** The problem is rarely reading the file. The problem is surviving the workflow.

**Intro:** Most teams already know AI can extract something from a PDF. What usually fails is everything around it — review, exceptions, spreadsheet outputs, source traceability, and the confidence to use the result in real work.

#### Problem 1
**Manual review keeps expanding**  
Teams lose hours extracting, checking, reformatting, and comparing information across PDFs, Excel files, and email-driven processes.

#### Problem 2
**Accuracy claims hide the real risk**  
A clean sample is not production. Real workflows break on edge cases, inconsistent formats, and the few fields that matter most.

#### Problem 3
**Generic AI tools create new uncertainty**  
In regulated environments, speed alone is not enough. Teams need outputs they can verify, explain, and trust.

### Layout
- intro at top
- three problem blocks below
- can be 3 columns on desktop, stacked on mobile
- avoid visual heaviness

---

## 8.5 Services section

### Content
**Eyebrow:** What we do  
**Headline:** We implement document workflows, not AI theatre  
**Intro:** We take one document-heavy process, make it measurable, reduce the manual burden, and build a workflow your team can actually use.

### Service block 1
**Workflow diagnostic**  
We review one high-friction workflow and identify where time, errors, and rework are actually happening.  
Includes: workflow mapping, bottleneck analysis, automation fit assessment, pilot recommendation  
CTA: Request a diagnostic

### Service block 2
**3-file pilot**  
Send 3 sanitized files. We return structured output, highlight edge cases, and show what a production workflow would require.  
Includes: sample extraction output, reviewability notes, edge case observations, implementation recommendation  
CTA: Send 3 sample docs

### Service block 3
**Production implementation**  
For workflows that prove out, we build production-grade systems with review steps, structured outputs, and clear operational logic.  
Typical outputs: structured extraction, Excel / CSV outputs, review workflows, confidence-based triage, source traceability  
CTA: Discuss an implementation

### Layout
- do not use a generic pricing-card feel
- use editorial service blocks with comfortable spacing
- each block should read clearly and calmly

---

## 8.6 Industries section

### Content
**Eyebrow:** Where we work  
**Headline:** Built for regulated, document-heavy environments

#### Aviation leasing
Lease abstraction, portfolio review, technical records processing, lifecycle workflows, and document operations that cannot afford guesswork.

#### Compliance and regulatory operations
Requirement mapping, evidence extraction, policy review, control documentation, and document-to-framework workflows.

#### Audit-style review workflows
Sensitive-file processing, evidence extraction, spreadsheet-ready outputs, and review support for repetitive document-heavy checks.

### Layout
- three blocks
- short copy
- light editorial presentation

---

## 8.7 Proof section

### Content
**Eyebrow:** Proof  
**Headline:** Outcomes from production

### Main proof story
**Aviation document workflow**
- 95% extraction accuracy
- 40+ hours saved per week
- 200+ documents processed per month
- delivered in 6 weeks

Body: DeltaXY built a production workflow for aviation leasing operations, turning repeated extraction and review into a structured process with human-verifiable outputs.

### Supporting proof 1
**500+ DORA requirements mapped**  
Structured regulatory requirements extracted, assessed, and organized into reviewable workflows for compliance teams.

### Supporting proof 2
**10,000+ total documents processed**  
Across aviation, legal, and regulatory work — not in a lab, in live operational settings.

### CTA
See proof

### Layout
- this should be the strongest visual section on the page
- one larger proof card + two smaller proof blocks
- keep it calm, not salesy

---

## 8.8 Why DeltaXY section

### Content
**Eyebrow:** Why DeltaXY  
**Headline:** Calm systems. Clear outputs. Nothing important hidden.

#### Reviewable by design
Outputs are built for human review, not blind trust.

#### Built for regulated work
Sensitive files, traceability, and operational accountability are part of the design, not afterthoughts.

#### Production-first thinking
We optimize for what survives real workflows, not what looks impressive in a demo.

#### Senior, direct execution
Small team. Fast iteration. No layers between the problem and the people building the solution.

### Layout
- four short value blocks
- can be 2x2 on desktop, stack on mobile

---

## 8.9 How it works section

### Content
**Eyebrow:** How engagement works  
**Headline:** Start small. Prove the workflow. Then decide.

1. **Share a sample** — You send representative files or describe the workflow.  
2. **We assess fit** — We identify what can be extracted reliably, where review belongs, and whether the workflow is worth automating.  
3. **Run a pilot** — We return sample output and show where the approach works — and where it doesn’t.  
4. **Productionize when ready** — If the workflow proves out, we implement it with review logic, structured outputs, and measurable performance.

CTA: Start with 3 sample docs

### Layout
- vertical timeline or 4-step row
- keep it simple and reassuring

---

## 8.10 Partner section

### Content
**Eyebrow:** For partners  
**Headline:** Offer document AI capability without building an internal AI team

Body: DeltaXY works with advisory, audit, and consulting partners on a white-label or subcontract basis. You keep the client relationship. We handle the workflow implementation behind the scenes.

Bullets:
- start with a small fixed-fee pilot
- white-label or subcontract delivery
- built for sensitive, review-heavy work
- useful where PDFs and spreadsheets dominate the process

CTA: Partner with DeltaXY

### Layout
- distinct section, slightly more commercial tone
- can use soft tinted background for separation

---

## 8.11 FAQ

### Questions
1. Do we need to upload files to a public AI tool?  
2. Do you sell software or services?  
3. What kinds of documents do you handle?  
4. How do we know if our workflow is a fit?  
5. How fast can this go live?

### Answers
Use the copy from `DELTAXY_HOMEPAGE_COPY_ZEN.md`.

### Layout
- accordion or stacked Q&A
- keep interaction minimal and clean

---

## 8.12 Final CTA

### Content
**Headline:** If your team is buried in documents, start with 3 sample files  
**Body:** We’ll show what can be extracted, what needs review, and whether the workflow is worth implementing.  
**Primary CTA:** Send 3 sample docs  
**Secondary text link:** Prefer to talk first? Contact us

### Layout
- centered
- generous spacing
- quiet but clear final action

---

## 8.13 Footer

### Footer line
**DeltaXY — document intelligence for regulated industries**

### Footer links
- Solutions
- Industries
- Proof
- Partners
- About
- Contact
- Privacy

---

## 9. Components needed

The coding/design side should create these reusable blocks:
- Header / nav
- Primary CTA button
- Eyebrow label
- Hero text block
- Proof strip metric item
- Editorial service block
- Industry block
- Proof case-study card
- 4-point value grid item
- Timeline step item
- Partner section block
- FAQ item
- Final CTA block

---

## 10. Content source

Use copy from:
**`C:\Source\Business\DELTAXY_HOMEPAGE_COPY_ZEN.md`**

Use visual direction from:
- **`C:\Source\Business\DELTAXY_STYLE_GUIDE.md`**
- **`C:\Source\Business\DELTAXY_HOMEPAGE_SAMPLE.md`**
- inspiration from **`C:\source\blog`** for calm editorial styling

---

## 11. Implementation constraints

### Must do
- light mode
- calm typography
- warm paper-like background
- one strong CTA in hero
- proof visible above the fold
- no clutter
- excellent readability
- mobile-friendly layout

### Must avoid
- gradients
- glowing UI
- dark theme hero
- generic AI stock visuals
- dashboard screenshot collage
- multiple competing CTAs in hero
- loud card-heavy SaaS aesthetic

---

## 12. SEO guidance

### Suggested title
**DeltaXY — Document intelligence for regulated industries**

### Suggested meta description
DeltaXY designs and implements document-heavy workflows for aviation, compliance, and other regulated environments — with measurable accuracy, reviewable outputs, and production delivery in weeks.

### Suggested H1
**Document workflows that feel under control**

---

## 13. Acceptance criteria

The page is successful if:
- it feels calm and trustworthy within 3 seconds
- the visitor understands what DeltaXY does without scrolling far
- the primary CTA is obvious
- the page shows proof early
- the page does not look like a generic AI startup site
- the page feels visually related to themindfulai.dev, but more enterprise and proof-led
- the page works cleanly on desktop and mobile

---

## 14. Build note for the coding agent

If another agent implements this in the DeltaXY website repo, the instruction should be:

> Build a new homepage using `DELTAXY_HOMEPAGE_PAGE_SPEC.md` as the layout and implementation source of truth, `DELTAXY_HOMEPAGE_COPY_ZEN.md` as the copy source of truth, and `DELTAXY_STYLE_GUIDE.md` as the visual source of truth. The page should borrow the calm editorial feel of themindfulai.dev, especially its serif/sans rhythm, warm backgrounds, subtle borders, and restrained spacing — but adapt it for a proof-led enterprise homepage.
