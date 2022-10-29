import React, { useState, useEffect } from "react";
import { NativeBaseProvider, View } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./screens/HomeScreen";
import Menu from "./components/Menu";
import AboutUsScreen from "./screens/AboutUsScreen";
import HistoryScreen from "./screens/HistoryScreen";

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
  )
  .catch(console.warn); // it's good to explicitly catch and inspect any error

export default function App() {
  useEffect(() => {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

  const [screen, setScreen] = useState(1);

  return (
    <NativeBaseProvider>
      {screen == 1 ? (
        <HomeScreen />
      ) : screen == 2 ? (
        <HistoryScreen />
      ) : (
        <AboutUsScreen />
      )}
      <Menu
        onHomeScreen={() => {
          setScreen(1);
        }}
        onHistoryScreen={() => {
          setScreen(2);
        }}
        onAboutScreen={() => {
          setScreen(3);
        }}
        screen={screen}
      />
    </NativeBaseProvider>
  );
}
