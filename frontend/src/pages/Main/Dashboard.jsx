import { useState } from "react";

import CreateTypeSelection from "../CreateNewButton-options/CreateTypeSelection";
import EventForm from "../CreateNewButton-options/EventForm";
import ResearchForm from "../CreateNewButton-options/ResearchForm";
import ProjectForm from "../CreateNewButton-options/ProjectForm";


const Dashboard = () => {

    // Controls which event tab is currently selected
    const [activeTab, setActiveTab] = useState("upcoming");

    // Controls whether Create New modal is visible
    const [showCreateModal, setshowCreateModal] = useState(false);

    // Stores selected create type
    const [CreateType, setCreateType] = useState(null);


    return (
        <div className="Dashboard-container">

            {/* =====================================================
                HEADER
            ===================================================== */}

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

                    <button
                        className="CreateNew-Button"
                        onClick={() => {
                            setCreateType(null);
                            setshowCreateModal(true);
                        }}
                    >
                        + Create New
                    </button>

                </div>

            </div>


            {/* =====================================================
                STATS
            ===================================================== */}

            <div className="Dashboard-stats">

                <div className="stats-card">

                    <div className="stat-icon Projects-icon">
                        <i className="fa-solid fa-folder"></i>
                    </div>

                    <div className="stat-info">

                        <h2>5</h2>

                        <p>Active Projects</p>

                        <span className="Project-desc">
                            2 completed
                        </span>

                    </div>

                </div>


                <div className="stats-card">

                    <div className="stat-icon Research-icon">
                        <i className="fa-solid fa-file-lines"></i>
                    </div>

                    <div className="stat-info">

                        <h2>3</h2>

                        <p>Research Papers</p>

                        <span className="Research-desc">
                            1 published
                        </span>

                    </div>

                </div>


                <div className="stats-card">

                    <div className="stat-icon Events-icon">
                        <i className="fa-solid fa-calendar"></i>
                    </div>

                    <div className="stat-info">

                        <h2>2</h2>

                        <p>Upcoming Events</p>

                        <span className="Event-desc">
                            You're Registered
                        </span>

                    </div>

                </div>


                <div className="stats-card">

                    <div className="stat-icon Connections-icon">
                        <i className="fa-solid fa-users"></i>
                    </div>

                    <div className="stat-info">

                        <h2>8</h2>

                        <p>Connections</p>

                        <span className="Connection-desc">
                            +2 this week
                        </span>

                    </div>

                </div>

            </div>


            {/* =====================================================
                LOWER SECTION
                THREE COLUMNS
            ===================================================== */}

            <section className="dashboard-lower-section">


                {/* =================================================
                    PROJECTS
                ================================================= */}

                <div className="dashboard-section projects-section">

                    <div className="section-header">

                        <div>

                            <h2>
                                📁 Projects
                            </h2>

                            <p>
                                All projects you're working on.
                            </p>

                        </div>

                    </div>


                    <div className="project-list">


                        {/* PROJECT 1 */}

                        <div className="project-card">

                            <div className="project-icon purple">
                                🚀
                            </div>

                            <div className="project-info">

                                <h3>
                                    Forjora Web Platform
                                </h3>

                                <span className="status in-progress">
                                    In Progress
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill purple-fill"
                                            style={{ width: "65%" }}
                                        ></div>

                                    </div>

                                    <span>65%</span>

                                </div>

                                <p>
                                    Milestone: Core Features Development
                                </p>

                            </div>

                            <div className="project-members">
                                👨🏻 👨🏻 👩🏻 👨🏻
                                <span>+2</span>
                            </div>

                        </div>


                        {/* PROJECT 2 */}

                        <div className="project-card">

                            <div className="project-icon purple">
                                💬
                            </div>

                            <div className="project-info">

                                <h3>
                                    AI Study Buddy
                                </h3>

                                <span className="status in-progress">
                                    In Progress
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill purple-fill"
                                            style={{ width: "40%" }}
                                        ></div>

                                    </div>

                                    <span>40%</span>

                                </div>

                                <p>
                                    Milestone: AI Integration
                                </p>

                            </div>

                            <div className="project-members">
                                👨🏻 👩🏻 👨🏻
                                <span>+1</span>
                            </div>

                        </div>


                        {/* PROJECT 3 */}

                        <div className="project-card">

                            <div className="project-icon purple">
                                📈
                            </div>

                            <div className="project-info">

                                <h3>
                                    Hackathon Tracker
                                </h3>

                                <span className="status in-progress">
                                    In Progress
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill purple-fill"
                                            style={{ width: "75%" }}
                                        ></div>

                                    </div>

                                    <span>75%</span>

                                </div>

                                <p>
                                    Milestone: Frontend Complete
                                </p>

                            </div>

                            <div className="project-members">
                                👩🏻 👨🏻
                            </div>

                        </div>


                        {/* PROJECT 4 */}

                        <div className="project-card">

                            <div className="project-icon green">
                                ✓
                            </div>

                            <div className="project-info">

                                <h3>
                                    Campus Connect
                                </h3>

                                <span className="status completed">
                                    Completed
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill green-fill"
                                            style={{ width: "100%" }}
                                        ></div>

                                    </div>

                                    <span>100%</span>

                                </div>

                                <p>
                                    Milestone: Project Completed
                                </p>

                            </div>

                            <div className="project-members">
                                👨🏻 👩🏻 👨🏻
                                <span>+3</span>
                            </div>

                        </div>

                    </div>


                    <button className="view-all-button">
                        View all projects →
                    </button>

                </div>


                {/* =================================================
                    RESEARCH
                ================================================= */}

                <div className="dashboard-section research-section">

                    <div className="section-header">

                        <div>

                            <h2>
                                📄 Research Papers
                            </h2>

                            <p>
                                Papers you're researching or working on.
                            </p>

                        </div>

                    </div>


                    <div className="research-list">


                        {/* RESEARCH 1 */}

                        <div className="research-card">

                            <div className="research-icon purple">
                                📄
                            </div>

                            <div className="research-info">

                                <h3>
                                    Blockchain for Secure Healthcare
                                    Data Management
                                </h3>

                                <span className="status in-progress">
                                    In Progress
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill purple-fill"
                                            style={{ width: "60%" }}
                                        ></div>

                                    </div>

                                    <span>60%</span>

                                </div>

                                <p>
                                    Milestone: Literature Review
                                </p>

                            </div>

                            <div className="research-members">
                                👩🏻 👨🏻 👨🏻
                            </div>

                        </div>


                        {/* RESEARCH 2 */}

                        <div className="research-card">

                            <div className="research-icon purple">
                                📄
                            </div>

                            <div className="research-info">

                                <h3>
                                    Explainable AI in Education
                                </h3>

                                <span className="status in-progress">
                                    In Progress
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill purple-fill"
                                            style={{ width: "30%" }}
                                        ></div>

                                    </div>

                                    <span>30%</span>

                                </div>

                                <p>
                                    Milestone: Problem Definition
                                </p>

                            </div>

                            <div className="research-members">
                                👨🏻 👩🏻
                            </div>

                        </div>


                        {/* RESEARCH 3 */}

                        <div className="research-card">

                            <div className="research-icon green">
                                📄
                            </div>

                            <div className="research-info">

                                <h3>
                                    Federated Learning for
                                    Privacy Preservation
                                </h3>

                                <span className="status completed">
                                    Completed
                                </span>

                                <div className="progress-row">

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill green-fill"
                                            style={{ width: "100%" }}
                                        ></div>

                                    </div>

                                    <span>100%</span>

                                </div>

                                <p>
                                    Milestone: Paper Published
                                </p>

                            </div>

                            <div className="research-members">
                                👩🏻 👨🏻 👨🏻
                            </div>

                        </div>

                    </div>


                    <button className="view-all-button">
                        View all research papers →
                    </button>

                </div>


                {/* =================================================
                    EVENTS
                ================================================= */}

                <div className="dashboard-section events-section">

                    <div className="section-header">

                        <div>

                            <h2>
                                📅 Events
                            </h2>

                            <p>
                                Events you're registered for.
                            </p>

                        </div>

                    </div>


                    {/* EVENT TABS */}

                    <div className="event-tabs">

                        <button
                            type="button"
                            className={
                                activeTab === "upcoming"
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setActiveTab("upcoming")}
                        >
                            Upcoming
                        </button>


                        <button
                            type="button"
                            className={
                                activeTab === "attended"
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setActiveTab("attended")}
                        >
                            Attended
                        </button>


                        <button
                            type="button"
                            className={
                                activeTab === "missed"
                                    ? "active"
                                    : ""
                            }
                            onClick={() => setActiveTab("missed")}
                        >
                            Missed
                        </button>

                    </div>


                    {/* EVENT LIST */}

                    <div className="event-list">

                        {/* UPCOMING */}

                        {activeTab === "upcoming" && (
                            <>

                                <div className="event-card">

                                    <div className="event-date upcoming-event">

                                        <strong>MAY</strong>
                                        <span>25</span>

                                    </div>

                                    <div className="event-info">

                                        <h3>
                                            CodeSprint 5.0
                                        </h3>

                                        <p>
                                            📅 25 May 2025 • Online
                                        </p>

                                        <span className="event-type upcoming-event-text">
                                            Hackathon
                                        </span>

                                    </div>

                                    <span className="event-status upcoming-status">
                                        Upcoming
                                    </span>

                                </div>


                                <div className="event-card">

                                    <div className="event-date upcoming-event">

                                        <strong>JUN</strong>
                                        <span>02</span>

                                    </div>

                                    <div className="event-info">

                                        <h3>
                                            Web Dev Workshop
                                        </h3>

                                        <p>
                                            📅 02 Jun 2025 • Chandigarh
                                        </p>

                                        <span className="event-type upcoming-event-text">
                                            Workshop
                                        </span>

                                    </div>

                                    <span className="event-status upcoming-status">
                                        Upcoming
                                    </span>

                                </div>

                            </>
                        )}


                        {/* ATTENDED */}

                        {activeTab === "attended" && (
                            <>

                                <div className="event-card">

                                    <div className="event-date attended-event">

                                        <strong>FEB</strong>
                                        <span>18</span>

                                    </div>

                                    <div className="event-info">

                                        <h3>
                                            Java Developer Meetup
                                        </h3>

                                        <p>
                                            📅 18 Feb 2025 • Chandigarh
                                        </p>

                                        <span className="event-type attended-event-text">
                                            Meetup
                                        </span>

                                    </div>

                                    <span className="event-status attended-status">
                                        Attended
                                    </span>

                                </div>


                                <div className="event-card">

                                    <div className="event-date attended-event">

                                        <strong>JAN</strong>
                                        <span>28</span>

                                    </div>

                                    <div className="event-info">

                                        <h3>
                                            React Workshop
                                        </h3>

                                        <p>
                                            📅 28 Jan 2025 • Online
                                        </p>

                                        <span className="event-type attended-event-text">
                                            Workshop
                                        </span>

                                    </div>

                                    <span className="event-status attended-status">
                                        Attended
                                    </span>

                                </div>

                            </>
                        )}


                        {/* MISSED */}

                        {activeTab === "missed" && (
                            <>

                                <div className="event-card missed">

                                    <div className="event-date missed-event">

                                        <strong>APR</strong>
                                        <span>10</span>

                                    </div>

                                    <div className="event-info">

                                        <h3>
                                            HackOverflow 2025
                                        </h3>

                                        <p>
                                            📅 10 Apr 2025 • Delhi
                                        </p>

                                        <span className="event-type missed-event-text">
                                            Hackathon
                                        </span>

                                    </div>

                                    <span className="event-status missed-status">
                                        Missed
                                    </span>

                                </div>


                                <div className="event-card missed">

                                    <div className="event-date missed-event">

                                        <strong>MAR</strong>
                                        <span>22</span>

                                    </div>

                                    <div className="event-info">

                                        <h3>
                                            UI/UX Design Workshop
                                        </h3>

                                        <p>
                                            📅 22 Mar 2025 • Online
                                        </p>

                                        <span className="event-type missed-event-text">
                                            Workshop
                                        </span>

                                    </div>

                                    <span className="event-status missed-status">
                                        Missed
                                    </span>

                                </div>

                            </>
                        )}

                    </div>

                    {/* View all events button intentionally removed */}

                </div>

            </section>


            {/* =====================================================
                CREATE NEW MODAL
            ===================================================== */}

            {showCreateModal && (

                <div className="create-modal-overlay">

                    {CreateType === null && (

                        <CreateTypeSelection
                            setCreateType={setCreateType}
                            setshowCreateModal={setshowCreateModal}
                        />

                    )}


                    {CreateType === "event" && (

                        <EventForm
                            setshowCreateModal={setshowCreateModal}
                            setCreateType={setCreateType}
                        />

                    )}


                    {CreateType === "research" && (

                        <ResearchForm
                            setshowCreateModal={setshowCreateModal}
                            setCreateType={setCreateType}
                        />

                    )}


                    {CreateType === "project" && (

                        <ProjectForm
                            setshowCreateModal={setshowCreateModal}
                            setCreateType={setCreateType}
                        />

                    )}

                </div>

            )}

        </div>
    );
};


export default Dashboard;