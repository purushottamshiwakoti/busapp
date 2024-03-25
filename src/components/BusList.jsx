import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "../colors";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const BusList = () => {
  const navigation = useNavigation();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [date, setDate] = useState(null);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };
  const items = [
    { label: "Pokhara", value: "pokhara" },
    { label: "Dharan", value: "dharan" },
    { label: "Hemja", value: "hemja" },
    { label: "Bhaktapur", value: "bhaktapur" },
    { label: "Lumbini", value: "lumbini" },
    { label: "Chitwan", value: "chitwan" },
    { label: "Namche Bazaar", value: "namche bazaar" },
    { label: "Gosaikunda", value: "gosaikunda" },
    { label: "Janakpur", value: "janakpur" },
    { label: "Nagarkot", value: "nagarkot" },
  ];

  const handleSearch = () => {
    console.log(from, to, date);
    if (from == null && to == null && date == null) {
      alert("All feilds are required");
    } else {
      navigation.navigate("AvailableBuses", {
        from,
        to,
        date,
      });
    }
  };
  return (
    <>
      <View
        style={{
          backgroundColor: Colors.primary,
          width: "100%",
          height: "100%",
          padding: 20,
          borderRadius: 50,
          position: "relative",
        }}
      >
        <Text
          style={{
            color: Colors.white,
            textAlign: "center",
            fontWeight: "700",
            marginTop: 150,
            fontSize: 25,
          }}
        >
          Book seats easily and fast
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          width: "100%",
          height: "70%",
          padding: 20,
          borderRadius: 50,
          position: "absolute",
          bottom: 0,
          elevation: 2,
        }}
      >
        <RNPickerSelect
          onValueChange={(value) => setFrom(value)}
          placeholder={{
            label: "Select from",
            value: null,
          }}
          items={items}
        />
        <RNPickerSelect
          onValueChange={(value) => setTo(value)}
          placeholder={{
            label: "Select to",
            value: null,
          }}
          items={items}
        />
        <Button onPress={showDatePicker} mode="outlined">
          Select Date
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: 15,
            paddingHorizontal: 40,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BusList;
