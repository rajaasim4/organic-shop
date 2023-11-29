import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar"
import DashboardSideBar from "../../Components/DashboardSideBar/DashboardSideBar"

const Dashboard = () => {
    return (
        <>
            <DashboardNavbar />
            <div className="flex">
                <DashboardSideBar />
                <div className="">
                    <div className="border border-gray-400 rounded-md p-3">
                        <h2 className="text-3xl">Total Amount is</h2>
                        <h3 className="text-2xl text-primary_dark_green font-semibold">$120</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard