import { Target } from 'lucide-react';

export function PageLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
          <Target className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-muted-foreground font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
}
