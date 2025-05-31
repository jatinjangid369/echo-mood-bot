
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MindfulMe
              </h1>
              <p className="text-sm text-gray-600">Your personal mental wellness companion</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            How are you feeling today?
          </h2>
          <p className="text-gray-600">
            Track your mood, reflect on your thoughts, and get AI-powered support
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="tracker" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Mood Tracker
            </TabsTrigger>
            <TabsTrigger value="checkin" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Daily Check-in
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              AI Support
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tracker" className="space-y-6">
            <MoodTracker />
          </TabsContent>

          <TabsContent value="checkin" className="space-y-6">
            <DailyCheckIn />
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <MoodInsights />
          </TabsContent>

          <TabsContent value="support" className="space-y-6">
            <ChatSupport />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
