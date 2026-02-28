import { ArrowRight, Code2, Cpu, Globe, Layers, ShieldCheck, Zap } from 'lucide-react';

import { CodeBlock } from '@/components/code-block';
import { DemoSection } from '@/components/demo-section';
import { FeatureCard } from '@/components/feature-card';
import { InstallCommand } from '@/components/install-command';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="flex w-full items-center justify-center">
          <div className="container max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
                </span>
                v1.0.0 Now Available
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                Parse User-Agent Strings with{' '}
                <span className="text-primary">Precision & Speed</span>
              </h1>
              <p className="text-muted-foreground mb-6 text-base sm:mb-8 sm:text-lg md:text-xl">
                A lightweight, fast, and accurate user-agent parser for JavaScript and TypeScript.
                Extract browser, OS, device, and engine information effortlessly.
              </p>
              <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:mb-8 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <a href="#demo">
                    Try Live Demo
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://github.com/montasim/client-parser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
              <InstallCommand />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="border-border/40 bg-muted/30 border-t py-12 sm:py-16 md:py-24"
      >
        <div className="flex w-full items-center justify-center">
          <div className="container max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  Why Choose Client Parser?
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Built for modern web applications with performance and accuracy in mind
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                <FeatureCard
                  icon={Zap}
                  title="Lightning Fast"
                  description="Optimized parsing algorithms ensure minimal performance impact on your application."
                />
                <FeatureCard
                  icon={ShieldCheck}
                  title="Highly Accurate"
                  description="Comprehensive regex patterns cover thousands of user-agent variations."
                />
                <FeatureCard
                  icon={Code2}
                  title="TypeScript Ready"
                  description="Full TypeScript support with comprehensive type definitions out of the box."
                />
                <FeatureCard
                  icon={Globe}
                  title="Browser Detection"
                  description="Identify all major browsers including Chrome, Firefox, Safari, Edge, and more."
                />
                <FeatureCard
                  icon={Layers}
                  title="OS & Device Info"
                  description="Extract operating system, device type, brand, and model information."
                />
                <FeatureCard
                  icon={Cpu}
                  title="Engine Detection"
                  description="Detect rendering engines like WebKit, Blink, Gecko, and more."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* usages Section */}
      <section
        id="usages"
        className="border-border/40 bg-muted/30 border-t py-12 sm:py-16 md:py-24"
      >
        <div className="flex w-full items-center justify-center">
          <div className="container max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 text-center sm:mb-12">
                <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  Simple & Intuitive
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg">
                  Get started in seconds with our straightforward
                </p>
              </div>
              <div className="space-y-6 text-left sm:space-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">Basic Usage</h3>
                  <CodeBlock
                    code={`import getDeviceType from 'client-parser';

const userAgent = navigator.userAgent;
const result = getDeviceType(userAgent);

console.log(result.browser); // { name: 'Chrome', version: '120.0.0.0' }
console.log(result.os);      // { name: 'Windows', version: '10' }
console.log(result.device);  // { type: 'pc' }`}
                    language="typescript"
                    title="example.ts"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
                    Server-Side (Node.js)
                  </h3>
                  <CodeBlock
                    code={`import getDeviceType from 'client-parser';
import { IncomingMessage } from 'http';

function getUserInfo(req: IncomingMessage) {
  const userAgent = req.headers['user-agent'] || '';
  const client = getDeviceType(userAgent);

  return {
    browser: client.browser?.name,
    os: client.os?.name,
    isBot: client.isBot,
  };
}`}
                    language="typescript"
                    title="server.ts"
                  />
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
                    TypeScript Types
                  </h3>
                  <CodeBlock
                    code={`interface IDeviceInfo {
  userAgentString: string;
  device: {
    type: string;
    name: string;
    model: string;
    manufacturer?: string;
  };
  engine: {
    name: string;
    version: string;
  };
  os: {
    name: string;
    version?: string;
    architecture?: string;
  };
  browser: {
    name: string;
    version: string;
  };
  platform: string;
  isBot: boolean;
}`}
                    language="typescript"
                    title="types.ts"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="flex w-full items-center justify-center">
          <div className="container max-w-screen-2xl px-4 sm:px-6 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6 text-base sm:mb-8 sm:text-lg">
                Install client-parser today and start parsing user-agent strings in your projects.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" className="w-full gap-2 sm:w-auto" asChild>
                  <a
                    href="https://www.npmjs.com/package/client-parser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on npm
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a
                    href="https://github.com/montasim/client-parser"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Star on GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
