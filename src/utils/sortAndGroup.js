// Helper function to group tickets
export const groupTickets = (tickets, groupBy, users) => {
    switch (groupBy) {
      case 'user':
        return users.reduce((acc, user) => {
          acc[user.name] = tickets.filter(ticket => ticket.userId === user.id);
          return acc;
        }, {});
      case 'priority':
        const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
        return priorityLevels.reduce((acc, level, index) => {
          acc[level] = tickets.filter(ticket => ticket.priority === index);
          return acc;
        }, {});
      case 'status':
      default:
        return {
          Todo: tickets.filter(ticket => ticket.status === 'Todo'),
          InProgress: tickets.filter(ticket => ticket.status === 'In progress'),
          Done: tickets.filter(ticket => ticket.status === 'Done')
        };
    }
  };
  
  // Helper function to sort tickets
  export const sortTickets = (groupedTickets, sortBy) => {
    if (!sortBy) return groupedTickets;  // No sorting
  
    const sortedTickets = {};
    Object.keys(groupedTickets).forEach(group => {
      sortedTickets[group] = groupedTickets[group].slice().sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority;  // Descending priority
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);  // Ascending title
        }
        return 0;
      });
    });
  
    return sortedTickets;
  };
  