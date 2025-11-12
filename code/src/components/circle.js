import React from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const Circle_Size = 80;

export default function Circle({ startX, startY, color }) {
  const isPressed = useSharedValue(false);
  const translateX = useSharedValue(startX);
  const translateY = useSharedValue(startY);
  const start = useSharedValue({ x: startX, y: startY });

  //pan gesture
  const gesture = Gesture.Pan()
    .onBegin(() => (isPressed.value = true))
    .onUpdate((e) => {
      translateX.value = start.value.x + e.translationX;
      translateY.value = start.value.y + e.translationY;
    })
    .onEnd(() => {
      start.value = { x: translateX.value, y: translateY.value };
      isPressed.value = false;
    });

  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute', //independent movement
    width: Circle_Size,
    height: Circle_Size,
    borderRadius: Circle_Size / 2,
    backgroundColor: isPressed.value ? 'green' : color, //multiple colors
    transform: [ //updates location
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: withSpring(isPressed.value ? 1.2 : 1) }, //bounce effect
    ],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={animatedStyle} />
    </GestureDetector>
  );
}
