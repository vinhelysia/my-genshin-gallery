import React, { useState, useEffect } from 'react';
import { ImageGallery } from './components/ImageGallery';
import { UserSelectionModal } from './components/UserSelectionModal';
import { SettingsPanel } from './components/SettingsPanel';
import { FullScreenModal } from './components/FullScreenModal';
import { BackgroundMusic } from './components/BackgroundMusic';
import { ParticleBackground } from './components/ParticleBackground';
import { User } from './types';

function App() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('genshin-gallery-user');
    if (storedUser) {
      setSelectedUser(storedUser as User);
    } else {
      setShowUserModal(true);
    }
  }, []);

  const handleUserSelection = (user: User) => {
    setSelectedUser(user);
    localStorage.setItem('genshin-gallery-user', user);
    setShowUserModal(false);
  };

  const handleUserChange = (user: User) => {
    setSelectedUser(user);
    localStorage.setItem('genshin-gallery-user', user);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 background-image"
        style={{
          backgroundImage: `url('/my-genshin-gallery/wp10165108-genshin-impact-scenery-wallpapers (1).jpg')`,
        }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      <ParticleBackground />
      
      <div className="relative z-10">
        <header className="p-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-wide">
            Koyomi's Gallery
          </h1>
          <p className="text-lg md:text-xl text-blue-200 font-light">
            Just a collection of memories with my friends :) !
          </p>
        </header>

        <SettingsPanel
          selectedUser={selectedUser}
          isMuted={isMuted}
          onUserChange={handleUserChange}
          onMuteToggle={() => setIsMuted(!isMuted)}
        />

        <ImageGallery onImageClick={setSelectedImage} />

        {showUserModal && (
          <UserSelectionModal onUserSelect={handleUserSelection} />
        )}

        {selectedImage && (
          <FullScreenModal
            imageUrl={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}

        {selectedUser && (
          <BackgroundMusic user={selectedUser} isMuted={isMuted} />
        )}
      </div>
    </div>
  );
}

export default App;