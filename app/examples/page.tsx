"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import MailExample from "@/components/mail/page";
// import { DashboardExample } from "@/components/examples/dashboard"
// import { MusicExample } from "@/components/examples/music"

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="rounded-md bg-zinc-950 text-white p-4 text-xs overflow-auto">
    <code>{code}</code>
  </pre>
);

export default function ExamplesPage() {
  return (
    <div className="container max-w-6xl py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center sm:text-left">
        ShadCN Example Gallery
      </h1>
      <p className="text-muted-foreground mb-6 text-center sm:text-left">
        Preview and install popular UI layouts built with ShadCN. Each tab
        provides a demo and steps to install the corresponding components.
      </p>

      <Tabs defaultValue="mail" className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 lg:w-[600px] mb-6 mx-auto sm:mx-0">
          <TabsTrigger value="mail">Mail</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
        </TabsList>

        {/* 📨 MAIL */}
        <TabsContent value="mail" className="space-y-4">
          <MailExample />
          <div className="rounded-md bg-muted p-4">
            <h3 className="text-lg font-semibold mb-2">Installation</h3>
            <CodeBlock code={`npx shadcn-ui@latest add mail`} />
          </div>
        </TabsContent>

        {/* 📊 DASHBOARD */}
        <TabsContent value="dashboard" className="space-y-4">
          <MailExample />
          <div className="rounded-md bg-muted p-4">
            <h3 className="text-lg font-semibold mb-2">Installation</h3>
            <CodeBlock code={`npx shadcn-ui@latest add dashboard`} />
          </div>
        </TabsContent>

        {/* 🎵 MUSIC */}
        <TabsContent value="music" className="space-y-4">
          <MailExample />
          <div className="rounded-md bg-muted p-4">
            <h3 className="text-lg font-semibold mb-2">Installation</h3>
            <CodeBlock code={`npx shadcn-ui@latest add music`} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
