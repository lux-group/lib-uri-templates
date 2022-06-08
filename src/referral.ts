export const base_url = "/api/referral/";
export const get_logs = `${base_url}logs{?brand}`;
export const get_referral_log_by_id = `${base_url}log/{referral_log_id}`;
export const get_earn_options = `${base_url}earn-options{?brand}{?region}`;
export const get_earn_options_calculated = `${base_url}earn-options{?brand}{?region}{?user_id}{?referral_log_id}`;
export const redeem_referral_option = `${base_url}log/{referral_log_id}/redeem`;
