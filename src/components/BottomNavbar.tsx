import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

interface BottomNavbarProps {
  onSearchPress: () => void;
  onFavoritesPress: () => void;
  onHomePress: () => void;
}

const BottomNavbar: React.FC<BottomNavbarProps> = ({
  onSearchPress,
  onFavoritesPress,
  onHomePress,
}) => {
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearchPress} style={styles.button}>
        <Ionicons name="search" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onFavoritesPress} style={styles.button}>
        <Ionicons name="heart" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Favorites ({favorites.length})</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onHomePress} style={styles.button}>
        <Ionicons name="home" size={24} color="#FFF" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingVertical: 12,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default BottomNavbar;