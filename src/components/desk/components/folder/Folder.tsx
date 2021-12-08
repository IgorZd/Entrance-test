import React, { useState } from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { ReactComponent as FolderIcon } from "../../../../assets/folder.svg";
import { ReactComponent as ArrowIcon } from "../../../../assets/arrow.svg";
import { File } from "../file/File";
import { SecondLevel } from "../secondLevel/SecondLevel";

export const MegaWrapper = styled.div``;
export const Wrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin: 3px 0;
`;
export const Arrow = styled(ArrowIcon)`
  transform: ${(props: any) =>
    props.isOpenFolder ? "rotate(-90deg)" : "rotate(0deg)"};
  transition: all 0.3s linear;
  margin-right: 36px;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Icon = styled(FolderIcon)`
  margin-right: 12px;
`;
export const Text = styled.span`
  color: black;
  font-size: 14px;
  font-weight: 600;
`;
export const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 47px;
`;

export const Folder = ({
  folderName,
  children,
  parentIndex,
  onClick,
}: {
  folderName: string;
  children: any[];
  parentIndex: number;
  onClick: any;
}) => {
  const [isOpenFolder, setIsOpenFolder] = useState(false);

  return (
    <MegaWrapper>
      <Wrapper
        onClick={() => {
          onClick();
          setIsOpenFolder(!isOpenFolder);
        }}
      >
        <Arrow isOpenFolder={isOpenFolder} />
        <IconWrapper>
          <Icon />
          <Text>{folderName}</Text>
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
                    <SecondLevel
                      key={id}
                      item={item}
                      parentIndex={index}
                      grandParentIndex={parentIndex}
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
