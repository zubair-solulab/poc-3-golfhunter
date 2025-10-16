import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      
      // Check if user dismissed the prompt this session
      if (sessionStorage.getItem('installPromptDismissed') === 'true') {
        return;
      }
      
      // Check if already installed
      if (window.matchMedia('(display-mode: standalone)').matches) {
        return;
      }
      
      // Stash the event so it can be triggered later
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Show our custom install prompt
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    console.log(`User ${outcome} the install prompt`);

    // Clear the deferredPrompt so it can only be used once
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setDeferredPrompt(null);
    // Remember dismissal for this session
    sessionStorage.setItem('installPromptDismissed', 'true');
  };

  if (!showPrompt || !deferredPrompt) {
    return null;
  }

  return (
    <Card className="p-4 mb-6 bg-primary/5 border-primary/20" data-testid="card-install-prompt">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
          <Download className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1" data-testid="text-install-title">
            Install ACE HUNTER
          </h3>
          <p className="text-sm text-muted-foreground mb-3" data-testid="text-install-description">
            Install our app for quick access and offline play
          </p>
          <div className="flex gap-2">
            <Button 
              onClick={handleInstallClick} 
              size="sm"
              className="bg-primary hover-elevate active-elevate-2"
              data-testid="button-install-app"
            >
              Install App
            </Button>
            <Button 
              onClick={handleDismiss} 
              variant="ghost" 
              size="sm"
              data-testid="button-dismiss-install"
            >
              Not Now
            </Button>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleDismiss}
          className="flex-shrink-0 h-8 w-8"
          data-testid="button-close-install"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
