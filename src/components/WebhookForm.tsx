import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { sendWebhook } from '../services/webhookService';
import { MarkdownDisplay } from './MarkdownDisplay';
import { LoadingMessage } from './LoadingMessage';

export function WebhookForm() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const responseText = await sendWebhook(text);
      setResponse(responseText);
      setText('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
            Which company would you like to know about?
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400
                     placeholder-gray-400 dark:placeholder-gray-500"
            placeholder="Enter a company name..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-3 border border-transparent 
                   rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 
                   dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                   focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
        >
          {isLoading ? (
            <LoadingMessage />
          ) : (
            <>
              <Search className="-ml-1 mr-2 h-5 w-5" />
              Investigate
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        </div>
      )}

      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">Research Results:</h3>
          <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-md">
            <MarkdownDisplay content={response} />
          </div>
        </div>
      )}
    </div>
  );
}
