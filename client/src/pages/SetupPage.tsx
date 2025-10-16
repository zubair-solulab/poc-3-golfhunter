import { useState } from 'react';
import { useLocation } from 'wouter';
import { Header } from '@/components/Header';
import { ProgressStepper } from '@/components/ProgressStepper';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MOCK_COURSES, MOCK_HOLES, MOCK_TEE_BOXES } from '@/lib/mock-data';
import { MapPin, Flag, Navigation } from 'lucide-react';

const steps = [
  { id: 'course', label: 'Course' },
  { id: 'tee', label: 'Tee Box' },
  { id: 'tier', label: 'Tier' },
  { id: 'wager', label: 'Wager' },
  { id: 'payment', label: 'Payment' },
];

export default function SetupPage() {
  const [, setLocation] = useLocation();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedHole, setSelectedHole] = useState('');
  const [selectedTeeBox, setSelectedTeeBox] = useState('');

  const holes = selectedCourse ? MOCK_HOLES[selectedCourse] || [] : [];
  const teeBoxes = selectedHole ? MOCK_TEE_BOXES[selectedHole] || [] : [];
  const canProceed = selectedCourse && selectedHole && selectedTeeBox;

  const selectedHoleData = holes.find(h => h.id === selectedHole);

  const handleNext = () => {
    if (canProceed) {
      setLocation(`/tier?course=${selectedCourse}&hole=${selectedHole}&teeBox=${selectedTeeBox}`);
    }
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <Header title="Setup Challenge" showBack />
      <ProgressStepper currentStep={0} steps={steps} />

      <div className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold mb-2">Choose Your Course</h2>
          <p className="text-muted-foreground">Select the Par 3 hole you'll be playing</p>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="course" className="text-base font-semibold flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" />
                  Golf Course
                </Label>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger id="course" className="h-12" data-testid="select-course">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {MOCK_COURSES.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        <div>
                          <div className="font-semibold">{course.name}</div>
                          <div className="text-xs text-muted-foreground">{course.location}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCourse && holes.length > 0 && (
                <div>
                  <Label htmlFor="hole" className="text-base font-semibold flex items-center gap-2 mb-2">
                    <Flag className="w-4 h-4" />
                    Hole Number
                  </Label>
                  <Select value={selectedHole} onValueChange={setSelectedHole}>
                    <SelectTrigger id="hole" className="h-12" data-testid="select-hole">
                      <SelectValue placeholder="Select a hole" />
                    </SelectTrigger>
                    <SelectContent>
                      {holes.map((hole) => (
                        <SelectItem key={hole.id} value={hole.id}>
                          Hole {hole.number} - Par {hole.par} ({hole.yardage} yards)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {selectedHole && teeBoxes.length > 0 && (
                <div>
                  <Label htmlFor="teebox" className="text-base font-semibold flex items-center gap-2 mb-2">
                    <Navigation className="w-4 h-4" />
                    Tee Box Position
                  </Label>
                  <div className="grid gap-3">
                    {teeBoxes.map((teeBox) => (
                      <button
                        key={teeBox.id}
                        onClick={() => setSelectedTeeBox(teeBox.id)}
                        className={`
                          p-4 rounded-xl border-2 text-left transition-all
                          ${selectedTeeBox === teeBox.id 
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                            : 'border-border hover-elevate active-elevate-2'
                          }
                        `}
                        data-testid={`teebox-${teeBox.color}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`
                              w-10 h-10 rounded-full flex items-center justify-center font-bold
                              ${teeBox.color === 'white' ? 'bg-slate-100 text-slate-800' : ''}
                              ${teeBox.color === 'blue' ? 'bg-blue-500 text-white' : ''}
                              ${teeBox.color === 'red' ? 'bg-red-500 text-white' : ''}
                              ${teeBox.color === 'gold' ? 'bg-amber-500 text-white' : ''}
                            `}>
                              {teeBox.color.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-semibold">{teeBox.name}</div>
                              <div className="text-sm text-muted-foreground">{teeBox.yardage} yards</div>
                            </div>
                          </div>
                          {selectedTeeBox === teeBox.id && (
                            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                              <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {selectedHoleData && (
            <Card className="p-4 bg-muted/50 border-muted" data-testid="card-hole-info">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-muted-foreground">Hole <span data-testid="text-hole-number">{selectedHoleData.number}</span></span>
                  <span className="mx-2">•</span>
                  <span className="font-semibold">Par <span data-testid="text-hole-par">{selectedHoleData.par}</span></span>
                </div>
                <div className="text-muted-foreground" data-testid="text-hole-yardage">{selectedHoleData.yardage} yards</div>
              </div>
            </Card>
          )}

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="w-full h-14 text-lg font-semibold"
            data-testid="button-next"
          >
            Continue to Skill Tier
          </Button>
        </div>
      </div>
    </div>
  );
}
