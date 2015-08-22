Package.describe({
  name: "shmck:angular2",
  summary: "Angular 2 packaged for Meteor. Alpha-35.",
    version: '2.0.4',
  git: "https://github.com/ShMcK/meteor-angular2",
  documentation: "README.md"
});

Package.registerBuildPlugin({
  name : 'templates',
  sources : [
    'plugin/handler.js'
  ]
});

Package.onUse(function (api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor"]);

  api.addFiles([
    'lib/traceur-runtime.min.js',
    'lib/es6-module-loader.js', // 16.6
    'lib/system.js',
    "lib/angular2.dev.min.js"
    // contains angular, reflect-metadata, rtts_assert, rx, zone.js, System.config
    ], ["client"]);
});

Package.onTest(function (api) {
  api.use('sanjo:jasmine@0.13.6');
  api.use(["meteor", "netanelgilad:angular2-typescript"]);

  // specs
  api.addFiles([
    'tests/tests.spec.js'
  ], 'client');

  // app to test
  api.addFiles([
    "tests/client/index.html",
    "tests/client/app.ts"
  ], "client");
});
  
  
