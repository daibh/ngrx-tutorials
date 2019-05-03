import { HttpErrorResponse } from '@angular/common/http';
import { MainMenuItems } from '../../shared/menu-items/menu-items';
import { ICredentials } from '../../shared/model/credentials.model';
import { IUser } from '../../shared/model/user.model';

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  credentials?: ICredentials;
  token?: string;
  error?: HttpErrorResponse;
  account?: IUser;
  menu?: MainMenuItems[];
  tabs?: MainMenuItems[];
  tab?: string;
  mustChangePassword?: boolean;
}

export interface AuthenticateResponse {
  token: string;
}
