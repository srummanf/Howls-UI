import React from 'react';

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
              <i className={`icon-${icon}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Article;
