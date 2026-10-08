import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CreateTypeSelection from "../CreateNewButton-options/CreateTypeSelection";
import EventForm from "../CreateNewButton-options/EventForm";
import ResearchForm from "../CreateNewButton-options/ResearchForm";
import ProjectForm from "../CreateNewButton-options/ProjectForm";


const Dashboard = () => {

    // =====================================================
    // USER DATA
    // =====================================================

    const [user, setUser] = useState({
        name: "XYZ"
    });


    // =====================================================
    // DASHBOARD Analytics and  STATS
    // =====================================================

    const [stats, setStats] = useState({
        activeProjects: 0,
        completedProjects: 0,

        researchPapers: 0,
        publishedResearch: 0,

        upcomingEvents: 0,

        connections: 0,
        weeklyConnections: 0
    });


    // =====================================================
    // PROJECTS
    // =====================================================

    const [projects, setProjects] = useState([]);


    // =====================================================
    // RESEARCH PAPERS
    // =====================================================

    const [researchPapers, setResearchPapers] = useState([]);


    // =====================================================
    // EVENTS
    // =====================================================

    const [events, setEvents] = useState([]);


    // =====================================================
    // EVENT TAB
    // =====================================================

    const [activeTab, setActiveTab] = useState("upcoming");


    // =====================================================
    // CREATE NEW MODAL
    // =====================================================

    const [showCreateModal, setshowCreateModal] = useState(false);

    const [CreateType, setCreateType] = useState(null);


    // =====================================================
    // NAVIGATION
    // =====================================================

    const navigate = useNavigate();


    // =====================================================
    // SESSION / DASHBOARD DATA
    // =====================================================

    const checkSession = async () => {

        try {

            const response = await axios.get(
                "https://forjora.onrender.com/auth/session",
                {
                    withCredentials: true
                }
            );

            console.log("Session data:", response.data);


            /*
             * Once your backend returns the complete
             * dashboard data, it can populate all these
             * states.
             *
             * Example:
             *
             * setUser({
             *     name: response.data.user.name
             * });
             *
             * setStats({
             *     activeProjects: response.data.stats.activeProjects,
             *     completedProjects: response.data.stats.completedProjects,
             *     researchPapers: response.data.stats.researchPapers,
             *     publishedResearch: response.data.stats.publishedResearch,
             *     upcomingEvents: response.data.stats.upcomingEvents,
             *     connections: response.data.stats.connections,
             *     weeklyConnections: response.data.stats.weeklyConnections
             * });
             *
             * setProjects(response.data.projects);
             * setResearchPapers(response.data.researchPapers);
             * setEvents(response.data.events);
             */


        } catch (error) {

            if (error.response?.status === 401) {

                // navigate("/login");

            } else {

                console.log("Server unreachable");

            }

        }

    };


    // =====================================================
    // LOAD USER DATA
    // =====================================================

    useEffect(() => {

        checkSession();

    }, []);


    // =====================================================
    // FILTER EVENTS
    // =====================================================

    const filteredEvents = events.filter(
        (event) => event.status === activeTab
    );


    // =====================================================
    // JSX
    // =====================================================

    return (

        <div className="Dashboard-container">


            {/* =====================================================
                HEADER
            ===================================================== */}

            <div className="Dashboard-header">


                <div className="Dashboard-heading-container">

                    <h1 className="Dashboard-top-heading">

                        Good Morning, {user.name} 👋

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


                {/* =================================================
                    PROJECT STATS
                ================================================= */}

                <div className="stats-card">


                    <div className="stat-icon Projects-icon">

                        <i className="fa-solid fa-folder"></i>

                    </div>


                    <div className="stat-info">

                        <h2>
                            {stats.activeProjects}
                        </h2>

                        <p>
                            Active Projects
                        </p>

                        <span className="card-subtitle Project-desc">

                            {stats.completedProjects} completed

                        </span>

                    </div>


                </div>



                {/* =================================================
                    RESEARCH STATS
                ================================================= */}

                <div className="stats-card">


                    <div className="stat-icon Research-icon">

                        <i className="fa-solid fa-file-lines"></i>

                    </div>


                    <div className="stat-info">

                        <h2>
                            {stats.researchPapers}
                        </h2>

                        <p>
                            Research Papers
                        </p>

                        <span className="card-subtitle Research-desc">

                            {stats.publishedResearch} published

                        </span>

                    </div>


                </div>



                {/* =================================================
                    EVENT STATS
                ================================================= */}

                <div className="stats-card">


                    <div className="stat-icon Events-icon">

                        <i className="fa-solid fa-calendar"></i>

                    </div>


                    <div className="stat-info">

                        <h2>
                            {stats.upcomingEvents}
                        </h2>

                        <p>
                            Upcoming Events
                        </p>

                        <span className="card-subtitle Event-desc">

                            You're Registered

                        </span>

                    </div>


                </div>



                {/* =================================================
                    CONNECTION STATS
                ================================================= */}

                <div className="stats-card">


                    <div className="stat-icon Connections-icon">

                        <i className="fa-solid fa-users"></i>

                    </div>


                    <div className="stat-info">

                        <h2>
                            {stats.connections}
                        </h2>

                        <p>
                            Connections
                        </p>

                        <span className="card-subtitle Connection-desc">

                            {stats.weeklyConnections} this week

                        </span>

                    </div>


                </div>


            </div>



            {/* =====================================================
                LOWER SECTION
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


                        {projects.map((project) => (

                            <div
                                className="project-card"
                                key={project.id}
                            >


                                {/* PROJECT ICON */}

                                <div
                                    className={`project-icon ${
                                        project.status === "Completed"
                                            ? "green"
                                            : "purple"
                                    }`}
                                >

                                    {project.icon}

                                </div>



                                {/* PROJECT INFORMATION */}

                                <div className="project-info">


                                    <h3>
                                        {project.title}
                                    </h3>


                                    <span
                                        className={`status ${
                                            project.status === "Completed"
                                                ? "completed"
                                                : "in-progress"
                                        }`}
                                    >

                                        {project.status}

                                    </span>



                                    {/* PROGRESS */}

                                    <div className="progress-row">


                                        <div className="progress-bar">

                                            <div
                                                className={`progress-fill ${
                                                    project.status === "Completed"
                                                        ? "green-fill"
                                                        : "purple-fill"
                                                }`}
                                                style={{
                                                    width: `${project.progress}%`
                                                }}
                                            ></div>

                                        </div>


                                        <span>

                                            {project.progress}%

                                        </span>


                                    </div>



                                    <p>

                                        Milestone: {project.milestone}

                                    </p>


                                </div>



                                {/* PROJECT MEMBERS */}

                                <div className="project-members">


                                    {project.members?.map(
                                        (member, index) => (

                                            <span key={index}>

                                                {member}

                                            </span>

                                        )
                                    )}


                                    {project.extraMembers > 0 && (

                                        <span>

                                            +{project.extraMembers}

                                        </span>

                                    )}


                                </div>


                            </div>

                        ))}


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


                        {researchPapers.map((paper) => (

                            <div
                                className="research-card"
                                key={paper.id}
                            >


                                {/* RESEARCH ICON */}

                                <div
                                    className={`research-icon ${
                                        paper.status === "Completed"
                                            ? "green"
                                            : "purple"
                                    }`}
                                >

                                    📄

                                </div>



                                {/* RESEARCH INFORMATION */}

                                <div className="research-info">


                                    <h3>
                                        {paper.title}
                                    </h3>


                                    <span
                                        className={`status ${
                                            paper.status === "Completed"
                                                ? "completed"
                                                : "in-progress"
                                        }`}
                                    >

                                        {paper.status}

                                    </span>



                                    {/* PROGRESS */}

                                    <div className="progress-row">


                                        <div className="progress-bar">

                                            <div
                                                className={`progress-fill ${
                                                    paper.status === "Completed"
                                                        ? "green-fill"
                                                        : "purple-fill"
                                                }`}
                                                style={{
                                                    width: `${paper.progress}%`
                                                }}
                                            ></div>

                                        </div>


                                        <span>

                                            {paper.progress}%

                                        </span>


                                    </div>



                                    <p>

                                        Milestone: {paper.milestone}

                                    </p>


                                </div>



                                {/* RESEARCH MEMBERS */}

                                <div className="research-members">


                                    {paper.members?.map(
                                        (member, index) => (

                                            <span key={index}>

                                                {member}

                                            </span>

                                        )
                                    )}


                                </div>


                            </div>

                        ))}


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


                        {filteredEvents.map((event) => (

                            <div
                                className={`event-card ${
                                    event.status === "missed"
                                        ? "missed"
                                        : ""
                                }`}
                                key={event.id}
                            >


                                {/* EVENT DATE */}

                                <div
                                    className={`event-date ${
                                        event.status === "upcoming"
                                            ? "upcoming-event"
                                            : event.status === "attended"
                                                ? "attended-event"
                                                : "missed-event"
                                    }`}
                                >

                                    <strong>
                                        {event.month}
                                    </strong>

                                    <span>
                                        {event.day}
                                    </span>

                                </div>



                                {/* EVENT INFORMATION */}

                                <div className="event-info">


                                    <h3>
                                        {event.title}
                                    </h3>


                                    <p>

                                        📅 {event.date} • {event.location}

                                    </p>


                                    <span
                                        className={`event-type ${
                                            event.status === "upcoming"
                                                ? "upcoming-event-text"
                                                : event.status === "attended"
                                                    ? "attended-event-text"
                                                    : "missed-event-text"
                                        }`}
                                    >

                                        {event.type}

                                    </span>


                                </div>



                                {/* EVENT STATUS */}

                                <span
                                    className={`event-status ${
                                        event.status === "upcoming"
                                            ? "upcoming-status"
                                            : event.status === "attended"
                                                ? "attended-status"
                                                : "missed-status"
                                    }`}
                                >

                                    {event.status === "upcoming"
                                        ? "Upcoming"
                                        : event.status === "attended"
                                            ? "Attended"
                                            : "Missed"}

                                </span>


                            </div>

                        ))}


                    </div>


                </div>


            </section>



            {/* =====================================================
                CREATE NEW MODAL
            ===================================================== */}

            {showCreateModal && (

                <div className="create-modal-overlay">


                    {/* CREATE TYPE */}

                    {CreateType === null && (

                        <CreateTypeSelection
                            setCreateType={setCreateType}
                            setshowCreateModal={setshowCreateModal}
                        />

                    )}



                    {/* EVENT FORM */}

                    {CreateType === "event" && (

                        <EventForm
                            setshowCreateModal={setshowCreateModal}
                            setCreateType={setCreateType}
                        />

                    )}



                    {/* RESEARCH FORM */}

                    {CreateType === "research" && (

                        <ResearchForm
                            setshowCreateModal={setshowCreateModal}
                            setCreateType={setCreateType}
                        />

                    )}



                    {/* PROJECT FORM */}

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