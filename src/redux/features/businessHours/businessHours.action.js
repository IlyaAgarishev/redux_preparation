import * as t from "./constants";

const one = () => {
  return {
    type: t.SEND_ADD_POST_SUCCESS,
  };
};

const two = () => {
  return {
    type: t.SEND_ADD_POST_ERROR,
  };
};

export { one, two };
