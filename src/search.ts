export const search_trending_places =
  "/api/search/hotel/v1/places/trending{?region,brand,limit}";

export const search_popular_places =
  "/api/search/popular-places{?region,brand,limit}";

export const search_top_selling_places =
  "/api/search/hotel/v1/places/top-selling{?region,brand,country,state,limit}";

export const list =
  "/api/search/hotel/v1/list{?offerType,searchType,placeIds,distanceEq,region,occupancy,hasPromotions,showUnavailableResult,brand,limit,debug,next,bedrooms,bedroomsGte,bedroomsEq,bedsGte,checkIn,checkOut,nearby,searchNearby}";
