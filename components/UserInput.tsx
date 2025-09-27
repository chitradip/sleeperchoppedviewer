import React, { useState } from 'react';

interface UserInputProps {
  onSubmit: (username: string) => void;
  isLoading: boolean;
}

const UserInput: React.FC<UserInputProps> = ({ onSubmit, isLoading }) => {
  const [username, setUsername] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="e.g., sleeper"
        disabled={isLoading}
        className="flex-grow bg-brand-dark-2 border border-gray-600 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:outline-none transition duration-200 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg px-6 py-3 transition duration-200 ease-in-out transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Searching...
          </>
        ) : (
          'Search User'
        )}
      </button>
    </form>
  );
};

export default UserInput;
