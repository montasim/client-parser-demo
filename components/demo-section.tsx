'use client';

import { useState } from 'react';

import getDeviceType from 'client-parser';
import { ArrowRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';



const sampleUserAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
];

export function DemoSection() {
  const [userAgent, setUserAgent] = useState(sampleUserAgents[0]);
  const [result, setResult] = useState<ReturnType<typeof getDeviceType> | null>(null);

  const handleParse = () => {
    try {
      const parsed = getDeviceType(userAgent);
      setResult(parsed);
    } catch {
      setResult(null);
    }
  };

  const loadSample = (index: number) => {
    setUserAgent(sampleUserAgents[index]);
  };

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="flex w-full items-center justify-center">
        <div className="container max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Live Demo
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Try It Yourself</h2>
              <p className="text-muted-foreground text-lg">
                Paste any User-Agent string and see the parsed results instantly
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Input</CardTitle>
                <CardDescription>Enter a User-Agent string to parse</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user-agent">User-Agent String</Label>
                  <Input
                    id="user-agent"
                    value={userAgent}
                    onChange={(e) => setUserAgent(e.target.value)}
                    placeholder="Paste a User-Agent string here..."
                    className="min-h-[100px] font-mono text-sm"
                  />
                </div>
                <Button onClick={handleParse} className="w-full gap-2">
                  Parse User-Agent
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <div className="pt-2">
                  <p className="text-muted-foreground mb-2 text-xs font-medium">
                    Try sample User-Agents:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sampleUserAgents.map((_, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => loadSample(index)}
                        className="text-xs"
                      >
                        Sample {index + 1}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Output</CardTitle>
                <CardDescription>Parsed client information</CardDescription>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-4">
                    {result.browser && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-muted-foreground text-xs font-medium">Browser</p>
                        <p className="text-sm font-semibold">
                          {result.browser.name} {result.browser.version}
                        </p>
                      </div>
                    )}
                    {result.os && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-muted-foreground text-xs font-medium">
                          Operating System
                        </p>
                        <p className="text-sm font-semibold">
                          {result.os.name}
                          {result.os.version && ` ${result.os.version}`}
                        </p>
                      </div>
                    )}
                    {result.device && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-muted-foreground text-xs font-medium">Device</p>
                        <p className="text-sm font-semibold">
                          {result.device.type}
                          {result.device.name && ` - ${result.device.name}`}
                          {result.device.model && ` - ${result.device.model}`}
                          {result.device.manufacturer && ` - ${result.device.manufacturer}`}
                        </p>
                      </div>
                    )}
                    {result.engine && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-muted-foreground text-xs font-medium">Engine</p>
                        <p className="text-sm font-semibold">
                          {result.engine.name} {result.engine.version}
                        </p>
                      </div>
                    )}
                    {result.platform && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-muted-foreground text-xs font-medium">Platform</p>
                        <p className="text-sm font-semibold">{result.platform}</p>
                      </div>
                    )}
                    {result.isBot !== undefined && (
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-muted-foreground text-xs font-medium">Is Bot</p>
                        <p className="text-sm font-semibold">{result.isBot ? 'Yes' : 'No'}</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-muted-foreground flex h-full min-h-[200px] items-center justify-center">
                    <p>Results will appear here after parsing</p>
                  </div>
                )}
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
