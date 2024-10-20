export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  description: string | null;
  urls: {
    small: string;
  };
}
