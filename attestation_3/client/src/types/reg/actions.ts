import Action from '../action';
import { UserFullType } from '../api/api';

export interface RegistrationAction extends Action {
  user: UserFullType;
}

export interface RegistrationActionFunc {
  (user: UserFullType): RegistrationAction;
}
