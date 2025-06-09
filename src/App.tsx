import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import HybrasCollab from "./pages/HybrasCollab";
import MyHolyBooks from "./pages/MyHolyBooks";
import P3MPlatform from "./pages/P3MPlatform";
import About from "./pages/About"; 
import AwesomeGames from "./pages/AwesomeGames";
import Photox from "./pages/Photox";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutme" element={<About />} /> 
          <Route path="/case-study/digital-magazine-redesign" element={<CaseStudy />} />
          <Route path="/case-study/photox" element={<Photox />} />
          <Route path="/case-study/myholybooks" element={<MyHolyBooks />} />
          <Route path="/case-study/hybras-collab" element={<HybrasCollab />} />
          <Route path="/case-study/p3m-platform" element={<P3MPlatform />} />
          <Route path="/case-study/awesomegames" element={<AwesomeGames />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;