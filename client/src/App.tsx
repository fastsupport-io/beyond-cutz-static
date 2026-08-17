/** Precision Landscape Studio: Route structure mirrors the WordPress page portfolio and keeps every public path connected to the local conversion narrative. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ContactPage } from "./pages/ContactPage";
import { DetailPage } from "./pages/DetailPage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { ResourcesPage } from "./pages/ResourcesPage";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/resources/" component={ResourcesPage} />
    <Route path="/contact/" component={ContactPage} />
    <Route path="/residential-lawn-care/" component={DetailPage} />
    <Route path="/commercial-lawn-care/" component={DetailPage} />
    <Route path="/lawn-mowing/" component={DetailPage} />
    <Route path="/landscape-maintenance/" component={DetailPage} />
    <Route path="/service-areas/midlothian-va/" component={DetailPage} />
    <Route path="/service-areas/chesterfield-va/" component={DetailPage} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
