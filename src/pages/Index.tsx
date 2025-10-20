import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/30 p-6">
      <div className="text-center space-y-8 max-w-2xl animate-in fade-in duration-700">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src={heroImage} 
            alt="Welcome illustration" 
            className="w-full h-auto"
          />
        </div>
        <h1 className="text-6xl font-bold text-foreground tracking-tight">
          Hello World
        </h1>
      </div>
      <footer className="fixed bottom-4 inset-x-0 flex justify-center">
        <a
          href="https://x.com/bobby_io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit @bobby_io on X"
          className="inline-flex items-center rounded-full border bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow backdrop-blur hover:bg-background/95 hover:text-foreground"
        >
          Made by @bobby_io
        </a>
      </footer>
    </div>
  );
};

export default Index;
