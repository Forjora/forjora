const CreateTypeSelection = ({ setCreateType, setshowCreateModal }) => {

    return (
        <div className="create-modal">

            <h2>Create New</h2>
            <p>What does the user desire?</p>

            <div className="create-options">

                <button
                    className="create-option"
                    onClick={() => setCreateType("event")}
                >
                    <span>📅</span>
                    <h2>Event</h2>
                </button>

                <button
                    className="create-option"
                    onClick={() => setCreateType("research")}
                >
                    <span>📃</span>
                    <h2>Research Paper</h2>
                </button>

                <button
                    className="create-option"
                    onClick={() => setCreateType("project")}
                >
                    <span>🚀</span>
                    <h2>Project</h2>
                </button>

                <div className="CreateTypeSelection-link">
                    <a
                        onClick={() => {
                            setCreateType(null);
                            setshowCreateModal(false);
                        }}
                    >
                        ← Back to dashboard
                    </a>
                </div>

            </div>

        </div>
    );
};

export default CreateTypeSelection;