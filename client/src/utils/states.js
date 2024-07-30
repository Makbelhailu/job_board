import { atom, selector } from "recoil";

const userState = atom({
  key: "userState",
  default: {},
});

const jobsState = atom({
  key: "jobState",
  default: {},
});
