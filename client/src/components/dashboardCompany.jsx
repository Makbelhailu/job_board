import { useRecoilValue } from "recoil";
import { userState } from "../utils/states";
import dashboardImg from "../assets/dashboard_illustration.svg"
const DashboardCompany = () => {
  const userInfo = useRecoilValue(userState)
  return (
    <div>
      <section className="px-2 mb-2">
        <p className="font-bold text-sm">Hi, {userInfo.user.username}</p>
        <h1 className="text-2xl font-bold">Welcome Back</h1>
      </section>
      <section className="w-full h-auto bg-secondary text-white px-12 py-8 rounded-3xl flex justify-between items-start">
        <div className="space-y-12 w-4/5 pt-3">
          <div className="">
            <h1 className="whitespace-pre-line font-black text-4xl break-words leading-normal">Looking to post jobs and <br /> Find the perfect employee?</h1>
          </div>
          <div className="space-y-5">
            <p className="text-sm font-semibold">Post job listings easily and connect with top talent to find the ideal candidate for your company.</p>
            <button className="px-8 py-3 font-black text-secondary hover:text-primary bg-white rounded-xl">Post Job</button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <img src={dashboardImg} alt="Dashboard Illustration" className=""/>
        </div>
      </section>
      <section className="w-full flex items-center justify-between">
        <div className="w-58 h-24 bg-blueish-100 flex items-center justify-center">p</div>
        <div className="w-58 h-24 bg-blueish-100 flex items-center justify-center">p</div>
        <div className="w-58 h-24 bg-blueish-100 flex items-center justify-center">p</div>
        <div className="w-58 h-24 bg-blueish-100 flex items-center justify-center">p</div>
      </section>
    </div>
  );
};

export default DashboardCompany;
