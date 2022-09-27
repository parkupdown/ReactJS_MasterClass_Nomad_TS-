import React, { FormEvent, useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgcolor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
export default function App() {
  return (
    <div>
      <Container>
        <H1>hello</H1>
      </Container>
    </div>
  );
}
