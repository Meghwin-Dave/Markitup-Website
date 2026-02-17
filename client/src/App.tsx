import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import DiscountBuddy from "./pages/DiscountBuddy";
import ITBuddy from "./pages/ITBuddy";
import MarketBuddy from "./pages/MarketBuddy";
import Contact from "./pages/Contact";
import ERPNextDevelopment from "./pages/services/ERPNextDevelopment";
import DjangoDevelopment from "./pages/services/DjangoDevelopment";
import ReactDevelopment from "./pages/services/ReactDevelopment";
import NodeDevelopment from "./pages/services/NodeDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/services"} component={Services} />
        <Route path={"/services/erpnext-development"} component={ERPNextDevelopment} />
        <Route path={"/services/django-development"} component={DjangoDevelopment} />
        <Route path={"/services/react-development"} component={ReactDevelopment} />
        <Route path={"/services/node-development"} component={NodeDevelopment} />
        <Route path={"/services/mobile-app-development"} component={MobileAppDevelopment} />
        <Route path={"/discount-buddy"} component={DiscountBuddy} />
        <Route path={"/it-buddy"} component={ITBuddy} />
        <Route path={"/market-buddy"} component={MarketBuddy} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
