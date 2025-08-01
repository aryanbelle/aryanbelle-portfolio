import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowRight, Check, Code, Copy, Database, ExternalLink, Github, Globe, Palette, Terminal } from 'lucide-react';

export function UIShowcase() {
  // Function to copy color value to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero section with primary color */}
      <div className="bg-primary/10 border-b border-border relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary)/10%,transparent)]" />
          <div className="grid grid-cols-10 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border-r border-t border-primary/5" />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto py-20 px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-start md:text-left">
            {/* Left side content */}
            <div className="flex-1">
              <div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Palette className="w-4 h-4 mr-2" />
                shadcn/ui Green Theme
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Modern UI with <span className="text-primary">Green</span> Theme
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                A beautiful, accessible, and customizable UI implementation using shadcn/ui components with a custom green theme.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="shadow-lg gap-2 group">
                  Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Github className="w-4 h-4" /> View Source
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {[
                  { title: 'Dark Mode', description: 'Optimized for dark environments with perfect contrast' },
                  { title: 'Accessible', description: 'Built with accessibility in mind for all users' },
                  { title: 'Customizable', description: 'Easily adapt to your brand with CSS variables' }
                ].map((feature, i) => (
                  <Card key={i} className="bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full p-2 bg-primary/10 text-primary">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Side Floating Elements (Hidden on Mobile) */}
            <div className="relative mt-12 hidden md:block md:w-1/2">
              <div className="relative w-full h-[400px] md:h-[500px] perspective-1000" style={{perspective: '1000px', transformStyle: 'preserve-3d'}}>
                {/* Floating Code Windows */}
                <div className="absolute inset-0" style={{transformStyle: 'preserve-3d'}}>
                  {/* Terminal Window */}
                  <div className="absolute top-4 right-0 w-72 md:w-96 bg-card rounded-lg shadow-xl origin-center border border-border rotate-6" style={{animation: 'just-float 8s cubic-bezier(0.4, 0, 0.2, 1) infinite', transformStyle: 'preserve-3d', perspective: '1000px', willChange: 'transform'}}>
                    <div className="flex items-center px-4 py-2 border-b border-border">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 font-mono text-sm">
                      <p className="text-primary select-none">
                        $ npm install
                      </p>
                      <p className="text-muted-foreground select-none">
                        Installing dependencies...
                      </p>
                      <p className="text-primary select-none">
                        $ npm run dev
                      </p>
                      <p className="text-foreground select-none">
                        Ready on http://localhost:3000
                      </p>
                    </div>
                  </div>

                  {/* Code Editor Window */}
                  <div className="absolute bottom-4 left-0 w-72 md:w-96 bg-card rounded-lg shadow-xl origin-center border border-border -rotate-6" style={{animation: 'just-float-delayed 8s cubic-bezier(0.4, 0, 0.2, 1) 2s infinite', transformStyle: 'preserve-3d', perspective: '1000px', willChange: 'transform'}}>
                    <div className="flex items-center px-4 py-2 border-b border-border">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="p-4 font-mono text-sm">
                      <p className="text-blue-400 select-none">function</p>
                      <p className="text-foreground pl-2 select-none">
                        createTheme() {`{`}
                      </p>
                      <p className="text-muted-foreground pl-4 select-none">
                        // Beautiful design
                      </p>
                      <p className="text-muted-foreground pl-4 select-none">
                        // Modern components
                      </p>
                      <p className="text-foreground pl-2 select-none">{`}`}</p>
                    </div>
                  </div>

                  {/* Floating Icons */}
                  <div className="absolute top-1/4 left-10 animate-spin-slow">
                    <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border">
                      <Terminal className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-6 animate-bounce-slow">
                    <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border">
                      <Database className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-1/3 mt-4 left-2/4 animate-pulse">
                    <div className="bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color palette section */}
      <section className="py-20 container mx-auto px-4" id="colors">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Palette className="w-4 h-4 mr-2" />
            Color System
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Beautiful Green Theme</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully crafted color palette using the OKLCH color space for better perceptual uniformity and vibrant colors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Primary colors */}
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
            <div className="h-32 bg-primary flex items-end p-6 group-hover:scale-[1.02] transition-transform origin-bottom">
              <div>
                <p className="text-primary-foreground font-medium text-lg">primary</p>
                <p className="text-primary-foreground/80 text-sm">Brand color</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-mono">--primary</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-muted-foreground">oklch(0.7227 0.1920 149.5793)</p>
                  <button 
                    className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground" 
                    title="Copy value"
                    onClick={() => copyToClipboard("oklch(0.7227 0.1920 149.5793)")}
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-primary hover:bg-primary/90">Button</Button>
                <div className="flex gap-1 ml-auto">
                  <div className="h-8 w-8 rounded-md bg-primary/20"></div>
                  <div className="h-8 w-8 rounded-md bg-primary/50"></div>
                  <div className="h-8 w-8 rounded-md bg-primary/80"></div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-1">
                <div className="h-4 rounded-sm bg-[oklch(0.5227_0.1920_149.5793)] tooltip" title="Dark -2"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.6227_0.1920_149.5793)] tooltip" title="Dark -1"></div>
                <div className="h-4 rounded-sm bg-primary tooltip" title="Base"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.8227_0.1920_149.5793)] tooltip" title="Light +1"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.9227_0.1920_149.5793)] tooltip" title="Light +2"></div>
              </div>
            </CardContent>
          </Card>

          {/* Secondary colors */}
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
            <div className="h-32 bg-secondary flex items-end p-6 group-hover:scale-[1.02] transition-transform origin-bottom">
              <div>
                <p className="text-secondary-foreground font-medium text-lg">secondary</p>
                <p className="text-secondary-foreground/80 text-sm">Supporting color</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-mono">--secondary</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-muted-foreground">oklch(0.2103 0.0059 285.8852)</p>
                  <button 
                    className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground" 
                    title="Copy value"
                    onClick={() => copyToClipboard("oklch(0.2103 0.0059 285.8852)")}
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary">Button</Button>
                <div className="flex gap-1 ml-auto">
                  <div className="h-8 w-8 rounded-md bg-secondary/20"></div>
                  <div className="h-8 w-8 rounded-md bg-secondary/50"></div>
                  <div className="h-8 w-8 rounded-md bg-secondary/80"></div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-1">
                <div className="h-4 rounded-sm bg-[oklch(0.1103_0.0059_285.8852)] tooltip" title="Dark -2"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.1603_0.0059_285.8852)] tooltip" title="Dark -1"></div>
                <div className="h-4 rounded-sm bg-secondary tooltip" title="Base"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.2603_0.0059_285.8852)] tooltip" title="Light +1"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.3103_0.0059_285.8852)] tooltip" title="Light +2"></div>
              </div>
            </CardContent>
          </Card>

          {/* Accent colors */}
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
            <div className="h-32 bg-accent flex items-end p-6 group-hover:scale-[1.02] transition-transform origin-bottom">
              <div>
                <p className="text-accent-foreground font-medium text-lg">accent</p>
                <p className="text-accent-foreground/80 text-sm">Highlight color</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-mono">--accent</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-muted-foreground">oklch(0.2687 0.0266 153.2888)</p>
                  <button 
                    className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground" 
                    title="Copy value"
                    onClick={() => copyToClipboard("oklch(0.2687 0.0266 153.2888)")}
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/80">Button</Button>
                <div className="flex gap-1 ml-auto">
                  <div className="h-8 w-8 rounded-md bg-accent/20"></div>
                  <div className="h-8 w-8 rounded-md bg-accent/50"></div>
                  <div className="h-8 w-8 rounded-md bg-accent/80"></div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-1">
                <div className="h-4 rounded-sm bg-[oklch(0.1687_0.0266_153.2888)] tooltip" title="Dark -2"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.2187_0.0266_153.2888)] tooltip" title="Dark -1"></div>
                <div className="h-4 rounded-sm bg-accent tooltip" title="Base"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.3187_0.0266_153.2888)] tooltip" title="Light +1"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.3687_0.0266_153.2888)] tooltip" title="Light +2"></div>
              </div>
            </CardContent>
          </Card>

          {/* Background colors */}
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
            <div className="h-32 bg-background border-t border-border flex items-end p-6 group-hover:scale-[1.02] transition-transform origin-bottom">
              <div>
                <p className="font-medium text-lg">background</p>
                <p className="text-muted-foreground text-sm">Base layer</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-mono">--background</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-muted-foreground">oklch(0.1448 0 0)</p>
                  <button 
                    className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground" 
                    title="Copy value"
                    onClick={() => copyToClipboard("oklch(0.1448 0 0)")}
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <div className="h-8 w-8 rounded-md bg-background border border-border"></div>
                  <div className="h-8 w-8 rounded-md bg-card"></div>
                  <div className="h-8 w-8 rounded-md bg-popover"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Destructive colors */}
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
            <div className="h-32 bg-destructive flex items-end p-6 group-hover:scale-[1.02] transition-transform origin-bottom">
              <div>
                <p className="text-destructive-foreground font-medium text-lg">destructive</p>
                <p className="text-destructive-foreground/80 text-sm">Error state</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-mono">--destructive</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-muted-foreground">oklch(0.3958 0.1331 25.7230)</p>
                  <button 
                    className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground" 
                    title="Copy value"
                    onClick={() => copyToClipboard("oklch(0.3958 0.1331 25.7230)")}
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="destructive">Button</Button>
                <div className="flex gap-1 ml-auto">
                  <div className="h-8 w-8 rounded-md bg-destructive/20"></div>
                  <div className="h-8 w-8 rounded-md bg-destructive/50"></div>
                  <div className="h-8 w-8 rounded-md bg-destructive/80"></div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-1">
                <div className="h-4 rounded-sm bg-[oklch(0.2958_0.1331_25.7230)] tooltip" title="Dark -2"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.3458_0.1331_25.7230)] tooltip" title="Dark -1"></div>
                <div className="h-4 rounded-sm bg-destructive tooltip" title="Base"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.4458_0.1331_25.7230)] tooltip" title="Light +1"></div>
                <div className="h-4 rounded-sm bg-[oklch(0.4958_0.1331_25.7230)] tooltip" title="Light +2"></div>
              </div>
            </CardContent>
          </Card>

          {/* Muted colors */}
          <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
            <div className="h-32 bg-muted flex items-end p-6 group-hover:scale-[1.02] transition-transform origin-bottom">
              <div>
                <p className="text-muted-foreground font-medium text-lg">muted</p>
                <p className="text-muted-foreground/80 text-sm">Subtle elements</p>
              </div>
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-mono">--muted</p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-muted-foreground">oklch(0.2103 0.0059 285.8852)</p>
                  <button className="p-1 rounded-md hover:bg-muted/50 text-muted-foreground" title="Copy value">
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="bg-muted text-muted-foreground hover:bg-muted/80">Button</Button>
                <div className="flex gap-1 ml-auto">
                  <div className="h-8 w-8 rounded-md bg-muted/20"></div>
                  <div className="h-8 w-8 rounded-md bg-muted/50"></div>
                  <div className="h-8 w-8 rounded-md bg-muted/80"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="border-primary/10">
            <CardHeader>
              <CardTitle>Using the Color System</CardTitle>
              <CardDescription>How to implement these colors in your project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-md bg-muted">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code>{`/* In your CSS */
