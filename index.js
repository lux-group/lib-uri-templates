"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var url_template_1 = __importDefault(require("url-template"));
var definitions = {
    root: '/',
    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    room_types: '/api/properties/{property_id}/room-types',
    room_type: '/api/properties/{property_id}/room-types/{id}',
    room_type_availability: '/api/properties/{property_id}/room-types/{id}/availability',
    hotel_enquiry: '/api/properties/{property_id}/room-types/{id}/enquiry{?months,offset,nights,currency,timezone_offset,max_date}',
    hotel_reservation: '/api/properties/{property_id}/room-types/{room_type_id}/reservations/{id}',
    amenities: '/api/amenities',
    tours: '/api/tours{?id_salesforce_external,limit,page}',
    tour: '/api/tours/{id}',
    tour_options: '/api/tours/{tour_id}/tour-options',
    tour_option: '/api/tours/{tour_id}/tour-options/{id}',
    tour_legs: '/api/tours/{tour_id}/tour-legs',
    tour_leg: '/api/tours/{tour_id}/tour-legs/{id}',
    tour_enquiry: '/api/tours/{tour_id}/tour-options/{id}/enquiry{?days,timezone_offset}',
    tour_reservation: '/api/tours/{tour_id}/tour-options/{tour_option_id}/reservations/{id}',
    public_offer_filters: '/api/public-offer-filters{?brand,region,type,locations,holiday_types}',
    public_offers: '/api/public-offers' + query('page', 'limit', 'platform', 'region', 'brand', 'locations', 'holiday_types', 'exclude_offer_ids', 'slim', 'flight_origin', 'type*'),
    public_offer: '/api/public-offers/{id}' + query('platform', 'region', 'brand', 'all_packages', 'flight_origin', 'provider*'),
    vendor: '/api/vendor/{id}',
    vendor_offers: '/api/vendor-offers{?email}',
    offers: '/api/offers{?page,limit,platform,region,filter,brand}{&type*}',
    offers_search: '/api/offers-search{?q}{&brand,limit}',
    offers_content: '/api/offers-content{?brand}{&limit}',
    offer: '/api/offers/{id}{?platform,region,filter,brand}',
    offer_packages: '/api/offers/{offer_id}/packages',
    offer_package: '/api/offers/{offer_id}/packages/{id}',
    offer_schedules: '/api/offers/{offer_id}/schedules{?brand}',
    offer_schedule: '/api/offers/{offer_id}/schedules/{id}',
    offer_image: '/api/offers/{offer_id}/images/{id}',
    offer_images: '/api/offers/{offer_id}/images',
    ee_public_offers: '/api/ee/offers-public{?page,limit,platform,region}{&type*}',
    ee_public_offer: '/api/ee/offers-public/{id}{?platform,region}',
    ee_vendor_offers: '/api/ee/vendor-offers{?email}',
    ee_public_category_list: '/api/ee/offers-public/category-list{?brand}',
    ee_offers: '/api/ee/offers{?page,limit,platform,region,filter}{&type*}',
    ee_offer: '/api/ee/offers/{id}{?platform,region,filter}',
    ee_offer_packages: '/api/ee/offers/{offer_id}/packages',
    ee_offer_package: '/api/ee/offers/{offer_id}/packages/{id}',
    ee_redemption_location: '/api/ee/redemption-location/{id}',
    ee_offer_image: '/api/ee/offers/{offer_id}/images/{id}',
    ee_offer_images: '/api/ee/offers/{offer_id}/images',
    ee_offers_feed: '/api/ee/offers-feed{?consumer,token,brand}',
    ee_offers_regions: '/api/ee/offers-regions{?brand}',
    ee_hero_assignments: '/api/ee/hero_assignments{?platform}',
    ee_hero_assignment: '/api/ee/hero_assignments/{region}{?platform}',
    ee_inventory_voucher: '/api/ee/vouchers/{inventory_id}/{voucher_code}',
    ee_inventory: '/api/ee/inventories/{inventory_id}',
    ee_inventory_public_status: '/api/ee/inventories/public-status/{inventory_id}',
    ee_top_picks: '/api/ee/top-picks{?platform}',
    ee_top_pick: '/api/ee/top-picks/{region}{?platform}',
    ee_top_picks_heading: '/api/ee/top-picks-heading{?platform,region,page}',
    ee_top_picks_headings: '/api/ee/top-picks-headings{?platform,region}',
    voucher_status: '/api/vouchers/public-status/{vendor_id}/{offer_id}',
    voucher: '/api/vouchers/{vendor_id}/{offer_id}/{voucher_code}',
    orders_addons: '/api/orders/addons/{addon_opportunity_id}',
    orders: '/api/orders{?page,per_page,order_by,order_direction,customer_id,vendor_id,utm_source,le_label,le_attribution,updated_since}',
    order: '/api/orders/{id}',
    payments: '/api/payments{?id_orders}',
    credits: '/api/credits{?id_member,currency}',
    ee_orders: '/api/ee/orders{?page,per_page,order_by,order_direction,customer_id,vendor_id,utm_source,le_label,le_attribution,updated_since}',
    ee_order: '/api/ee/orders/{id}',
    regions: '/regions',
    legal: '/legal',
    giftcard_terms_and_conditions: '/legal/giftcard-terms-and-conditions',
    how_we_calculate_percentage_off: '/legal/how-we-calculate-percentage-off',
    info: '/info',
    why_work_with_us: '/info/why-work-with-us',
    about_us: '/info/about-us',
    faq: '/faq',
    calendar_months: '/api/calendar/months' + query('offer_id', 'package_id', 'origin', 'region', 'number_of_adults', 'number_of_children', 'number_of_infants', 'number_of_packages', 'provider*', 'min_date', 'match_surcharge'),
    calendar_days: '/api/calendar/days' + query('offer_id', 'package_id', 'origin', 'region', 'number_of_adults', 'number_of_children', 'number_of_infants', 'number_of_packages', 'provider*', 'min_date', 'match_surcharge'),
    flight_single_cheapest: '/api/flights/single-cheapest-search' + query('start_date', 'end_date', 'origin', 'destination', 'currency', 'number_of_adults', 'number_of_nights', 'brand', 'provider*'),
    flight_fare_rules: '/api/flights/fare-rules{?journey_id,provider,carrier,booking_class}',
    addons: '/api/offers/{offer_id}/packages/{package_id}/addons',
    addon: '/api/offers/{offer_id}/packages/{package_id}/addons/{id}',
    vendor_addons: '/vendor-addons/{vendor_id}',
    vendor_addon: '/vendor-addons/{vendor_id}/opportunities/{addon_id}',
};
function query() {
    var parts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parts[_i] = arguments[_i];
    }
    return "{?" + parts.join(',') + "}";
}
function build(rfc6570) {
    var builder = url_template_1.default.parse(rfc6570);
    return {
        rfc6570: rfc6570,
        expand: function (query) {
            return builder.expand(query);
        },
    };
}
function get(name) {
    var rfc6570 = definitions[name];
    return build(rfc6570);
}
exports.get = get;
function mock(rfc6570) {
    return build(rfc6570);
}
exports.mock = mock;
function list() {
    return Object.keys(definitions).reduce(function (acc, key) {
        acc[key] = {
            href: get(key).rfc6570,
            templated: true,
        };
        return acc;
    }, {});
}
exports.list = list;
