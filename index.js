const template = require('url-template');

const definitions = {
  1: {
    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    roomTypes: '/api/properties/{property_id}/room-types',
    roomType: '/api/properties/{property_id}/room-types/{id}',

    publicOffers: '/api/public-offers{?page,limit,platform,region}',
    publicOffer: '/api/public-offers/{id}{?platform,region}',
    publicOfferPackage: '/api/public-offers/{offer_id}/packages/{id}',
    publicOfferSchedule: '/api/public-offers/{offer_id}/schedules/{id}',
    publicOfferImage: '/api/public-offers/{offer_id}/images/{id}',

    vendorOffers: '/api/vendor-offers{?email}',

    offers: '/api/offers{?page,limit,platform,region}',
    offer: '/api/offers/{id}{?platform,region}',
    offerPackages: '/api/offers/{offer_id}/packages',
    offerPackage: '/api/offers/{offer_id}/packages/{id}',
    offerSchedules: '/api/offers/{offer_id}/schedules',
    offerSchedule: '/api/offers/{offer_id}/schedules/{id}',
    offerImage: '/api/offers/{offer_id}/images/{id}',
    offerImages: '/api/offers/{offer_id}/images',
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

function get(version, rerfc6570) {
  const rfc6570 = definitions[version][rerfc6570];
  return build(version, rfc6570)
}

function mock(version, rfc6570) {
  return build(version, rfc6570)
}

module.exports = {
  get,
  mock,
};
