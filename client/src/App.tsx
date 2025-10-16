import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import SetupPage from "@/pages/SetupPage";
import TierPage from "@/pages/TierPage";
import WagerPage from "@/pages/WagerPage";
import PaymentPage from "@/pages/PaymentPage";
import TakeShotPage from "@/pages/TakeShotPage";
import ResultPage from "@/pages/ResultPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/setup" component={SetupPage} />
      <Route path="/tier" component={TierPage} />
      <Route path="/wager" component={WagerPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/take-shot" component={TakeShotPage} />
      <Route path="/result" component={ResultPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
