import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {},
});

export const jobsState = atom({
  key: "jobState",
  default: [{}],
});
