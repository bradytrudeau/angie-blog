const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESTAURANT':
      return action.payload;
    default:
      return state;
  }
}

export default restaurantReducer;