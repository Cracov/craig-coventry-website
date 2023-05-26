import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggler = () => {
    setValue(!value);
  };

  return { value, toggler };
}