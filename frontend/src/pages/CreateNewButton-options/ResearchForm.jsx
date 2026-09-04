const ResearchForm = ({ setshowCreateModal, setCreateType }) => {

    const handleBack = () => {
        setCreateType(null);
    };

    const handleCancel = () => {
        setCreateType(null);
        setshowCreateModal(false);
    };

    return (
        <div className="create-modal">

            <h2>Create Research Paper</h2>
            <p>Add the basic details of your research.</p>

            <form>

                <div className="form-group">
                    <label>Research Title</label>

                    <input
                        type="text"
                        placeholder="Enter research title"
                    />
                </div>

                <div className="form-group">
                    <label>Research Area</label>

                    <input
                        type="text"
                        placeholder="e.g. Artificial Intelligence"
                    />
                </div>

                <div className="form-group">
                    <label>Research Status</label>

                    <select>
                        <option value="">Select status</option>
                        <option value="idea">Idea</option>
                        <option value="literature-review">
                            Literature Review
                        </option>
                        <option value="in-progress">
                            In Progress
                        </option>
                        <option value="completed">
                            Completed
                        </option>
                        <option value="published">
                            Published
                        </option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Abstract / Description</label>

                    <textarea
                        placeholder="Briefly describe your research..."
                        rows="5"
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Research Keywords</label>

                    <input
                        type="text"
                        placeholder="AI, Machine Learning, Healthcare"
                    />
                </div>

                <div className="form-group">
                    <label>Team Members</label>

                    <input
                        type="text"
                        placeholder="Enter team members"
                    />
                </div>

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
                        Create Research
                    </button>

                </div>

            </form>

        </div>
    );
};

export default ResearchForm;