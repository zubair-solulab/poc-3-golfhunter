import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Trophy, Video, TrendingUp } from 'lucide-react';
import InstallPrompt from '@/components/InstallPrompt';

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 page-enter">
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="text-center mb-12 pt-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Target className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-5xl font-bold text-primary mb-3">
            ACE HUNTER
          </h1>
          <p className="text-lg text-muted-foreground">
            Test your precision. Win real money.
          </p>
        </div>

        <InstallPrompt />

        <Card className="p-8 mb-8 shadow-lg">
          <h2 className="font-display text-2xl font-semibold mb-4">
            How It Works
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Choose Your Challenge</h3>
                <p className="text-sm text-muted-foreground">
                  Select course, hole, tee box, and skill tier
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Place Your Wager</h3>
                <p className="text-sm text-muted-foreground">
                  Choose $5-$100, secure payment processing
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Take Your Shot</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered cameras capture every moment
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Win & Share</h3>
                <p className="text-sm text-muted-foreground">
                  Get instant payouts and epic highlight videos
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Button
          onClick={() => setLocation('/setup')}
          className="w-full h-14 text-lg font-semibold shadow-lg"
          data-testid="button-start"
        >
          Start Your Challenge
        </Button>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by AI precision tracking • Instant verification • Secure payouts
          </p>
        </div>
      </div>
    </div>
  );
}
