
export interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  isFavorite?: boolean;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export interface CharacterDetailScreenProps {
  route: {
    params: {
      character: {
        id: number;
        name: string;
        image: string;
        status: string;
        species: string;
        gender: string;
        origin: {
          name: string;
        };
      };
    };
  };
}

export interface FavoriteButtonProps {
  id: number;
  isFavorite: boolean;
  onPress: () => void;
  
}
