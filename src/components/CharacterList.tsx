import React from 'react';
import { Character } from '../types';
import CharacterCard from './CharacterCard';

interface Props {
  characters: Character[];
}

const CharacterList: React.FC<Props> = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <CharacterCard 
          key={character.id}
          character={character} 
          onPress={ ()=>{}} 
          onFavoritePress={ ()=>{}} 
          />
      ))}
    </div>
  );
};

export default CharacterList;