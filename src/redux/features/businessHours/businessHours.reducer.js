import * as t from "./constants";

const businessHours = (state = [], action) => {
  switch (action.type) {
    case t.CREATE_NEW_BUSINESS_HOURS:
      return [...state, action.item];

    default:
      return state;
  }
};

export { businessHours };
