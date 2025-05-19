Package.describe({
  name          : "sylido:jade",
  version       : "0.5.6",
  summary       : "Jade template engine for Meteor, with interpolated attributes, for imports and local packages",
  git           : "https://github.com/sylido/meteor-jade.git",
  documentation : "../../README.md"
});

// specifies dependencies
Package.registerBuildPlugin({
  name: "compileJadeBatch",
  use: [
    "ecmascript@0.16.10",
    "caching-html-compiler@2.0.0",
    "underscore@1.6.4",
    "htmljs@2.0.1",
    "minifiers",
    "spacebars-compiler@2.0.0",
    "sylido:jade-compiler@0.5.6",
    "templating-tools@2.0.0"
  ],
  sources: [
    "plugin/handler.js",
  ]
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@3.2.2");
  api.use("isobuild:compiler-plugin@1.0.0");
  api.use("blaze@3.0.2");
});



// --- just tests ---
Package.onTest(function (api) {
  api.versionsFrom("METEOR@3.2.2");
  api.use("tinytest");
  api.use([
    "sylido:jade@0.5.6",
    "jquery",
    "spacebars",
    "templating",
    "ui",
    "underscore",
  ]);
  api.addFiles([
    "tests/match.jade",
    "tests/match.html",
    "tests/runtime.jade",
    "tests/body.tpl.jade",
    "tests/img_tag_here.tpl.jade",
  ]);
  api.addFiles(["tests/match.js", "tests/runtime.js"], "client");
});
