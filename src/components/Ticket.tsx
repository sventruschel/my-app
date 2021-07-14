import React from "react";

type TicketProps = { name: string; description: string; props?: any };

const dragHandler = (event: any) => {
    console.log('dragHandler')
    event.dataTransfer.setData("ticket", event.target.id);
  }
  



const Ticket = ({ name, description }: TicketProps): JSX.Element => (
    <div className="ticket" draggable="true" onDragStart={dragHandler}>
        <h4>{name}</h4>
        <hr />
        <p>{description}</p>
    </div>
  );


  export default Ticket;