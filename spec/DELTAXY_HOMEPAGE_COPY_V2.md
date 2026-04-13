# DeltaXY Homepage Copy — V2

*Version 2 — April 7, 2026*
*Direction: PromptQL-style. Clinical. Confident. Engineer-honest. Numbers, not adjectives.*

---

## 1. Header

**Logo:** DeltaXY

**Navigation:**
- Product
- Solutions
- Proof
- Blog
- Contact

**Primary CTA:**
**Talk to the engineer**

---

## 2. Hero section

### Eyebrow
Document AI for enterprises that need to be right

### Headline
**56% of enterprises see zero ROI from AI.**

### Subheadline
We're not one of them.

Extract data from documents. Analyze it with cited sources. Push it to your systems. Every answer traced to the exact line on the page.

Not a demo. 10,000+ documents processed in production.

### Primary CTA
**Talk to the engineer →**

### Supporting line
You'll talk to Satish — the engineer who built the system. Not a sales team.

### Hero proof strip (single horizontal row)
**95%** extraction accuracy · **800+** fields per document · **10,000+** documents processed · **6 weeks** to production

---

## 3. Problem section

### Headline
**Your document AI is probably wrong.**

### Body
Most teams ship 84% accuracy. The real number is 67%. Someone catches it in an audit.

We know because that was us. 67% was our actual accuracy on production documents. We thought it was 84%. Domain-specific evaluation fixed our blind spots and took us to 95%.

The problem isn't extraction. The problem is knowing when extraction is wrong.

Three things kill document AI in production:

### Problem 1
**Chunking destroys context**

You chop a 100-page lease into 500-token pieces and hope cosine similarity finds the right ones. It doesn't. The answer spans two chunks. The context is three pages up.

### Problem 2
**Citations you can't verify**

The AI says "Lease Start Date is 15 March 2019." Which page? Which paragraph? Point to it. Prove it. You can't — because your system threw away the positions.

### Problem 3
**Every session starts from zero**

Ask the same question 100 times. 25 seconds every time. The system never learns, never caches, never compounds.

---

## 4. What we do

### Headline
**Three layers. One engine.**

### Body
We don't sell AI. We deploy document intelligence that works in production.

### Layer 1: Extract
**Documents → structured data**

PDFs, spreadsheets, emails, scanned documents. 800+ fields extracted per document. Every field traced to its exact position on the page — bounding box coordinates, not just page numbers.

Not keyword matching. The AI reads the full document and understands context across sections, tables, and cross-references.

### Layer 2: Analyze
**Ask anything. Get verified answers.**

Natural language queries across your document corpus. The system reads a summary index, picks the relevant files, reads them in full, and answers with inline citations.

Every answer cites the exact source. Click a citation — see the highlighted text on the actual page.

66% of queries answered from cached knowledge after 29 questions. 3 seconds instead of 25. The system compounds with every question.

### Layer 3: Workflow
**Push verified data to your systems**

Extracted data flows to your existing systems. BC Leasing, AMOS, SharePoint, Excel, APIs. Not a manual export — an automated pipeline with validation at every step.

### On top of everything: Autolearn
**The system corrects itself.**

Every answer is evaluated against source documents. Citation errors caught. Wasted reads eliminated. Learned rules written back into the system.

Accuracy doesn't degrade over time. It improves.

---

## 5. Two ways to start

### Headline
**Start in 5 days. Or 30.**

---

### Offer 1: Document AI Audit
**5 days. Your documents. Our engine.**

You get:
- Accuracy report on YOUR documents — not a demo dataset
- Every extraction traced to the exact line on the page
- Citation verification — how many claims can be proven
- Architecture recommendation — what to fix, what to keep
- Cost model — what you're spending vs what you should be

**€15,000 fixed fee.**

We run your actual documents through our production engine. You see what works and what doesn't. No surprises in production later.

**Talk to the engineer →**

---

### Offer 2: 30-Day AI Analyst
**A working AI analyst on your data. 30 days.**

You get:
- Document extraction deployed in your environment
- Connected to your data — documents, databases, email, SharePoint
- Natural language queries with cited, verifiable answers
- Self-improving eval loop running from day 1
- Production-ready at day 30 — not a prototype

**€40,000–60,000.**

Same engineer from day 1 to day 30. No handoffs. No "let me check with the team." The person who builds it is the person you talk to.

**Talk to the engineer →**

---

## 6. Industries

### Headline
**Same engine. Configured per domain.**

---

### Aviation

**3 days to onboard one lease. 800 fields. 100+ pages.**

Your analyst reads every page. Twice. Copies values into spreadsheets. Makes errors nobody catches until the audit.

We do it in 30 minutes.

800+ fields extracted per lease. Every field traced to the source page. Human reviews exceptions — not everything.

7 aviation clients in production. Lessors and airlines.

*"This is insane. Oh my God. It is just unbelievable."*
— Tim, Aviation Advisory

---

### Compliance

**500+ DORA requirements. Mapped in days, not months.**

Regulation PDFs → structured requirements → gap analysis → compliance report. Same engine, different configuration.

