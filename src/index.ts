import urlTemplate from "url-template";

import * as order from "./order";
import * as reservation from "./reservation";
import * as offer from "./offer";
import * as calendar from "./calendar";
import * as flight from "./flight";
import * as loyalty from "./loyalty";
import * as auth from "./auth";
import * as content from "./content";
import * as payment from "./payment";
import * as voucher from "./voucher";

type ExpandFunc = (query?: object) => string;

interface Template {
  readonly rfc6570: string;
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
  ...offer,
  ...calendar,
  ...flight,
  ...loyalty,
  ...auth,
  ...content,
  ...payment,
  ...voucher
};

function build(rfc6570: string): Template {
  const builder = urlTemplate.parse(rfc6570);
  return {
    expand: (query): string => builder.expand(query),
    rfc6570
  };
}

export function get(name: string): Template {
  const rfc6570 = definitions[name];
  return build(rfc6570);
}

export function mock(rfc6570: string): Template {
  return build(rfc6570);
}

export function list(): ListItems {
  return Object.keys(definitions).reduce((acc: ListItems, key: string) => {
    acc[key] = {
      href: get(key).rfc6570,
      templated: true
    };
    return acc;
  }, {});
}
