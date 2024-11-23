import { useEffect } from "react";

export const useUpdateUrl = (path: string) => {
  useEffect(() => {
    window.history.replaceState({}, "", path);
  }, [path]);
};
