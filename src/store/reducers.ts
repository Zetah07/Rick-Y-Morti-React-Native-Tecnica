import { combineReducers } from "redux";
import { Character } from "../types";
import {
  ADD_TO_FAVORITES,
  CLEAR_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_CHARACTERS,
  SET_SEARCH_RESULTS,
  TOGGLE_FAVORITE,
} from "./actions";
import { characterReducer } from "./characterReducer";
import { favoritesReducer } from "./favoritesReducer";

interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  payload: {
    id: number;
  };
}

interface SetCharactersAction {
  type: typeof SET_CHARACTERS;
  payload: Character[];
}

export type CharacterAction = ToggleFavoriteAction | SetCharactersAction;

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

export const setCharacters = (characters: Character[]) => ({
  type: SET_CHARACTERS,
  payload: characters,
});

export const clearFavorites = () => ({
  type: CLEAR_FAVORITES,
});

export const rootReducer = combineReducers({
  characters: characterReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
