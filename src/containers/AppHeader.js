import React from "react";
import { Body, H1, Header } from "native-base";

export default function AppHeader() {
  return (
    <Header style={{ backgroundColor: "#343a40" }} noShadow>
      <Body style={{ alignItems: "center" }}>
        <H1
          style={{
            color: "#fff",
          }}
        >
          News App
        </H1>
      </Body>
    </Header>
  );
}
