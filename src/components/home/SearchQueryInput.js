import React, { useState } from "react";
import { Button, Form, Input, Item, Label, Text } from "native-base";
import { Keyboard } from "react-native";

export default function SearchQueryInput({ loading, searchQueryNews }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    // console.log(text);
    searchQueryNews(text);
    Keyboard.dismiss();
  };

  return (
    <Form style={{ flexDirection: "row", marginBottom: 10 }}>
      <Item floatingLabel style={{ flex: 6, height: 50 }}>
        <Label style={{ color: "white" }}>Search news...</Label>
        <Input
          onChangeText={(val) => setText(val)}
          style={{ color: "#eee" }}
          value={text}
        />
      </Item>
      <Button
        success
        style={{
          flex: 2,
          marginTop: 20,
          marginHorizontal: 10,
          justifyContent: "center",
          padding: 5,
        }}
        disabled={loading}
        onPress={handleSubmit}
      >
        <Text style={{ fontSize: 13 }}>Search</Text>
      </Button>
    </Form>
  );
}
