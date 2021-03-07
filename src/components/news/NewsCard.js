import React from "react";
import { Card, CardItem, H3, Subtitle, Text } from "native-base";
import { Image, Button } from "react-native";

export default function NewsCard({ item, openNews }) {
  return (
    <Card style={{ elevation: 3 }}>
      <CardItem>
        <Image
          source={{ uri: item.urlToImage }}
          style={{ height: 300, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <H3>{item.title}</H3>
        <Subtitle>{item.description}</Subtitle>
      </CardItem>
      <CardItem>
        <Text>{new Date(item.publishedAt).toDateString()}</Text>
        <Text>{item.author}</Text>
      </CardItem>
      <CardItem>
        <Button title="Read more" onPress={() => openNews(item)} />
      </CardItem>
    </Card>
  );
}
