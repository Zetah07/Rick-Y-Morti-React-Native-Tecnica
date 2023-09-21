import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { getCharacters } from '../api';
import CharacterCard from '../components/CharacterCard';
import {Favorites} from './Favorites';

const HomeScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  const handleFavoritePress = (id) => {
    const newFavorites = Favorites.includes(id)
      ? Favorites.filter((favoriteId) => favoriteId !== id)
      : [...Favorites, id];
    setFavorites(newFavorites);
  };

  const renderItem = ({ item }) => (
    <CharacterCard 
    character={item} 
    onPress={() => navigation.navigate('Detail', { id: item.id })}
    favorites={Favorites}
    onFavoritePress={() => handleFavoritePress(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
    padding: 20,
  },
  columnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '5%',
  },
});

export default HomeScreen;