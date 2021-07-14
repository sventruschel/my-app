import { ComponentProps } from "react";

import "./Ticket";
import Ticket from "./Ticket";

type Props = {
  name: string;
  laneId: number;
  tickets?: ComponentProps<typeof Ticket>[] ;
};

const onDragOverHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault();
  console.log("drag over");
};

const dropHandler = (event: any) => {
  event.preventDefault();
  console.log("drophandler");
  console.log(event.target)
  console.log(event)
  // var data = event.dataTransfer.getData("ticket");
  // event.target.appendChild(document.getElementById(data));
};

const Lane = ({ name, tickets, laneId }: Props): JSX.Element => (
  <div className="lane" onDragOver={onDragOverHandler} onDrop={dropHandler} data-lane-id={laneId}>
    <h4 className="title">{name}</h4>
    {/* {tickets &&
        tickets.map((t) => (

          
        ))} */}
    {tickets &&
      tickets.map((t) => {
        console.log({'t': t.props})
        return <Ticket name={t.props.name} description={t.props.description} />;
      })}
  </div>
);

export default Lane;
