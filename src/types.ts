export interface TicketType {
  name: string;
  description: string;
  laneId: number;
  ticketId?: number;
}
//https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
//Jest for testing
//https://github.com/testing-library/jest-dom#with-typescript

export interface LaneType {
  name: string;
  laneId: number;
  tickets: TicketType[];
  addTicket: (targetTicketId: number, laneId: number) => void;
  openUpdate: (name: string, description: string) => void;
  deleteTicket: (ticketId: number) => void;
}
