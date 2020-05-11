import { client } from "./";

const url = "/celebrities";

export function fetchEntries() {
  return (dispatch) => {
    client.get(`${url}`).then((response) =>
      dispatch({
        type: "FETCH_ENTRIES",
        payload: response,
      })
    );
  };
}

export function vote(celebrity) {
  return (dispatch) => {
    return dispatch({
      type: "VOTE",
      payload: client.put(`${url}/${celebrity._id}`, celebrity),
    });
  };
}

export function toggleMenu() {
  return (dispatch) => {
    return dispatch({
      type: "TOOGLE_MENU",
    });
  };
}
