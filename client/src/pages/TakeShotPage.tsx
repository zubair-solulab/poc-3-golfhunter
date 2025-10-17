import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Camera, Target, Timer } from 'lucide-react';
import { Header } from '@/components/Header';
import { ProgressStepper } from '@/components/ProgressStepper';

const steps = [
  { id: 'setup', label: 'Setup' },
  { id: 'position', label: 'Position' },
  { id: 'tier', label: 'Tier' },
  { id: 'wager', label: 'Wager' },
  { id: 'payment', label: 'Payment' },
  { id: 'take-shot', label: 'Take Shot' },
  { id: 'results', label: 'Results' }
];

export default function TakeShotPage() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const course = searchParams.get('course') || '';
  const hole = searchParams.get('hole') || '';
  const tier = searchParams.get('tier') || '';
  const wager = searchParams.get('wager') || '';
  
  const [cameraReady, setCameraReady] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [shotTaken, setShotTaken] = useState(false);

  const handleActivateCamera = () => {
    setCameraReady(true);
  };

  const handleTakeShot = () => {
    // Start countdown
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown === null) return;
    
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Shot taken!
      setShotTaken(true);
      
      // Check if Augusta National (course ID "2") Hole 16 - always win with better distance
      const isAugusta16 = course === '2' && hole === '2-16';
      const outcome = isAugusta16 ? 'within-tier' : 'within-tier';
      const distance = isAugusta16 ? '2.5' : '4.2';
      
      // Simulate shot processing and redirect to results
      setTimeout(() => {
        navigate(`/result?tier=${tier}&wager=${wager}&outcome=${outcome}&distance=${distance}`);
      }, 2000);
    }
  }, [countdown, tier, wager, course, hole, navigate]);

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header title="Take Your Shot" showBack />
      <ProgressStepper currentStep={5} steps={steps} />

      <div className="max-w-md mx-auto px-4 py-8">
        {!cameraReady ? (
          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 mx-auto">
              <Camera className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="font-display text-2xl font-semibold mb-3" data-testid="text-activate-title">
              Activate Camera
            </h2>
            
            <p className="text-muted-foreground mb-6" data-testid="text-activate-description">
              AI-powered cameras will track your shot with precision. Position yourself at the tee box and activate when ready.
            </p>

            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3 text-left">
                <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Shot Tracking Active</p>
                  <p className="text-muted-foreground">
                    Ball trajectory, distance from cup, and highlight video will be captured automatically
                  </p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleActivateCamera}
              className="w-full h-12 text-lg"
              data-testid="button-activate-camera"
            >
              <Camera className="w-5 h-5 mr-2" />
              Activate Camera
            </Button>
          </Card>
        ) : countdown === null ? (
          <Card className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6 mx-auto">
              <Camera className="w-10 h-10 text-green-600" />
            </div>
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-medium mb-4">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                Camera Active
              </div>
              
              <h2 className="font-display text-2xl font-semibold mb-3" data-testid="text-ready-title">
                You're All Set!
              </h2>
              
              <p className="text-muted-foreground" data-testid="text-ready-description">
                When you're ready, press the button below. The camera will capture your shot automatically.
              </p>
            </div>

            <Button 
              onClick={handleTakeShot}
              size="lg"
              className="w-full h-14 text-lg bg-green-600 hover:bg-green-700"
              data-testid="button-take-shot"
            >
              <Target className="w-5 h-5 mr-2" />
              Take Your Shot
            </Button>
          </Card>
        ) : (
          <Card className="p-12 text-center">
            {!shotTaken ? (
              <>
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-8 mx-auto">
                  <div className="text-6xl font-display font-bold text-primary" data-testid="text-countdown">
                    {countdown}
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground" data-testid="text-countdown-message">
                  Get ready...
                </p>
              </>
            ) : (
              <>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6 mx-auto">
                  <Timer className="w-10 h-10 text-green-600" />
                </div>
                
                <h2 className="font-display text-2xl font-semibold mb-3" data-testid="text-processing-title">
                  Shot Captured!
                </h2>
                
                <p className="text-muted-foreground" data-testid="text-processing-description">
                  Processing your shot...
                </p>
              </>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
