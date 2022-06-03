const intialstate = [];

const Productreducers = (state = intialstate, action) => {
  switch (action.type) {
    case "GET_PRODUCTS": {
      return [...action.payload];
    }
    case "SEND_PRODUCTS": {
      return [action.payload, ...state];
    }
    case "SEND_UPDATE": {
      return state.map((ele) => {
        if (ele._id === action.payload._id) {
          return { ...state, ...action.payload };
        } else {
          return { ...ele };
        }
      });
    }
    default: {
      return [...state];
    }
  }
};
export default Productreducers;
