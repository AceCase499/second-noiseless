// components/Player.js
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

export default function Player({ uri }) {
  const [sound, setSound] = useState();

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri });
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return <Button title="Play Audio" onPress={playSound} />;
}
