import { FaS } from "react-icons/fa6";
import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    user: {},
    isSignedIn: false,
  },
});

export const jobsState = atom({
  key: "jobState",
  default: [{}],
});
