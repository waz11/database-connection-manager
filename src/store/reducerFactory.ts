const reducerFactory = (initialState:any, handlers:any) => {
  return (state = initialState, action:any) => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
};

export default reducerFactory;