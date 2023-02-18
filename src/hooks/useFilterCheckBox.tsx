import { useMemo } from 'react';
import { ITickets } from '../types/ticketsType';
import { useSortTickets } from './useSortTickets';

export const useFilterTickets = (activeFilter: Array<string>, tickets: Array<ITickets>, selectedSort: string) => {
  const sortTickets = useSortTickets(tickets);

  const filteredTickets = useMemo(() => {
    if (activeFilter.length === 4) {
      return sortTickets(selectedSort);
    } else if (activeFilter.length < 4) {
      return sortTickets(selectedSort).filter((ticket: ITickets) => {
        if (activeFilter.includes('NONE') && ticket.segments.some((item) => item.stops.length === 0)) {
          return true;
        }
        if (activeFilter.includes('ONE') && ticket.segments.some((item) => item.stops.length === 1)) {
          return true;
        }
        if (activeFilter.includes('TWO') && ticket.segments.some((item) => item.stops.length === 2)) {
          return true;
        }
        if (activeFilter.includes('THREE') && ticket.segments.some((item) => item.stops.length === 3)) {
          return true;
        }
        return false;
      });
    }
  }, [activeFilter, selectedSort, sortTickets]);

  return filteredTickets ? filteredTickets : tickets;
};
