
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SecurityProvider } from "@/contexts/SecurityContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout } from "@/components/DashboardLayout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Partnerships from "./pages/Partnerships";
import Openings from "./pages/Openings";
import Messaging from "./pages/Messaging";
import Forum from "./pages/Forum";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <SecurityProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/partnerships" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Partnerships />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/openings" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Openings />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/messaging" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Messaging />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/forum" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Forum />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            <Route path="/news" element={
              <ProtectedRoute>
                <DashboardLayout>
                  <News />
                </DashboardLayout>
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </SecurityProvider>
  </QueryClientProvider>
);

export default App;
