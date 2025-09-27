import React, { useState, useCallback } from 'react';
import { SleeperUser } from './types';
import { getUser } from './services/sleeperService';
import UserInput from './components/UserInput';
import UserProfile from './components/UserProfile';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [user, setUser] = useState<SleeperUser | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = useCallback(async (username: string) => {
    if (!username) {
      setError('Please enter a username.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setUser(null);
    try {
      const userData = await getUser(username);
      setUser(userData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorMessage message={error} />;
    }
    if (user) {
      return <UserProfile user={user} />;
    }
    return <Welcome />;
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light flex flex-col items-center p-4 sm:p-8 font-sans transition-colors duration-300">
      <div className="w-full max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
             <svg
              className="w-12 h-12 text-brand-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.977M9 21a6 6 0 01-6-6v-1a6 6 0 016-6h6a6 6 0 016 6v1a6 6 0 01-6 6H9z"
              />
            </svg>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Sleeper API Viewer
            </h1>
          </div>
          <p className="text-lg text-brand-light">
            Enter a Sleeper username to fetch their profile details.
          </p>
        </header>

        <main>
          <UserInput onSubmit={handleSearch} isLoading={isLoading} />
          <div className="mt-8">
            {renderContent()}
          </div>
        </main>
        
        <footer className="text-center mt-12 text-sm text-gray-500">
            <p>Powered by the Sleeper API. Not affiliated with Sleeper.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
