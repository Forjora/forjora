const ProjectForm = ({
    setshowCreateModal,
    setCreateType
}) => {

    // Go back to Create Type Selection
    const handleBack = () => {
        setCreateType(null);
    };

    // Close the entire modal
    const handleCancel = () => {
        setCreateType(null);
        setshowCreateModal(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Project created");
    };

    return (
        <div className="create-modal">

            <h2>Create Project</h2>

            <p>
                Start a new project and find teammates.
            </p>


            <form onSubmit={handleSubmit}>

                {/* ================================
                    PROJECT NAME
                ================================= */}

                <div className="form-group">

                    <label htmlFor="projectName">
                        Project Name
                    </label>

                    <input
                        id="projectName"
                        type="text"
                        placeholder="Enter project name"
                    />

                </div>


                {/* ================================
                    SHORT DESCRIPTION
                ================================= */}

                <div className="form-group">

                    <label htmlFor="projectDescription">
                        Short Description
                    </label>

                    <textarea
                        id="projectDescription"
                        placeholder="Briefly describe your project..."
                        rows="3"
                    ></textarea>

                </div>


                {/* ================================
                    PROJECT TYPE
                ================================= */}

                <div className="form-group">

                    <label htmlFor="projectType">
                        Project Type
                    </label>

                    <select id="projectType">

                        <option value="">
                            Select project type
                        </option>

                        <option value="web-development">
                            Web Development
                        </option>

                        <option value="mobile-app">
                            Mobile App
                        </option>

                        <option value="ai-ml">
                            AI / Machine Learning
                        </option>

                        <option value="data-science">
                            Data Science
                        </option>

                        <option value="cybersecurity">
                            Cybersecurity
                        </option>

                        <option value="iot">
                            IoT
                        </option>

                        <option value="blockchain">
                            Blockchain
                        </option>

                        <option value="game-development">
                            Game Development
                        </option>

                        <option value="other">
                            Other
                        </option>

                    </select>

                </div>


                {/* ================================
                    TECHNOLOGIES / SKILLS REQUIRED
                ================================= */}

                <div className="form-group">

                    <label htmlFor="technologies">
                        Technologies / Skills Required
                    </label>

                    <input
                        id="technologies"
                        type="text"
                        placeholder="e.g. React, Node.js, MongoDB"
                    />

                </div>


                {/* ================================
                    VISIBILITY
                ================================= */}

                <div className="form-group">

                    <label>
                        Visibility
                    </label>

                    <div className="radio-group">

                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="public"
                                defaultChecked
                            />

                            Public
                        </label>

                        <label>
                            <input
                                type="radio"
                                name="visibility"
                                value="private"
                            />

                            Private
                        </label>

                    </div>

                </div>


                {/* ================================
                    TEAM REQUIREMENTS
                ================================= */}

                <div className="form-group">

                    <label htmlFor="teamSize">
                        Team Size
                    </label>

                    <input
                        id="teamSize"
                        type="number"
                        min="1"
                        max="20"
                        placeholder="Number of members"
                    />

                </div>


                {/* ================================
                    SKILLS LOOKING FOR
                ================================= */}

                <div className="form-group">

                    <label htmlFor="teamSkills">
                        What skills are you looking for?
                    </label>

                    <select id="teamSkills">

                        <option value="">
                            Select a skill
                        </option>

                        <option value="frontend">
                            Frontend Developer
                        </option>

                        <option value="backend">
                            Backend Developer
                        </option>

                        <option value="fullstack">
                            Full Stack Developer
                        </option>

                        <option value="ai-ml">
                            AI / ML Developer
                        </option>

                        <option value="data-science">
                            Data Scientist
                        </option>

                        <option value="ui-ux">
                            UI / UX Designer
                        </option>

                        <option value="devops">
                            DevOps
                        </option>

                        <option value="researcher">
                            Researcher
                        </option>

                        <option value="documentation">
                            Documentation
                        </option>

                        <option value="other">
                            Other
                        </option>

                    </select>

                </div>


                {/* ================================
                    AVAILABILITY
                ================================= */}

                <div className="form-group">

                    <label>
                        Availability
                    </label>

                    <div className="checkbox-group">

                        <label>
                            <input
                                type="checkbox"
                                name="availability"
                                value="weekdays"
                            />

                            Weekdays
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="availability"
                                value="weekends"
                            />

                            Weekends
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                name="availability"
                                value="flexible"
                            />

                            Flexible
                        </label>

                    </div>

                </div>


                {/* ================================
                    FORM ACTIONS
                ================================= */}

                <div className="form-actions">

                    <button
                        type="button"
                        onClick={handleBack}
                    >
                        ← Back
                    </button>

                    <button
                        type="button"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>

                    <button type="submit">
                        Create Project
                    </button>

                </div>

            </form>

        </div>
    );
};

export default ProjectForm;