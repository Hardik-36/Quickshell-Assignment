import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import HighPriorityIcon from '../assets/high-priority.svg';
import LowPriorityIcon from '../assets/low-priority.svg';
import MediumPriorityIcon from '../assets/medium-priority.svg';
import NoPriorityIcon from '../assets/no-priority.svg';
import UrgentIcon from '../assets/urgent.svg';
import menu from '../assets/menu.svg';
import add from'../assets/add.svg';
import '../styles/KanbanBoard.css';
import Controls from './Controls'; 

const priorityData = {
    0: { text: 'No priority', icon: NoPriorityIcon },
    4: { text: 'Urgent', icon: UrgentIcon },
    3: { text: 'High', icon: HighPriorityIcon },
    2: { text: 'Medium', icon: MediumPriorityIcon },
    1: { text: 'Low', icon: LowPriorityIcon },
};

const priorityOrder = [0, 4, 3, 2, 1];

function KanbanBoard() {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [grouping, setGrouping] = useState('priority');
    const [sortCriteria, setSortCriteria] = useState('priority');

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const data = await response.json();
            setTickets(data.tickets || []);
            setUsers(data.users || []);
        }
        fetchData();
    }, []);

    // Group tickets by User ID
    const groupTicketsByUser = () => {
        return tickets.reduce((acc, ticket) => {
            const userId = ticket.userId ; // Corrected property from assignedUserId to userId
            if (!acc[userId]) acc[userId] = [];
            acc[userId].push(ticket);
            return acc;
        }, {});
    };

    const groupTicketsByPriority = () => {
        return tickets.reduce((acc, ticket) => {
            if (!acc[ticket.priority]) acc[ticket.priority] = [];
            acc[ticket.priority].push(ticket);
            return acc;
        }, {});
    };

    const groupTicketsByStatus = () => {
        return tickets.reduce((acc, ticket) => {
            const status = ticket.status ;
            if (!acc[status]) acc[status] = [];
            acc[status].push(ticket);
            return acc;
        }, {});
    };

    const sortTickets = (ticketsArray) => {
        return ticketsArray.sort((a, b) => {
            if (sortCriteria === 'priority') {
                return b.priority - a.priority; // Descending order
            } else if (sortCriteria === 'title') {
                return a.title.localeCompare(b.title); // Ascending order
            }
            return 0;
        });
    };

    let groupedTickets;
    if (grouping === 'priority') {
        groupedTickets = groupTicketsByPriority();
    } else if (grouping === 'user') {
        groupedTickets = groupTicketsByUser();
    } else if (grouping === 'status') {
        groupedTickets = groupTicketsByStatus();
    }

    return (
        <div>
            <div className='control'>
            <Controls
            
            groupBy={grouping}
            setGroupBy={setGrouping}
            sortBy={sortCriteria}
            setSortBy={setSortCriteria}
        />
         
            </div>
            <div className='images'>
            <img src={menu} className='menu'></img>
            <img src={add} className='add'></img>
            </div>
            
            <div className="kanban-board">
            
            
            {grouping === 'priority' ? (
                priorityOrder.map((priority) => (
                    <div key={priority} className="priority-column">
                        <div className="priority-header">
                            <img
                                src={priorityData[priority].icon}
                                alt={`Priority: ${priorityData[priority].text}`}
                                className="priority-icon"
                            />
                            <h3>{priorityData[priority].text}</h3>
                        </div>
                        <div className="tickets">
                            {sortTickets(groupedTickets[priority] || []).map(ticket => (
                                <TicketCard key={ticket.id} ticket={ticket} users={users} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                Object.keys(groupedTickets).map((key) => (
                    <div key={key} className="group-column">
                        <h3>{grouping === 'user' ? users.find(user => user.id === key)?.name || 'Unassigned' : key}</h3>
                        <div className="tickets">
                            {sortTickets(groupedTickets[key] || []).map(ticket => (
                                <TicketCard key={ticket.id} ticket={ticket} users={users} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
        </div>
        
    );
}

export default KanbanBoard;
