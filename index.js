var template = require('url-template');

var definitions = {
  1: {
    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    room_types: '/api/properties/{property_id}/room-types',
    room_type: '/api/properties/{property_id}/room-types/{id}',
    room_type_availability: '/api/properties/{property_id}/room-types/{id}/availability',
    room_type_enquiry: '/api/properties/{property_id}/room-types/{id}/enquiry{?months,offset,nights}',

    tours: '/api/tours{?id_salesforce_external,limit,page}',
    tour: '/api/tours/{id}',
    tour_options: '/api/tours/{tour_id}/tour-options',
    tour_option: '/api/tours/{tour_id}/tour-options/{id}',
    tour_legs: '/api/tours/{tour_id}/tour-legs',
    tour_leg: '/api/tours/{tour_id}/tour-legs/{id}',

    public_offers: '/api/public-offers{?page,limit,platform,region}',
    public_offer: '/api/public-offers/{id}{?platform,region}',

    vendor_offers: '/api/vendor-offers{?email}',

    offers: '/api/offers{?page,limit,platform,region,filter}',
    offer: '/api/offers/{id}{?platform,region,filter}',
    offer_packages: '/api/offers/{offer_id}/packages',
    offer_package: '/api/offers/{offer_id}/packages/{id}',
    offer_schedules: '/api/offers/{offer_id}/schedules',
    offer_schedule: '/api/offers/{offer_id}/schedules/{id}',
    offer_image: '/api/offers/{offer_id}/images/{id}',
    offer_images: '/api/offers/{offer_id}/images',

    voucher_status: '/api/vouchers/public-status/{vendor_id}/{offer_id}',
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
