import { createSelector } from '@ngrx/store';
import { AdminState, selectAdmin } from '../../../admin.state';
import { CategoryState } from '../reducers/category.reducer';

export const selectCategory = createSelector(
    selectAdmin,
    (state: AdminState) => state.categoryState
);

export const selectCategories = createSelector(
    selectCategory,
    (state: CategoryState) => state.categories
);