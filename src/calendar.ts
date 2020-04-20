import qargs from "./qargs";

export const calendar_months =
  "/api/calendar/months" +
  qargs(
    "offer_id",
    "package_id",
    "origin",
    "region",
    "number_of_adults",
    "number_of_children",
    "number_of_infants",
    "number_of_packages",
    "provider*",
    "min_date",
    "match_surcharge"
  );

export const calendar_days =
  "/api/calendar/days" +
  qargs(
    "offer_id",
    "package_id",
    "origin",
    "region",
    "number_of_nights",
    "number_of_adults",
    "number_of_children",
    "number_of_infants",
    "number_of_packages",
    "provider*",
    "min_date",
    "match_surcharge"
  );
