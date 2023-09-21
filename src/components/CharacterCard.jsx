import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CharacterCard = ({ character, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.species}>{character.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#11B0C8',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  species: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default CharacterCard;