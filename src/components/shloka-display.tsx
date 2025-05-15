"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

interface ShlokaDisplayProps {
  sanskrit: string;
  english: string;
  hindi: string;
}

export function ShlokaDisplay({ sanskrit, english, hindi }: ShlokaDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`shadow-lg bg-gradient-to-br from-accent/5 via-background to-primary/5 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <CardContent className="p-6 md:p-8 text-center space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-medium font-hindi text-accent mb-3 leading-relaxed tracking-wide" lang="sa">
            {sanskrit}
          </h3>
        </div>
        <Separator className="my-4 bg-border/50" />
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <p className="text-sm font-semibold text-primary mb-1">हिन्दी अनुवाद (Hindi Translation):</p>
            <p className="text-muted-foreground font-hindi leading-relaxed" lang="hi">
              {hindi}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-primary mb-1">English Translation:</p>
            <p className="text-muted-foreground leading-relaxed">
              {english}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
