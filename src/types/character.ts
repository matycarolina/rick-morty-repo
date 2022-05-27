export type Character = {
  data: {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    location: {
      name: string;
      dimension: string;
    };
  };
  loading: boolean;
};
