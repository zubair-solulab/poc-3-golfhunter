import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Target, TrendingUp, Star, Settings, LogOut } from 'lucide-react';
import { Header } from '@/components/Header';

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: 'John Doe',
    initials: 'JD',
    level: 12,
    xp: 3450,
    nextLevelXp: 4000,
    totalShots: 48,
    aces: 3,
    wins: 32,
    totalEarnings: 2850
  };

  const achievements = [
    { id: 1, name: 'First Ace', icon: Trophy, earned: true, color: 'text-yellow-500' },
    { id: 2, name: 'Sniper Elite', icon: Target, earned: true, color: 'text-blue-500' },
    { id: 3, name: 'Win Streak 5', icon: TrendingUp, earned: true, color: 'text-green-500' },
    { id: 4, name: 'High Roller', icon: Star, earned: false, color: 'text-gray-400' }
  ];

  const recentShots = [
    { id: 1, course: 'Pebble Beach', hole: 7, distance: '2.8 ft', result: 'Win', payout: '$250' },
    { id: 2, course: 'St. Andrews', hole: 11, distance: '8.5 ft', result: 'Win', payout: '$75' },
    { id: 3, course: 'Augusta National', hole: 12, distance: '14.2 ft', result: 'Miss', payout: '$0' }
  ];

  const xpPercentage = (user.xp / user.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header title="Profile" showBack />

      <div className="max-w-md mx-auto px-4 py-8">
        {/* User Info Card */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-semibold">
                {user.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold mb-1" data-testid="text-user-name">
                {user.name}
              </h2>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary" data-testid="badge-user-level">
                  Level {user.level}
                </Badge>
                <span className="text-sm text-muted-foreground" data-testid="text-user-xp">
                  {user.xp} XP
                </span>
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress to Level {user.level + 1}</span>
              <span className="font-medium">{user.xp} / {user.nextLevelXp} XP</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${xpPercentage}%` }}
                data-testid="progress-xp"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground" data-testid="text-total-shots">
                {user.totalShots}
              </div>
              <div className="text-xs text-muted-foreground">Total Shots</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground" data-testid="text-total-aces">
                {user.aces}
              </div>
              <div className="text-xs text-muted-foreground">Aces</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600" data-testid="text-total-wins">
                {user.wins}
              </div>
              <div className="text-xs text-muted-foreground">Wins</div>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600" data-testid="text-total-earnings">
                ${user.totalEarnings}
              </div>
              <div className="text-xs text-muted-foreground">Total Earnings</div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6 mb-6">
          <h3 className="font-display text-lg font-semibold mb-4" data-testid="text-achievements-title">
            Achievements
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned
                    ? 'border-primary/20 bg-primary/5'
                    : 'border-muted bg-muted/30 opacity-60'
                }`}
                data-testid={`achievement-${achievement.id}`}
              >
                <achievement.icon className={`w-8 h-8 mb-2 ${achievement.color}`} />
                <p className="text-sm font-medium">{achievement.name}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Shots */}
        <Card className="p-6 mb-6">
          <h3 className="font-display text-lg font-semibold mb-4" data-testid="text-recent-shots-title">
            Recent Shots
          </h3>
          <div className="space-y-3">
            {recentShots.map((shot) => (
              <div
                key={shot.id}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                data-testid={`shot-${shot.id}`}
              >
                <div className="flex-1">
                  <p className="font-medium text-sm">{shot.course}</p>
                  <p className="text-xs text-muted-foreground">
                    Hole {shot.hole} • {shot.distance}
                  </p>
                </div>
                <div className="text-right">
                  <Badge
                    variant={shot.result === 'Win' ? 'default' : 'secondary'}
                    className={shot.result === 'Win' ? 'bg-green-600' : ''}
                  >
                    {shot.result}
                  </Badge>
                  <p className="text-sm font-semibold mt-1">{shot.payout}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-start"
            data-testid="button-settings"
          >
            <Settings className="w-4 h-4 mr-2" />
            Account Settings
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start text-destructive border-destructive/30 hover:bg-destructive/10"
            data-testid="button-logout"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
