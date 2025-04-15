"use client";

import * as React from "react";
import { CopyBlock } from "react-code-blocks";
import { customTheme } from "@/lib/code-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Article from "@/components/ui/article";

export default function ArticlePage() {
  const [activeTab, setActiveTab] = React.useState("preview");

  const installationCode = `import React from 'react';
  
  interface SocialLink {
    label: string;
    icon: string;
    url: string;
  }
  
  interface ArticleProps {
    title: string;
    content: string;
    author: {
      name: string;
      avatarUrl: string;
      bio: string;
      socialLinks: SocialLink[];
    };
    date: string;
    category: string;
  }
  
  const Article: React.FC<ArticleProps> = ({ title, content, author, date, category }) => {
    return (
      <div className="max-w-2xl px-6 py-24 mx-auto space-y-12 bg-background text-foreground">
        {/* Header */}
        <div className="w-full mx-auto space-y-4 text-center">
          <p className="text-xs font-semibold tracking-wider uppercase text-primary">{category}</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl font-serif">{title}</h1>
          <p className="text-sm text-muted-foreground">
            by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              <span itemProp="name">{author.name}</span>
            </a>{" "}
            on{" "}
            <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          </p>
        </div>
  
        {/* Content */}
        <div className="text-base leading-relaxed">
          <p>{content}</p>
        </div>
  
        {/* Author Footer */}
        <div className="pt-12 border-t border-border">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <img
              src={author.avatarUrl}
              alt="Author avatar"
              className="self-center flex-shrink-0 w-24 h-24 border rounded-full bg-muted object-cover"
            />
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">{author.name}</h4>
              <p className="text-muted-foreground">{author.bio}</p>
            </div>
          </div>
  
          {/* Social Icons */}
          <div className="flex justify-center pt-4 space-x-4">
            {author.socialLinks.map(({ label, icon, url }) => (
              <a
                key={label}
                href={url}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-md text-foreground hover:text-primary"
              >
                <i className={\`icon-\${icon}\`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Article;
  `;

  const usageCode = `import Article from "@/components/ui/article"

export default function ExampleArticle() {
  const articleData = {
    title: "Interdum et malesuada fames ac ante ipsum primis in faucibus?",
    content: "Insert the actual text content here...",
    author: {
      name: "Leroy Jenkins",
      avatarUrl: "https://source.unsplash.com/75x75/?portrait",
      bio: "Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.",
      socialLinks: [
        { label: "GitHub", icon: "github", url: "#" },
        { label: "Dribbble", icon: "dribbble", url: "#" },
        { label: "Twitter", icon: "twitter", url: "#" },
        { label: "Email", icon: "email", url: "#" },
      ],
    },
    date: "2021-02-12T15:34:18-0200",
    category: "#TailwindCSS",
  };

  return <Article {...articleData} />;
}`;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 ml-9">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Article Component
          </h1>
          <p className="text-xl text-muted-foreground">
            A reusable article component to display content, author info, and
            social media links.
          </p>
        </div>
      </div>

      <div className="grid gap-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-6 space-y-6">
            <Article
              title="The Enchantment of Spirited Away: A Journey Through the Spirit World"
              content="Spirited Away, directed by Hayao Miyazaki, is a breathtaking exploration of the spirit world, with an enchanting narrative that captivates audiences of all ages. The film follows Chihiro, a young girl who embarks on an unforgettable adventure after her parents are transformed into pigs. With its stunning animation, emotional depth, and timeless themes, Spirited Away stands as one of Studio Ghibli's finest achievements."
              author={{
                name: "Sophie Hara",
                avatarUrl: "/images/bg-4.jpg",
                bio: "Sophie Hara is a lifelong animation enthusiast, particularly passionate about Studio Ghibli's profound storytelling and stunning visual artistry. She writes extensively on the impact of animation in culture and film history.",
                socialLinks: [
                  {
                    label: "GitHub",
                    icon: "github",
                    url: "https://github.com/sophiehara",
                  },
                  {
                    label: "Dribbble",
                    icon: "dribbble",
                    url: "https://dribbble.com/sophiehara",
                  },
                  {
                    label: "Twitter",
                    icon: "twitter",
                    url: "https://twitter.com/sophiehara",
                  },
                  {
                    label: "Email",
                    icon: "email",
                    url: "mailto:sophie@ghiblifan.com",
                  },
                ],
              }}
              date="2022-08-23T14:20:00-0500"
              category="#StudioGhibli #SpiritedAway #Animation #Fantasy"
            />
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <div className="rounded-md bg-muted">
              <CopyBlock
                text={usageCode}
                language="tsx"
                showLineNumbers
                theme={customTheme}
                codeBlock
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Installation</h2>
          <div className="rounded-md bg-muted p-4">
            <CopyBlock
              text={installationCode}
              language="bash"
              showLineNumbers={false}
              theme={customTheme}
              codeBlock
            />
          </div>
        </div>

        <div className="space-y-6 border-t border-muted pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Props</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-left font-medium">Component</th>
                  <th className="p-3 text-left font-medium">Props</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">Article</td>
                  <td className="p-3 font-mono text-sm">
                    title: string, content: string, author: object, date:
                    string, category: string
                  </td>
                  <td className="p-3">
                    Renders an article with title, content, author info, and
                    social links.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">author</td>
                  <td className="p-3 font-mono text-sm">
                    name: string, avatarUrl: string, bio: string, socialLinks:
                    array
                  </td>
                  <td className="p-3">
                    Defines the author's details such as name, avatar, bio, and
                    social media links.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-mono text-sm">socialLinks</td>
                  <td className="p-3 font-mono text-sm">
                    label: string, icon: string, url: string
                  </td>
                  <td className="p-3">
                    A list of social media links with icons and URLs.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
