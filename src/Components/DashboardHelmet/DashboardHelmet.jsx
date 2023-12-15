import React from 'react'
import DashboardSideBar from '../DashboardSideBar/DashboardSideBar'

const DashboardHelmet = ({ children }) => {
    return (
        <div className="flex">
            <DashboardSideBar />

            <div className=" w-10/12 py-10 px-10 mx-auto">
                {children}
            </div>
        </div>
    )
}

export default DashboardHelmet