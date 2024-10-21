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
    thumb: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  created_at: string;
  updated_at: string;
  likes: number;
  liked_by_user: boolean;
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
}
