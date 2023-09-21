import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { fetchCharacterById } from '../api';
import { Character } from '../types';

import CharacterCard from '../components/CharacterCard';


const Search = () => {
  const [id, setId] = useState<number>();
  const [character, setCharacter] = useState<any>();
  const navigation = useNavigation();
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleSearch = async () => {
    const data = await fetchCharacterById(id);
    setCharacter(data);
  };

  const handleFavoritePress = (id: number) => {
    const updatedCharacters = characters.map((character) => {
      if (character.id === id) {
        return { ...character, isFavorite: !character.isFavorite };
      }
      return character;
    });
    setCharacters(updatedCharacters);
  };

  const handleCardPress = (character: Character) => {
    navigation.navigate('CharacterDetail', { character });
  };

  

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter character ID"
        keyboardType="numeric"
        onChangeText={(text) => setId(parseInt(text))}
      />
      <Button title="Search" onPress={handleSearch} />
      {character && (
        <CharacterCard
          character={character}
          onPress={() => handleCardPress(character)}
          onFavoritePress={() => handleFavoritePress(character.id)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default Search;