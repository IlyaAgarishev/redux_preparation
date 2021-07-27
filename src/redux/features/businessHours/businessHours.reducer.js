import * as t from "./constants";

const initialState = {
  toggle: false,
  enteredData: { title: "", text: "", category: "other", nsfw: false },
  loading: false,
  error: false,
  toggleWarningPopup: false,
};

const addPostForm = (state = initialState, action) => {
  switch (action.type) {
    case t.TOGGLE_ADD_POST_FORM:
      return { ...state, toggle: action.payload };

    case t.SET_TITLE_ADD_POST_FORM:
      return {
        ...state,
        enteredData: { ...state.enteredData, title: action.payload },
      };

    case t.SET_TEXT_ADD_POST_FORM:
      return {
        ...state,
        enteredData: { ...state.enteredData, text: action.payload },
      };

    case t.SET_CATEGORY_ADD_POST_FORM:
      return {
        ...state,
        enteredData: { ...state.enteredData, category: action.payload },
      };

    case t.SET_NSWF_ADD_POST_FORM:
      return {
        ...state,
        enteredData: { ...state.enteredData, nsfw: !state.enteredData.nsfw },
      };

    case t.SEND_ADD_POST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case t.SEND_ADD_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        enteredData: { ...initialState.enteredData },
      };
    }

    case t.SEND_ADD_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case t.TOGGLE_WARNING_POPUP: {
      return {
        ...state,
        toggleWarningPopup: action.payload,
      };
    }

    default:
      return state;
  }
};

export { addPostForm };
