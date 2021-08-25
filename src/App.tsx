import React from "react";
import "./App.css";
import { TicketType } from "./types";
import { LaneType } from "./types";
import Modal from "./components/Modal";
import CardForm from "./components/CardForm";

const Lane = ({ name, tickets, laneId, addTicket, openUpdate, deleteTicket }: LaneType): JSX.Element => {
  const onDragOverHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("drag over");
  };

  const dropHandler = (event: any) => {
    event.preventDefault();
    console.log("drophandler");
    var data = event.dataTransfer.getData("ticket");
    console.log("laneId ", event.target.dataset.lane);
    console.log("ticketId ", data);
    addTicket(data, event.target.dataset.lane);
  };

  return (
    <div
      className="lane"
      onDragOver={onDragOverHandler}
      onDrop={dropHandler}
      data-lane={laneId}
    >
      <h4 className="title">{name}</h4>
      {tickets &&
        tickets.map((t) => {
          return (
            <Ticket
              key={t.ticketId}
              name={t.name}
              description={t.description}
              ticketId={t.ticketId}
              openUpdate={openUpdate}
              deleteTicket={deleteTicket}
            />
          );
        })}
    </div>
  );
};

const Ticket = ({ name, description, ticketId, openUpdate, deleteTicket }: TicketType): JSX.Element => {
  const dragHandler = (event: any) => {
    console.log("dragHandler");
    event.dataTransfer.setData("ticket", ticketId);
  };

  return (
    <div
      className="ticket"
      data-ticket-id={ticketId}
      draggable="true"
      onDragStart={dragHandler}
    >
      <button onClick={openUpdate ? () => openUpdate(name, description, ticketId) : undefined}> <img width='16' height='16' src='https://image.flaticon.com/icons/png/512/481/481874.png' alt=''/></button>
      <button onClick={deleteTicket ? () => deleteTicket(ticketId) : undefined}><img width='16' height='16' src='https://image.flaticon.com/icons/png/512/1214/1214428.png' alt=''/></button>
      <h4>{name}</h4>
      <hr />
      <p>{description}</p>
    </div>
  );
};


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

  const [lanes] = React.useState([
    { id: 1, title: "Todo" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Coole Lane" },
    { id: 4, title: "Fantastische Lane" },
  ]);

  const [showCreate, setShowCreate] = React.useState(false);
  const [showUpdate, setShowUpdate] = React.useState(false);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [ticketId, setTicketId] = React.useState(0);


  const newTicket = (ticket: TicketType, event: any): void => {
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
    setShowCreate(false)
  };

  const addTicket = (targetTicketId: number, laneId: number) => {
    if (isNaN(laneId)) return;
    let new_tickets = tickets;
    let index = new_tickets.findIndex((t) => t.ticketId === +targetTicketId);
    new_tickets[index].laneId = +laneId;
    setTickets([...new_tickets]);
  };

  const deleteTicket = (ticketId?: number) => {
    debugger
    // const new_tickets = ticketId ? tickets.splice(1, index) : tickets
    let new_tickets = tickets.filter((t) => t.ticketId !== ticketId);
    setTickets([...new_tickets]);
  }

  const openUpdate = (name?: string, description?: string, ticketId?: number) => {
    setShowUpdate(true);
    name && setName(name)
    description && setDescription(description)
    ticketId && setTicketId(ticketId)
  }

  const updateTicket = (targetTicket: TicketType, event: any): void => {
    event.preventDefault();


    let new_tickets = tickets;
    let index = new_tickets.findIndex((t) => t.ticketId === targetTicket.ticketId);
    new_tickets[index].name = targetTicket.name;
    new_tickets[index].description = targetTicket.description;

    setTickets([...new_tickets]);
    setShowUpdate(false)
  };

  const returnTicketsAlt = (tickets: TicketType[], laneId: number) => {
    return tickets.filter((ticket) => ticket.laneId === laneId);
  };

  return (
    <>
      <button className="addButton" onClick={() => setShowCreate(true)}>
        Add Card
      </button>
      <Modal show={showCreate} onClose={() => setShowCreate(false)} title="Add Card" >
        <CardForm submitHandler={newTicket}  />
      </Modal>
      <Modal show={showUpdate} onClose={() => setShowUpdate(false)} title="Update Card">
        <CardForm submitHandler={updateTicket} nameValue={name} descriptionValue={description} idValue={ticketId} />
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
              openUpdate={openUpdate}
              deleteTicket={deleteTicket}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
