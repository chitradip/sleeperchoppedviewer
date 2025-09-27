import React from 'react';
import { SleeperUser } from '../types';

interface UserProfileProps {
  user: SleeperUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const avatarUrl = user.avatar
    ? `https://sleepercdn.com/avatars/thumbs/${user.avatar}`
    : `https://sleepercdn.com/images/v2/icons/player_default.webp`;

  return (
    <div className="bg-brand-dark-2 rounded-xl shadow-lg p-6 border border-gray-700/50 animate-fade-in">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={avatarUrl}
          alt={`${user.display_name}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-brand-accent shadow-md"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white">{user.display_name}</h2>
          <p className="text-brand-light text-md">@{user.username}</p>
          {user.metadata?.team_name && (
            <p className="text-sm text-gray-400 mt-1">Team: {user.metadata.team_name}</p>
          )}
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="text-lg font-semibold text-white mb-2">Details</h3>
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="font-medium text-gray-400">User ID:</span>
            <span className="font-mono bg-gray-900 px-2 py-1 rounded">{user.user_id}</span>
          </div>
           <div className="flex justify-between">
            <span className="font-medium text-gray-400">Bot Account:</span>
            <span>{user.is_bot ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
