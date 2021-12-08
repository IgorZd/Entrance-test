import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { useGetData } from "../../api/data";
import { selectAllFolders, selectDirId } from "../../app/state/dataSlice";
import { useSelector } from "react-redux";

import { FirstLevel } from "./components/firstLevel/FirstLevel";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 50px;
`;

export const Desk = () => {
  const dirId = useSelector(selectDirId);
  const data = useSelector(selectAllFolders);
  useGetData(dirId);

  return (
    <Wrapper>
      {data?.children?.map((item: any, index: number) => {
        const { id } = item;
        return <FirstLevel key={id} item={item} index={index} />;
      })}
    </Wrapper>
  );
};
