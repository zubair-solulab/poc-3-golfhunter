import { useState } from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { ProgressStepper } from '@/components/ProgressStepper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SKILL_TIERS } from '@/lib/mock-data';
import { Lock, CreditCard, Shield } from 'lucide-react';

const steps = [
  { id: 'setup', label: 'Setup' },
  { id: 'position', label: 'Position' },
  { id: 'tier', label: 'Tier' },
  { id: 'wager', label: 'Wager' },
  { id: 'payment', label: 'Payment' },
  { id: 'take-shot', label: 'Take Shot' },
  { id: 'results', label: 'Results' }
];

export default function PaymentPage() {
  const [, setLocation] = useLocation();
  const [processing, setProcessing] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const course = params.get('course') || '';
  const hole = params.get('hole') || '';
  const teeBox = params.get('teeBox') || '';
  const tier = params.get('tier') || '';
  const wager = parseInt(params.get('wager') || '0');

  const tierInfo = SKILL_TIERS.find(t => t.id === tier);
  const potential = wager * (tierInfo?.payout || 1);

  const handlePayment = async () => {
    setProcessing(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLocation(`/take-shot?course=${course}&hole=${hole}&tier=${tier}&wager=${wager}`);
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header title="Payment" showBack />
      <ProgressStepper currentStep={4} steps={steps} />

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold mb-2">Secure Payment</h2>
          <p className="text-muted-foreground">Complete your wager to activate cameras</p>
        </div>

        <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-muted-foreground">Wager Amount</div>
              <div className="font-display text-3xl font-bold" data-testid="text-payment-wager">${wager}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Potential Win</div>
              <div className="font-display text-3xl font-bold text-primary" data-testid="text-payment-potential">${potential}</div>
            </div>
          </div>
          <div className="pt-3 border-t border-border/50">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tier: <span data-testid="text-payment-tier">{tierInfo?.name}</span></span>
              <span className="font-semibold">Target: <span data-testid="text-payment-target">{tierInfo?.distance}ft</span></span>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6 shadow-xl">
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber" className="text-sm font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                Card Number
              </Label>
              <Input
                id="cardNumber"
                type="text"
                placeholder="4242 4242 4242 4242"
                className="h-12"
                maxLength={19}
                data-testid="input-card-number"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry" className="text-sm font-semibold mb-2">
                  Expiry
                </Label>
                <Input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  className="h-12"
                  maxLength={5}
                  data-testid="input-expiry"
                />
              </div>
              <div>
                <Label htmlFor="cvc" className="text-sm font-semibold mb-2">
                  CVC
                </Label>
                <Input
                  id="cvc"
                  type="text"
                  placeholder="123"
                  className="h-12"
                  maxLength={4}
                  data-testid="input-cvc"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="name" className="text-sm font-semibold mb-2">
                Cardholder Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                className="h-12"
                data-testid="input-name"
              />
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-center gap-4 mb-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3" />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>PCI Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard className="w-3 h-3" />
            <span>Stripe Secure</span>
          </div>
        </div>

        <Button
          onClick={handlePayment}
          disabled={processing}
          className="w-full h-14 text-lg font-semibold"
          data-testid="button-pay"
        >
          {processing ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            `Pay $${wager} & Activate`
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-4">
          By proceeding, you agree to our Terms of Service and authorize this charge
        </p>
      </div>
    </div>
  );
}
