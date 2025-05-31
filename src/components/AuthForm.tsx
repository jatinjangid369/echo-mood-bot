
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Heart, UserPlus, LogIn } from "lucide-react";
import { toast } from "sonner";

interface AuthFormProps {
  onAuthSuccess?: (user: { email: string; name?: string }) => void;
}

const AuthForm = ({ onAuthSuccess }: AuthFormProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return false;
    }

    if (!isLogin) {
      if (!formData.name) {
        toast.error("Please enter your name");
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
      }
      if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (isLogin) {
      toast.success(`Welcome back! 💜`);
      onAuthSuccess?.({ email: formData.email });
    } else {
      toast.success(`Account created successfully! Welcome to MindfulMe 🌟`);
      onAuthSuccess?.({ email: formData.email, name: formData.name });
    }

    setIsLoading(false);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/20 backdrop-blur-xl border-white/30 shadow-2xl animate-fade-in-scale">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-pink-500 animate-heartbeat mr-2" />
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              MindfulMe
            </CardTitle>
          </div>
          <p className="text-gray-600 animate-fade-in delay-200">
            {isLogin ? "Welcome back to your wellness journey" : "Start your mental wellness journey"}
          </p>
        </CardHeader>

        <CardContent className="space-y-6 animate-fade-in-up delay-300">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2 animate-fade-in">
                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="bg-white/60 backdrop-blur-sm border-white/40 focus:bg-white/80 transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="space-y-2 animate-fade-in delay-100">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="bg-white/60 backdrop-blur-sm border-white/40 focus:bg-white/80 transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                required
              />
            </div>

            <div className="space-y-2 animate-fade-in delay-200">
              <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="bg-white/60 backdrop-blur-sm border-white/40 focus:bg-white/80 transition-all duration-300 hover:shadow-md focus:scale-[1.01] pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2 animate-fade-in delay-300">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="bg-white/60 backdrop-blur-sm border-white/40 focus:bg-white/80 transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                  required={!isLogin}
                />
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:hover:scale-100 animate-fade-in delay-400"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {isLogin ? "Signing in..." : "Creating account..."}
                </div>
              ) : (
                <div className="flex items-center">
                  {isLogin ? <LogIn className="h-4 w-4 mr-2" /> : <UserPlus className="h-4 w-4 mr-2" />}
                  {isLogin ? "Sign In" : "Create Account"}
                </div>
              )}
            </Button>
          </form>

          <div className="text-center animate-fade-in delay-500">
            <p className="text-gray-600 text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleAuthMode}
                className="ml-1 text-purple-600 hover:text-purple-700 font-medium transition-colors hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="text-center animate-fade-in delay-600">
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors hover:underline">
                Forgot your password?
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
