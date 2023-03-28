import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  isLoadingPosition: false,
  isLoadingRole: false,
  genders: [],
  roles: [],
  positions: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      state.genders = action.data;
      state.isLoadingGender = true;
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      state = { ...state };
      state.genders = action.data;
      state.isLoadingGender = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAIL:
      state.genders = [];
      state.isLoadingGender = false;
      return {
        ...state,
      };

    case actionTypes.FETCH_POSITION_START:
      state.genders = action.data;
      state.isLoadingPosition = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_SUCCESS:
      state = { ...state };
      state.positions = action.data;
      state.isLoadingPosition = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_POSITION_FAIL:
      state.positions = [];
      state.isLoadingPosition = false;
      return {
        ...state,
      };

    case actionTypes.FETCH_ROLE_START:
      state.genders = action.data;
      state.isLoadingRole = true;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_SUCCESS:
      state = { ...state };
      state.roles = action.data;
      state.isLoadingRole = false;
      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAIL:
      state.roles = [];
      state.isLoadingRole = false;
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
