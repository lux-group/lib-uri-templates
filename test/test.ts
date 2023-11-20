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

  it("should expand the publicOffer template", function () {
    const template = uri.get("publicOffer");

    assert.strictEqual(
      template.expand({
        id: 1,
        region: "AU",
        brand: "luxuryescapes",
        flightOrigin: "SYD",
      }),
      "/api/v2/public-offers/1?region=AU&brand=luxuryescapes&flightOrigin=SYD"
    );
  });

  it("should expand the publicOfferExtra template", function () {
    const template = uri.get("publicOfferExtra");

    assert.strictEqual(
      template.expand({
        id: 1,
        region: "AU",
        brand: "luxuryescapes",
        clientTime: "10:00:00",
      }),
      "/api/v2/public-offers/1/extra?region=AU&brand=luxuryescapes&clientTime=10%3A00%3A00"
    );
  });

  it("should expand the publicOffers template", function () {
    const template = uri.get("publicOffers");

    assert.strictEqual(
      template.expand({
        offerIds: [1, 2, 3],
        region: "AU",
        brand: "luxuryescapes",
        flightOrigin: "SYD",
      }),
      "/api/v2/public-offers?offerIds=1,2,3&region=AU&brand=luxuryescapes&flightOrigin=SYD"
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
      "/api/offers{?page,limit,platform,region,filter,brand,remove_addons}{&type*}"
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
  it("calendar template test", function () {
    const template = uri.templates.calendar.availability;

    assert.strictEqual(
      template.expand({
        offerIds: "0062y000007opDEAAY",
        region: "AU",
        checkIn: "2023-04-21",
        checkOut: "2023-04-24",
        brand: "luxuryescapes",
        occupancy: [1, 2, 3],
      }),
      "/api/v2/calendar/availability?offerIds=0062y000007opDEAAY&region=AU&checkIn=2023-04-21&checkOut=2023-04-24&occupancy=1&occupancy=2&occupancy=3&brand=luxuryescapes"
    );
  });
  it("search list template test", function () {
    const template = uri.templates.search.list;

    assert.strictEqual(
      template.expand({
        offerType: "bedbank_hotel",
        searchType: "destination",
        placeIds: "le_d41d8cd98f00b204e9800998ecf8427e",
        distanceEq: 0,
        region: "AU",
        occupancy: 3,
        hasPromotions: true,
        showUnavailableResult: true,
        brand: "luxuryescapes",
      }),
      "/api/search/hotel/v1/list?offerType=bedbank_hotel&searchType=destination&placeIds=le_d41d8cd98f00b204e9800998ecf8427e&distanceEq=0&region=AU&occupancy=3&hasPromotions=true&showUnavailableResult=true&brand=luxuryescapes"
    );
  });
  describe("#external", function () {
    it("external url path test", function () {
      const template = uri.templates.externalUrl.offer_listing_url;

      assert.strictEqual(
        template.rfc6570,
        "/offer/{slug}/{id_salesforce_external}"
      );
    });

    it("should expand the template", function () {
      const template = uri.templates.externalUrl.offer_listing_url;

      assert.strictEqual(
        template.expand({ slug: "test", id_salesforce_external: 1 }),
        "/offer/test/1"
      );
    });
  });
});
