import React from "react";
import { Center, Image, HStack, Text } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";

export default function ProcessScreen(props) {
  return (
    <Center>
      <Image
        source={{ uri: props.image }}
        rounded="full"
        alt="Fish"
        size="xl"
        mb="8"
      />
      <HStack>
        <CircularProgress
          value={60}
          radius={80}
          duration={2000}
          progressValueColor={"black"}
          maxValue={100}
          title={"%"}
          titleColor={"black"}
          titleStyle={{ fontWeight: "bold" }}
        />
        <Text my="auto" ml="8" fontSize="lg">
          Freshness
        </Text>
      </HStack>
      <HStack>
        <Image
          source={require("../assets/histogram.png")}
          rounded="3xl"
          alt="Fish"
          size="40"
          mt="8"
        />
      </HStack>
    </Center>
  );
}
