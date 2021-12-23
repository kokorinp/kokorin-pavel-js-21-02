import { REGISTRATION_ON } from "../const/reg/actions";
import { RegistrationActionFunc } from "../types/reg/actions";
import { UserFullType } from "../types/api/api";

export const RegistrationOnAction: RegistrationActionFunc = (
  user: UserFullType
) => ({
  type: REGISTRATION_ON,
  user,
});
