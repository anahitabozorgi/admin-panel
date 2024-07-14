import { USER_INFO } from "../action/types";
const UserReducer = (state: any = {}, action: any) => {
  switch (action.type) {
    case USER_INFO:
      return action.payload;
    default:
      return state;
  }
};
export default UserReducer;