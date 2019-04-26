
import { CategoryActions, CategoryActionTypes } from '../actions/category.actions';

export interface CategoryState {
  categories?: any;
  categoryOptions?: any;
}

export const initialState: CategoryState = {

};

export function categoryReducer(state = initialState, action: CategoryActions): CategoryState {
  switch (action.type) {

    case CategoryActionTypes.LoadCategorys:
      return state;

    default:
      return state;
  }
}
