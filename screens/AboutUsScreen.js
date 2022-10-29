import React from "react";
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Icon,
  Center,
  NativeBaseProvider,
  Pressable,
  Image,
  Button,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const Example = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <Center flex={1} bg="white" safeAreaTop width="100%" alignSelf="center">
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          <Button
            mb="4"
            variant="solid"
            bg="indigo.400"
            colorScheme="yellow"
            borderRadius="full"
          >
            Hoang NH
          </Button>
          <Button
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
          >
            Le Vu Hoang Duc
          </Button>
          <Button
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="yellow"
            borderRadius="full"
          >
            Nguyen Thanh Liem
          </Button>
          <Button
            mb="4"
            variant="solid"
            bg="red.400"
            colorScheme="yellow"
            borderRadius="full"
          >
            HXD - Nguyet Ha
          </Button>
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <Pressable onPress={onToggle}>
          <Image
            source={require("../assets/icon1.png")}
            size="2xl"
            alt="Fish Freshness Detetion"
          />
        </Pressable>
      </HStack>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
