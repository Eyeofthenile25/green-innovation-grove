
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

// Pages
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

// Simple background pattern
const bgPattern = {
  backgroundImage: `radial-gradient(rgba(201, 162, 39, 0.15) 2px, transparent 2px), radial-gradient(rgba(78, 205, 196, 0.1) 2px, transparent 2px)`,
  backgroundSize: '40px 40px',
  backgroundPosition: '0 0, 20px 20px',
};

// Create a query client for React Query
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <div className="min-h-screen bg-anka-black" style={bgPattern}>
          {/* Toast notifications */}
          <Toaster />
          <Sonner />
          
          {/* Main app router */}
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
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatBubble />
          </BrowserRouter>
        </div>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
