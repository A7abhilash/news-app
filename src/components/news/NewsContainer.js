import React from "react";
import { Container, DeckSwiper } from "native-base";
import NewsCard from "./NewsCard";

export default function NewsContainer({ data, openNews }) {
  return (
    <Container>
      <DeckSwiper
        dataSource={data}
        renderItem={(item) => <NewsCard item={item} openNews={openNews} />}
      />
    </Container>
  );
}
