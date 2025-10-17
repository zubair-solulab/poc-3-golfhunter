import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Trophy, Video, TrendingUp } from 'lucide-react';
import InstallPrompt from '@/components/InstallPrompt';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 page-enter">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="text-center mb-4 pt-2">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Target className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-display text-5xl font-bold text-primary mb-2">
            ACE HUNTER
          </h1>
          <p className="text-lg text-muted-foreground">
            Test your precision. Win real money.
          </p>
        </div>
        <InstallPrompt />
        <Card className="p-8 mb-6 shadow-lg">
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
        <div className="flex gap-2">
          <Button
            onClick={() => navigate('/setup')}
            className="w-full h-12 text-lg font-semibold shadow-lg"
            data-testid="button-start"
          >
            Start Your Challenge
          </Button>

          <Button
            onClick={() => navigate('/leaderboard')}
            variant="outline"
            className="w-full h-12 text-lg font-semibold shadow-lg"
            data-testid="button-leaderboard"
          >
            View Leaderboard
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by AI precision tracking • Instant verification • Secure payouts
          </p>
        </div>
      </div>
    </div>
  );
}
