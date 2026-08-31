import "../styles/MainCss/dashboardlayout.css"
import { useState } from "react"
import { Link, Outlet,NavLink } from "react-router-dom"

const DashboardLayout = () => {
    const[Shade,setShade]=useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className={`dashboard ${sidebarOpen ? "sidebar-open" : "sidebar-closed"} ${Shade? "":"dark-mode"}`}>
            {/* SIDEBAR */}
            <aside className="sidebar">
                <h1 className="dashboard-logo">Forjora</h1>
                <nav className="sidebar-nav">
                    <NavLink to="/dashboard">
                        <i className="fa-solid fa-house"></i>
                        Dashboard
                    </NavLink>
                    <NavLink to="/discover">
                        <i className="sidebar-icon fa-regular fa-compass"></i>
                        Discover
                    </NavLink>
                    <NavLink to="/notifications">
                        <i className="sidebar-icon fa-regular fa-bell"></i>
                        Notifications
                    </NavLink>
                    <NavLink to="/projectworkspace">
                        <i className="sidebar-icon fa-solid fa-briefcase"></i>
                        Workspace
                    </NavLink>
                    <NavLink to="/event-calender">
                        <i className="sidebar-icon fa-regular fa-calendar-days"></i>
                        Calender
                    </NavLink>
                    <NavLink to="/minichat">
                        <i className="sidebar-icon fa-regular fa-message"></i>
                        Chat
                    </NavLink>
                    <NavLink to="/settings">
                        <i className="sidebar-icon fa-solid fa-gear"></i>
                        Settings
                    </NavLink>
                </nav>
                <div className="Dashboard-logout-divider">
                    <span className="dashboard-logout-line"></span>
                </div>
                <button className="Logout-btn">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    Logout
                </button>
            </aside>
            {/* RIGHT SIDE */}
            <div className="dashboard-content">
                {/* TOPBAR */}
                <header className="topbar">
                    {/* SIDEBAR BUTTON */}
                    <button
                        className="sidebar-toggle"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="topbar-icons">
                        <button  onClick={()=>setShade(true)}>
                            <i className="fa-regular fa-sun"></i>
                        </button>
                        <button onClick={()=>setShade(false)}>
                            <i className="fa-regular fa-moon"></i>
                        </button>
                        <button className="profile-btn">
                            N
                        </button>
                    </div>
                </header> 
                {/* DIFFERENT PAGES WILL APPEAR HERE */}
                <main className="main-content">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}

export default DashboardLayout