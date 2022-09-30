import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  // const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = ({
  title,
  btnColor,
  textColor,
  activeTab,
  setActiveTab,
}) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === title ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTab(title)}
  >
    <Text
      style={{
        color: activeTab === title ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
