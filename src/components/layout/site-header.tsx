
"use client";

import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Sunrise, Moon, Sun, Search, User as UserIcon, Settings as SettingsIcon, Menu as MenuIcon } from 'lucide-react'; 
import { MobileNav } from '@/components/layout/mobile-nav';
import { useTheme } from 'next-themes';
import { siteConfig } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Sunrise className="h-6 w-6 text-primary" />
            <div>
              <span className="font-bold text-lg">{siteConfig.name}</span>
              <p className="text-xs text-muted-foreground hidden sm:block">{siteConfig.tagline}</p>
            </div>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-0.5 sm:space-x-1">
          {/* Desktop Navigation Dropdown */}
          <div className="hidden md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                  <MenuIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {siteConfig.mainNav.map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="cursor-pointer">
                    <Link
                      href={item.href}
                      className={cn(
                        "w-full flex items-center px-2 py-1.5 text-sm",
                        pathname === item.href
                          ? "text-primary font-semibold bg-primary/10" 
                          : "text-foreground/80 hover:bg-muted hover:text-primary"
                      )}
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                  )
                )}
                {/* Removed Contact and Settings from here as they are separate icons */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Action Icons */}
          <Button variant="ghost" size="icon" aria-label="Search" onClick={() => alert('Search clicked!')} className="inline-flex">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" aria-label="Settings" asChild className="inline-flex">
            <Link href="/settings">
              <SettingsIcon className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex"
          >
            {mounted ? (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <Sun className="h-5 w-5 opacity-50" /> }
          </Button>
          
          <Button variant="ghost" size="icon" aria-label="User Profile" asChild className="inline-flex">
            <Link href="/profile">
              <UserIcon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
