import React from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';

import logo from '../../public/images/logo.png';

const LoadingComponent = () => {
  const pulseAnimation = new Animated.Value(1);

  const startPulseAnimation = () => {
    Animated.sequence([
      Animated.timing(pulseAnimation, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => startPulseAnimation());
  };

  React.useEffect(() => {
    startPulseAnimation();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[styles.logo, { transform: [{ scale: pulseAnimation }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    resizeMode: 'contain',
  },
});

export default LoadingComponent;