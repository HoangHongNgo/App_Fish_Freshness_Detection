import React from "react";
import { Center, Box, Image, Text, Button } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen() {
  const getData = async () => {
    try {
      alert(AsyncStorage.getItem('history'));
      const jsonValue = await AsyncStorage.getItem('history')
      console.log('storage',jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      alert(e);
    }
  }
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      height="100%"
      alignSelf="center"
    >
      {getData}
      <Button onPress={getData}></Button>
    </Box>
  );
}
