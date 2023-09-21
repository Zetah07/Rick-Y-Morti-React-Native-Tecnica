import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../store/actions';
import { RootState } from '../store/reducers';
import { FavoriteButtonProps } from '../types';



const FavoriteButton: React.FC<FavoriteButtonProps> = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const isFavorite = favorites.includes(id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
  <View style={styles.favoriteButton}>
    <TouchableOpacity  onPress={handleFavoritePress}>
      <Ionicons 
        name={isFavorite ? 'heart' : 'heart-outline'} 
        size={24} color={isFavorite? 'red': 'white'} 
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