import React from "react";
import { Card, CardItem, H3, Text } from "native-base";
import { Image, Button } from "react-native";

export default function NewsCard({ item, openNews }) {
  return (
    <Card style={{ elevation: 3, backgroundColor: "#343a40" }}>
      <CardItem>
        <Image
          source={{ uri: item.urlToImage }}
          style={{ height: 200, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <H3>{item.title}</H3>
      </CardItem>
      <CardItem style={{ flexDirection: "column" }}>
        <Text>{item.author}</Text>
        <Text>{new Date(item.publishedAt).toDateString()}</Text>
      </CardItem>
      <Button title="Read More" onPress={() => openNews(item)} />
    </Card>
  );
}
