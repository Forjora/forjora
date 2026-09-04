const EventForm = ({ setshowCreateModal, setCreateType }) => {

    const handleBack = () => {
        setCreateType(null);
    };

    const handleCancel = () => {
        setCreateType(null);
        setshowCreateModal(false);
    };

    return (
        <div className="create-modal">

            <h2>Create Event</h2>
            <p>Fill in the details for your event.</p>

            <form>

                <div className="form-group">
                    <label>Event Name</label>
                    <input
                        type="text"
                        placeholder="Enter event name"
                    />
                </div>

                <div className="form-row">

                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <input type="time" />
                    </div>

                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input
                        type="text"
                        placeholder="Online / Chandigarh / etc."
                    />
                </div>

                <div className="form-group">
                    <label>Event Type</label>

                    <select>
                        <option value="">Select event type</option>
                        <option value="hackathon">Hackathon</option>
                        <option value="workshop">Workshop</option>
                        <option value="seminar">Seminar</option>
                        <option value="competition">Competition</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Description</label>

                    <textarea
                        placeholder="Describe your event..."
                        rows="4"
                    ></textarea>
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
                        Create Event
                    </button>

                </div>

            </form>

        </div>
    );
};

export default EventForm;