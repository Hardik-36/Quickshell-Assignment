import React from 'react';
import '../styles/TicketCard.css';
import { priorityData, statusIcons } from './data'; 

const TicketCard = ({ ticket, users }) => {

    return (
        <div className="ticket-card">
            <h6>{ticket.id}</h6>
            <div className="ticket-header">
                
                <h3>{ticket.title}</h3>
                
            </div>
            <div className="ticket-body">
                <p>{ticket.description}</p>
            </div>
            <div className="ticket-footer">
           
                <img 
                        src={priorityData[ticket.priority].icon} 
                        alt={`Priority: ${priorityData[ticket.priority].text}`} 
                        className="priority-icon" 
                />
                
           
                <img 
                        src={statusIcons[ticket.status] || statusIcons['To Do']} 
                        alt={`Status: ${ticket.status}`} 
                        className="status-icon" 
                        
                />
                
                <h5>{ticket.tag[0]}</h5>
                
               
            </div>
        </div>
    );
};

export default TicketCard;
