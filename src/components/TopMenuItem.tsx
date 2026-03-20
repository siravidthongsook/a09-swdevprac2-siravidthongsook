import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  href: string;
};

export default function TopMenuItem({ title, href }: TopMenuItemProps) {
  return (
    <Link
      href={href}
      className="rounded-sm border border-transparent px-3 py-2 text-sm font-medium text-[var(--muted-foreground)] hover:border-[var(--border)] hover:bg-[hsl(0_0%_100%_/_0.65)] hover:text-[var(--foreground)]"
    >
      {title}
    </Link>
  );
}
