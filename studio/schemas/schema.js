import createSchema from "part:@sanity/base/schema-creator"

import schemaTypes from "all:part:@sanity/base/schema-type"
import images from "./images"
import destinations from "./destinations"

export default createSchema({
  name: "default",
  types: schemaTypes.concat([images, destinations]),
})
