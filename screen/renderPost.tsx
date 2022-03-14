import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ToastAndroid,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import React from "react";

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const renderPost: React.FC<Props> = ({ name, baseEnthusiasmLevel }) => {
  type Tocmp = TouchableOpacity | TouchableNativeFeedback;
  let Tocmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Tocmp = TouchableNativeFeedback;
  }

  return (
    <View>
      <Text>renderPost</Text>
    </View>
  );
};

export default renderPost;
