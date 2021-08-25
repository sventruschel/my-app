import React, { FormEventHandler } from "react";
import "./App.css";
import Lane from "./components/Lane";
import { TicketType } from "./types";
import Modal from "./components/Modal";
import CardForm from "./components/CardForm";

//Use Reducer, Use Context

function App() {
  const [tickets, setTickets] = React.useState([
    {
      name: "Feed the dog",
      description: "Don't forget to buy some dog food!",
      laneId: 1,
      ticketId: 1,
    },
    {
      name: "Feed the dog 2",
      description: "Don't forget to buy some dog food!",
      laneId: 2,
      ticketId: 2,
    },
  ]);

  const [lanes, setLanes] = React.useState([
    { id: 1, title: "Todo" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Coole Lane" },
    { id: 4, title: "Fantastische Lane" },
  ]);

  const [show, setShow] = React.useState(false);

  const addTicket = (targetTicketId: number, laneId: number) => {
    if (isNaN(laneId)) return;
    let new_tickets = tickets;
    let index = new_tickets.findIndex((t) => t.ticketId === +targetTicketId);
    new_tickets[index].laneId = +laneId;
    setTickets([...new_tickets]);
  };

  const returnTicketsAlt = (tickets: TicketType[], laneId: number) => {
    return tickets.filter((ticket) => ticket.laneId === laneId);
  };

  const submitHandler = (ticket: TicketType, event: any): void => {
    event.preventDefault();
    const new_ticket_id =
      Math.max.apply(
        Math,
        tickets.map(function (o) {
          return o.ticketId;
        })
      ) + 1;

    ticket.ticketId = new_ticket_id;

    setTickets([
      ...tickets,
      {
        name: ticket.name,
        description: ticket.description,
        laneId: 1,
        ticketId: new_ticket_id,
      },
    ]);
  };

  return (
    <>
      <button className="addButton" onClick={() => setShow(true)}>
        Add Card
      </button>
      <Modal show={show} onClose={() => setShow(false)} title="Add Card">
        <CardForm submitHandler={submitHandler} />
      </Modal>
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
    </>
  );
}

export default App;
