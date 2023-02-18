import { ITicketsState, TicketsAction, TicketsActionTypes } from '../../types/ticketsType';

const initialState: ITicketsState = {
  loading: false,
  ticketsData: [],
  error: false,
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  switch (action.type) {
    case TicketsActionTypes.TICKETS_LOADING:
      return {
        loading: true,
        ticketsData: [],
        error: false,
      };

    case TicketsActionTypes.TICKETS_SUCCESS:
      return {
        loading: false,
        ticketsData: action.payload,
        error: false,
      };

    case TicketsActionTypes.TICKETS_ERROR:
      return {
        loading: false,
        ticketsData: [],
        error: true,
      };

    default:
      return state;
  }
};