:root {
  --primary: oklch(0.7227 0.1920 149.5793);
  --primary-foreground: oklch(0.1448 0 0);
  /* ... other colors */
}`}</code>
                  </pre>
                </div>
                <p className="text-sm text-muted-foreground">
                  The theme uses OKLCH color space for better perceptual uniformity and more vibrant colors. 
                  Copy these values to your CSS or use our theme configuration file.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Code className="w-4 h-4" /> View Full Theme
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Button showcase */}
      <section className="py-20 bg-muted/5 border-y border-border" id="buttons">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Code className="w-4 h-4 mr-2" />
              Components
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Button Components</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Versatile button components with various styles, sizes, and states to fit any UI need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Different button styles with the green theme</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Default</h3>
                    <div className="text-xs text-muted-foreground font-mono">variant="default"</div>
                  </div>
                  <div className="p-6 flex flex-wrap gap-4 rounded-lg bg-card/50 border border-border">
                    <Button>Primary Action</Button>
                    <Button className="gap-2">
                      <ArrowRight className="w-4 h-4" /> With Icon
                    </Button>
                    <Button className="shadow-lg">With Shadow</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Secondary</h3>
                    <div className="text-xs text-muted-foreground font-mono">variant="secondary"</div>
                  </div>
                  <div className="p-6 flex flex-wrap gap-4 rounded-lg bg-card/50 border border-border">
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="secondary" className="gap-2">
                      <Check className="w-4 h-4" /> Confirm
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Outline</h3>
                    <div className="text-xs text-muted-foreground font-mono">variant="outline"</div>
                  </div>
                  <div className="p-6 flex flex-wrap gap-4 rounded-lg bg-card/50 border border-border">
                    <Button variant="outline">Outline</Button>
                    <Button variant="outline" className="gap-2">
                      <ExternalLink className="w-4 h-4" /> External Link
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-8">
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>Small, default, and large button sizes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Small</h3>
                        <div className="text-xs text-muted-foreground font-mono">size="sm"</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="sm" variant="outline">Small</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Default</h3>
                        <div className="text-xs text-muted-foreground font-mono">size="default"</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button>Default</Button>
                        <Button variant="outline">Default</Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium">Large</h3>
                        <div className="text-xs text-muted-foreground font-mono">size="lg"</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button size="lg">Large</Button>
                        <Button size="lg" variant="outline">Large</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>Button States</CardTitle>
                  <CardDescription>Interactive states for buttons</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Default</div>
                        <Button className="w-full">Active</Button>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Disabled</div>
                        <Button disabled className="w-full">Disabled</Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-sm font-medium">With Shadow</div>
                        <Button className="w-full shadow-lg">Shadow</Button>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Animated</div>
                        <Button className="w-full animate-pulse">Pulse</Button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="p-4 rounded-md bg-muted">
                        <pre className="text-sm font-mono overflow-x-auto">
                          <code>{`<Button className="gap-2">
  <Icon /> With Icon
</Button>`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Card showcase */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 tracking-tight">Card Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-primary">Feature Card</CardTitle>
              <CardDescription>A card highlighting a key feature</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">This card showcases how to highlight important information with the primary color accent.</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="ml-auto">Learn more</Button>
            </CardFooter>
          </Card>
          
          <Card className="border-primary/20 hover:border-primary transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle>Pricing Card</CardTitle>
              <CardDescription>$19.99 / month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Feature one included</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Feature two included</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Feature three included</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe Now</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-primary/5 hover:bg-primary/10 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle>Accent Card</CardTitle>
              <CardDescription>Using background accents</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">This card uses a subtle primary color background to create visual hierarchy.</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}