import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {MaterialIcons} from '@expo/vector-icons';

export default function HeaderComponent({navigation}) {
  const openMenu = () => {
    Animated.interpolate(navigation.openDrawer, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
      extrapolate: Extrapolate.CLAMP}
    );
  };

  return (
    <View style={styles.header}>
      <Image
          source={require('../assets/headerIcon.png')}
        name="menu"
        size={28}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>APP</Text>
      </View>
    </View>
  );
}

const {
  interpolate,
  Extrapolate
} = Animated;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 16,
  },
});