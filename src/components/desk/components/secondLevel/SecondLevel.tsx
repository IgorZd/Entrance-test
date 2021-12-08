import React, { useState } from "react";

import { File } from "../file/File";
import { useDispatch } from "react-redux";
import { openFolderOnSecondLevel } from "../../../../app/state/dataSlice";
import { useGetData } from "../../../../api/data";
import { ThirdLevel } from "../thirdLevel/ThirdLevel";
import {
  Arrow,
  ChildrenWrapper,
  Icon,
  IconWrapper,
  MegaWrapper,
  Wrapper,
  Text,
} from "../folder/Folder";

export const SecondLevel = ({
  item,
  parentIndex,
  grandParentIndex,
}: {
  item: any;
  parentIndex: number;
  grandParentIndex: number;
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
            openFolderOnSecondLevel({
              parentIndex: grandParentIndex,
              index: parentIndex,
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
          children.map((item: any, index: number) => {
            const { title, id, children } = item;
            return (
              <MegaWrapper key={id}>
                {children ? (
                  <>
                    <ThirdLevel
                      key={id}
                      item={item}
                      parentIndex={parentIndex}
                      grandParentIndex={grandParentIndex}
                      index={index}
                    />
                  </>
                ) : (
                  <File key={id} fileName={title} />
                )}
              </MegaWrapper>
            );
          })}
      </ChildrenWrapper>
    </MegaWrapper>
  );
};
