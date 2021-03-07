import React from "react";
import { Container, DeckSwiper } from "native-base";
import NewsCard from "./NewsCard";

export default function NewsContainer({ data, openNews }) {
  return (
    <Container style={{ backgroundColor: "#121212" }}>
      <DeckSwiper
        dataSource={data}
        renderItem={(item) => <NewsCard item={item} openNews={openNews} />}
      />
    </Container>
  );
}
