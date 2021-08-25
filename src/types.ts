export interface TicketType {
  name: string;
  description: string;
  laneId: number;
  ticketId?: number;
  openUpdate?: (name: string, description: string, ticketId?: number) => void;
  deleteTicket?: (ticketId?: number) => void;
}

export interface LaneType {
  name: string;
  laneId: number;
  tickets: TicketType[];
  addTicket: (targetTicketId: number, laneId: number) => void;
  openUpdate: (name: string, description: string) => void;
  deleteTicket: (ticketId?: number) => void;
}