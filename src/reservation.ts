export const hotel_enquiry =
  "/api/properties/{property_id}/room-types/{id}/enquiry{?months,offset,nights,currency,timezone_offset,max_date}";

export const hotel_reservation =
  "/api/properties/{property_id}/room-types/{room_type_id}/reservations/{id}";
export const hotel_reservation_history =
  "/api/hotels/reservations/{item_id}/history{?limit,offset,page}";

// Properties
export const properties = "/api/properties{?id_salesforce_external,limit,page}";
export const property = "/api/properties/{id}";

// Room Types
export const room_types = "/api/properties/{property_id}/room-types";
export const room_type = `${room_types}/{id}`;

// Capacities
export const room_type_capacities = `${room_types}/{room_type_id}/capacities`;
export const room_type_capacity = `${room_type_capacities}/{id}`;

// Rate Plans
export const rate_plans = "/api/rate-plans{?id_salesforce_external}";
export const rate_plan = "/api/rate-plans{id}";

// Room Rates
export const room_rates = `${room_types}/{room_type_id}/room-rates`;
export const room_rate = `${room_rates}/{id}`;

// Legacy Included Guests
export const included_guests = `${room_type}/included-guests`;
export const included_guest = `${included_guests}/{id}`;

// Included Guests
export const room_rate_included_guests = `${room_rates}/{room_rate_id}/included-guests`;
export const room_rate_included_guest = `${room_rate_included_guests}/{id}`;

// Surcharges
export const room_rate_surcharge_dates = `${room_rates}/{room_rate_id}/surcharge-dates`;
export const room_rate_surcharge_date = `${room_rate_surcharge_dates}/{id}`;

export const room_type_availability =
  "/api/properties/{property_id}/room-types/{id}/availability";
export const amenities = "/api/amenities";
export const tour = "/api/tours/{id}";
export const tour_enquiry =
  "/api/tours/{tour_id}/tour-options/{id}/enquiry{?days,timezone_offset}";
export const tour_leg = "/api/tours/{tour_id}/tour-legs/{id}";
export const tour_legs = "/api/tours/{tour_id}/tour-legs";
export const tour_option = "/api/tours/{tour_id}/tour-options/{id}";
export const tour_option_dates =
  "/api/tours/{tour_id}/tour-options/{tour_option_id}/dates";
export const tour_option_date =
  "/api/tours/{tour_id}/tour-options/{tour_option_id}/dates/{id}";
export const tour_options = "/api/tours/{tour_id}/tour-options";
export const tour_reservation =
  "/api/tours/{tour_id}/tour-options/{tour_option_id}/reservations/{id}";
export const tour_reservation_history =
  "/api/tours/reservations/{item_id}/history{?limit,offset,page}";
export const tours = "/api/tours{?id_salesforce_external,limit,page}";
