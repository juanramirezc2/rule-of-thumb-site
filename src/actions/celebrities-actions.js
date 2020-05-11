import { client } from "./";

const url = "/celebrities";

// fetch orders and then dispatch the action 'FETCH_ORDERS'
export function fetchEntries() {
  return dispatch => {
    client.get(`${url}`).then(response =>
      dispatch({
        type: "FETCH_ENTRIES",
        payload: response
      })
    );
  };
}

export function newOrder() {
  return dispatch => {
    dispatch({
      type: "NEW_ORDER"
    });
  };
}

export function vote(celebrity) {
  return dispatch => {
    return dispatch({
      type: "VOTE",
      payload: client.put(`${url}/${celebrity._id}`, celebrity)
    });
  };
}

export function toggleMenu() {
  return dispatch => {
    return dispatch({
      type: "TOOGLE_MENU"
    });
  };
}


