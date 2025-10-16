import { useLocation } from 'wouter';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-background to-muted/20 px-4">
      <Card className="w-full max-w-md p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
          <AlertCircle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => setLocation('/')}
          className="w-full h-12"
          data-testid="button-home"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Card>
    </div>
  );
}
