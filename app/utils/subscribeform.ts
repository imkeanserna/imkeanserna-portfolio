// Text constants for the subscription form
export const subscribeFormText = {
  title: "Subscribe",
  description: "Don't miss out on the latest trends, tips, and memes every Tuesday. Hit subscribe and let's geek out together!",
  inputPlaceholder: "Your email",
  buttonText: "Sign me up!",
  loadingText: "Processing...",
  helperText: {
    loading: "Processing your subscription...",
    initial: "I'll only send emails when new content is posted. No spam.",
    invalid: "Let's not spam. Please enter a valid email address.",
    valid: "Yep, you are all good. Just waiting for you to smash the button."
  }
};

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Helper function to determine helper text based on form state
export const getHelperText = (
  isLoading: boolean,
  isTouched: boolean,
  isEmailValid: boolean
): string => {
  if (isLoading) {
    return subscribeFormText.helperText.loading;
  } else if (!isTouched) {
    return subscribeFormText.helperText.initial;
  } else if (!isEmailValid) {
    return subscribeFormText.helperText.invalid;
  } else {
    return subscribeFormText.helperText.valid;
  }
};

// Function to get button class based on form state
export const getButtonClass = (
  isLoading: boolean,
  isEmailValid: boolean,
  isDark: boolean
): string => {
  if (isLoading) {
    return 'bg-sky-500/50 cursor-wait';
  } else if (isEmailValid) {
    return `${isDark ? 'bg-sky-400/40' : 'bg-sky-400/30'} hover:bg-sky-400/70 hover:cursor-pointer`;
  } else {
    return `${isDark ? 'bg-zinc-700/40' : 'bg-gray-300'} cursor-not-allowed text-zinc-400`;
  }
};

// Function to get input class based on form state
export const getInputClass = (
  isLoading: boolean,
  isEmailValid: boolean,
  isDark: boolean
): string => {
  const baseClass = `flex-grow ps-4 rounded-xl font-medium text-sm border 
  ${isDark ? "bg-zinc-800" : "bg-gray-100/60"}`;

  const stateClass = isLoading
    ? 'border-sky-500/50 animate-pulse'
    : isEmailValid
      ? 'border-sky-500/50'
      : 'border-border';

  return `${baseClass} ${stateClass} focus:outline-none focus:ring-2 focus:ring-gray-500 h-12`;
};
