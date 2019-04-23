import { createSelector } from '@ngrx/store';
import { AdminState, selectAdmin } from '../../../admin.state';
import { UserState } from '../reducers/user.reducer';

export const selectUser = createSelector(
    selectAdmin,
    (state: AdminState) => state.userState
);

export const selectUserData = createSelector(
    selectUser,
    (state: UserState) => state.users
);

export const selectUserPagination = createSelector(
    selectUser,
    (state: UserState) => state.pagination
);