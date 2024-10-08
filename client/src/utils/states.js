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

export const searchJobState = atom({
  key: "searchJobState",
  default: [],
});

export const filteredJobState = atom({
  key: "filteredJobState",
  default: [],
});

export const pageState = atom({
  key: "pageState",
  default: {
    normal: 1,
    search: 1,
  },
});

export const countState = atom({
  key: "pageState",
  default: {
    normal: 1,
    search: 1,
  },
});