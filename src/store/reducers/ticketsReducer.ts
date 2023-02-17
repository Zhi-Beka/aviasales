import { ITicketsState, TicketsAction, TicketsActionTypes } from '../../types/ticketsType';

const initialState: ITicketsState = {
  ticketsData: [],
  loading: false,
  error: false,
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  switch (action.type) {
    case TicketsActionTypes.TICKETS_LOADING:
      return {
        loading: true,
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
        error: true,
      };
    default:
      return state;
  }
};
