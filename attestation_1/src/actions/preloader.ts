import { PRELOAD_OFF, PRELOAD_ON } from "../const/preload/actions";
import { PreloadActionFunc } from "../types/preload/actions";

export const preloadOnAction: PreloadActionFunc = () => ({
  type: PRELOAD_ON,
  isLoading: true,
});

export const preloadOffAction: PreloadActionFunc = () => ({
  type: PRELOAD_OFF,
  isLoading: false,
});
