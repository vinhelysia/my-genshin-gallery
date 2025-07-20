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
        url: '/my-genshin-gallery/images/01.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/01.webp'
      },
      {
        id: '2',
        url: '/my-genshin-gallery/images/02.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/02.webp'
      },
      {
        id: '3',
        url: '/my-genshin-gallery/images/03.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/03.webp'
      },
      {
        id: '4',
        url: '/my-genshin-gallery/images/04.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/04.webp'
      },
      {
        id: '5',
        url: '/my-genshin-gallery/images/05.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/05.webp'
      },
      {
        id: '6',
        url: '/my-genshin-gallery/images/06.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/06.webp'
      },
      {
        id: '7',
        url: '/my-genshin-gallery/images/07.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/07.webp'
      },
      {
        id: '8',
        url: '/my-genshin-gallery/images/08.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/08.webp'
      },
      {
        id: '9',
        url: '/my-genshin-gallery/images/09.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/09.webp'
      },
      {
        id: '10',
        url: '/my-genshin-gallery/images/10.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/10.webp'
      },
      {
        id: '11',
        url: '/my-genshin-gallery/images/11.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/11.webp'
      },
      {
        id: '12',
        url: '/my-genshin-gallery/images/12.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/12.webp'
      },
      {
        id: '13',
        url: '/my-genshin-gallery/images/13.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/13.webp'
      },
      {
        id: '14',
        url: '/my-genshin-gallery/images/14.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/14.webp'
      },
      {
        id: '15',
        url: '/my-genshin-gallery/images/15.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/15.webp'
      },
      {
        id: '16',
        url: '/my-genshin-gallery/images/16.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/16.webp'
      },
      {
        id: '17',
        url: '/my-genshin-gallery/images/17.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/17.webp'
      },
      {
        id: '18',
        url: '/my-genshin-gallery/images/18.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/18.webp'
      },
      {
        id: '19',
        url: '/my-genshin-gallery/images/19.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/19.webp'
      },
      {
        id: '20',
        url: '/my-genshin-gallery/images/20.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/20.webp'
      },
      {
        id: '21',
        url: '/my-genshin-gallery/images/21.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/21.webp'
      },
      {
        id: '22',
        url: '/my-genshin-gallery/images/22.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/22.webp'
      },
      {
        id: '23',
        url: '/my-genshin-gallery/images/23.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/23.webp'
      },
      {
        id: '24',
        url: '/my-genshin-gallery/images/24.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/24.webp'
      },
      {
        id: '25',
        url: '/my-genshin-gallery/images/25.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/25.webp'
      },
      {
        id: '26',
        url: '/my-genshin-gallery/images/26.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/26.webp'
      },
      {
        id: '27',
        url: '/my-genshin-gallery/images/27.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/27.webp'
      },
      {
        id: '28',
        url: '/my-genshin-gallery/images/28.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/28.webp'
      },
      {
        id: '29',
        url: '/my-genshin-gallery/images/29.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/29.webp'
      },
      {
        id: '30',
        url: '/my-genshin-gallery/images/30.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/30.webp'
      },
      {
        id: '31',
        url: '/my-genshin-gallery/images/31.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/31.webp'
      },
      {
        id: '32',
        url: '/my-genshin-gallery/images/32.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/32.webp'
      },
      {
        id: '33',
        url: '/my-genshin-gallery/images/33.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/33.webp'
      },
      {
        id: '34',
        url: '/my-genshin-gallery/images/34.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/34.webp'
      },
      {
        id: '35',
        url: '/my-genshin-gallery/images/35.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/35.webp'
      },
      {
        id: '36',
        url: '/my-genshin-gallery/images/36.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/36.webp'
      },
      {
        id: '37',
        url: '/my-genshin-gallery/images/37.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/37.webp'
      },
      {
        id: '38',
        url: '/my-genshin-gallery/images/38.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/38.webp'
      },
      {
        id: '39',
        url: '/my-genshin-gallery/images/39.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/39.webp'
      },
      {
        id: '40',
        url: '/my-genshin-gallery/images/40.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/40.webp'
      },
      {
        id: '41',
        url: '/my-genshin-gallery/images/41.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/41.webp'
      },
      {
        id: '42',
        url: '/my-genshin-gallery/images/42.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/42.webp'
      },
      {
        id: '43',
        url: '/my-genshin-gallery/images/43.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/43.webp'
      },
      {
        id: '44',
        url: '/my-genshin-gallery/images/44.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/44.webp'
      },
      {
        id: '45',
        url: '/my-genshin-gallery/images/45.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/45.webp'
      },
      {
        id: '46',
        url: '/my-genshin-gallery/images/46.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/46.webp'
      },
      {
        id: '47',
        url: '/my-genshin-gallery/images/47.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/47.webp'
      },
      {
        id: '48',
        url: '/my-genshin-gallery/images/48.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/48.webp'
      },
      {
        id: '49',
        url: '/my-genshin-gallery/images/49.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/49.webp'
      },
      {
        id: '50',
        url: '/my-genshin-gallery/images/50.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/50.webp'
      },
      {
        id: '51',
        url: '/my-genshin-gallery/images/51.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/51.webp'
      },
      {
        id: '52',
        url: '/my-genshin-gallery/images/52.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/52.webp'
      },
      {
        id: '53',
        url: '/my-genshin-gallery/images/53.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/53.webp'
      },
      {
        id: '54',
        url: '/my-genshin-gallery/images/54.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/54.webp'
      },
      {
        id: '55',
        url: '/my-genshin-gallery/images/55.png',
        thumbnail: '/my-genshin-gallery/images/thumbnails/55.webp'
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