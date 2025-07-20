import React, { useState } from 'react';
import { Settings, Volume2, VolumeX, User } from 'lucide-react';
import { User as UserType } from '../types';

interface SettingsPanelProps {
  selectedUser: UserType | null;
  isMuted: boolean;
  onUserChange: (user: UserType) => void;
  onMuteToggle: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  selectedUser,
  isMuted,
  onUserChange,
  onMuteToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const users: UserType[] = ['Vinh', 'STD', 'Vana', 'None'];

  return (
    <div className="fixed top-6 right-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-white shadow-lg"
      >
        <Settings className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-2xl min-w-[200px] transform transition-all duration-300 animate-in slide-in-from-top-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                <Volume2 className="w-4 h-4" />
                Audio
              </h3>
              <button
                onClick={onMuteToggle}
                className="flex items-center gap-2 w-full p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {isMuted ? 'Unmute' : 'Mute'}
              </button>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                User
              </h3>
              <div className="space-y-1">
                {users.map((user) => (
                  <button
                    key={user}
                    onClick={() => onUserChange(user)}
                    className={`w-full p-2 rounded-lg text-left transition-colors ${
                      selectedUser === user
                        ? 'bg-purple-500/30 text-white border border-purple-400/50'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {user}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-white/60 text-center pt-2 border-t border-white/10">
              Current: {selectedUser || 'None'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};