const defaultState = {
  openMenu: false,
  celebrities: [],
  celebrity: {},
  loading: false,
  errors: {}
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "VOTE_PENDING": {
      return {
        ...state,
        loading: true
      };
    }
    case "VOTE_FULFILLED": {
      return {
        ...state,
        celebrities: [...state.celebrities, action.payload.data],
        errors: {},
        loading: false
      };
    }
    case "FETCH_ENTRIES": {
      return {
        ...state,
        total: action.payload.data.total, // needed for pagination
        orders: action.payload.data.data || action.payload.data // in case pagination is disabled
      };
    }
    case "FETCH_ENTRIES_PENDING": {
      return {
        ...state,
        loading: true,
        order: {}
      };
    }
    case "FETCH_ENTRIES_FULFILLED": {
      return {
        ...state,
        order: action.payload.data,
        errors: {},
        loading: false
      };
    }
    case "TOOGLE_MENU": {
      return {
        ...state,
        openMenu: !state.openMenu
      };
    }
    default:
      return state;
  }
};
