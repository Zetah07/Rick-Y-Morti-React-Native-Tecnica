import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CharacterDetailScreenProps } from '../types';
import FavoriteButton from '../components/FavoriteButtom';

const CharacterDetailScreen: React.FC<CharacterDetailScreenProps> = ({ route }) => {
  const { character } = route.params;
  const [favorites, setFavorites] = useState<number[]>([]);

  const isFavorite = favorites.includes(character.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((id) => id !== character.id));
    } else {
      setFavorites([...favorites, character.id]);
    }
  };

  return (
    <View style={styles.container}>
      <FavoriteButton id={character.id} isFavorite={!isFavorite} onPress={handleFavoritePress} />
      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{character.name}</Text>
      <Text style={styles.characterStatus}>Status: {character.status}</Text>
      <Text style={styles.characterSpecies}>Species: {character.species}</Text>
      <Text style={styles.characterGender}>Gender: {character.gender}</Text>
      <Text style={styles.characterOrigin}>Origin: {character.origin.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  characterName: {
    color: '#11B0C8',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  characterStatus: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 8,
  },
  characterSpecies: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 8,
  },
  characterGender: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 8,
  },
  characterOrigin: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});

export default CharacterDetailScreen;
