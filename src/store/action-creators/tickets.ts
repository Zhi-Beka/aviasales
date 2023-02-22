/* eslint-disable @typescript-eslint/no-explicit-any */
import { TicketsObjectType, TicketsActionTypes, ITickets } from '../../types/ticketsType';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { v4 as uuidv4 } from 'uuid';

const API_BASE = 'https://aviasales-test-api.kata.academy/';

const setId = (id: string) => ({
  type: TicketsActionTypes.SEARCH_ID,
  payload: id,
});
const startLoading = (loading: boolean) => ({
  type: TicketsActionTypes.TICKETS_LOADING,
  payload: loading,
});

const cathError = (error: boolean | string) => ({
  type: TicketsActionTypes.TICKETS_ERROR,
  payload: error,
});

const getTicketsData = (data: TicketsObjectType) => ({
  type: TicketsActionTypes.TICKETS_SUCCESS,
  payload: data,
});

export const getIdSearch = () => {
  return (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>) => {
    try {
      fetch(`${API_BASE}search`)
        .then((data) => data.json())
        .then(({ searchId }) => {
          dispatch(setId(searchId));

          return searchId;
        })
        .then((searchId) => {
          dispatch(fetchTickets(searchId));
        });
    } catch (e) {
      dispatch(cathError(true));
    }
  };
};

export const fetchTickets = (searchId: string) => {
  return (dispatch: ThunkDispatch<Record<string, unknown>, Record<string, unknown>, AnyAction>) => {
    try {
      fetch(`${API_BASE}tickets?searchId=${searchId}`)
        .then((data) => {
          if (!data.ok) {
            throw data;
          }
          return data.json();
        })
        .then(({ tickets, stop }) => {
          const ticketsWithID = tickets.map((ticket: ITickets) => ({
            ...ticket,
            id: uuidv4(),
          }));
          dispatch(startLoading(true));
          dispatch(getTicketsData(ticketsWithID));
          if (!stop) dispatch(fetchTickets(searchId));
          if (stop) {
            dispatch(startLoading(false));
            return;
          }
        })
        .catch((error) => {
          if (error.status === 500) {
            dispatch(fetchTickets(searchId));
          } else {
            dispatch(cathError(true));
            dispatch(startLoading(false));
          }
        });
    } catch (error: any) {
      dispatch(cathError(error?.message));
      dispatch(startLoading(false));
    }
  };
};
