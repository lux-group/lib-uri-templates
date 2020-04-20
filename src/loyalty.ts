import qargs from "./qargs";

export const partnership = "/api/loyalty/partnerships/{code}";

export const partnerships =
  "/api/loyalty/partnerships" + qargs("brand", "region", "currency");

export const membership = "/api/loyalty/memberships/{code}";

export const memberships =
  "/api/loyalty/memberships" + qargs("brand", "region", "currency");

export const memberships_limits =
  "/api/loyalty/memberships/limits" +
  qargs("brand", "customer_id", "membership_code", "membership_number");
