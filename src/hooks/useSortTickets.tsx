import { ITickets } from '../types/ticketsType';

export const useSortTickets = (tickets: Array<ITickets> | any) => {
  const sortTickets = (selectedSort: string) => {
    switch (selectedSort) {
      case 'CHIP':
        return [...tickets].sort((a: any | number, b: any) => +a.price - +b.price);
      case 'FAST':
        return [...tickets].sort((a: any | number, b: any) => {
          const first = a.segments[0].duration + a.segments[1].duration;
          const second = b.segments[0].duration + b.segments[1].duration;
          return first - second;
        });
      case 'OPTIMAL':
        return [...tickets].sort((a: any | number, b: any) => {
          const first = a.segments[0].duration + a.segments[1].duration + +a.price;
          const second = b.segments[0].duration + b.segments[1].duration + +b.price;
          return first - second;
        });
      default:
        return tickets;
    }
  };
  return sortTickets;
};
