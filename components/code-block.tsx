'use client';

import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'typescript', title, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        'group border-border bg-muted/50 relative overflow-hidden rounded-lg border',
        className
      )}
    >
      {(title || language) && (
        <div className="border-border bg-muted/30 flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center gap-2">
            {title && <span className="text-foreground text-sm font-medium">{title}</span>}
            {language && !title && (
              <span className="text-muted-foreground text-xs font-medium">{language}</span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className="language-{language}">{code}</code>
      </pre>
      {!title && !language && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        </Button>
      )}
    </div>
  );
}
