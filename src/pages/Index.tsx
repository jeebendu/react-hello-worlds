
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <Card className={`p-8 md:p-12 text-center shadow-2xl border-0 bg-white/80 backdrop-blur-sm transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Hello, World! 👋
              </h1>
              <div className="absolute -top-2 -right-2 animate-bounce">
                <Sparkles className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
              Welcome to your beautiful React application built with modern web technologies
            </p>
            
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                React 18
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                TypeScript
              </span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                Tailwind CSS
              </span>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={handleClick}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Click me! ✨
              </Button>
              
              {clickCount > 0 && (
                <div className={`mt-4 text-sm text-gray-600 transform transition-all duration-300 ${
                  clickCount > 0 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                }`}>
                  You've clicked {clickCount} time{clickCount !== 1 ? 's' : ''}! 🎉
                </div>
              )}
            </div>
          </div>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Ready to build something amazing? Start coding! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
