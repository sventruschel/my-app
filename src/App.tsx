import React from "react";
import "./App.css";
import Lane from "./components/Lane";
import { TicketType } from "./types";

function App() {
  const [tickets, setTickets] = React.useState([
    {
      name: "Feed the dog",
      description: "Don't forget to buy some dog food!",
      laneId: 1,
    },
    {
      name: "Feed the dog 2",
      description: "Don't forget to buy some dog food!",
      laneId: 2,
    },
  ]);

  const addTicket = () => {
    alert("test");
  };

  const [lanes, setLanes] = React.useState([
    { id: 1, title: "Todo" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Coole Lane" },
    { id: 4, title: "Fantastische Lane" },
  ]);

  const returnTicketsAlt = (tickets: TicketType[], laneId: number) => {
    return tickets.filter((ticket) => ticket.laneId === laneId);
  };

  return (
    <div className="App">
      {lanes.map((lane) => {
        return (
          <Lane
            name={lane.title}
            laneId={lane.id}
            key={lane.id}
            tickets={returnTicketsAlt(tickets, lane.id)}
            addTicket={addTicket}
          />
        );
      })}
    </div>
  );
}

export default App;
