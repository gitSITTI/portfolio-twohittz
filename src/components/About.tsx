import type { AboutLink } from "../data/content";

type AboutProps = {
  eyebrow: string;
  title: string;
  photoAlt: string;
  photoInitials: string;
  photoSrc?: string;
  paragraphs: string[];
  links: AboutLink[];
};

export function About({
  eyebrow,
  title,
  photoAlt,
  photoInitials,
  photoSrc,
  paragraphs,
  links,
}: AboutProps) {
  return (
    <section id="about" className="grid gap-8 py-14 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-12">
      <div className="photo-shell">
        {photoSrc ? (
          <img src={photoSrc} alt={photoAlt} className="h-full w-full object-cover" />
        ) : (
          <div className="photo-placeholder">
            <span>{photoInitials}</span>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-display text-3xl italic md:text-5xl">{title}</h2>
        </div>

        <div className="space-y-4 text-[0.98rem] leading-7 text-[var(--ink-dim)]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 border-t border-[var(--line)] pt-5 text-sm">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
