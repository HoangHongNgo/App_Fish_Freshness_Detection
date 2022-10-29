import React, { useReducer } from "react";
import { Box, Image, Pressable, Heading } from "native-base";
import {} from "react-native";
import { FishTypes } from "../utils/enum";

export default function Choices(props) {
  return (
    <Pressable w="90%" h="32" alignItems="center" onPress={props.onPress}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            w="100%"
            h="100%"
            pr="8"
            bg={
              isPressed
                ? "primary.400"
                : isHovered
                ? "primary.400"
                : isFocused
                ? "primary.400"
                : "primary.300"
            }
            rounded="full"
            shadow={5}
            flexDirection="row"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <Image
              source={props.img_source}
              alt="Fish"
              my="auto"
              ml="8"
              alignSelf="flex-start"
              size="lg"
              rounded="full"
            />
            <Heading my="auto" mx="auto" fontSize="lg" color="white">
              {FishTypes[props.fish_name]}
            </Heading>
          </Box>
        );
      }}
    </Pressable>
  );
}
