import urlTemplate from "url-template";
import { PermissiveURIParams } from "uri-template-param-types";

import * as order from "./order";
import * as reservation from "./reservation";
import * as bedbank from "./bedbank";
import * as offer from "./offer";
import * as calendar from "./calendar";
import * as carHire from "./car-hire";
import * as flight from "./flight";
import * as loyalty from "./loyalty";
import * as auth from "./auth";
import * as content from "./content";
import * as payment from "./payment";
import * as search from "./search";
import * as tour from "./tour";
import * as referral from "./referral";
import * as affiliate from "./affiliate";

type ExpandFunc<Def extends string> = (
  query?: PermissiveURIParams<Def>
) => string;

interface Template<Def extends string = string> {
  readonly rfc6570: Def;
  readonly expand: ExpandFunc<Def>;
}

interface ListItem {
  readonly href: string;
  readonly templated: boolean;
}

interface ListItems {
  [name: string]: ListItem;
}

interface Definitions {
  readonly [name: string]: string;
}

const definitions: Definitions = {
  root: "/",
  ...order,
  ...reservation,
  ...bedbank,
  ...offer,
  ...calendar,
  ...carHire,
  ...flight,
  ...loyalty,
  ...auth,
  ...content,
  ...payment,
  ...search,
  ...tour,
  ...referral,
  ...affiliate,
};

function build<Def extends string = string>(rfc6570: Def): Template<Def> {
  const builder = urlTemplate.parse(rfc6570);
  return {
    expand: (query): string => builder.expand(query),
    rfc6570,
  };
}

export function get(name: string): Template {
  const rfc6570 = definitions[name];
  return build(rfc6570);
}

export function mock<Def extends string>(rfc6570: Def): Template<Def> {
  return build(rfc6570);
}

export function list(): ListItems {
  return Object.keys(definitions).reduce((acc: ListItems, key: string) => {
    acc[key] = {
      href: get(key).rfc6570,
      templated: true,
    };
    return acc;
  }, {});
}

function buildAll<Defs extends Definitions>(
  definitions: Defs
): { [name in keyof Defs]: Template<Defs[name]> } {
  const templates = Object.keys(definitions).reduce<{
    [key: string]: Template;
  }>((templates, name) => {
    templates[name] = build(definitions[name]);
    return templates;
  }, {});
  return templates as { [name in keyof Defs]: Template<Defs[name]> };
}

export const templates = {
  root: build("/"),
  order: buildAll(order),
  reservation: buildAll(reservation),
  bedbank: buildAll(bedbank),
  offer: buildAll(offer),
  calendar: buildAll(calendar),
  carHire: buildAll(carHire),
  flight: buildAll(flight),
  loyalty: buildAll(loyalty),
  auth: buildAll(auth),
  content: buildAll(content),
  payment: buildAll(payment),
  search: buildAll(search),
  tour: buildAll(tour),
  referral: buildAll(referral),
  affiliate: buildAll(affiliate),
};
