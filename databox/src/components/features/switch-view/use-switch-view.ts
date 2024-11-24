import { useState } from "react";

export const useSwitchView = (initialState: boolean = false) => {
  const [isSwitchOn, setIsSwitchOn] = useState(initialState);

  const handleSwitchChange = () => {
    setIsSwitchOn((prev) => !prev);
  };

  const props = {
    isSwitchOn,
    handleSwitchChange,
  };

  return { isSwitchOn, handleSwitchChange };
};
