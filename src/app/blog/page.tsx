import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
const otherPosts = blogPosts.filter((post) => post.slug !== featuredPost.slug);

export const metadata: Metadata = {
  title: "Blog | DeltaXY",
  description:
    "Proof, workflows, and notes from regulated document operations.",
};

export default function BlogPage() {
  return (
    <div className="home-shell">
      <section className="dxy-hero">
        <div className="dxy-container">
          <div className="mx-auto max-w-[860px] text-center">
            <p className="dxy-eyebrow mx-auto">Journal</p>
            <h1 className="dxy-display mt-6">
              Proof, workflows, and notes from regulated document operations
            </h1>
            <p className="dxy-lead mx-auto mt-6 max-w-[720px]">
              A calm editorial space for social proof, operating lessons, and
              search-friendly insight around aviation, compliance, and
              document-heavy workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="dxy-kicker">Featured</p>
              <h2 className="dxy-heading mt-4">Start with proof, not opinions.</h2>
            </div>
          </div>

          <article className="dxy-card mt-10 p-7 sm:p-10">
            <p className="text-sm text-[color:var(--dxy-accent)]">{featuredPost.category}</p>
            <h3 className="mt-4 font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] text-[color:var(--dxy-ink)]">
              {featuredPost.title}
            </h3>
            <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-[color:var(--dxy-muted)] sm:text-lg">
              {featuredPost.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--dxy-muted)]">
              <span>{featuredPost.date}</span>
              <span>•</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <Link href={`/blog/${featuredPost.slug}`} className="dxy-inline-link mt-8 inline-flex">
              Read article
            </Link>
          </article>
        </div>
      </section>

      <section className="dxy-section">
        <div className="dxy-container">
          <div className="max-w-[760px]">
            <p className="dxy-kicker">Latest</p>
            <h2 className="dxy-heading mt-4">Built to earn trust before the first call.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <article key={post.slug} className="dxy-card flex h-full flex-col p-7 sm:p-8">
                <p className="text-sm text-[color:var(--dxy-accent)]">{post.category}</p>
                <h3 className="mt-4 font-serif text-[2rem] leading-tight text-[color:var(--dxy-ink)]">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm text-[color:var(--dxy-muted)]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="dxy-inline-link mt-7 inline-flex">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dxy-section border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/45">
        <div className="dxy-container">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Social proof",
                body: "Use the blog to publish proof-led articles, implementation notes, and narrow case-study style posts buyers can share internally.",
              },
              {
                title: "Organic traffic",
                body: "Target long-tail search around DORA mapping, aviation lease abstraction, document review workflows, and production AI operations.",
              },
              {
                title: "Sales support",
                body: "Give prospects something calm, precise, and credible to read before a call instead of sending a generic AI deck.",
              },
            ].map((item) => (
              <article key={item.title} className="dxy-card p-7 sm:p-8">
                <h3 className="font-serif text-[1.9rem] leading-tight text-[color:var(--dxy-ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-[color:var(--dxy-muted)] sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dxy-section">
        <div className="dxy-container">
          <div className="mx-auto max-w-[860px] rounded-[28px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] px-7 py-10 text-center shadow-[0_8px_24px_rgba(58,53,48,0.04)] sm:px-12 sm:py-14">
            <h2 className="font-serif text-[clamp(2.1rem,4.2vw,4rem)] leading-[0.98] text-[color:var(--dxy-ink)]">
              Want proof tailored to your workflow?
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[18px]">
              Start with 3 sample documents and we’ll show what can be extracted,
              what needs review, and whether the workflow is worth implementing.
            </p>
            <a
              href="mailto:hello@deltaxy.ai?subject=3%20sample%20docs%20for%20DeltaXY"
              className="dxy-button mt-8 inline-flex"
            >
              Send 3 sample docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
