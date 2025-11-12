import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Circle from '../components/circle';

const { width, height } = Dimensions.get('window');
const Circle_Count = 8;
const Circle_Size = 80;

export default function GameScreen() {
  return (
    <GestureHandlerRootView style={styles.container}>
      {Array.from({ length: Circle_Count }).map((_, i) => (
        <Circle
          key={i}
          color={`hsl(${i * 80}, 80%, 70%)`}
          startX={Math.random() * (width - Circle_Size)} //random initial positions
          startY={Math.random() * (height - Circle_Size)}
        />
      ))}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
