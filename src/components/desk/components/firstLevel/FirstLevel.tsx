import React from "react";

import { Folder } from "../folder/Folder";
import { useDispatch } from "react-redux";
import { openFolder, setDirId } from "../../../../app/state/dataSlice";
import { useGetData } from "../../../../api/data";

export const FirstLevel = ({ item, index }: { item: any; index: number }) => {
  const { title, id, children } = item;
  const dispatch = useDispatch();
  const updatedItem = useGetData(id);

  return (
    <Folder
      folderName={title}
      onClick={() => {
        dispatch(setDirId(id));
        dispatch(openFolder({ index, data: updatedItem }));
      }}
      children={children}
      parentIndex={index}
    />
  );
};
