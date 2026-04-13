import { useEffect, useRef } from "react";

/** Mark stagger items visible when they enter the viewport */
export function useStaggerObserver() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".dxy-stagger-item");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("dxy-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((item) => obs.observe(item));
    return () => obs.disconnect();
  }, []);
  return ref;
}

/** Reusable stagger grid wrapper */
export function StaggerGrid({
  children,
  wrap = true,
  className = "",
}: {
  children: React.ReactNode;
  wrap?: boolean;
  className?: string;
}) {
  const ref = wrap ? useStaggerObserver() : null;
  return wrap ? (
    <div ref={ref} className={className}>{children}</div>
  ) : (
    <div className={className}>{children}</div>
  );
}
