import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found | DeltaXY",
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="home-shell">
      <article>
        <section className="dxy-hero">
          <div className="dxy-container max-w-[860px]">
            <Link href="/blog" className="dxy-inline-link inline-flex">
              Back to blog
            </Link>
            <p className="dxy-eyebrow mt-8">{post.category}</p>
            <h1 className="dxy-display mt-6">{post.title}</h1>
            <p className="mt-6 max-w-[760px] text-[18px] leading-8 text-[color:var(--dxy-muted)] sm:text-[21px]">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[color:var(--dxy-muted)]">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)]/35">
          <div className="dxy-container max-w-[760px] py-14 sm:py-20">
            <div className="space-y-12">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-[color:var(--dxy-ink)]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[18px]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="dxy-section">
          <div className="dxy-container">
            <div className="mx-auto max-w-[860px] rounded-[28px] border border-[color:var(--dxy-border)] bg-[color:var(--dxy-card)] px-7 py-10 text-center shadow-[0_8px_24px_rgba(58,53,48,0.04)] sm:px-12 sm:py-14">
              <h2 className="font-serif text-[clamp(2rem,4vw,3.7rem)] leading-[0.98] text-[color:var(--dxy-ink)]">
                Want to test a workflow instead of just reading about one?
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-[color:var(--dxy-muted)] sm:text-[18px]">
                Send 3 sample docs and we’ll show what can be extracted, where
                review belongs, and what production would require.
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
      </article>
    </div>
  );
}
