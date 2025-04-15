"use client";

import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Banner1 from "@/components/ui/banner_1";
import Banner2 from "@/components/ui/banner_2";
import { CopyBlock } from "react-code-blocks";
import { customTheme } from "@/lib/code-theme";

export default function BannerPage() {
  const [activeTab, setActiveTab] = React.useState("preview1");
  const [activeTab2, setActiveTab2] = React.useState("code1");

  const banner1Code = `<div className="px-8 py-2 dark:bg-gray-50 dark:text-gray-800">
  <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
    <div>
      <span>Get up to 50% off your first order + free shipping,&nbsp;</span>
      <a href="#" rel="noopener noreferrer" className="underline">sign up</a> today!
    </div>
    <a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
      <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
        <path clipRule="evenodd" fillRule="evenodd" 
        d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 
        7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 
        1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 
        6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 
        3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 
        1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 
        0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" />
      </svg>
      <span className="hover:underline focus-visible:underline">Gift Cards</span>
    </a>
  </div>
</div>`;

  const banner2Code = `<div className="p-6 py-12 border bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <h2 className="text-center text-6xl tracking-tighter font-bold">
        Up to <br className="sm:hidden" /> 50% Off
      </h2>
      <div className="space-x-2 text-center py-2 lg:py-0">
        <span>Plus free shipping! Use code:</span>
        <span className="font-bold text-lg text-secondary-foreground">SRUMMANF</span>
      </div>
      <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border 
      border-border block bg-card text-card-foreground hover:bg-secondary hover:text-secondary-foreground">
        Shop Now
      </a>
    </div>
  </div>
</div>`;

  const installationCode = `# Installation

npm install react-banner-component

# Usage

import BannerPage from "./components/banner-page";

export default function App() {
  return <BannerPage />;
}`;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-heading tracking-tight lg:text-5xl">
            Banners
          </h1>
          <p className="text-xl text-muted-foreground">
            Customizable promotional banners with dark mode support.
          </p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview1">Preview 1</TabsTrigger>
            <TabsTrigger value="preview2">Preview 2</TabsTrigger>
          </TabsList>

          <TabsContent value="preview1" className="mt-6">
            <Banner1 />
          </TabsContent>

          <TabsContent value="preview2" className="mt-6">
            <Banner2 />
          </TabsContent>
        </Tabs>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>

          <Tabs
            value={activeTab2}
            onValueChange={setActiveTab2}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="code1">Code 1</TabsTrigger>
              <TabsTrigger value="code2">Code 2</TabsTrigger>
            </TabsList>

            <TabsContent value="code1" className="mt-6">
              <div className="rounded-md bg-muted">
                <CopyBlock
                  text={banner1Code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={customTheme}
                  codeBlock
                />
              </div>
            </TabsContent>

            <TabsContent value="code2" className="mt-6">
              <div className="rounded-md bg-muted">
                <CopyBlock
                  text={banner2Code}
                  language="typescript"
                  showLineNumbers={true}
                  theme={customTheme}
                  codeBlock
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
