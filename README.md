[![CircleCI](https://circleci.com/gh/brandsExclusive/lib-uri-templates.svg?style=svg&circle-token=c68093d106b12464dc2adffe3b7613daf307276e)](https://circleci.com/gh/brandsExclusive/lib-uri-templates)

# LE URI Templates Library

Published templates:

```js
const templates = require('lib-uri-templates');
const template = templates.get('1.0', 'properties');

template.version                              // 1.0
template.rfc6570                              // '/api/properties{?id_salesforce_external,limit,page}'
template.expand({id_salesforce_external: 1})  // '/api/properties?id_salesforce_external=1
```

Development templates:

```js
const templates = require('lib-uri-templates');
const template = templates.mock('1.0', '/api/properties{?id_salesforce_external,limit,page}')

template.version                              // 1.0
template.rfc6570                              // '/api/properties{?id_salesforce_external,limit,page}'
template.expand({id_salesforce_external: 1})  // '/api/properties?id_salesforce_external=1
```
