import assert from "assert";
import * as templates from "../src";

describe("#get", function () {
  it("should return the rfc6570", function () {
    const template = templates.get("properties");

    assert.equal(
      template.rfc6570,
      "/api/properties{?id_salesforce_external,limit,page}"
    );
  });

  it("should expand the template", function () {
    const template = templates.get("properties");

    assert.equal(
      template.expand({ id_salesforce_external: 1 }),
      "/api/properties?id_salesforce_external=1"
    );
  });

  it("should expand the template (query fn builder)", function () {
    const template = templates.get("public_offers");

    assert.equal(template.expand({ page: 1 }), "/api/public-offers?page=1");
  });

  it("should expand the template with no query", function () {
    const template = templates.get("wishlist");

    assert.equal(template.expand(), "/api/wishlist");
  });
});

describe("#mock", function () {
  it("should return the rfc6570", function () {
    const template = templates.mock(
      "/api/properties{?id_salesforce_external,limit,page}"
    );

    assert.equal(
      template.rfc6570,
      "/api/properties{?id_salesforce_external,limit,page}"
    );
  });
});
