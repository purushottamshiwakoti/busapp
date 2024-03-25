import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const AvailableBuses = ({ navigation, route }) => {
  const { from, to, date } = route.params;
  console.log("holi", from, to, date);
  return (
    <SafeAreaView>
      <Text>AvailableBuses</Text>
    </SafeAreaView>
  );
};

export default AvailableBuses;
