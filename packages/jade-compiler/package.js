Package.describe({
  name          : "sylido:jade-compiler",
  version       : "0.5.6",
  summary       : "Improved Jade compiler for Meteor",
  git           : "https://github.com/sylido/meteor-jade.git",
  documentation : "../../README.md"
});

Npm.depends({
  jade : "https://github.com/mquandalle/jade/tarball/f3f956fa1031e05f85be7bc7b67f12e9ec80ba37"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@3.2.2");

  api.use([
    "ecmascript@0.16.10",
    "underscore@1.6.4",
    "htmljs@2.0.1",
    "html-tools@2.0.0",
    "blaze-tools@2.0.0",
    "spacebars-compiler@2.0.0"
  ], ["server"]);

  api.use("minifiers", ["server"], { weak : true });

  api.addFiles([
    "lib/lexer.js",
    "lib/parser.js",
    "lib/transpilers.js",
    "lib/exports.js"
  ], ["server"]);

  api.export("JadeCompiler");
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@3.2.2");
  api.use("tinytest");
  api.use("minifiers");
  api.use("sylido:jade-compiler@0.5.6", "server");
  api.addFiles(["tests/tests.js"], "server");
});
