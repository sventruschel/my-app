import { TicketType } from "../types";
import Ticket from "./Ticket";

type Props = {
  name: string;
  laneId: number;
  tickets?: TicketType[];
  addTicket: (targetTicketId: number, laneId: number) => void;
};

const Lane = ({ name, tickets, laneId, addTicket }: Props): JSX.Element => {
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
            />
          );
        })}
    </div>
  );
};

export default Lane;
