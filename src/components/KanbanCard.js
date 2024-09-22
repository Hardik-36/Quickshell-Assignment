// import React from 'react';
// import '../styles/KanbanCard.css';

// const KanbanCard = ({ ticket, user }) => {
//     return (
//         <div className="kanban-card">
//             <div className="kanban-card-header">
//                 <h4>{ticket.id}</h4>
//                 <img src={user.avatarUrl} alt={user.name} className="user-avatar" />
//             </div>
//             <h3 className="kanban-card-title">{ticket.title}</h3>
//             <div className="kanban-card-footer">
//                 <span className="tag-icon">❗</span>
//                 <span className="kanban-card-tag">Feature Request</span>
//             </div>
//         </div>
//     );
// };

// export default KanbanCard;


import React from 'react';
import '../styles/KanbanCard.css';

const KanbanCard = ({ ticket, user }) => {
    return (
        <div className="kanban-card">
            <div className="kanban-card-id">
                <h6 className='idd'>{ticket.id}</h6>
                </div>
            
            <div className="kanban-card-header">
                <h3 className="kanban-card-title">{ticket.title}</h3>
                <img src={user.avatarUrl} alt={user.name} className="user-avatar" />
            </div>

            <div className="kanban-card-footer">
                <span className="kanban-card-tag">
                    <h6>{ticket.tag[0]}</h6>
                </span>
            </div>
        </div>
    );
};

export default KanbanCard;