import PropTypes from "prop-types";
import DashboardCompany from "../components/dashboardCompany";
import DashboardFreelancer from "../components/dashboardFreelancer";
const Dashboard = ({ accountType }) => {
  return accountType === "company" ? (
    <DashboardCompany />
  ) : (
    <DashboardFreelancer />
  );
};
Dashboard.propTypes = {
  accountType: PropTypes.string,
};
export default Dashboard;
