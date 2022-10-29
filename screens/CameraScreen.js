import React, { useState, useEffect, useRef } from "react";
import AICamera from "../components/AICamera";
import { View } from "native-base";
import ProcessScreen from "./ProcessScreen";

export default function CameraScreen(props) {
  return <AICamera props={props} />;
}
