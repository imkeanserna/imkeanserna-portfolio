"use client";

import { useTheme } from "@/context/ThemeProvider";
import { getButtonClass, getHelperText, getInputClass, subscribeFormText, validateEmail } from "@/utils/subscribeform";
import { useEffect, useState } from "react";

export default function SubscribeForm() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (email) {
      setIsEmailValid(validateEmail(email));
      setIsTouched(true);
    } else {
      setIsEmailValid(false);
      setIsTouched(false);
    }
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailValid && !isLoading) {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (error) {
        console.error(error);
        // Error handling could be added here
      } finally {
        setIsLoading(false);
        setEmail('');
        setIsTouched(false);
        setIsEmailValid(false);
      }
    }
  };

  return (
    <div id="subscribe-section" className="flex flex-col mt-4">
      <section className="mx-auto w-full p-5 sm:px-8 max-w-screen-md grid sm:grid-cols-[75px_1fr] gap-x-6 gap-y-4 py-0 -mt-4">
        <div></div>
        <div className={`bg-background relative rounded-3xl p-8 md:p-16 border border-border border-foreground/5 transition-colors overflow-hidden duration-300`}>
          <div className={`absolute inset-0 bg-gradient-to-bl mix-blend-overlay pointer-events-none ${theme === "dark" ? "from-neutral-400 to-neutral-700" : "from-white/5 to-neutral-900/50"}`}></div>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4">{subscribeFormText.title}</h2>
          <p className="text-center text-gray-400 mb-6 text-base tracking-wide leading-7 font-medium">
            {subscribeFormText.description}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={subscribeFormText.inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => email && setIsTouched(true)}
                required
                disabled={isLoading}
                className={getInputClass(isLoading, isEmailValid, isDark)}
              />
              <button
                type="submit"
                disabled={!isEmailValid || isLoading}
                className={`px-6 py-3 text-sm rounded-xl font-medium h-12 
                  ${getButtonClass(isLoading, isEmailValid, isDark)}
                  transition-colors duration-200 flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {subscribeFormText.loadingText}
                  </>
                ) : (
                  subscribeFormText.buttonText
                )}
              </button>
            </div>
          </form>
          <p className={`text-xs text-gray-400 mt-4 text-center tracking-wide transition-colors duration-300`}>
            {getHelperText(isLoading, isTouched, isEmailValid)}
          </p>
        </div>
      </section>
    </div>
  );
}
