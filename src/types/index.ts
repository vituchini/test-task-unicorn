export interface State {
  username: string;
  token: string;
}

export type ActionType =
  | "SET_TOKEN"
  | "REMOVE_TOKEN"
  | "SET_USERNAME"
  | "REMOVE_USERNAME";

export interface Action {
  type: ActionType;
  payload: string;
}
