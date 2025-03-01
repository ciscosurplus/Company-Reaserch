import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const loadingMessages = [
  "Our research team is gathering information...",
  "Searching through company databases...",
  "Analyzing company history and achievements...",
  "Compiling market insights...",
  "Almost there! Finalizing the report...",
  "Just a moment while we verify the details..."
];

export function LoadingMessage() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((current) => (current + 1) % loadingMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <Loader2 className="animate-spin h-4 w-4" />
      <span className="text-gray-600 dark:text-gray-300">{loadingMessages[messageIndex]}</span>
    </div>
  );
}
