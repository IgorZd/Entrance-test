import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { DataState } from "./dataInterfaces";

const initialState: DataState = {
  folders: { children: [], id: 0, title: "" },
  dirId: 0,
};

export const dataSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setFolders: (state, action: PayloadAction<any>) => {
      state.folders = action.payload;
    },
    openFolder: (state, action: PayloadAction<any>) => {
      state.folders.children = state.folders.children.map(
        (item: any, index: number) => {
          if (index === action.payload.index) {
            return { ...action.payload.data };
          } else {
            return item;
          }
        }
      );
    },
    openFolderOnSecondLevel: (state, action: PayloadAction<any>) => {
      const index = action.payload.index;
      const parentIndex = action.payload.parentIndex;
      state.folders.children[parentIndex].children[index] =
        action.payload.updatedItem;
    },
    openFolderOnThirdLevel: (state, action: PayloadAction<any>) => {
      const index = action.payload.index;
      const parentIndex = action.payload.parentIndex;
      const grandParentIndex = action.payload.grandParentIndex;
      state.folders.children[grandParentIndex].children[parentIndex].children[
        index
      ] = action.payload.updatedItem;
    },
    setDirId: (state, action: PayloadAction<any>) => {
      state.dirId = action.payload;
    },
  },
});

export const {
  setFolders,
  openFolder,
  setDirId,
  openFolderOnSecondLevel,
  openFolderOnThirdLevel,
} = dataSlice.actions;

export const selectAllFolders = (state: RootState) => {
  return state.data.folders;
};

export const selectDirId = (state: RootState) => {
  return state.data.dirId;
};

export default dataSlice.reducer;
