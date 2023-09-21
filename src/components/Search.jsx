import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDebouncedCallback } from 'use-debounce';

import { getCharacterById } from '../api';

const Search = ({ onSearchResults }) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useDebouncedCallback(async () => {
    setIsSearching(true);
    const data = await getCharacterById(searchText);
    const searchResults = data ? [data] : [];
    setIsSearching(false);
    onSearchResults(searchResults);
  }, 2000);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#fff" />
        <TextInput
          style={styles.searchInput}
          placeholder="Enter character ID"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
          keyboardType="numeric"
        />
      </View>
      {isSearching && <ActivityIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E20',
    padding: 10,
    paddingTop: '8%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
});

export default Search;