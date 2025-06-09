
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Palette, Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
// Removed: import type { Metadata } from 'next';

const colorThemes = [
  { name: "Default", className: "theme-default", primaryColor: "hsl(30 100% 60%)" },
  { name: "Saffron & Deep Blue", className: "theme-saffron-deep-blue", primaryColor: "hsl(35 100% 58%)" },
  { name: "Forest & Earth", className: "theme-forest-earth", primaryColor: "hsl(140 50% 45%)" },
  { name: "Ocean & Sky", className: "theme-ocean-sky", primaryColor: "hsl(205 70% 50%)" },
  { name: "Sunrise & Ember", className: "theme-sunrise-ember", primaryColor: "hsl(25 100% 60%)" },
];

const COLOR_THEME_KEY = "sanatana-color-theme";

export default function SettingsPage() {
  const { theme: currentMode, setTheme: setMode } = useTheme();
  const [activeColorTheme, setActiveColorTheme] = useState("theme-default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = "Appearance Settings - Sanatana Insights"; 
    const storedColorTheme = localStorage.getItem(COLOR_THEME_KEY);
    if (storedColorTheme && colorThemes.some(t => t.className === storedColorTheme)) {
      setActiveColorTheme(storedColorTheme);
      colorThemes.forEach(ct => document.documentElement.classList.remove(ct.className));
      document.documentElement.classList.add(storedColorTheme);
    } else {
      colorThemes.forEach(ct => document.documentElement.classList.remove(ct.className));
      document.documentElement.classList.add("theme-default");
    }
  }, []);
  
  useEffect(() => {
    if (mounted) {
      colorThemes.forEach(ct => {
        document.documentElement.classList.remove(ct.className);
      });
      document.documentElement.classList.add(activeColorTheme);
      localStorage.setItem(COLOR_THEME_KEY, activeColorTheme);
    }
  }, [activeColorTheme, mounted]);


  const handleColorThemeChange = (newThemeClass: string) => {
    setActiveColorTheme(newThemeClass);
  };

  if (!mounted) {
    return null; 
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <Palette className="h-20 w-20 text-primary mx-auto mb-6" />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
          Appearance Settings
        </h1>
        <p className="mt-4 text-xl text-foreground/80 max-w-2xl mx-auto">
          Customize the look and feel of Sanatana Insights to your preference.
        </p>
      </header>

      <div className="max-w-2xl mx-auto space-y-10">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center">
              {currentMode === "dark" ? <Moon className="mr-3 h-6 w-6" /> : <Sun className="mr-3 h-6 w-6" />}
              Dark/Light Mode
            </CardTitle>
            <CardDescription>
              Choose between a light or dark interface.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <Button
              variant={currentMode === "light" ? "default" : "outline"}
              onClick={() => setMode("light")}
              className="flex-1"
              aria-pressed={currentMode === "light"}
            >
              <Sun className="mr-2 h-5 w-5" /> Light
            </Button>
            <Button
              variant={currentMode === "dark" ? "default" : "outline"}
              onClick={() => setMode("dark")}
              className="flex-1"
              aria-pressed={currentMode === "dark"}
            >
              <Moon className="mr-2 h-5 w-5" /> Dark
            </Button>
          </CardContent>
        </Card>

        <Separator />

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-accent flex items-center">
              <Palette className="mr-3 h-6 w-6" />
              Color Theme
            </CardTitle>
            <CardDescription>
              Select a color palette for the application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Your chosen color theme will be applied across the site. The default theme is inspired by traditional Indian colors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {colorThemes.map((ct) => (
                <Button
                  key={ct.className}
                  variant={activeColorTheme === ct.className ? "default" : "outline"}
                  onClick={() => handleColorThemeChange(ct.className)}
                  className="w-full justify-between h-auto py-3 px-4 text-left"
                  aria-pressed={activeColorTheme === ct.className}
                >
                  <div className="flex items-center">
                    <span
                      className="w-5 h-5 rounded-full mr-3 border border-border"
                      style={{ backgroundColor: ct.primaryColor }}
                    ></span>
                    {ct.name}
                  </div>
                  {activeColorTheme === ct.className && <Check className="h-5 w-5 text-primary-foreground" />}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
