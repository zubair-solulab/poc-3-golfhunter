import { ArrowLeft, CircleUserRound, Trophy, UserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export function Header({ title = 'ACE HUNTER', showBack = false, onBack }: HeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/');
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
        <h1 className="font-display text-xl font-bold text-primary flex-1">{title}</h1>

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/leaderboard')}
            data-testid="button-header-leaderboard"
          >
            <Trophy className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/profile')}
            data-testid="button-profile"
          >
            <CircleUserRound className="h-5 w-5" />
          </Button>
        </div>

      </div>
    </header>
  );
}
