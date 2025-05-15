
import { siteConfig } from '@/lib/constants';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-8 print:hidden">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          Crafted with <span className="text-primary">&hearts;</span> for spiritual seekers.
        </p>
      </div>
    </footer>
  );
}

