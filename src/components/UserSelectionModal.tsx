import React, { useState } from 'react';
import { User } from '../types';
import { Sparkles } from 'lucide-react';

interface UserSelectionModalProps {
  onUserSelect: (user: User) => void;
}

export const UserSelectionModal: React.FC<UserSelectionModalProps> = ({
  onUserSelect,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const users: User[] = ['Vinh', 'STD', 'Vana', 'None'];

  const handleUserSelect = (user: User) => {
    setIsAnimating(true);
    setTimeout(() => {
      onUserSelect(user);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center border border-white/20 shadow-2xl transform transition-all duration-500 ${
          isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="mb-6">
          <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
          <h2 className="text-3xl font-bold text-white mb-2">
            Ai dị ai đị
          </h2>
          <p className="text-blue-200">
            Chọn i gòy muốn xem gì xem
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {users.map((user, index) => (
            <button
              key={user}
              onClick={() => handleUserSelect(user)}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white py-3 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {user}
            </button>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/60">
          This choice will be remembered for future visits
        </div>
      </div>
    </div>
  );
};