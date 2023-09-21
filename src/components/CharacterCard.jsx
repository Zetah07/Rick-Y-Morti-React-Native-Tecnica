import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CharacterCard = ({ character, onPress, favorites, onFavoritePress }) => {
  const isFavorite = favorites.includes(character.id);

  return (
    <TouchableOpacity style={styles.characterCard} onPress={onPress}>
      <View style={styles.favoriteButtonContainer}>
        <TouchableOpacity onPress={onFavoritePress}>
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={isFavorite ? '#FF6B6B' : '#FFFFFF'}
          />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: character.image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{character.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  characterCard: {
    backgroundColor: '#313234',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    position: 'relative',
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  characterName: {
    color: '#11B0C8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CharacterCard;