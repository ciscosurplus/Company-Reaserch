import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownDisplayProps {
  content: string;
}

export function MarkdownDisplay({ content }: MarkdownDisplayProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-6 mb-4 dark:text-white" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-5 mb-3 dark:text-gray-200" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-lg font-medium mt-4 mb-2 dark:text-gray-300" {...props} />,
          p: ({node, ...props}) => <p className="my-2 dark:text-gray-300" {...props} />,
          a: ({node, ...props}) => (
            <a 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline" 
              target="_blank" 
              rel="noopener noreferrer" 
              {...props} 
            />
          ),
          ul: ({node, ...props}) => <ul className="list-disc ml-4 my-2 dark:text-gray-300" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal ml-4 my-2 dark:text-gray-300" {...props} />,
          li: ({node, ...props}) => <li className="my-1" {...props} />,
          hr: ({node, ...props}) => <hr className="my-4 border-gray-200 dark:border-gray-700" {...props} />,
          strong: ({node, ...props}) => <strong className="font-semibold dark:text-gray-200" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
