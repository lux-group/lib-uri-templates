const template = require('url-template');

const definitions = {
  1: {
    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    room_types: '/api/properties/{property_id}/room-types',
    room_type: '/api/properties/{property_id}/room-types/{id}',

    public_offers: '/api/public-offers{?page,limit,platform,region}',
    public_offer: '/api/public-offers/{id}{?platform,region}',
    public_offer_package: '/api/public-offers/{offer_id}/packages/{id}',
    public_offer_schedule: '/api/public-offers/{offer_id}/schedules/{id}',
    public_offer_image: '/api/public-offers/{offer_id}/images/{id}',

    vendor_offers: '/api/vendor-offers{?email}',

    offers: '/api/offers{?page,limit,platform,region}',
    offer: '/api/offers/{id}{?platform,region}',
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
  const builder = template.parse(rfc6570);

  return {
    version,
    rfc6570,
    expand: query => builder.expand(query),
  }
}

function get(version, name) {
  const rfc6570 = definitions[version][name];
  return build(version, rfc6570);
}

function mock(version, rfc6570) {
  return build(version, rfc6570);
}

function list(version) {
  return Object.keys(definitions[version]).reduce((acc, key) => {
    acc[key] = {
      href: get(version, key).rfc6570,
      templated: true,
    }
    return acc
  }, {});
}

module.exports = {
  get,
  mock,
	list,
};
