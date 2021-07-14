import React from "react";

type Ticket = { name: string; description: string };

type Props = {
  name: string;
  tickets?: Ticket[];
};

const onDragOverHandler = (event: { preventDefault: () => void }) => {
  event.preventDefault();
  console.log("ayaya");
};

const Lane = ({ name, tickets }: Props): JSX.Element => (
  <div className="lane">
    <h4 className="title">{name}</h4>
    <div onDragOver={onDragOverHandler}>
      {tickets &&
        tickets.map((t) => (
          <div className="ticket" draggable="true">
            <h4>{t.name}</h4>
            <hr />
            <p>{t.description}</p>
          </div>
        ))}
    </div>
  </div>
);

export default Lane;
