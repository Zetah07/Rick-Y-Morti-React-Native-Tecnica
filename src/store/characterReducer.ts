import { Character } from '../types';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_CHARACTERS, TOGGLE_FAVORITE } from './actions';

export interface CharacterState {
  characters: Character[];
}

const initialState: CharacterState = {
  characters: [],
};

export const characterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      const idToAdd = action.payload;
      return {
        ...state,
        characters: state.characters.map((c) => {
          if (c.id === idToAdd) {
            return { ...c, isFavorite: true };
          }
          return c;
        }),
      };
    case REMOVE_FROM_FAVORITES:
      const idToRemove = action.payload;
      return {
        ...state,
        characters: state.characters.map((c) => {
          if (c.id === idToRemove) {
            return { ...c, isFavorite: false };
          }
          return c;
        }),
      };
    case SET_CHARACTERS:
      return { ...state, characters: action.payload };
    case TOGGLE_FAVORITE:
      const idToToggle = action.payload.id;
      return {
        ...state,
        characters: state.characters.map((c) => {
          if (c.id === idToToggle) {
            return { ...c, isFavorite: !c.isFavorite };
          }
          return c;
        }),
      };
    default:
      return state;
  }
};