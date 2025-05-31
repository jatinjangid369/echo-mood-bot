
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MoodTracker from "@/components/MoodTracker";
import ChatSupport from "@/components/ChatSupport";
import MoodInsights from "@/components/MoodInsights";
import DailyCheckIn from "@/components/DailyCheckIn";
import { Heart, Brain, TrendingUp, MessageCircle } from "lucide-react";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState("tracker");

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30"></div>
      </div>
      
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/20 rounded-full animate-float-medium delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-200/20 rounded-full animate-float-fast delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-indigo-200/20 rounded-full animate-float-slow delay-500"></div>
      </div>

      {/* Content with Glass Effect */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white/20 backdrop-blur-md border-b border-white/30 shadow-lg animate-slide-down">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg animate-pulse-gentle">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-text-shimmer">
                  MindfulMe
                </h1>
                <p className="text-sm text-gray-700 font-medium">Your personal mental wellness companion</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-8 animate-fade-in-up delay-200">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-bounce-gentle">
              How are you feeling today?
            </h2>
            <p className="text-gray-700 font-medium">
              Track your mood, reflect on your thoughts, and get AI-powered support
            </p>
          </div>

          <div className="animate-fade-in-up delay-400">
            <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/30 backdrop-blur-md border border-white/40 shadow-xl">
                <TabsTrigger 
                  value="tracker" 
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105 data-[state=active]:bg-white/80 data-[state=active]:shadow-lg data-[state=active]:scale-105"
                >
                  <Heart className="h-4 w-4 animate-heartbeat" />
                  Mood Tracker
                </TabsTrigger>
                <TabsTrigger 
                  value="checkin" 
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105 data-[state=active]:bg-white/80 data-[state=active]:shadow-lg data-[state=active]:scale-105"
                >
                  <Brain className="h-4 w-4 animate-spin-slow" />
                  Daily Check-in
                </TabsTrigger>
                <TabsTrigger 
                  value="insights" 
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105 data-[state=active]:bg-white/80 data-[state=active]:shadow-lg data-[state=active]:scale-105"
                >
                  <TrendingUp className="h-4 w-4 animate-bounce-x" />
                  Insights
                </TabsTrigger>
                <TabsTrigger 
                  value="support" 
                  className="flex items-center gap-2 transition-all duration-300 hover:scale-105 data-[state=active]:bg-white/80 data-[state=active]:shadow-lg data-[state=active]:scale-105"
                >
                  <MessageCircle className="h-4 w-4 animate-wiggle" />
                  AI Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="tracker" className="space-y-6 animate-fade-in-scale">
                <MoodTracker />
              </TabsContent>

              <TabsContent value="checkin" className="space-y-6 animate-fade-in-scale">
                <DailyCheckIn />
              </TabsContent>

              <TabsContent value="insights" className="space-y-6 animate-fade-in-scale">
                <MoodInsights />
              </TabsContent>

              <TabsContent value="support" className="space-y-6 animate-fade-in-scale">
                <ChatSupport />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
