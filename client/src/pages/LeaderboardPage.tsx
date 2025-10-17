import { useState } from 'react';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MOCK_COURSES, MOCK_LEADERBOARDS, SKILL_TIERS } from '@/lib/mock-data';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

export default function LeaderboardPage() {
  const [selectedCourse, setSelectedCourse] = useState(MOCK_COURSES[0].id);

  const getTierColor = (tier: string) => {
    const tierInfo = SKILL_TIERS.find(t => t.id === tier);
    return tierInfo?.color || 'from-slate-300 to-slate-400';
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-slate-400" />;
    if (rank === 3) return <Award className="w-5 h-5 text-orange-400" />;
    return <div className="w-5 h-5 flex items-center justify-center text-muted-foreground text-sm font-semibold">{rank}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 page-enter">
      <Header title="Leaderboard" showBack={true} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold mb-2" data-testid="heading-leaderboard">Top Players</h1>
          <p className="text-muted-foreground">Best performers on each course</p>
        </div>

        <Tabs value={selectedCourse} onValueChange={setSelectedCourse} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6" data-testid="tabs-courses">
            {MOCK_COURSES.map((course) => (
              <TabsTrigger 
                key={course.id} 
                value={course.id}
                data-testid={`tab-course-${course.id}`}
              >
                {course.name.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {MOCK_COURSES.map((course) => (
            <TabsContent key={course.id} value={course.id} className="space-y-3">
              <div className="mb-4">
                <h2 className="font-display text-xl font-semibold" data-testid="text-course-name">{course.name}</h2>
                <p className="text-sm text-muted-foreground">{course.location}</p>
              </div>

              {MOCK_LEADERBOARDS[course.id]?.map((entry) => (
                <Card 
                  key={entry.rank} 
                  className="p-4 hover-elevate"
                  data-testid={`leaderboard-entry-${entry.rank}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 flex justify-center" data-testid={`rank-${entry.rank}`}>
                      {getRankIcon(entry.rank)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold truncate" data-testid={`player-name-${entry.rank}`}>
                          {entry.playerName}
                        </h3>
                        <Badge 
                          className={`bg-gradient-to-r ${getTierColor(entry.tier)} text-white text-xs px-2`}
                          data-testid={`player-tier-${entry.rank}`}
                        >
                          {SKILL_TIERS.find(t => t.id === entry.tier)?.name}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground text-xs">Best Shot</div>
                          <div className="font-semibold text-primary" data-testid={`best-distance-${entry.rank}`}>
                            {entry.bestDistance} ft
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs">Wins</div>
                          <div className="font-semibold" data-testid={`total-wins-${entry.rank}`}>
                            {entry.totalWins}
                          </div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs">Total XP</div>
                          <div className="font-semibold flex items-center gap-1" data-testid={`total-xp-${entry.rank}`}>
                            <TrendingUp className="w-3 h-3" />
                            {entry.totalXP.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
