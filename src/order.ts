export const order = "/api/orders/{id}";

export const orders =
  "/api/orders{?page,per_page,order_by,order_direction,customer_id,vendor_id,utm_source,le_label,le_attribution,updated_since,booking_numbers,remove_addons}";

export const order_item = "/api/orders/{order_id}/items/{id}";

export const orders_addons = "/api/orders/addons/{addon_opportunity_id}";
