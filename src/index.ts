import urlTemplate from "url-template";

import * as order from "./order";
import * as reservation from "./reservation";
import * as bedbank from "./bedbank";
import * as offer from "./offer";
import * as calendar from "./calendar";
import * as flight from "./flight";
import * as loyalty from "./loyalty";
import * as auth from "./auth";
import * as content from "./content";
import * as payment from "./payment";
import * as voucher from "./voucher";

type ExpandFunc = (query?: object) => string; // eslint-disable-line

interface Template<Def extends string = string> {
  readonly rfc6570: Def;
  readonly expand: ExpandFunc;
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
  ...flight,
  ...loyalty,
  ...auth,
  ...content,
  ...payment,
  ...voucher,
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
  flight: buildAll(flight),
  loyalty: buildAll(loyalty),
  auth: buildAll(auth),
  content: buildAll(content),
  payment: buildAll(payment),
  voucher: buildAll(voucher),
};
