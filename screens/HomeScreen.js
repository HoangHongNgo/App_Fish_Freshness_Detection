import React from "react";
import { Center, Box } from "native-base";

import FishChoices from "../components/FishChoices";

export default function HomeScreen() {
  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="100%"
      height="100%"
      alignSelf="center"
    >
      <Center flex={1}>
        <FishChoices />
      </Center>
    </Box>
  );
}
