Package.describe({
  name: "shmck:angular2",
  summary: "Angular 2 packaged for Meteor. Alpha-32.",
  version: "2.0.0-alpha.32",
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
  api.use(["meteor", "ddp"]);

  api.addFiles([
    'lib/traceur-runtime.min.js',
    'lib/es6-module-loader.js', // 16.6
    'lib/system.js',
    "lib/angular@2.0.0-alpha.32.dev.js"
    // contains angular, reflect-metadata, rtts_assert, rx, zone.js, System.config
    ], ["client"]);
});

Package.onTest(function (api) {
  api.use(["netanelgilad:angular2-typescript", "mike:mocha-package", "practicalmeteor:chai"]);
  api.use("shmck:angular2");
  api.addFiles("tests/client/app.ts", ["client"]);

});
  
  