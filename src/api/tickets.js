export async function fetchTickets() {
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    const data = await response.json();
    console.log(data); // { tickets: [...], users: [...] }
    
    // Ensure that data.tickets is an array before returning it
    return Array.isArray(data.tickets) ? data.tickets : [];
}
  