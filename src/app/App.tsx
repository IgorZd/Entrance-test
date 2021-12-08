import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Header } from "../components/header/Header";
import { Desk } from "../components/desk/Desk";
const Wrapper = styled.div``;

function App({ classes, ...props }: any) {
  return (
    <Wrapper>
      <Header />
      <Desk />
    </Wrapper>
  );
}

export default App;
