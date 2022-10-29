import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { View as ViewBase } from "native-base";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "../components/Button";
import ProcessScreen from "../screens/ProcessScreen";
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function AICamera(props) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);
  const [processed, setProcessed] = useState(false);

  const onSave =
    async (data) => {
      try {
        const jsonValue = JSON.stringify(data)
        await AsyncStorage.setItem('history', jsonValue)
        console.log(jsonValue)
        alert("Saved");
      } catch (e) {
        alert(e);
      }
  }


  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!processed ? (
        !image ? (
            <Camera
              style={styles.camera}
              type={type}
              ref={cameraRef}
              flashMode={flash}
              ratio="1:1"
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                }}
              >
                <Button
                  title=""
                  icon="retweet"
                  onPress={() => {
                    setType(
                      type === CameraType.back
                        ? CameraType.front
                        : CameraType.back
                    );
                  }}
                />
                <Button
                  onPress={() =>
                    setFlash(
                      flash === Camera.Constants.FlashMode.off
                        ? Camera.Constants.FlashMode.on
                        : Camera.Constants.FlashMode.off
                    )
                  }
                  icon="flash"
                  color={
                    flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"
                  }
                />
              </View>
            </Camera>
        ) : (
          <Image source={{ uri: image }} style={styles.camera} />
        )
      ) : (
        <View style={styles.result}>
          <ProcessScreen image={image} />
        </View>
      )}

      <View style={styles.controls}>
        {image && !processed ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => {
                setImage(null);
                setProcessed(false);
              }}
              icon="retweet"
            />
            <Button
              title="Close"
              onPress={props.props.closeCamera}
              icon="back"
            />
            <Button
              title="Process"
              onPress={() => {
                setProcessed(true);
              }}
              icon="check"
            />
          </View>
        ) : processed ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 15,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => {
                setImage(null);
                setProcessed(false);
              }}
              icon="retweet"
            />
            <Button
              title="Save"
              onPress={()=>{onSave({image: image,
              freshness: 'fresh!',})}}
              icon="save"
            />
            <Button
              title="Close"
              onPress={props.props.closeCamera}
              icon="back"
            />
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Take a picture"
              onPress={takePicture}
              icon="camera"
            />
            <Button
              title="Close"
              onPress={props.props.closeCamera}
              icon="back"
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
  camera: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },
  result: {
    flex: 5,
  },
  topControls: {
    flex: 1,
  },
})
