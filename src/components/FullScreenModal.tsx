import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface FullScreenModalProps {
  imageUrl: string;
  onClose: () => void;
}

export const FullScreenModal: React.FC<FullScreenModalProps> = ({
  imageUrl,
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'genshin-scenery.jpg';
    link.target = '_blank';
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        <img
          src={imageUrl}
          alt="Full size scenery"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <Download className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg text-white">
          <p className="text-sm">Press ESC to close</p>
        </div>
      </div>
    </div>
  );
};