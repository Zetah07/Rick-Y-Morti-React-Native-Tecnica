import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CharacterCardProps {
  character: {
    id: number;
    image: string;
    name: string;
    isFavorite?: boolean;
  };
  onPress: () => void;
  onFavoritePress: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onPress, onFavoritePress }) => {
  return (
    <TouchableOpacity style={styles.characterCard} onPress={onPress}>
      <View style={styles.favoriteButtonContainer}>
        <TouchableOpacity onPress={onFavoritePress}>
          <Ionicons
            name={character.isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={character.isFavorite ? '#FF6B6B' : '#FFFFFF'}
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
    position: 'relative',
  },
  favoriteButtonContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
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
  },
});

export default CharacterCard;