import React from "react";
import { selector, useRecoilValue } from "recoil";
import textState from "./text";
const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>글자 수: {count}</>;
}
