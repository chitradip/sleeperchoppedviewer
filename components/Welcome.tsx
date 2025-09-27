import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="text-center p-8 bg-brand-dark-2 rounded-xl border border-gray-700/50 animate-fade-in">
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      <h2 className="mt-4 text-2xl font-bold text-white">Ready to Search?</h2>
      <p className="mt-2 text-brand-light">
        Use the search bar above to look up a Sleeper user and view their profile details.
      </p>
    </div>
  );
};

export default Welcome;
