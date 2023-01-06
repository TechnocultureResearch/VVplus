import React, { useState } from "react";
import { View, InputItem } from "@ant-design/react-native";

export const InputField = () => {
  const [value, setValue] = useState("");
  return (
    <View>
      <InputItem
        type="text"
        value={value}
        onChange={(value: string) => {
          setValue(value);
        }}
      />
    </View>
  );
};
