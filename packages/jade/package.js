Package.describe({
  name: "pacreach:jade",
  version: "0.5.5",
  summary: "Jade template engine for Meteor, with interpolated attributes, for imports and local packages",
  git: "https://github.com/pac-reach/meteor-jade.git",
  documentation: "../../README.md"
});

Package.registerBuildPlugin({
  name: "compileJadeBatch",
  use: [
    "ecmascript@0.1.0",
    "caching-html-compiler@1.0.2",
    "underscore@1.0.0",
    "htmljs@1.0.0",
    "minifiers@1.0.0",
    "spacebars-compiler@1.0.0",
    "pacreach:jade-compiler@0.5.5",
    "templating-tools@1.0.0"
  ],
  sources: [
    "plugin/handler.js",
  ]
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
  api.use("blaze@2.0.0");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@1.2.0.1");
  api.use("tinytest");
  api.use([
    "pacreach:jade@0.5.5",
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
