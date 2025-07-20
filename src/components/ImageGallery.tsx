import React, { useState, useEffect } from 'react';
import { GenshinImage } from '../types';

interface ImageGalleryProps {
  onImageClick: (imageUrl: string) => void;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ onImageClick }) => {
  const [images, setImages] = useState<GenshinImage[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Curated collection of beautiful landscape images from Pexels
    const genshinImages: GenshinImage[] = [
      {
        id: '1',
        url: '/images/01.png',
        thumbnail: '/images/thumbnails/01.webp'
      },
      {
        id: '2',
        url: '/images/02.png',
        thumbnail: '/images/thumbnails/02.webp'
      },
      {
        id: '3',
        url: '/images/03.png',
        thumbnail: '/images/thumbnails/03.webp'
      },
      {
        id: '4',
        url: '/images/04.png',
        thumbnail: '/images/thumbnails/04.webp'
      },
      {
        id: '5',
        url: '/images/05.png',
        thumbnail: '/images/thumbnails/05.webp'
      },
      {
        id: '6',
        url: '/images/06.png',
        thumbnail: '/images/thumbnails/06.webp'
      },
      {
        id: '7',
        url: '/images/07.png',
        thumbnail: '/images/thumbnails/07.webp'
      },
      {
        id: '8',
        url: '/images/08.png',
        thumbnail: '/images/thumbnails/08.webp'
      },
      {
        id: '9',
        url: '/images/09.png',
        thumbnail: '/images/thumbnails/09.webp'
      },
      {
        id: '10',
        url: '/images/10.png',
        thumbnail: '/images/thumbnails/10.webp'
      },
      {
        id: '11',
        url: '/images/11.png',
        thumbnail: '/images/thumbnails/11.webp'
      },
      {
        id: '12',
        url: '/images/12.png',
        thumbnail: '/images/thumbnails/12.webp'
      },
      {
        id: '13',
        url: '/images/13.png',
        thumbnail: '/images/thumbnails/13.webp'
      },
      {
        id: '14',
        url: '/images/14.png',
        thumbnail: '/images/thumbnails/14.webp'
      },
      {
        id: '15',
        url: '/images/15.png',
        thumbnail: '/images/thumbnails/15.webp'
      },
      {
        id: '16',
        url: '/images/16.png',
        thumbnail: '/images/thumbnails/16.webp'
      },
      {
        id: '17',
        url: '/images/17.png',
        thumbnail: '/images/thumbnails/17.webp'
      },
      {
        id: '18',
        url: '/images/18.png',
        thumbnail: '/images/thumbnails/18.webp'
      },
      {
        id: '19',
        url: '/images/19.png',
        thumbnail: '/images/thumbnails/19.webp'
      },
      {
        id: '20',
        url: '/images/20.png',
        thumbnail: '/images/thumbnails/20.webp'
      },
      {
        id: '21',
        url: '/images/21.png',
        thumbnail: '/images/thumbnails/21.webp'
      },
      {
        id: '22',
        url: '/images/22.png',
        thumbnail: '/images/thumbnails/22.webp'
      },
      {
        id: '23',
        url: '/images/23.png',
        thumbnail: '/images/thumbnails/23.webp'
      },
      {
        id: '24',
        url: '/images/24.png',
        thumbnail: '/images/thumbnails/24.webp'
      },
      {
        id: '25',
        url: '/images/25.png',
        thumbnail: '/images/thumbnails/25.webp'
      },
      {
        id: '26',
        url: '/images/26.png',
        thumbnail: '/images/thumbnails/26.webp'
      },
      {
        id: '27',
        url: '/images/27.png',
        thumbnail: '/images/thumbnails/27.webp'
      },
      {
        id: '28',
        url: '/images/28.png',
        thumbnail: '/images/thumbnails/28.webp'
      },
      {
        id: '29',
        url: '/images/29.png',
        thumbnail: '/images/thumbnails/29.webp'
      },
      {
        id: '30',
        url: '/images/30.png',
        thumbnail: '/images/thumbnails/30.webp'
      },
      {
        id: '31',
        url: '/images/31.png',
        thumbnail: '/images/thumbnails/31.webp'
      },
      {
        id: '32',
        url: '/images/32.png',
        thumbnail: '/images/thumbnails/32.webp'
      },
      {
        id: '33',
        url: '/images/33.png',
        thumbnail: '/images/thumbnails/33.webp'
      },
      {
        id: '34',
        url: '/images/34.png',
        thumbnail: '/images/thumbnails/34.webp'
      },
      {
        id: '35',
        url: '/images/35.png',
        thumbnail: '/images/thumbnails/35.webp'
      },
      {
        id: '36',
        url: '/images/36.png',
        thumbnail: '/images/thumbnails/36.webp'
      },
      {
        id: '37',
        url: '/images/37.png',
        thumbnail: '/images/thumbnails/37.webp'
      },
      {
        id: '38',
        url: '/images/38.png',
        thumbnail: '/images/thumbnails/38.webp'
      },
      {
        id: '39',
        url: '/images/39.png',
        thumbnail: '/images/thumbnails/39.webp'
      },
      {
        id: '40',
        url: '/images/40.png',
        thumbnail: '/images/thumbnails/40.webp'
      },
      {
        id: '41',
        url: '/images/41.png',
        thumbnail: '/images/thumbnails/41.webp'
      },
      {
        id: '42',
        url: '/images/42.png',
        thumbnail: '/images/thumbnails/42.webp'
      },
      {
        id: '43',
        url: '/images/43.png',
        thumbnail: '/images/thumbnails/43.webp'
      },
      {
        id: '44',
        url: '/images/44.png',
        thumbnail: '/images/thumbnails/44.webp'
      },
      {
        id: '45',
        url: '/images/45.png',
        thumbnail: '/images/thumbnails/45.webp'
      },
      {
        id: '46',
        url: '/images/46.png',
        thumbnail: '/images/thumbnails/46.webp'
      },
      {
        id: '47',
        url: '/images/47.png',
        thumbnail: '/images/thumbnails/47.webp'
      },
      {
        id: '48',
        url: '/images/48.png',
        thumbnail: '/images/thumbnails/48.webp'
      },
      {
        id: '49',
        url: '/images/49.png',
        thumbnail: '/images/thumbnails/49.webp'
      },
      {
        id: '50',
        url: '/images/50.png',
        thumbnail: '/images/thumbnails/50.webp'
      },
      {
        id: '51',
        url: '/images/51.png',
        thumbnail: '/images/thumbnails/51.webp'
      },
      {
        id: '52',
        url: '/images/52.png',
        thumbnail: '/images/thumbnails/52.webp'
      },
      {
        id: '53',
        url: '/images/53.png',
        thumbnail: '/images/thumbnails/53.webp'
      },
      {
        id: '54',
        url: '/images/54.png',
        thumbnail: '/images/thumbnails/54.webp'
      },
      {
        id: '55',
        url: '/images/55.png',
        thumbnail: '/images/thumbnails/55.webp'
      },
    ];

    setImages(genshinImages);
  }, []);

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`group cursor-pointer transform transition-all duration-700 ${
              loadedImages.has(image.id)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{
              animationDelay: `${index * 100}ms`
            }}
            onClick={() => onImageClick(image.url)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm">
              <img
                src={image.thumbnail}
                alt={`Genshin Impact Image ${image.id}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                onLoad={() => handleImageLoad(image.id)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};