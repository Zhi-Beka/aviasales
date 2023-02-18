import { TicketsAction, TicketsActionTypes } from '../../types/ticketsType';
import { Dispatch } from 'redux';
import { getAllTickets } from '../../api/ticketsApi';

export const getTicketsThunk = () => {
  return async (dispatch: Dispatch<TicketsAction>) => {
    try {
      dispatch({ type: TicketsActionTypes.TICKETS_LOADING });
      const ticketsData = await getAllTickets();
      dispatch({ type: TicketsActionTypes.TICKETS_SUCCESS, payload: ticketsData });
    } catch (err) {
      dispatch({
        type: TicketsActionTypes.TICKETS_ERROR,
      });
    }
  };
};
