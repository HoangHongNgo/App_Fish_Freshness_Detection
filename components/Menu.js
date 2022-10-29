import React from "react";
import { Text, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

function Menu(props) {
  const selected = props.screen;
  return (
    <HStack bg="primary.600" alignItems="center" safeAreaBottom shadow={6}>
      <Pressable
        opacity={selected === 1 ? 1 : 0.5}
        py="3"
        flex={1}
        onPress={props.onHomeScreen}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 0 ? "home" : "home-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            Home
          </Text>
        </Center>
      </Pressable>
      <Pressable
        opacity={selected === 2 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={props.onHistoryScreen}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialIcons
                name="history"
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            History
          </Text>
        </Center>
      </Pressable>
      <Pressable
        opacity={selected === 3 ? 1 : 0.5}
        py="2"
        flex={1}
        onPress={props.onAboutScreen}
      >
        <Center>
          <Icon
            mb="1"
            as={
              <MaterialCommunityIcons
                name={selected === 3 ? "account" : "account-outline"}
              />
            }
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="12">
            About Us
          </Text>
        </Center>
      </Pressable>
    </HStack>
  );
}

export default Menu;
