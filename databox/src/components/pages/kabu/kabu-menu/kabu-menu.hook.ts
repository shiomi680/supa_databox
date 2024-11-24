import { useEffect, useState } from "react";
import { fetchShares } from "@/lib/crud/kabu";
import { ShareInfo } from "@/lib/types/kabu";
import { KabuMenuProps } from "./kabu-menu";
export const useKabuMenu = () => {
  //サイドバー
  const [shares, setShares] = useState<ShareInfo[]>([]);
  //初期化
  useEffect(() => {
    //サイドバーの初期化
    const loadShares = async () => {
      const fetchedShares = await fetchShares();
      setShares(fetchedShares);
    };
    loadShares();
  }, []);

  const props: KabuMenuProps = {
    shares,
  };

  return { props };
};
