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

export interface ITicketsState {
  loading: boolean;
  ticketsData: TicketsObjectType;
  error: boolean;
}

export enum TicketsActionTypes {
  TICKETS_LOADING = 'TICKETS_LOADING',
  TICKETS_SUCCESS = 'TICKETS_SUCCESS',
  TICKETS_ERROR = 'ERROR_TICKETS',
}

interface getTicketsActionsLoading {
  type: TicketsActionTypes.TICKETS_LOADING;
}

interface getTicketsActionsSuccess {
  type: TicketsActionTypes.TICKETS_SUCCESS;
  payload: TicketsObjectType;
}

interface getTicketsActionsError {
  type: TicketsActionTypes.TICKETS_ERROR;
}

export type TicketsAction = getTicketsActionsLoading | getTicketsActionsError | getTicketsActionsSuccess;
