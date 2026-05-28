type FooterProps = {
  left: string;
  right: string;
};

export function Footer({ left, right }: FooterProps) {
  return (
    <footer className="flex flex-col gap-3 border-t border-[var(--line)] py-8 text-xs uppercase tracking-[0.16em] text-[var(--ink-faint)] md:flex-row md:items-center md:justify-between">
      <p>{left}</p>
      <p>{right}</p>
    </footer>
  );
}
