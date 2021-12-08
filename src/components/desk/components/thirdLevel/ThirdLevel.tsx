import React, { useState } from "react";

import { File } from "../file/File";
import { useDispatch } from "react-redux";
import {
  openFolderOnThirdLevel,
  setDirId,
} from "../../../../app/state/dataSlice";
import { useGetData } from "../../../../api/data";
import {
  Arrow,
  ChildrenWrapper,
  Icon,
  IconWrapper,
  MegaWrapper,
  Wrapper,
  Text,
} from "../folder/Folder";

export const ThirdLevel = ({
  item,
  parentIndex,
  grandParentIndex,
  index,
}: {
  item: any;
  parentIndex: number;
  grandParentIndex: number;
  index: number;
}) => {
  const { title, id, children } = item;
  const [isOpenFolder, setIsOpenFolder] = useState(false);
  const updatedItem = useGetData(id);
  const dispatch = useDispatch();

  return (
    <MegaWrapper>
      <Wrapper
        onClick={() => {
          setIsOpenFolder(!isOpenFolder);
          dispatch(
            openFolderOnThirdLevel({
              grandParentIndex,
              parentIndex,
              index,
              updatedItem,
            })
          );
        }}
      >
        <Arrow isOpenFolder={isOpenFolder} />
        <IconWrapper>
          <Icon />
          <Text>{title}</Text>
        </IconWrapper>
      </Wrapper>
      <ChildrenWrapper>
        {isOpenFolder &&
          children.map((item: any) => {
            const { title, id, children } = item;
            return (
              <>
                {children ? (
                  <MegaWrapper key={id}>
                    <Wrapper
                      key={id}
                      onClick={() => {
                        dispatch(setDirId(id));
                        setIsOpenFolder(!isOpenFolder);
                      }}
                    >
                      <Arrow isOpenFolder={isOpenFolder} />
                      <IconWrapper>
                        <Icon />
                        <Text>{title}</Text>
                      </IconWrapper>
                    </Wrapper>
                  </MegaWrapper>
                ) : (
                  <File key={id} fileName={title} />
                )}
              </>
            );
          })}
      </ChildrenWrapper>
    </MegaWrapper>
  );
};
