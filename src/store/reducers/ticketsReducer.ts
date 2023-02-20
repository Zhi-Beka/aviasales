import { ITicketsState, TicketsAction, TicketsActionTypes } from '../../types/ticketsType';

const initialState: ITicketsState = {
  loading: true,
  ticketsData: [],

  searchId: '',
  error: false,
};

export const ticketsReducer = (state = initialState, action: TicketsAction) => {
  switch (action.type) {
    case TicketsActionTypes.TICKETS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case TicketsActionTypes.TICKETS_SUCCESS:
      return {
        ...state,

        ticketsData: [...state.ticketsData, ...action.payload],
      };

    case TicketsActionTypes.TICKETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TicketsActionTypes.SEARCH_ID: {
      if (action.payload) {
        return {
          ...state,
          searchId: action.payload,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
