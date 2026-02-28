'use client';

import { useState } from 'react';

import { Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const installCommands = {
  npm: 'npm install client-parser',
  pnpm: 'pnpm add client-parser',
  yarn: 'yarn add client-parser',
};

type PackageManager = keyof typeof installCommands;

export function InstallCommand() {
  const [activeTab, setActiveTab] = useState<PackageManager>('npm');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommands[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs: PackageManager[] = ['npm', 'pnpm', 'yarn'];

  return (
    <div className="border-border bg-muted/50 mx-auto max-w-2xl overflow-hidden rounded-lg border">
      <div className="border-border bg-muted/30 flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2 sm:px-4">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-md px-2.5 py-1 text-xs font-medium transition-colors sm:px-3 sm:py-1.5 sm:text-sm',
                activeTab === tab
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 w-7 p-0 sm:h-8 sm:w-8"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500 sm:h-4 sm:w-4" />
          ) : (
            <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          )}
        </Button>
      </div>
      <div className="p-3 sm:p-4">
        <code className="font-mono text-xs break-all sm:text-sm">{installCommands[activeTab]}</code>
      </div>
    </div>
  );
}
