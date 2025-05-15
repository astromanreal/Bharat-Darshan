
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sunrise, Search, Mail, Settings, Moon, Sun } from "lucide-react"; // Removed Globe
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  React.useEffect(() => {
    // Close sheet on pathname change
    setOpen(false);
  }, [pathname]);

  const handleAction = (alertMessage: string) => {
    alert(alertMessage);
    setOpen(false);
  };
  
  const handleThemeToggle = () => {
    if (mounted) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    // Optionally close the sheet, or keep it open
    // setOpen(false); 
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs p-0 flex flex-col">
        <SheetClose asChild>
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center space-x-2">
            <Sunrise className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">Sanatana Insights</span>
          </Link>
        </div>
        </SheetClose>
        <nav className="flex-grow flex flex-col space-y-1 p-4 overflow-y-auto">
          {siteConfig.mainNav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:bg-muted hover:text-primary"
                )}
              >
                {item.title}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <Separator />
        <div className="p-4 border-t mt-auto space-y-1"> {/* Changed space-y-2 to space-y-1 for tighter packing */}
           <SheetClose asChild>
           <Button variant="ghost" className="w-full justify-start space-x-2 text-base" onClick={() => handleAction('Search clicked!')}>
              <Search className="h-5 w-5" />
              <span>Search</span>
          </Button>
          </SheetClose>
           <SheetClose asChild>
            <Link href="/contact" passHref>
                <Button variant="ghost" className="w-full justify-start space-x-2 text-base">
                    <Mail className="h-5 w-5" />
                    <span>Contact</span>
                </Button>
            </Link>
          </SheetClose>
           <SheetClose asChild>
            <Link href="/settings" passHref>
                <Button variant="ghost" className="w-full justify-start space-x-2 text-base">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                </Button>
            </Link>
          </SheetClose>
          <Button
            variant="ghost"
            className="w-full justify-start space-x-2 text-base"
            onClick={handleThemeToggle}
            disabled={!mounted}
          >
            {mounted ? (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />) : <Sun className="h-5 w-5 opacity-50" />}
            <span>Toggle Theme</span>
          </Button>
           {/* Removed Toggle Language Button */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
