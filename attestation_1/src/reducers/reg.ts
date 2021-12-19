import produce from "immer";
import { RegistrationAction } from "../types/reg/actions";
import { REGISTRATION_ON } from "../const/reg/actions";
import { RegistrationState } from "../types/reg/state";

const initState = {
  isRegistration: false,
};

const registrationReducer = (
  state: RegistrationState = initState,
  action: RegistrationAction
) =>
  produce(state, (draft: RegistrationState) => {
    switch (action.type) {
      case REGISTRATION_ON: {
        return {
          ...draft,
          isRegistration: true,
        };
      }
      default:
        return state;
    }
  });

export default registrationReducer;
