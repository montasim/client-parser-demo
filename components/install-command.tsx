'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

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
    <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-border bg-muted/50">
      <div className="border-border flex items-center justify-between border-b bg-muted/30 px-4 py-2">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
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
          className="h-8 w-8 p-0"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="p-4">
        <code className="text-sm font-mono">{installCommands[activeTab]}</code>
      </div>
    </div>
  );
}
