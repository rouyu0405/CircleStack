import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartScreen({ onStart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Circle Stack</Text>
      <Text style={styles.subtitle}>Drag and move circles around!</Text>
      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});
