import { ITickets } from '../types/ticketsType';

export const useSortTickets = (tickets: Array<ITickets>) => {
  const sortTickets = (selectedSort: string) => {
    switch (selectedSort) {
      case 'CHIP':
        return [...tickets].sort((a, b) => a.price - b.price);
      case 'FAST':
        return [...tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration);
      case 'OPTIMAL':
        return [...tickets].sort((a, b) => a.price - b.price - (b.segments[0].duration - a.segments[0].duration));
      default:
        return tickets;
    }
  };
  return sortTickets;
};
