import { useState } from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { ProgressStepper } from '@/components/ProgressStepper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { WAGER_AMOUNTS, SKILL_TIERS } from '@/lib/mock-data';
import { DollarSign, TrendingUp } from 'lucide-react';

const steps = [
  { id: 'course', label: 'Course' },
  { id: 'tee', label: 'Tee Box' },
  { id: 'tier', label: 'Tier' },
  { id: 'wager', label: 'Wager' },
  { id: 'payment', label: 'Payment' },
];

export default function WagerPage() {
  const [location, setLocation] = useLocation();
  const [selectedWager, setSelectedWager] = useState(0);

  const params = new URLSearchParams(location.split('?')[1]);
  const course = params.get('course');
  const hole = params.get('hole');
  const teeBox = params.get('teeBox');
  const tier = params.get('tier');

  const tierInfo = SKILL_TIERS.find(t => t.id === tier);
  const potential = selectedWager > 0 ? selectedWager * (tierInfo?.payout || 1) : 0;

  const handleNext = () => {
    if (selectedWager > 0) {
      setLocation(`/payment?course=${course}&hole=${hole}&teeBox=${teeBox}&tier=${tier}&wager=${selectedWager}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Place Your Wager" showBack />
      <ProgressStepper currentStep={3} steps={steps} />

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold mb-2">How Much to Wager?</h2>
          <p className="text-muted-foreground">Select your entry amount</p>
        </div>

        {tierInfo && (
          <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-muted-foreground">Selected Tier</div>
                <div className="font-display text-xl font-bold">{tierInfo.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Multiplier</div>
                <div className="font-display text-2xl font-bold text-primary">{tierInfo.payout}x</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Land within {tierInfo.distance} feet to win
            </div>
          </Card>
        )}

        <div className="grid grid-cols-2 gap-3 mb-8">
          {WAGER_AMOUNTS.map((wager) => (
            <button
              key={wager.value}
              onClick={() => setSelectedWager(wager.value)}
              className={`
                transition-all
                ${selectedWager === wager.value ? 'scale-[1.02]' : ''}
              `}
              data-testid={`wager-${wager.value}`}
            >
              <Card className={`
                p-6 border-2 text-center transition-all
                ${selectedWager === wager.value 
                  ? 'border-primary ring-4 ring-primary/20 shadow-lg' 
                  : 'border-border hover-elevate active-elevate-2'
                }
              `}>
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="font-display text-2xl font-bold">{wager.value}</span>
                </div>
                <div className="text-xs text-muted-foreground">Entry Fee</div>
                {selectedWager === wager.value && (
                  <div className="mt-2 pt-2 border-t">
                    <div className="text-xs text-muted-foreground">Potential Win</div>
                    <div className="font-bold text-primary">${wager.value * (tierInfo?.payout || 1)}</div>
                  </div>
                )}
              </Card>
            </button>
          ))}
        </div>

        {selectedWager > 0 && potential > 0 && (
          <Card className="p-6 mb-8 bg-primary/5 border-primary/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Potential Payout</div>
                <div className="font-display text-4xl font-bold text-primary" data-testid="text-potential-payout">${potential}</div>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-primary/20">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Your wager</span>
                <span className="font-semibold" data-testid="text-wager-amount">${selectedWager}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">If you win ({tierInfo?.distance}ft)</span>
                <span className="font-semibold text-primary" data-testid="text-potential-profit">+${potential - selectedWager}</span>
              </div>
            </div>
          </Card>
        )}

        <Button
          onClick={handleNext}
          disabled={selectedWager === 0}
          className="w-full h-14 text-lg font-semibold"
          data-testid="button-next"
        >
          Continue to Payment
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-4">
          Secure payment processing • Instant payouts • No hidden fees
        </p>
      </div>
    </div>
  );
}
