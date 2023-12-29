import DashboardSideBar from "../../Components/DashboardSideBar/DashboardSideBar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <DashboardSideBar />
        <div className="w-full p-10">
          <div className="border border-gray-400 rounded-md p-3 w-60">
            <h2 className="text-3xl mb-2">Total Amount </h2>
            <h3 className="text-2xl text-primary_dark_green font-semibold">
              $120
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
