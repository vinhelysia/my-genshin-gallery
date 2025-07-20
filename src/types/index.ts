export type User = 'Vinh' | 'STD' | 'Vana' | 'None';

export interface GenshinImage {
  id: string;
  url: string;
  thumbnail: string;
  title?: string;
  region?: string;
}