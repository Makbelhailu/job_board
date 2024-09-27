import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import { useRecoilValue } from "recoil";
import { getAccountType } from "../utils/states";

const AccountType = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const accountType = useRecoilValue(getAccountType);

  useEffect(() => {
    if (accountType) navigate("/");
  }, [accountType]);

  const handleClick = (type) => {
    user.update({ unsafeMetadata: { AccountType: type } });
    navigate("/");
  };

  return (
    <div className="h-full w-full py-16 text-center">
      <h1 className="text-4xl font-bold">Welcome to our Job Board</h1>
      <p className="mt-2 text-sm text-slate-700">
        please select how you'd like to use our platform
      </p>

      <div className="option-container mt-14 flex flex-wrap items-center justify-center gap-1 text-white">
        <div
          className="company w-72 cursor-pointer rounded-xl bg-secondary-dark px-6 py-12 shadow-lg shadow-slate-700 hover:-translate-y-2"
          onClick={() => handleClick("company")}
        >
          <h2 className="text-2xl font-bold">Company</h2>
          <p className="mt-4 text-sm">
            I want to post job listings and find talented professionals.
          </p>
        </div>
        <div
          className="company text- w-72 cursor-pointer rounded-xl bg-secondary-dark px-6 py-12 shadow-lg shadow-slate-700 hover:-translate-y-2"
          onClick={() => handleClick("freelancer")}
        >
          <h2 className="text-2xl font-bold">Freelancer</h2>
          <p className="mt-4 text-sm">
            I want to find job opportunity and offer my services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
