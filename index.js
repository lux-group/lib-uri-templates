const template = require('url-template');

const definitions = {
  '1.0': {
    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    roomTypes: '/api/properties/{property_id}/room-types',
    roomType: '/api/properties/{property_id}/room-types/{id}',
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
