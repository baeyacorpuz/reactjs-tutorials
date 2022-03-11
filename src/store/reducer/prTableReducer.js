import * as ACTION from "../actions/action-types";

const initialState = {
  data: [],
  isLoading: true,
  searchParams: {
    page: 1,
    limit: 10,
    sortBy: "",
    orderBy: "",
  },
};

const prTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.PRTABLE_SET_DATA:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case ACTION.PRTABLE_SET_LIMIT:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          limit: action.payload,
          page: 1,
        },
      };
    case ACTION.PRTABLE_SET_PAGE_NUMBER:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          page: action.payload,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default prTableReducer;
