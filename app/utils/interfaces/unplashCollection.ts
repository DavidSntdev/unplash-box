export interface unplashCollection {
  id: string;
  title: string;
  description: string | null;
  published_at: string;
  last_collected_at: string;
  total_photos: number;
  private: boolean;
  share_key: string;
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
  links: {
    self: string;
    html: string;
    photos: string;
    related: string;
  };
  preview_photos: {
    urls: {
      regular: string;
      small: string;
      thumb: string;
    };
  }[];
}
