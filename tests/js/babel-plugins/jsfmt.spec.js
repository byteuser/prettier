// Only testing babel parsing
// Do not add extra parsers here

run_spec(__dirname, ["babel", "babel-ts", "babel-flow"], {
  errors: {
    espree: [
      "class-properties.js",
      "decimal.js",
      "decorators.js",
      "do-expressions.js",
      "export-default-from.js",
      "flow.js",
      "function-bind.js",
      "function-sent.js",
      "import-assertions-dynamic.js",
      "import-assertions-static.js",
      "partial-application.js",
      "pipeline-operator-fsharp.js",
      "pipeline-operator-minimal.js",
      "pipeline-operator-smart.js",
      "private-fields-in-in.js",
      "private-methods.js",
      "record-tuple-record.js",
      "record-tuple-tuple.js",
      "throw-expressions.js",
      "typescript.js",
      "v8intrinsic.js",
      "optional-chaining.js",
      "module-string-names.js",
      "class-static-block.js",
    ],
  },
});
