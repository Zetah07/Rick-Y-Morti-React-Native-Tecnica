export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const CLEAR_FAVORITES = 'CLEAR_FAVORITES';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_CHARACTERS = 'SET_CHARACTERS';
import { Character } from '../types';


interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  payload: {
    id: number;
  };
}

export type CharacterAction = ToggleFavoriteAction;

export const toggleFavorite = (character: Character): CharacterAction => ({
  type: TOGGLE_FAVORITE,
  payload: {
    id: character.id,
  },
});

export const addToFavorites = (characterId: number) => ({
  type: ADD_TO_FAVORITES,
  payload: characterId,
});

export const removeFromFavorites = (characterId: number) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: characterId,
});

export const setSearchResults = (results: Character[]) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});

export const setCharacters = (characters: Character[]) => ({
  type: SET_CHARACTERS,
  payload: characters,
});

