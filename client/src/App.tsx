import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import SystemDesign from "@/pages/system-design";
import Precatorios from "@/pages/precatorios";
import Tributaria from "@/pages/tributaria";
import Investidores from "@/pages/investidores";
import Sobre from "@/pages/sobre";
import Contato from "@/pages/contato";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/system-design" component={SystemDesign} />
      <Route path="/precatorios" component={Precatorios} />
      <Route path="/tributaria" component={Tributaria} />
      <Route path="/investidores" component={Investidores} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
