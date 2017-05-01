const assert = require('assert');
const templates = require('../index.js');

describe('#get', function() {
  const template = templates.get('1.0', 'properties');

  describe('#version', function() {
    it('should return the version', function() {
      assert.equal(template.version, '1.0');
    });
  });

  describe('#version', function() {
    it('should return the source', function() {
      assert.equal(template.source, '/api/properties{?id_salesforce_external,limit,page}');
    });
  });

  describe('#expand()', function() {
    it('should expand the template', function() {
      assert.equal(template.expand({id_salesforce_external: 1}), '/api/properties?id_salesforce_external=1');
    });
  });
});

describe('#mock', function() {
  const template = templates.mock('2.0', '/api/properties{?id_salesforce_external,limit,page}');

  describe('#version', function() {
    it('should return the version', function() {
      assert.equal(template.version, '2.0');
    });
  });

  describe('#version', function() {
    it('should return the source', function() {
      assert.equal(template.source, '/api/properties{?id_salesforce_external,limit,page}');
    });
  });

  describe('#expand', function() {
    it('should return the source', function() {
      assert.equal(typeof template.expand, 'function');
    });
  });
});
