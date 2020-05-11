const defaultState = {
  openMenu: false,
  entries: [],
  loading: false,
  errors: {},
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "VOTE_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "VOTE_FULFILLED": {
      return {
        ...state,
        celebrities: [...state.celebrities, action.payload.data],
        errors: {},
        loading: false,
      };
    }
    case "FETCH_ENTRIES": {
      return {
        ...state,
        entries: action.payload.data.data || action.payload.data,
      };
    }
    case "FETCH_ENTRIES_PENDING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "FETCH_ENTRIES_FULFILLED": {
      return {
        ...state,
        entries: action.payload.data,
        errors: {},
        loading: false,
      };
    }
    case "TOOGLE_MENU": {
      return {
        ...state,
        openMenu: !state.openMenu,
      };
    }
    default:
      return state;
  }
};
