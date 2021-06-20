import assert from "assert";
import * as uri from "../src";

describe("#get", function () {
  it("should return the rfc6570", function () {
    const template = uri.get("properties");

    assert.strictEqual(
      template.rfc6570,
      "/api/properties{?id_salesforce_external,limit,page}"
    );
  });

  it("should expand the template", function () {
    const template = uri.get("properties");

    assert.strictEqual(
      template.expand({ id_salesforce_external: 1 }),
      "/api/properties?id_salesforce_external=1"
    );
  });

  it("should expand the template (query fn builder)", function () {
    const template = uri.get("public_offers");

    assert.strictEqual(
      template.expand({ page: 1 }),
      "/api/public-offers?page=1"
    );
  });

  it("should expand the template with no query", function () {
    const template = uri.get("wishlist");

    assert.strictEqual(template.expand(), "/api/wishlist");
  });
});

describe("#mock", function () {
  it("should return the rfc6570", function () {
    const template = uri.mock(
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
    const template = uri.templates.offer.offers;

    assert.strictEqual(
      template.rfc6570,
      "/api/offers{?page,limit,platform,region,filter,brand}{&type*}"
    );
  });

  it("should expand the template", function () {
    const template = uri.templates.offer.offers;

    assert.strictEqual(
      template.expand({
        region: "AU",
        brand: "luxuryescapes",
        type: ["hotel", "tour"],
      }),
      "/api/offers?region=AU&brand=luxuryescapes&type=hotel&type=tour"
    );
  });
});
