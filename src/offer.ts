import qargs from "./qargs";

export const public_offer_filters =
  "/api/public-offer-filters{?brand,region,type,locations,holiday_types,benefit_types,campaigns,memberships}";

export const public_offers =
  "/api/public-offers" +
  qargs(
    "page",
    "limit",
    "platform",
    "region",
    "brand",
    "locations",
    "holiday_types",
    "campaigns",
    "benefit_types",
    "strategy_applied",
    "exclude_offer_ids",
    "offer_ids",
    "slim",
    "flight_origin",
    "user_id",
    "recommendation_id",
    "sort_by",
    "memberships",
    "only_ids",
    "type*",
    "flexible_packages",
    "lowest_price_only"
  );

export const public_offer =
  "/api/public-offers/{id}" +
  qargs(
    "platform",
    "region",
    "brand",
    "all_packages",
    "flight_origin",
    "user_id",
    "memberships",
    "provider*",
    "flexible_packages"
  );

export const public_offer_packages =
  "/api/public-offers/{offer_id}/packages" +
  qargs("region", "brand", "all_packages");

export const publicOfferPackages =
  "/api/v2/public-offers/{offerId}/packages" +
  qargs("region", "brand", "offerType");

export const publicOffer =
  "/api/v2/public-offers/{id}" +
  qargs(
    "platform",
    "region",
    "brand",
    "userId",
    "checkIn",
    "checkOut",
    "occupancy",
    "offerType"
  );

export const publicOfferV2 =
  "/api/v2/public-offers/{id}" +
  qargs(
    "platform",
    "region",
    "brand",
    "userId",
    "checkIn",
    "checkOut",
    "occupancy"
  );

export const publicOfferPackagesV2 =
  "/api/v2/public-offers/{offerId}/packages" + qargs("region", "brand");

export const vendor = "/api/vendor/{id}";
export const vendor_offers = "/api/vendor-offers{?email}";

export const offer = "/api/offers/{id}{?platform,region,filter,brand}";
export const offer_image = "/api/offers/{offer_id}/images/{id}";
export const offer_images = "/api/offers/{offer_id}/images";
export const offer_package = "/api/offers/{offer_id}/packages/{id}";
export const offer_packages = "/api/offers/{offer_id}/packages";
export const offer_schedule = "/api/offers/{offer_id}/schedules/{id}";
export const offer_schedules = "/api/offers/{offer_id}/schedules{?brand}";
export const offer_schedule_logs =
  "/api/offers/{offer_id}/schedule-logs{?brand,region,type}";
export const offers =
  "/api/offers{?page,limit,platform,region,filter,brand}{&type*}";
export const offers_content = "/api/offers-content{?brand}{&limit}";
export const offers_search = "/api/offers-search{?q}{&brand,limit}";

export const addon = "/api/offers/{offer_id}/packages/{package_id}/addons/{id}";
export const addons = "/api/offers/{offer_id}/packages/{package_id}/addons";
export const vendor_addon =
  "/vendor-addons/{vendor_id}/opportunities/{addon_id}";
export const vendor_addons = "/vendor-addons/{vendor_id}";
export const all_addons = "/api/offers/addons/all/{?limit,page}";

export const wishlist = "/api/wishlist";

/**
 * Move deprecated templates to the bottom
 * so we can remove them on a mayor release
 **/

// Todo: Remove this on a mayor release
export const public_bedbank_offer =
  "/api/public-offers/bedbank/{id}" +
  qargs(
    "platform",
    "region",
    "brand",
    "user_id",
    "check_in",
    "check_out",
    "occupancy"
  );

// Todo: Remove this on a mayor release
export const public_bedbank_offer_packages =
  "/api/public-offers/bedbank/{offer_id}/packages" + qargs("region", "brand");

// Todo: Remove this on a mayor release
export const publicBedbankOfferPackages =
  "/api/public-offers/bedbank/{offerId}/packages" + qargs("region", "brand");

// Todo: Remove this on a mayor release
export const publicBedbankOffer =
  "/api/public-offers/bedbank/{id}" +
  qargs(
    "platform",
    "region",
    "brand",
    "userId",
    "checkIn",
    "checkOut",
    "occupancy"
  );
