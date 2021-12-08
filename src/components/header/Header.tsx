import React from "react";
// @ts-ignore
import styled, { useTheme } from "@xstyled/styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  background-color: primary;
  box-shadow: ${(props: any) => props.theme.shadows.popover};
`;
const Text = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

export const Header = () => {
  const theme = useTheme();
  return (
    <Wrapper theme={theme}>
      <Text>Digital Habits. Entrance test by Igor Zdanevich</Text>
    </Wrapper>
  );
};
