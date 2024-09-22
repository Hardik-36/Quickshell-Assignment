import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import { fetchTickets } from './api/tickets'; // Updated function name
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch tickets and users from API
    fetchTickets().then(data => {
      setTickets(data.tickets || []);  // Assuming data contains both tickets and users
      setUsers(data.users || []);      // Assuming data contains users
    });
  }, []);

  return (
    <div className="App">
      <KanbanBoard tickets={tickets} users={users} />
    </div>
  );
}

export default App;
