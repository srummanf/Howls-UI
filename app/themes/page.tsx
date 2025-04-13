"use client";

import React, { useEffect, useState } from "react";

const themeVars = [
  "--background",
  "--foreground",
  "--card",
  "--card-foreground",
  "--popover",
  "--popover-foreground",
  "--primary",
  "--primary-foreground",
  "--secondary",
  "--secondary-foreground",
  "--muted",
  "--muted-foreground",
  "--accent",
  "--accent-foreground",
  "--destructive",
  "--destructive-foreground",
  "--border",
  "--input",
  "--ring",
  "--chart-1",
  "--chart-2",
  "--chart-3",
  "--chart-4",
  "--chart-5",
  "--sidebar",
  "--sidebar-foreground",
  "--sidebar-primary",
  "--sidebar-primary-foreground",
  "--sidebar-accent",
  "--sidebar-accent-foreground",
  "--sidebar-border",
  "--sidebar-ring",
  "--primary-border",
  "--destructive-border",
];

type ColorInfo = {
  var: string;
  oklch: string;
};

export default function ThemeGuidePage() {
  const [colors, setColors] = useState<ColorInfo[]>([]);

  const readColors = () => {
    const styles = getComputedStyle(document.documentElement);
    const result = themeVars.map((v) => ({
      var: v,
      oklch: styles.getPropertyValue(v).trim(),
    }));
    setColors(result);
  };

  useEffect(() => {
    readColors();

    // Track class changes to <html> or <body> for dark/light mode switching
    const observer = new MutationObserver(() => {
      readColors();
    });

    const html = document.documentElement;
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container max-w-6xl py-10 ml-9">
      <h1 className="text-4xl font-bold mb-4">Theme Colors: OKLCH</h1>
      <p className="text-muted-foreground mb-8">
        The color system is based on OKLCH for perceptual consistency. Below you
        can find the variable names, OKLCH values and usage
        examples. Below are all theme color tokens from <code>globals.css</code>.
        These values reflect your current theme mode (light/dark).
      </p>

      <div className="overflow-auto rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-3 font-medium">Token</th>
              <th className="text-left p-3 font-medium">Preview</th>
              <th className="text-left p-3 font-medium">
                Tailwind/Inline Usage
              </th>
              <th className="text-left p-3 font-medium">OKLCH</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((c) => (
              <tr key={c.var} className="border-t">
                <td className="p-3 font-mono text-xs">{c.var}</td>
                <td className="p-3">
                  <div
                    className="h-6 w-24 rounded border"
                    style={{ backgroundColor: `var(${c.var})` }}
                  />
                </td>
                <td className="p-3 font-mono text-xs text-muted-foreground">
                  bg-[var({c.var})]
                  <br />
                  style=&#123;&#123; backgroundColor: 'var({c.var})'
                  &#125;&#125;
                </td>
                <td className="p-3 font-mono text-xs">{c.oklch || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">How to Use</h2>
        <p className="text-muted-foreground">
          Apply these tokens using Tailwind’s bracket notation or inline styles:
        </p>
        <pre className="bg-muted p-4 mt-2 rounded-md text-xs">
          <code>{`<div className="bg-[var(--primary)] text-[var(--primary-foreground)]" />`}</code>
        </pre>
        <pre className="bg-muted p-4 mt-2 rounded-md text-xs">
          <code>{`<div style={{ backgroundColor: 'var(--chart-2)' }} />`}</code>
        </pre>
      </div>
    </div>
  );
}
