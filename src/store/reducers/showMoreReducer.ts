interface IShowMore {
  show: number;
}

const initalState: IShowMore = {
  show: 5,
};

interface IShowMoreAction {
  type: string;
  payload: number;
}

export const showMoreReducer = (state = initalState, action: IShowMoreAction) => {
  if (action.type === 'Show more') {
    return {
      ...state,
      show: state.show + action.payload,
    };
  } else {
    return state;
  }
};
