export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
};

export type ReviewType = {
  author?: string;
  author_details?: {
    name?: string;
    username?: string;
  };
  content?: string;
};

export type ServiceType = {
  logo_path: string;
  provider_name: string;
};
