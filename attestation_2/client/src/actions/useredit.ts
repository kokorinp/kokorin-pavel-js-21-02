import {
  USEREDIT_OFF,
  USEREDIT_ON,
  USEREDIT_UPDATE,
} from "../const/useredit/actions";

import { UserEditAction } from "../types/useredit/actions";
import { RegistrationActionFunc } from "../types/reg/actions";
import { UserFullType } from "../types/api/api";

export const userEditOnAction = (): UserEditAction => ({ type: USEREDIT_ON });
export const userEditOffAction = (): UserEditAction => ({ type: USEREDIT_OFF });

export const userEditUpdateAction: RegistrationActionFunc = (
  user: UserFullType
) => ({
  type: USEREDIT_UPDATE,
  user,
});
