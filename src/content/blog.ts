export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "aviation-leasing-document-workflows",
    category: "Aviation leasing",
    title: "How aviation leasing teams reduce manual review in document workflows",
    excerpt:
      "What actually slows teams down is rarely the PDF itself. It is the checking, comparison, and spreadsheet work around it.",
    date: "2026-03-31",
    readTime: "6 min read",
    featured: true,
    seoTitle:
      "Aviation leasing document workflows | DeltaXY blog",
    seoDescription:
      "How aviation leasing teams reduce manual review in document-heavy workflows without adding new operational uncertainty.",
    sections: [
      {
        heading: "The bottleneck is not reading",
        paragraphs: [
          "Most aviation teams already know that a model can pull fields from a document. That is not the hard part. The hard part is whether the result can survive live operations with edge cases, mixed formats, and the need for human review.",
          "In lease abstraction and utilization reporting workflows, the real drag often sits in the checking. Analysts compare PDFs to spreadsheets, reformat outputs, flag exceptions, and spend time building confidence in the result before it can be used downstream.",
        ],
      },
      {
        heading: "Where the time actually goes",
        paragraphs: [
          "Manual review expands quietly. One field mismatch creates a follow-up check. A missing value becomes an email chain. An inconsistent table layout forces a workaround. Over time, the workflow accumulates friction far beyond the extraction task itself.",
          "That is why document automation should be designed around the workflow, not around a single model output. Structured outputs, source traceability, review steps, and confidence-based triage matter more than impressive demo accuracy.",
        ],
      },
      {
        heading: "What good production design looks like",
        paragraphs: [
          "A production-ready document workflow gives an operations team a result they can review quickly and trust appropriately. It should be clear what was extracted, where it came from, what needs review, and what can move forward without manual handling.",
          "For aviation leasing teams, that means fewer hours lost to repeated extraction and reformatting, better visibility into exceptions, and a calmer operating rhythm around recurring document work.",
        ],
      },
    ],
  },
  {
    slug: "dora-requirement-mapping-without-spreadsheet-chaos",
    category: "Compliance",
    title: "Mapping DORA requirements without drowning in spreadsheets",
    excerpt:
      "Regulatory mapping work breaks down when the process is opaque, not only when the regulation is large.",
    date: "2026-03-30",
    readTime: "5 min read",
    seoTitle: "DORA requirement mapping workflow | DeltaXY blog",
    seoDescription:
      "A calmer way to structure DORA requirement mapping and review-heavy compliance workflows.",
    sections: [
      {
        heading: "The hidden cost of requirement mapping",
        paragraphs: [
          "Compliance teams do not struggle only because frameworks are dense. They struggle because requirements must be extracted, organized, cross-checked, and reviewed in ways that hold up under scrutiny.",
          "When the workflow lives entirely in spreadsheets and manual notes, the process becomes difficult to audit and slow to repeat across clients or business units.",
        ],
      },
      {
        heading: "Why reviewability matters",
        paragraphs: [
          "A useful mapping workflow needs clear structure. Teams should be able to see the requirement, the extracted obligation, the target control area, and the reasoning path without guessing what happened inside the system.",
          "That is what turns AI assistance from a novelty into a practical layer inside regulated work. Reviewability is not extra. It is the product.",
        ],
      },
      {
        heading: "Start with a narrow slice",
        paragraphs: [
          "The fastest path is usually not a giant transformation project. It is a narrow pilot on a specific document set or control-mapping workflow where the team can test fit, validate edge cases, and decide whether the system is worth scaling.",
        ],
      },
    ],
  },
  {
    slug: "what-95-percent-extraction-accuracy-means-in-production",
    category: "Proof",
    title: "What “95% extraction accuracy” actually means in production",
    excerpt:
      "Accuracy sounds reassuring until a workflow depends on the 5% that matters most.",
    date: "2026-03-28",
    readTime: "4 min read",
    seoTitle: "95% extraction accuracy in production | DeltaXY blog",
    seoDescription:
      "Why extraction accuracy only matters when paired with review logic, traceability, and workflow design.",
    sections: [
      {
        heading: "Accuracy is not the workflow",
        paragraphs: [
          "Teams are often sold a percentage before they are shown an operating model. But a workflow does not run on a percentage alone. It runs on how exceptions are handled, how confidence is surfaced, and how outputs are reviewed.",
          "A high extraction score on clean samples can still create operational risk if edge cases are invisible or if a team has no clear review path.",
        ],
      },
      {
        heading: "What buyers should ask instead",
        paragraphs: [
          "Ask what happens when the system is uncertain. Ask whether outputs can be traced back to source material. Ask how corrections feed back into the workflow. Ask how long it takes to move from sample to production.",
          "These questions reveal whether the implementation is designed for real work or for a demo environment.",
        ],
      },
    ],
  },
  {
    slug: "when-not-to-automate-a-document-workflow",
    category: "Workflow design",
    title: "When not to automate a document workflow",
    excerpt:
      "Some document processes look painful but are still poor automation candidates. Knowing that early is a strength.",
    date: "2026-03-26",
    readTime: "4 min read",
    seoTitle: "When not to automate a document workflow | DeltaXY blog",
    seoDescription:
      "How to decide whether a document-heavy process is worth automating or should remain manual for now.",
    sections: [
      {
        heading: "Bad fit is useful information",
        paragraphs: [
          "Not every workflow should be automated immediately. If document formats are extremely inconsistent, downstream decisions are entirely bespoke, or the volume is too low, the best answer may be to hold off or redesign the process first.",
          "That does not mean the evaluation failed. It means the team avoided spending time and budget on the wrong implementation.",
        ],
      },
      {
        heading: "What a strong candidate looks like",
        paragraphs: [
          "Good automation candidates usually have recurring document patterns, clear outputs, measurable pain, and a practical review model. Even when quality is imperfect on day one, the workflow can still create value if the human review burden drops meaningfully.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
