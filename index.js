var template = require('url-template');

var definitions = {
  1: {
    root: '/',

    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    room_types: '/api/properties/{property_id}/room-types',
    room_type: '/api/properties/{property_id}/room-types/{id}',
    room_type_availability: '/api/properties/{property_id}/room-types/{id}/availability',
    hotel_enquiry: '/api/properties/{property_id}/room-types/{id}/enquiry{?months,offset,nights,currency,timezone_offset}',
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

    public_offers: '/api/public-offers{?page,limit,platform,region}{&type*}',
    public_offer: '/api/public-offers/{id}{?platform,region}',

    vendor_offers: '/api/vendor-offers{?email}',

    offers: '/api/offers{?page,limit,platform,region,filter}{&type*}',
    offer: '/api/offers/{id}{?platform,region,filter}',
    offer_packages: '/api/offers/{offer_id}/packages',
    offer_package: '/api/offers/{offer_id}/packages/{id}',
    offer_schedules: '/api/offers/{offer_id}/schedules',
    offer_schedule: '/api/offers/{offer_id}/schedules/{id}',
    offer_image: '/api/offers/{offer_id}/images/{id}',
    offer_images: '/api/offers/{offer_id}/images',

    ee_public_offers: '/api/ee/public-offers{?page,limit,platform,region}{&type*}',
    ee_public_offer: '/api/ee/public-offers/{id}{?platform,region}',

    ee_offers: '/api/ee/offers{?page,limit,platform,region,filter}{&type*}',
    ee_offer: '/api/ee/offers/{id}{?platform,region,filter}',
    ee_offer_packages: '/api/ee/offers/{offer_id}/packages',
    ee_offer_package: '/api/ee/offers/{offer_id}/packages/{id}',

    voucher_status: '/api/vouchers/public-status/{vendor_id}/{offer_id}',

    orders: '/api/orders{?page,per_page,order_by,order_direction,customer_id,vendor_id,utm_source,le_label,le_attribution,updated_since}',
    order: '/api/orders/{id}',
    payments: '/api/payments{?id_orders}',
    credits: '/api/credits{?id_member,currency}',

    regions: '/regions',
    legal: '/legal',
    privacy_policy: '/legal/privacy-policy',
    refund_policy: '/legal/refund-policy',
    terms_and_conditions: '/legal/terms-and-conditions',
    giftcard_terms_and_conditions: '/legal/giftcard-terms-and-conditions',
    how_we_calculate_percentage_off: '/legal/how-we-calculate-percentage-off',

    info: '/info',
    why_work_with_us: '/info/why-work-with-us',

    faq: '/faq'
  },
};

function build(version, rfc6570) {
  var builder = template.parse(rfc6570);

  return {
    version: version,
    rfc6570: rfc6570,
    expand: function (query) {
      return builder.expand(query);
    },
  }
}

function get(version, name) {
  var rfc6570 = definitions[version][name];
  return build(version, rfc6570);
}

function mock(version, rfc6570) {
  return build(version, rfc6570);
}

function list(version) {
  return Object.keys(definitions[version]).reduce(function (acc, key) {
    acc[key] = {
      href: get(version, key).rfc6570,
      templated: true,
    }
    return acc
  }, {});
}

module.exports = {
  get: get,
  mock: mock,
  list: list,
};
