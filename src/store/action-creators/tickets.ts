import { TicketsAction, TicketsActionTypes } from '../../types/ticketsType';
import { Dispatch } from 'redux';
import axios from 'axios';

const ApiBase = 'https://aviasales-test-api.kata.academy/';

export const getID = async () => {
  const res = await axios.get(`${ApiBase}search`);
  const data = await res.data;
  return data.searchId;
};

export const getTickets = (id: string) => {
  const url = `${ApiBase}tickets?searchId=${id}`;
  return async (dispatch: Dispatch<TicketsAction>) => {
    try {
      dispatch({ type: TicketsActionTypes.TICKETS_LOADING });
      const res = await axios.get(url);
      dispatch({ type: TicketsActionTypes.TICKETS_SUCCESS, payload: res.data.tickets });
    } catch (err) {
      dispatch({
        type: TicketsActionTypes.TICKETS_ERROR,
        payload: true,
      });
    }
  };
};
