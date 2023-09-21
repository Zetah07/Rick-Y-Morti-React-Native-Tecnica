import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { getCharacters } from '../api';
import CharacterCard from '../components/CharacterCard';

const HomeScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  const handleCharacterPress = (id) => {
    navigation.navigate('CharacterDetail', { id: id });
  };

  const renderItem = ({ item }) => (
    <CharacterCard
      character={item}
      onPress={() => handleCharacterPress(item.id)}
      numColumns={2}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        style={styles.list}
        data={characters} 
        renderItem={renderItem} 
        keyExtractor={(item) => item.id.toString()} 
        initialNumToRender={20}
        windowSize={10}
        removeClippedSubviews={true}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E20',
    padding: 10,
    paddingTop: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;