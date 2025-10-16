import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILL_TIERS } from '@/lib/mock-data';
import { Trophy, Share2, Download, RotateCcw, TrendingUp, Video } from 'lucide-react';

export default function ResultPage() {
  const [location, setLocation] = useLocation();

  const params = new URLSearchParams(location.split('?')[1]);
  const tier = params.get('tier');
  const wager = parseInt(params.get('wager') || '0');
  const outcome = params.get('outcome') || 'missed';
  const distance = parseFloat(params.get('distance') || '0');

  const tierInfo = SKILL_TIERS.find(t => t.id === tier);
  const isWin = outcome === 'hole-in-one' || outcome === 'within-tier';
  const payout = isWin ? wager * (tierInfo?.payout || 1) : 0;
  const profit = payout - wager;
  const xpEarned = isWin ? wager * 10 : wager * 2;

  const getOutcomeText = () => {
    if (outcome === 'hole-in-one') return 'Hole-in-One!';
    if (outcome === 'within-tier') return 'Within Target!';
    if (outcome === 'close') return 'Close Shot!';
    return 'Better Luck Next Time';
  };

  const getOutcomeColor = () => {
    if (outcome === 'hole-in-one') return 'from-amber-400 to-yellow-500';
    if (outcome === 'within-tier') return 'from-emerald-400 to-green-500';
    if (outcome === 'close') return 'from-blue-400 to-indigo-500';
    return 'from-slate-400 to-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header title="Shot Result" showBack={false} />

      <div className="max-w-md mx-auto px-4 py-8">
        <div className={`mb-8 p-8 rounded-2xl bg-gradient-to-br ${getOutcomeColor()} text-white text-center`}>
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Trophy className="w-10 h-10" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-2" data-testid="text-outcome">{getOutcomeText()}</h1>
          {isWin && (
            <p className="text-lg opacity-90" data-testid="text-congratulations">Congratulations! You won!</p>
          )}
        </div>

        <Card className="p-6 mb-6">
          <div className="text-center mb-6">
            <div className="text-sm text-muted-foreground mb-2">Distance from Cup</div>
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-4 border-primary/20 bg-primary/5">
              <div>
                <div className="font-display text-4xl font-bold text-primary" data-testid="text-distance">{distance}</div>
                <div className="text-sm text-muted-foreground">feet</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t">
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">Tier Target</div>
              <div className="font-semibold" data-testid="text-tier-target">{tierInfo?.distance} feet</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">XP Earned</div>
              <div className="font-semibold" data-testid="text-xp">+{xpEarned} XP</div>
            </div>
          </div>
        </Card>

        {isWin && (
          <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground">Wager</div>
                <div className="font-display text-2xl font-bold" data-testid="text-wager">${wager}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Total Payout</div>
                <div className="font-display text-2xl font-bold text-primary" data-testid="text-payout">${payout}</div>
              </div>
            </div>
            <div className="pt-4 border-t border-primary/20">
              <div className="flex items-center justify-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold text-lg" data-testid="text-profit">Net Profit: +${profit}</span>
              </div>
            </div>
          </Card>
        )}

        <Card className="p-4 mb-6" data-testid="card-video">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
              <Video className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <div className="font-semibold">Highlight Video Ready</div>
              <div className="text-sm text-muted-foreground">Your shot with AI ball tracer</div>
            </div>
            <Badge variant="secondary" data-testid="badge-new">New</Badge>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <Button variant="outline" className="h-12" data-testid="button-share">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" className="h-12" data-testid="button-download">
            <Download className="w-4 h-4 mr-2" />
            Save Video
          </Button>
        </div>

        <Button
          onClick={() => setLocation('/setup')}
          className="w-full h-14 text-lg font-semibold"
          data-testid="button-play-again"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Play Again
        </Button>

        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            data-testid="button-home"
          >
            Return to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
