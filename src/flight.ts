export const flight_single_cheapest =
  "/api/flights/single-cheapest-search{?start_date,end_date,origin,destination,currency,number_of_adults,number_of_nights,brand,provider*,region}";

export const flight_fare_rules =
  "/api/flights/fare-rules{?journey_id,provider,carrier,booking_class,fare_rule_type}";

export const flight_airports =
  "/api/flights/airports{?brand,region,latitude,longitude}";
