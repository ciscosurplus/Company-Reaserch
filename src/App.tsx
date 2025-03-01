import React from 'react';
import { WebhookForm } from './components/WebhookForm';
import { Search } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-2xl">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Company Researcher
            </h1>
          </div>
          <WebhookForm />
        </div>
      </div>
    </div>
  );
}

export default App;
