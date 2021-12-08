import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFolders, setFolders } from "../app/state/dataSlice";
import { API_URL } from "../consts";

export const useGetData = (dirId?: number) => {
  const dataFromStore = useSelector(selectAllFolders);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState(dataFromStore);
  const url = `${API_URL}/api/content?dirId=${dirId ? dirId : ""}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const { data } = response;
        if (dirId && dirId > 0) {
          setLocalData(data);
        } else {
          dispatch(setFolders({ ...data }));
          setLocalData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dirId]);

  return localData;
};
