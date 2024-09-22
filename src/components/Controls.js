import React, { useState } from 'react';
import '../styles/Controls.css';

const Controls = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="controls-container">
            <button className="controls-button" onClick={toggleModal}>
                Display
            </button>
            {showModal && (
                <div className="controls-modal">
                    <div className="modal-content">
                        <div className="group-by">
                            <label>Group by:</label>
                            <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
                                <option value="status">Status</option>
                                <option value="user">User</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>
                        <div className="sort-by">
                            <label>Sort by:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="none">None</option>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                        <button className="close-button" onClick={toggleModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Controls;
