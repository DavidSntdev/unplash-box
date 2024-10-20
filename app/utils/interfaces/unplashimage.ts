export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  description: string | null;
  width: number;
  height: number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
}
