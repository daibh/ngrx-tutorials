
import { CategoryActions, CategoryActionTypes } from '../actions/category.actions';

export interface CategoryState {
  categories?: any;
  categoryOptions?: any;
  error?: any;
}

export const initialState: CategoryState = {

};

export function categoryReducer(state = initialState, action: CategoryActions): CategoryState {
  switch (action.type) {

    case CategoryActionTypes.LoadCategory:
      return { ...state, error: null };

    case CategoryActionTypes.LoadCategorySuccess:
      return { ...state, categories: action.payload.categories };

    case CategoryActionTypes.LoadCategoryFailed:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}
