import { client } from "./";

const url = "/celebrities";

// fetch orders and then dispatch the action 'FETCH_ORDERS'
export function fetchEntries({ pageSize }) {
  let pagination = `?$limit=${pageSize}`;
  return dispatch => {
    client.get(`${url}${pagination}`).then(response =>
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

export function saveOrder(order) {
  return dispatch => {
    return dispatch({
      type: "SAVE_ORDER",
      payload: client.post(url, order)
    });
  };
}

export function deleteOrders(_id) {
  return dispatch => {
    return dispatch({
      type: "DELETE_ORDER",
      payload: client.delete(`${url}/${_id}`)
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


