const template = require('url-template');

const definitions = {
  '1.0': {
    properties: '/api/properties{?id_salesforce_external,limit,page}',
    property: '/api/properties/{id}',
    roomTypes: '/api/properties/{property_id}/room-types',
    roomType: '/api/properties/{property_id}/room-types/{id}',
  },
};

function build(version, source) {
  const builder = template.parse(source);

  return {
    version,
    source,
    expand: query => builder.expand(query),
  }
}

function get(version, resource) {
  const source = definitions[version][resource];
  return build(version, source)
}

function mock(version, source) {
  return build(version, source)
}

module.exports = {
  get,
  mock,
};
