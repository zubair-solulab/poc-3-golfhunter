import { useState } from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { ProgressStepper } from '@/components/ProgressStepper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SKILL_TIERS } from '@/lib/mock-data';
import type { SkillTier } from '@/types/golf';
import { Target, Award } from 'lucide-react';

const steps = [
  { id: 'course', label: 'Course' },
  { id: 'tee', label: 'Tee Box' },
  { id: 'tier', label: 'Tier' },
  { id: 'wager', label: 'Wager' },
  { id: 'payment', label: 'Payment' },
];

export default function TierPage() {
  const [location, setLocation] = useLocation();
  const [selectedTier, setSelectedTier] = useState<SkillTier | ''>('');

  const params = new URLSearchParams(location.split('?')[1]);
  const course = params.get('course');
  const hole = params.get('hole');
  const teeBox = params.get('teeBox');

  const handleNext = () => {
    if (selectedTier) {
      setLocation(`/wager?course=${course}&hole=${hole}&teeBox=${teeBox}&tier=${selectedTier}`);
    }
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header title="Select Skill Tier" showBack />
      <ProgressStepper currentStep={2} steps={steps} />

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold mb-2">Choose Your Challenge</h2>
          <p className="text-muted-foreground">How close can you get to the pin?</p>
        </div>

        <div className="space-y-4 mb-8">
          {SKILL_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={`
                w-full text-left transition-all
                ${selectedTier === tier.id ? 'scale-[1.02]' : ''}
              `}
              data-testid={`tier-${tier.id}`}
            >
              <Card className={`
                p-6 border-2 transition-all
                ${selectedTier === tier.id 
                  ? 'border-primary ring-4 ring-primary/20 shadow-lg' 
                  : 'border-border hover-elevate active-elevate-2'
                }
              `}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                      <p className="text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                  </div>
                  {selectedTier === tier.id && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-6 pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Target Distance</div>
                      <div className="font-semibold" data-testid={`text-tier-distance-${tier.id}`}>{tier.distance} feet</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-muted-foreground">×</div>
                    <div>
                      <div className="text-xs text-muted-foreground">Payout Multiplier</div>
                      <div className="font-semibold" data-testid={`text-tier-multiplier-${tier.id}`}>{tier.payout}x</div>
                    </div>
                  </div>
                </div>
              </Card>
            </button>
          ))}
        </div>

        <Card className="p-4 bg-accent/50 border-accent mb-6">
          <p className="text-sm text-center">
            <strong>Pro Tip:</strong> Higher tiers = bigger payouts, but tougher targets!
          </p>
        </Card>

        <Button
          onClick={handleNext}
          disabled={!selectedTier}
          className="w-full h-14 text-lg font-semibold"
          data-testid="button-next"
        >
          Continue to Wager
        </Button>
      </div>
    </div>
  );
}
