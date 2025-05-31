import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Activity, Zap, Gamepad2, Dumbbell, Apple, BookOpen, Phone, Palette, LogOut, User } from "lucide-react";
import MoodTracker from "@/components/MoodTracker";
import ChatSupport from "@/components/ChatSupport";
import MoodInsights from "@/components/MoodInsights";
import DailyCheckIn from "@/components/DailyCheckIn";
import PersonalityChat from "@/components/PersonalityChat";
import MoodQuiz from "@/components/MoodQuiz";
import BineuralBeats from "@/components/BineuralBeats";
import RelaxationHub from "@/components/RelaxationHub";
import ExerciseRecommendations from "@/components/ExerciseRecommendations";
import NutritionTracker from "@/components/NutritionTracker";
import MotivationalStories from "@/components/MotivationalStories";
import EmergencySupport from "@/components/EmergencySupport";
import AuthForm from "@/components/AuthForm";

const Index = () => {
  const [currentMood, setCurrentMood] = useState<number>(3);
  const [user, setUser] = useState<{ email: string; name?: string } | null>(null);

  // If user is not authenticated, show auth form
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-medium delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-fast delay-2000"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 text-4xl animate-float-slow delay-500">🌸</div>
          <div className="absolute top-1/3 right-1/4 text-3xl animate-float-medium delay-1500">🦋</div>
          <div className="absolute bottom-1/4 left-1/3 text-5xl animate-float-fast delay-2500">🌙</div>
          <div className="absolute top-1/2 right-1/3 text-3xl animate-float-slow delay-3000">✨</div>
        </div>

        <AuthForm onAuthSuccess={setUser} />
      </div>
    );
  }

  const getMoodTheme = (mood: number) => {
    switch(mood) {
      case 1: return { bg: "from-gray-400 via-gray-300 to-gray-200", accent: "red" };
      case 2: return { bg: "from-orange-400 via-orange-300 to-yellow-200", accent: "orange" };
      case 3: return { bg: "from-blue-400 via-blue-300 to-blue-200", accent: "blue" };
      case 4: return { bg: "from-green-400 via-green-300 to-green-200", accent: "green" };
      case 5: return { bg: "from-purple-400 via-pink-300 to-pink-200", accent: "purple" };
      default: return { bg: "from-blue-50 via-purple-50 to-pink-50", accent: "blue" };
    }
  };

  const theme = getMoodTheme(currentMood);

  const tabs = [
    { id: "mood", label: "Mood Tracker", icon: Heart, component: MoodTracker },
    { id: "personality", label: "AI Psychiatrist", icon: Brain, component: PersonalityChat },
    { id: "quiz", label: "Mood Quiz", icon: Activity, component: MoodQuiz },
    { id: "beats", label: "Binaural Beats", icon: Zap, component: BineuralBeats },
    { id: "relaxation", label: "Relaxation Hub", icon: Gamepad2, component: RelaxationHub },
    { id: "exercise", label: "Exercise", icon: Dumbbell, component: ExerciseRecommendations },
    { id: "nutrition", label: "Nutrition", icon: Apple, component: NutritionTracker },
    { id: "stories", label: "Stories", icon: BookOpen, component: MotivationalStories },
    { id: "emergency", label: "Emergency", icon: Phone, component: EmergencySupport },
    { id: "chat", label: "Chat Support", icon: Brain, component: ChatSupport },
    { id: "insights", label: "Insights", icon: Palette, component: MoodInsights },
    { id: "checkin", label: "Daily Check-in", icon: Activity, component: DailyCheckIn },
  ];

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-hidden transition-all duration-1000`}>
      {/* Header with user info and logout */}
      <div className="relative z-10 p-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-pink-500 animate-heartbeat mr-3" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              MindfulMe
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/30">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-700">
                {user.name || user.email.split('@')[0]}
              </span>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="bg-white/20 backdrop-blur-lg border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-medium delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-fast delay-2000"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 text-4xl animate-float-slow delay-500">🌸</div>
        <div className="absolute top-1/3 right-1/4 text-3xl animate-float-medium delay-1500">🦋</div>
        <div className="absolute bottom-1/4 left-1/3 text-5xl animate-float-fast delay-2500">🌙</div>
        <div className="absolute top-1/2 right-1/3 text-3xl animate-float-slow delay-3000">✨</div>
      </div>

      <div className="relative z-10 p-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="mood" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-6 gap-2 bg-white/20 backdrop-blur-lg border-white/30 p-2 rounded-xl shadow-xl animate-fade-in-up delay-200">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex flex-col items-center gap-1 p-3 text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg data-[state=active]:bg-white/40 data-[state=active]:shadow-xl data-[state=active]:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mt-6 animate-fade-in-up delay-400">
              {tabs.map((tab) => (
                <TabsContent key={tab.id} value={tab.id} className="space-y-6">
                  <tab.component 
                    onMoodChange={tab.id === "mood" ? setCurrentMood : undefined}
                  />
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
