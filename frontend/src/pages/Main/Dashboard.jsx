const Dashboard = () => {

    return (
    <>
<div className="Dashboard-container">
    <div className="Dashboard-header">
        <div className="Dashboard-heading-container">
            <h1 className="Dashboard-top-heading">
                Good Morning, Nikhil 👋
            </h1>
            <p className="Dashboard-desc">
                Here's an overview of your projects, research and events
            </p>
        </div>
        <div className="Dashboard-top-button">
            <button className="CreateNew-Button">
                + Create New
            </button>
        </div>
    </div>
    <div className="Dashboard-stats">
        <div className="stats-card">
            <div className="stat-icon Projects-icon">
                <i className="fa-solid fa-folder"></i>
            </div>
            <div className="stat-info">
                <h2>5</h2>
                <p>Active Projects</p>
                <span className="Project-desc">2 completed</span>
            </div>
        </div>
        <div className="stats-card">
            <div className="stat-icon Research-icon">
                <i className="fa-solid fa-file-lines"></i>
            </div>
            <div className="stat-info">
                <h2>3</h2>
                <p>Research Papers</p>
                <span className="Research-desc">1 published</span>
            </div>
        </div>
        <div className="stats-card">
            <div className="stat-icon Events-icon">
                <i className="fa-solid fa-calendar"></i>
            </div>
            <div className="stat-info">
                <h2>2</h2>
                <p>Upcoming Events</p>
                <span className="Event-desc">You're Registered</span>
            </div>
        </div>
        <div className="stats-card">
            <div className="stat-icon Connections-icon">
                <i className="fa-solid fa-users"></i>
            </div>
            <div className="stat-info">
                <h2>8</h2>
                <p>Connections</p>
                <span className="Connection-desc">+2 this week</span>
            </div>
        </div>
    </div>
</div>
    </>
    )
}

export default Dashboard