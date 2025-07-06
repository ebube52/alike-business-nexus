
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import Index from "./pages/Index";
import Partnerships from "./pages/Partnerships";
import Openings from "./pages/Openings";
import Messaging from "./pages/Messaging";
import Forum from "./pages/Forum";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/partnerships" element={
            <DashboardLayout>
              <Partnerships />
            </DashboardLayout>
          } />
          <Route path="/openings" element={
            <DashboardLayout>
              <Openings />
            </DashboardLayout>
          } />
          <Route path="/messaging" element={
            <DashboardLayout>
              <Messaging />
            </DashboardLayout>
          } />
          <Route path="/forum" element={
            <DashboardLayout>
              <Forum />
            </DashboardLayout>
          } />
          <Route path="/news" element={
            <DashboardLayout>
              <News />
            </DashboardLayout>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
