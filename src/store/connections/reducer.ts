import actionTypes from "../actionTypes";
import reducerFactory from "../reducerFactory";

const initialState = { connections: [] };

const handlers = {
  [actionTypes.CONNECTIONS.SET_CONNECTIONS]: (state: any, action: any) => ({
    ...state,
    connections: action.payload,
  }),
};

const connectionsReducer = reducerFactory(initialState, handlers);

export default connectionsReducer;
