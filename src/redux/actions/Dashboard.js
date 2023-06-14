import {SAVE_ELEMENTS_DASHBOARD} from "../constants/Dashboard";

export const saveElementsDashboard = (payload) => {
  return {
    type: SAVE_ELEMENTS_DASHBOARD,
    payload
  }
}