PwC charges €75-200K for Solvency II compliance. We deliver in days.

---

### Legal

**2.5 years. 10,000+ legal documents processed.**

Court transcripts, contracts, evidence files. Structured extraction with citation trails that survive judicial scrutiny.

93% correctness on legal RAG benchmarks. No embeddings. No vector database.

---

## 7. Proof

### Headline
**Production numbers. Not projections.**

| Metric | Number |
|---|---|
| Extraction accuracy | 95% |
| Fields per document | 800+ |
| Documents processed | 10,000+ |
| Time to production | 6 weeks |
| Aviation clients | 7 |
| Regulatory requirements mapped | 500+ |
| Manual time replaced per lease | 3 days → 30 minutes |

### Open source
**llm-kb** — our document knowledge base engine. MIT license.

318 npm downloads in the first week. 15 GitHub stars. 26,000+ LinkedIn impressions on the launch post.

62.6% on DataAgentBench — beats PromptQL (54%), beats raw Gemini (38%).

npm install -g llm-kb

**GitHub →**

---

## 8. How it works

### Headline
**Drop documents. Ask questions. Get verified answers.**

### Step 1
**Connect your data**

PDFs, databases, SharePoint, email. Drop them in or point us at the source. We handle parsing, indexing, and bounding box extraction.

### Step 2
**The engine reads everything**

No chunking. No embeddings. The AI reads full documents, builds a concept-organized wiki, and maintains a summary index.

### Step 3
**Ask anything**

Natural language. The answer cites exact sources. Click a citation — see the highlighted text on the page.

### Step 4
**Push to your systems**

Verified data flows to BC Leasing, AMOS, Excel, SharePoint, or any API. Validation at every step.

### Step 5
**It gets smarter**

Every query compounds into the wiki. Every eval corrects errors. The system improves without you touching it.

---

## 9. Why us

### Headline
**Small team. Real systems. No theatre.**

### Point 1: Engineers, not consultants
6 people. Everyone builds. The person on the call is the person who writes the code. No layers. No handoffs. No "project managers" relaying messages.

### Point 2: Production, not demos
10,000+ documents processed across aviation, compliance, and legal. Not in a lab. In live operations where errors have consequences.

### Point 3: You can verify everything
Every extraction has coordinates. Every answer has citations. Every citation points to the exact line on the page. We don't ask you to trust us. We show you the source.

### Point 4: Self-improving
Most AI systems degrade. Ours improve. The eval loop catches errors, writes rules, and makes the next query more accurate. Accuracy goes up over time, not down.

---

## 10. For partners

### Headline
**Add document AI to your practice. We stay invisible.**

### Body
Advisory, audit, and consulting firms: you keep the client relationship. We build the document intelligence behind the scenes.

White-label or subcontract. Your brand, our engine. Start with one engagement — if it works, we scale it.

We already do this. Our largest partner bills our work as their own capability. Their clients see 95% accuracy and 40 hours saved per week. They see a consulting firm. We see revenue.

**Partner with us →**

---

## 11. FAQ

### Do I need to upload files to a cloud?
No. We deploy in your environment. Your documents don't leave your infrastructure.

### Is this a product or a service?
Both. The engine is a product. The deployment is a service. You get working software and the engineer who built it.

### How accurate is it really?
95% on aviation lease extraction. Verified against human-annotated ground truth, not self-reported. We publish our eval methodology — read it on our blog.

### How is this different from ChatGPT / Claude?
ChatGPT gives you text. We give you structured data with coordinates. Every value traced to its exact position on the page. That's the difference between a chatbot and production document intelligence.

### What if our documents are messy?
That's the only kind we've seen. Scanned PDFs, inconsistent formats, handwritten annotations, multi-language contracts. 10,000 of them.

---

## 12. Final CTA

### Headline
**Talk to the engineer who built it.**

### Body
No sales team. No demo sequence. No "let me loop in my manager."

You'll talk to Satish. 19 years of engineering. 10,000+ documents processed. The person who builds the system is the person on the call.

### Primary CTA
**Book a call with Satish →**

### Secondary
Or send 3 sample documents. Sanitized is fine. We'll show what comes out.

**Send documents →**

---

## 13. Footer

**DeltaXY** — document intelligence for enterprises that need to be right.

Blog · GitHub · LinkedIn · Contact

---

## Copy rules (for consistency across all pages)

1. **Lead with their pain, not our product.** Every section opens with a problem or a number.
2. **Numbers, not adjectives.** Never "cutting-edge" or "revolutionary." Always "95%" or "800 fields" or "6 weeks."
3. **Short sentences.** If a sentence has a comma, split it into two.
4. **"You" more than "we."** The reader is the subject. We're the solution.
5. **No buzzwords.** Banned: leverage, synergy, cutting-edge, world-class, revolutionary, innovative, transform, empower, seamless.
6. **Every claim is verifiable.** If we say a number, it came from production. If we quote someone, they said it.
7. **CTA = human.** "Talk to the engineer" not "Request a demo." "Book a call with Satish" not "Contact sales."
8. **Credibility from others first.** "PwC says..." "MIT says..." "Tim said..." — then our response.
