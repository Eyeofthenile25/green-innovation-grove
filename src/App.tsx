
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Awareness from "./pages/Awareness";
import AIChat from "./pages/AIChat";
import Volunteering from "./pages/Volunteering";
import Marketplace from "./pages/Marketplace";
import Quizzes from "./pages/Quizzes";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";
import ChatBubble from "./components/ChatBubble";
import { UserProvider } from "./contexts/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/awareness" element={<Awareness />} />
            <Route path="/ai-chat" element={<AIChat />} />
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/profile" element={<Profile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBubble />
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
