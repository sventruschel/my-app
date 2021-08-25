import React from "react";
import { TicketType } from "../types";

const Ticket = ({ name, description, ticketId }: TicketType): JSX.Element => {
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
      <h4>{name}</h4>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default Ticket;
