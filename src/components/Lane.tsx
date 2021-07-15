import { TicketType } from "../types";
import Ticket from "./Ticket";

type Props = {
  name: string;
  laneId: number;
  tickets?: TicketType[];
  addTicket: () => void;
};

const Lane = ({ name, tickets, laneId, addTicket }: Props): JSX.Element => {
  const onDragOverHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("drag over");
  };

  const dropHandler = (event: any) => {
    event.preventDefault();
    console.log("drophandler");
    console.log(event.target.dataset.lane);
    addTicket();
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
          return <Ticket name={t.name} description={t.description} />;
        })}
    </div>
  );
};

export default Lane;
