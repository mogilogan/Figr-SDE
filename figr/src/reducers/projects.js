import * as actionType from "../constants/actionTypes";

const projectReducer = (state = { projectDetails: [], names: [] }, action) => {
  switch (action.type) {
    case actionType.FETCH_PROJECT:
      return {
        ...state,
        projectDetails: action.data.Projects,
        loading: false,
        errors: null,
      };
      case actionType.UPDATE_PROJECT:
      return {
        ...state,
        projectDetails: action.data.result,
        loading: false,
        errors: null,
      };
    case actionType.FETCH_PROJECTS:
      return {
        ...state,
        names: action.data.Projects,
        loading: false,
        errors: null,
      };
    case actionType.CREATE_PROJECT:
      return {
        ...state,
        names: [...state.names, ...action.data.result.name], // Assuming action.data.Projects contains the new array
        loading: false,
        errors: null,
      };
      case actionType.CLEAR_PROJECT:
        return {
          ...state,
          projectDetails: [], // Clear array
          loading: false,
          errors: null,
        };

    default:
      return state;
  }
};

export default projectReducer;
