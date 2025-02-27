import { useEffect, useState } from "react";

interface SplashScreenProps {
  onAnimationFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationFinished }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const fadeOutTimer = setTimeout(() => {
        onAnimationFinished();
      }, 1000);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [fadeOut, onAnimationFinished]);

  const splashScreenClasses = `fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
    fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
  }`;

  return (
    <div className={splashScreenClasses}>
      <div className="flex flex-col items-center">
        <div className="text-6xl md:text-8xl font-bold text-white animate-splash">
          <span className="inline-block animate-letter">T</span>
          <span className="inline-block animate-letter animation-delay-100">
            A
          </span>
          <span className="inline-block animate-letter animation-delay-200">
            L
          </span>
          <span className="inline-block animate-letter animation-delay-300">
            L
          </span>
          <span className="inline-block animate-letter animation-delay-400">
            V
          </span>
          <span className="inline-block animate-letter animation-delay-500">
            I
          </span>
          <span className="inline-block animate-letter animation-delay-600">
            L
          </span>
          <span className="inline-block animate-letter animation-delay-700">
            E
          </span>
        </div>
        <div className="text-2xl mt-4">
          <span className="inline-block animate-letter animation-delay-1000 text-white">
            Desenvolvedor Web Fullstack
          </span>
        </div>
        <div className="text-2xl mt-4">
          <span className="inline-block animate-letter animation-delay-1500 text-white">
            Pronto para te ajudar!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
