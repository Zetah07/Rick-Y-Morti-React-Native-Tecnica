import { ADD_TO_FAVORITES, CLEAR_FAVORITES, REMOVE_FROM_FAVORITES } from './actions';

export interface FavoritesState {
  favorites: number[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((id: number) => id !== action.payload),
      };
    case CLEAR_FAVORITES:
      return { ...state, favorites: [] };
    default:
      return state;
  }
};