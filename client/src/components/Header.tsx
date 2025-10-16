import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ title = 'ACE HUNTER', showBack = false, onBack }: HeaderProps) {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      setLocation('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 max-w-md mx-auto">
        {showBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="mr-2"
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}
        <h1 className="font-display text-xl font-bold text-primary">{title}</h1>
      </div>
    </header>
  );
}
