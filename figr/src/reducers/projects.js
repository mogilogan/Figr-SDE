import * as actionType from "../constants/actionTypes";

const projectReducer = (state = { project: null, names: [] }, action) => {
    switch (action.type) {
      case actionType.FETCH_PROJECT:
        return { ...state, project: action.data, loading: false, errors: null };
      case actionType.FETCH_PROJECTS:
        return { ...state, names: action.data.Projects, loading: false, errors: null };
        case actionType.CREATE_PROJECT:
            return {
                ...state,
                names: [...state.names, ...action.data.Projects], // Assuming action.data.Projects contains the new array
                loading: false,
                errors: null
              };
  
      default:
        return state;
    }
  };
  

export default projectReducer;
