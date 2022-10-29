import Reac, { useState } from "react";
import {
  VStack,
  Center,
  Image,
  Heading,
  View,
  ScrollView,
  Box,
} from "native-base";
import Choices from "./Choices";
import { FishTypes } from "./../utils/enum";
import CameraScreen from "../screens/CameraScreen";
export default function FishChoices() {
  const [selected, setSelected] = useState(null);
  const onPress = (fish_name) => {
    setSelected(fish_name);
  };
  const images = {
    ca_dia: require("../assets/ca_dia.png"),
    ca_diec: require("../assets/ca_diec.png"),
    ca_doi: require("../assets/ca_doi.png"),
    ca_ro: require("../assets/ca_ro.png"),
  };
  return (
    <Box w="100%" h="100%" safeArea>
      {selected ? (
        <CameraScreen
          closeCamera={() => {
            setSelected(null);
          }}
        />
      ) : (
        <Center position="absolute" w="100%" bottom="6" alignItems="center">
          <Image
            source={require("../assets/FishLogo.png")}
            size="xl"
            alt="Fish Freshness Detetion"
          />
          <Heading my="2" size="xl" color="primary.400">
            Fish's Type :
          </Heading>
          <VStack space={6}>
            <Choices
              img_source={images.ca_dia}
              fish_name={"ca_dia"}
              onPress={() => {
                onPress("ca_dia");
              }}
            />
            <Choices
              img_source={images.ca_diec}
              fish_name={"ca_diec"}
              onPress={() => {
                onPress("ca_diec");
              }}
            />
            <Choices
              img_source={images.ca_doi}
              fish_name={"ca_doi"}
              onPress={() => {
                onPress("ca_doi");
              }}
            />
            <Choices
              img_source={images.ca_ro}
              fish_name={"ca_ro"}
              onPress={() => {
                onPress("ca_ro");
              }}
            />
          </VStack>
        </Center>
      )}
    </Box>
  );
}
