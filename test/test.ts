import assert from "assert";
import * as uriTemplates from "../src";

describe("#get", function () {
  it("should return the rfc6570", function () {
    const template = uriTemplates.get("properties");

    assert.strictEqual(
      template.rfc6570,
      "/api/properties{?id_salesforce_external,limit,page}"
    );
  });

  it("should expand the template", function () {
    const template = uriTemplates.get("properties");

    assert.strictEqual(
      template.expand({ id_salesforce_external: 1 }),
      "/api/properties?id_salesforce_external=1"
    );
  });

  it("should expand the template (query fn builder)", function () {
    const template = uriTemplates.get("public_offers");

    assert.strictEqual(
      template.expand({ page: 1 }),
      "/api/public-offers?page=1"
    );
  });

  it("should expand the template with no query", function () {
    const template = uriTemplates.get("wishlist");

    assert.strictEqual(template.expand(), "/api/wishlist");
  });
});

describe("#mock", function () {
  it("should return the rfc6570", function () {
    const template = uriTemplates.mock(
      "/api/properties{?id_salesforce_external,limit,page}"
    );

    assert.strictEqual(
      template.rfc6570,
      "/api/properties{?id_salesforce_external,limit,page}"
    );
  });
});

describe("#templates", function () {
  it("should return the rfc6570", function () {
    const template = uriTemplates.templates.reservation.properties;

    assert.strictEqual(
      template.rfc6570,
      "/api/properties{?id_salesforce_external,limit,page}"
    );
  });

  it("should expand the template", function () {
    const template = uriTemplates.templates.reservation.properties;

    assert.strictEqual(
      template.expand({ id_salesforce_external: 1 }),
      "/api/properties?id_salesforce_external=1"
    );
  });
});
