import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getCharacters } from '../api';
import { CharacterCard } from '../components/CharacterCard';

const Favorites = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data.filter((character) => favorites[character.id]));
    };

    fetchCharacters();
  }, [favorites]);

  const handleFavoritePress = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const renderItem = ({ item }) => (
    <CharacterCard
      character={item}
      onPress={() => navigation.navigate('CharacterDetail', { id: item.id })}
      isFavorite={favorites[item.id]}
      onFavoritePress={() => handleFavoritePress(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      {characters.length > 0 ? (
        <FlatList
          data={characters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.list}
        />
      ) : (
        <View>
        <Text style={styles.emptyText}>No Favorites selection</Text>
        <Image style={styles.image} source={require('../../public/images/logo.png')} />
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
    padding: 20,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: '5%',
  },
  emptyText: {
    color: '#11B0C8',
    fontSize: 30,
    marginTop: '60%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
          marginTop: '2%',
          width: '80%',
          height: '80%',
          resizeMode: 'contain',
  },
};

export default Favorites;