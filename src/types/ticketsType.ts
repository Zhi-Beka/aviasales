export type TicketsObjectType = ITickets[];

export interface ITickets {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
  ];
}

export interface IPayloadData {
  tickets: TicketsObjectType;
  stop: boolean;
}

export interface ITicketsState {
  loading: boolean;
  ticketsData: TicketsObjectType;
  //stopLoading: boolean;
  searchId: string;
  error: boolean | string;
}

export enum TicketsActionTypes {
  TICKETS_LOADING = 'TICKETS_LOADING',
  TICKETS_SUCCESS = 'TICKETS_SUCCESS',
  TICKETS_ERROR = 'ERROR_TICKETS',
  SEARCH_ID = 'SEARCH_ID',
}

interface getTicketsActionsLoading {
  type: TicketsActionTypes.TICKETS_LOADING;
  payload: boolean;
}

interface getTicketsActionsSuccess {
  type: TicketsActionTypes.TICKETS_SUCCESS;
  payload: TicketsObjectType;
}

interface getTicketsActionsError {
  type: TicketsActionTypes.TICKETS_ERROR;
  payload: string;
}

interface getIdSearchAction {
  type: TicketsActionTypes.SEARCH_ID;
  payload: string;
}

export type TicketsAction =
  | getTicketsActionsLoading
  | getTicketsActionsError
  | getTicketsActionsSuccess
  | getIdSearchAction;
