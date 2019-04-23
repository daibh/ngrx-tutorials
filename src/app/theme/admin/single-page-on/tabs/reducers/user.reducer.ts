
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface UserState {
  users?: any[];
  pagination?: {
    totalRecord: number;
    page: number;
    pageSize: number;
  }
  error?: any;
}

export const initialState: UserState = {
  pagination: {
    totalRecord: 0,
    page: 1,
    pageSize: 15
  }
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      console.log('page: ', state.pagination);
      return {
        ...state,
        error: null
      };
    case UserActionTypes.LoadUsersSuccess:
      const users = action.payload.response.data;
      console.log('aaaaa: ', action.payload.response);
      return {
        ...state,
        users: users
      };
    case UserActionTypes.LoadUsersFailed:
      return {
        ...state,
        error: action.payload.error
      };
    case UserActionTypes.ChangePageUsers:
      return {
        ...state,
        pagination: {
          totalRecord: state.pagination.totalRecord,
          page: action.payload.page,
          pageSize: state.pagination.pageSize
        }
      }

    case UserActionTypes.StorePaginationUsers:
      const pagination = {
        page: action.payload.response.current_page,
        pageSize: action.payload.response.per_page,
        totalRecord: action.payload.response.total
      };
      return {
        ...state,
        pagination: pagination
      };
    default:
      return state;
  }
}
