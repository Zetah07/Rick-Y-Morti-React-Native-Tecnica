import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getCharacterById } from '../api';

const CharacterDetailScreen = ({ route }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(route.params.id);
      setCharacter(data);
    };

    fetchCharacter();
  }, []);


  if (!character) {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.noFound}>No character found.</Text>
          <Image 
            source={require('../../public/images/logo.png')} 
            style={styles.imageNoFound} />
        </View>
      </View>
    ) 
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardImageContainer}>
        <Image 
          source={{ uri: character.image }} 
          style={[styles.cardImage, 
            { shadowColor: '#11B0C8', 
              shadowOffset: { width: 7, height: 7 }, 
              shadowRadius: 4 }
          ]}
        />
        </View>
        <View style={styles.cardInfoContainer}>
          <Text style={styles.characterName}>{character.name}</Text>
          <View style={styles.infoRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Status:</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>{character.status}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Especie:</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>{character.species}</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Genero:</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.info}>{character.gender}</Text>
            </View>
          </View>
          {character.origin && (
            <View style={styles.infoRow}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Origen:</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.info}>{character.origin.name}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    width: '90%',
    height: '80%',
    overflow: 'hidden',
    position: 'relative',
  },
  cardImageContainer: {
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    borderRadius: 70,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  characterName: {
    color: '#11B0C8',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  titleContainer: {
    alignItems: 'flex-start',
    width: '50%',
  },
  infoContainer: {
    alignItems: 'flex-end',
    width: '50%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 2,
    textAlign: 'left',
  },
  info: {
    color: '#11B0C8',
    fontSize: 18,
    marginBottom: 2,
    textAlign: 'right',
  },
  noFound: {
    color: '#11B0C8',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  imageNoFound: {

    borderRadius: 50,
    marginBottom: 8,
  },
});

export default CharacterDetailScreen;