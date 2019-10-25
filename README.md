[![CircleCI](https://circleci.com/gh/brandsExclusive/lib-uri-templates.svg?style=svg&circle-token=c68093d106b12464dc2adffe3b7613daf307276e)](https://circleci.com/gh/brandsExclusive/lib-uri-templates)

# LE URI Templates Library

Published templates:

```js
const templates = require('lib-uri-templates');
const template = templates.get('properties');

template.rfc6570                              // '/api/properties{?id_salesforce_external,limit,page}'
template.expand({id_salesforce_external: 1})  // '/api/properties?id_salesforce_external=1
```

Development templates:

```js
const templates = require('lib-uri-templates');
const template = templates.mock('/api/properties{?id_salesforce_external,limit,page}')

template.rfc6570                              // '/api/properties{?id_salesforce_external,limit,page}'
template.expand({id_salesforce_external: 1})  // '/api/properties?id_salesforce_external=1
```

## publish
1. Merge your branch
2. Checkout master
3. Run `yarn publish`
