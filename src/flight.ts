export const flight_single_cheapest =
  "/api/flights/single-cheapest-search{?start_date,end_date,origin,destination,currency,number_of_adults,number_of_children,number_of_infants,number_of_nights,brand,provider*,region,force_bundle_id}";

export const flight_fare_rules =
  "/api/flights/fare-rules{?journey_id,provider,carrier,booking_class,fare_rule_type}";

export const flight_airports =
  "/api/flights/airports{?brand,region,latitude,longitude}";

export const flight_check_property_block_list =
  "/api/flights/checkPropertyBlockList{?propertyIds,region,brand}";
