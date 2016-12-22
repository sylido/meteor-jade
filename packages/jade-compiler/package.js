Package.describe({
  name: "pacreach:jade-compiler",
  version: "0.5.5",
  summary: "Improved Jade compiler for Meteor",
  git: "https://github.com/pac-reach/meteor-jade.git",
  documentation: "../../README.md"
});

Npm.depends({
  jade: "https://github.com/mquandalle/jade/tarball/f3f956fa1031e05f85be7bc7b67f12e9ec80ba37"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.0.1");
  api.use([
    'ecmascript',
    'underscore',
    'htmljs',
    'html-tools',
    'blaze-tools',
    'spacebars-compiler'
  ], ['server']);
  api.use('minifiers', ['server'], { weak: true });
  api.addFiles([
    'lib/lexer.js',
    'lib/parser.js',
    'lib/transpilers.js',
    'lib/exports.js'
  ], ['server']);
  api.export('JadeCompiler');
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@1.2.0.1");
  api.use("tinytest");
  api.use("minifiers");
  api.use("pacreach:jade-compiler@0.5.5", "server");
  api.addFiles(["tests/tests.js"], "server");
});
