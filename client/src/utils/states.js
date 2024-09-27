import { FaS } from "react-icons/fa6";
import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    user: {},
    isSignedIn: false,
    accountType: null,
  },
});

export const getAccountType = selector({
  key: "getIsSignIn",
  get: ({ get }) => {
    const { user } = get(userState);
    return user?.unsafeMetadata?.AccountType || null;
  },
});

export const jobsState = atom({
  key: "jobState",
  default: [{}],
});
