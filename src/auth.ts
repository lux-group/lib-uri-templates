import qargs from "./qargs";

export const users = "/api/users/{user_id}" + qargs("brand");

export const user_memberships =
  "/api/users/{user_id}/memberships" + qargs("brand");

export const current_user = "/api/users/current" + qargs("brand");
