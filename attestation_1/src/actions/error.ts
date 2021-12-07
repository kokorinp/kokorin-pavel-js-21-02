import { ERROR_OFF, ERROR_ON } from "../const/error/const";
import { ErrorActionFunc } from "../types/error/action";

export const ErrorOnAction: ErrorActionFunc = (text?: string) => {
  // console.log(typeof text);
  console.log(`zzzz: ${text}`);
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
