import { createSelector } from "reselect";

const connections = (state: any) => state.connections.connections;

export const connectionsSelector = createSelector(
  connections,
  (connections) => ({
    connections,
  })
);
