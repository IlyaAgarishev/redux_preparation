import * as t from "./constants";

const createNewBusinessHours = (item) => {
  return {
    type: t.CREATE_NEW_BUSINESS_HOURS,
    item,
  };
};

export { createNewBusinessHours };
