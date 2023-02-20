/* eslint-disable @typescript-eslint/no-explicit-any */
import { TicketsActionTypes } from '../../types/ticketsType';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const API_BASE = 'https://aviasales-test-api.kata.academy/';

export const getIdSearch = () => {
  return async (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>) => {
    try {
      fetch(`${API_BASE}search`)
        .then((data) => data.json())
        .then(({ searchId }) => {
          dispatch({ type: TicketsActionTypes.SEARCH_ID, payload: searchId });

          return searchId;
        })
        .then((searchId) => {
          dispatch({ type: TicketsActionTypes.TICKETS_LOADING, payload: true });
          dispatch(fetchTickets(searchId));
        });
    } catch (e) {
      dispatch({
        type: TicketsActionTypes.TICKETS_ERROR,
        payload: true,
      });
    }
  };
};

const fetchTickets = (searchId: string) => {
  return async (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>) => {
    try {
      fetch(`${API_BASE}tickets?searchId=${searchId}`)
        .then((data) => {
          if (!data.ok) {
            throw data;
          }
          return data.json();
        })
        .then(({ tickets, stop }) => {
          dispatch({ type: TicketsActionTypes.TICKETS_LOADING, payload: true });

          dispatch({ type: TicketsActionTypes.TICKETS_SUCCESS, payload: tickets });
          if (!stop) dispatch(fetchTickets(searchId));
          if (stop) {
            dispatch({ type: TicketsActionTypes.TICKETS_LOADING, payload: false });
          }
        })
        .catch((error) => {
          if (error.status === 500) {
            dispatch(fetchTickets(searchId));
          } else {
            dispatch({ type: TicketsActionTypes.TICKETS_ERROR, payload: true });
            dispatch({ type: TicketsActionTypes.TICKETS_LOADING, payload: false });
          }
        });
    } catch (error: any) {
      dispatch({ type: TicketsActionTypes.TICKETS_ERROR, payload: true });
      dispatch({ type: TicketsActionTypes.TICKETS_LOADING, payload: false });
    }
  };
};
