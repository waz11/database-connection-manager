import axios from "axios";
import { SERVER_URL } from "../../utils";
import actionTypes from "../actionTypes";

export const getConnections = () => {
  return async (dispatch: any) => {
    await axios
      .get(SERVER_URL)
      .then((response) => response.data)
      .then((connections) => {
        dispatch(setConnections(connections as any));
      });
  };
};

export const setConnections = (connections: any[]) => ({
  type: actionTypes.CONNECTIONS.SET_CONNECTIONS,
  payload: connections,
});

export const addConnection = (connection: any) => {
  return async (dispatch: any) => {
    await axios.post(SERVER_URL, connection);
    dispatch(getConnections());
  };
};
