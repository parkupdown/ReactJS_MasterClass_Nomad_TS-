import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
//atom을 만듦, 즉 버블
