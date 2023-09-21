import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import CharacterCard from '../components/CharacterCard';
import Search from '../components/Search';

const SearchScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleCharacterPress = (id) => {
    const selectedCharacter = searchResults.find((character) => character.id === id);
    if (selectedCharacter) {
      navigation.navigate('CharacterDetail', { id: selectedCharacter.id });
    }
  };

  return (
    <View style={styles.container}>
      <Search onSearchResults={handleSearchResults} />
      {searchResults.length > 0 && (
        <View style={styles.resultContainer}>
          {searchResults.map((character) => (
            <CharacterCard
              key={character.id}
              onPress={() => handleCharacterPress(character.id)}
              character={character}
              style={styles.characterCardLarge}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
    paddingTop: '5%',
    paddingHorizontal: '5%',
  },
  resultContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterCardLarge: {
    position: 'absolute',
    top: -700,
    left: 0,
    right: 0,
    marginHorizontal: 'auto',
    width: '100%',
    height: 200,
    zIndex: 1,
  },
});

export default SearchScreen;