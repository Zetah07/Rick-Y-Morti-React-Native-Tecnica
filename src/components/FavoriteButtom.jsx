import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoriteButton = ({ id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <View style={styles.favoriteButton}>
      <TouchableOpacity onPress={handleFavoritePress}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorite ? 'red' : 'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    position: 'absolute',
    top: 56,
    right: 36,
  },
});

export default FavoriteButton;