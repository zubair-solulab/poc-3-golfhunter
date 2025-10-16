import { Check } from 'lucide-react';

interface Step {
  id: string;
  label: string;
}

interface ProgressStepperProps {
  currentStep: number;
  steps: Step[];
}

export function ProgressStepper({ currentStep, steps }: ProgressStepperProps) {
  return (
    <div className="w-full py-4 px-4">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isUpcoming = index > currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                    ${isCompleted ? 'bg-primary text-primary-foreground' : ''}
                    ${isCurrent ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' : ''}
                    ${isUpcoming ? 'bg-muted text-muted-foreground' : ''}
                  `}
                  data-testid={`step-${step.id}`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <span className={`text-xs mt-1 text-center ${isCurrent ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 flex-1 mx-2 transition-colors ${isCompleted ? 'bg-primary' : 'bg-muted'}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
