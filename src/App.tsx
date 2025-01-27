import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import IPhoneHome from "./pages/IPhoneHome";
import Home from "./pages/Home";
import Record from "./pages/Record";
import Reports from "./pages/Reports";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen pb-16 md:pb-0 md:pt-16">
          <Routes>
            <Route path="/" element={<IPhoneHome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/record" element={<Record />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
          {window.location.pathname !== "/" && <Navigation />}
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;