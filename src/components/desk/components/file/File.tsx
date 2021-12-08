import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { ReactComponent as FileIcon } from "../../../../assets/file.svg";

const Wrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  margin: 3px 0 3px 54px;
`;
const Icon = styled(FileIcon)`
  margin-right: 15px;
`;
const Text = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 600;
`;

export const File = ({ fileName }: { fileName: string }) => {
  return (
    <Wrapper>
      <Icon />
      <Text>{fileName}</Text>
    </Wrapper>
  );
};
