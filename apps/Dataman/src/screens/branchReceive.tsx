import React from "react";
import { Text, ScrollView, View } from "react-native";
import { Button, List } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
import { PageHeader } from "../components/PageHeader";

const BranchReceive = () => {
  const stockFormOptions = [
    {
      label: "Voucher Type",
      placeholder: "Search Here",
      icon: "questioncircleo",
    },
    {
      label: "Voucher No. Date",
      placeholder: "Enter Date",
    },
    {
      label: "Receiving in Godown",
      placeholder: "Search Here",
    },
    {
      label: "Receiving Goods from Branch(Supplier)",
      placeholder: "Search Here",
    },
    {
      label: "Fill Transfer Entry",
      placeholder: "Search Here",
    },
    {
      label: "Gate Entry No.",
    },
    {
      label: "Vehicle No.",
    },
    {
      label: "Remarks",
    },
  ];
  return (
    <View>
      <ScrollView>
        <List>
          <PageHeader text="Branch To Branch Receive" />
          {stockFormOptions.map(
            (
              item: { label: string; placeholder?: string; icon?: string },
              idx
            ) => (
              <List.Item key={idx} arrow="horizontal">
                <List.Item.Brief>
                  <Text>{item.label}</Text>
                  {item.icon !== undefined ? (
                    <AntDesign name={item.icon} />
                  ) : null}
                </List.Item.Brief>
                {item.placeholder}
              </List.Item>
            )
          )}
        </List>
        <View className="flex-col justify-center items-center mb-24 mt-4">
          <Button type="primary" style={{ borderRadius: 25 }}>
            Submit
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default BranchReceive;
