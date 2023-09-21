import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import { fetchCharacters } from '../api';

import LoadingScreen from '../components/LoadingScreen';
import CharacterCard from '../components/CharacterCard';
import BottomNavbar from '../components/BottomNavbar';

import { Character } from '../types';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page]);

  const handleFavoritePress = (id: number) => {
    const updatedCharacters = characters.map((character) => {
      if (character.id === id) {
        return { ...character, isFavorite: !character.isFavorite };
      }
      return character;
    });
    setCharacters(updatedCharacters);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setPage(1);
    setIsRefreshing(false);
  };

  const renderItem = ({ item }: { item: Character }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { character: item })}>
      <View style={[styles.card, { width: windowWidth * 0.4 }]}>
        <CharacterCard 
          character={item} 
          onPress={() => navigation.navigate('CharacterDetail', { character: item })} 
          onFavoritePress={() => handleFavoritePress(item.id)} 
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen onSkip={() => setIsLoading(false)} />
      ) : (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
        />
      )}

      <BottomNavbar
        onSearchPress={() => navigation.navigate('Search')}
        onFavoritesPress={() => navigation.navigate('Favorites')}
        onHomePress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 16,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  card: {
    marginVertical: 8,
    backgroundColor: '#2D2D2D',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default HomeScreen;