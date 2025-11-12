import React, { useState } from 'react';
import StartScreen from './src/screens/startSscreen';
import GameScreen from './src/screens/gameScreen';

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <GameScreen />
  ) : (
    <StartScreen onStart={() => setStarted(true)} />
  );
}
