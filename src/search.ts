import qargs from "./qargs";

export const expediaSearch = "/api/search/expedia-search-by-location-capacity-date" +
  qargs(
    "placeIds",
    "checkIn",
    "checkOut",
    "occupancy",
    "region",
  );


export const LESearch = "/api/search/offer-search-by-location-capacity-date" +
  qargs(
    "placeIds",
    "checkIn",
    "checkOut",
    "occupancy",
    "region",
  );
;

