import { ERROR_OFF, ERROR_ON } from "../const/error/actions";
import { ErrorActionFunc } from "../types/error/action";

export const ErrorOnAction: ErrorActionFunc = (text?: string) => {
  console.log(`error: ${text}`);
  return {
    type: ERROR_ON,
    isError: true,
    textError: text,
  };
};

export const ErrorOffAction: ErrorActionFunc = () => ({
  type: ERROR_OFF,
  isError: false,
  textError: "",
});
