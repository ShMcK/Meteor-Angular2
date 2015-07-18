Package.describe({
  name: "shmck:angular2",
  summary: "Sets up the latest version of Angular 2",
  version: "0.1.0",
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
  api.use(["meteor", "ddp", "jquery"]); //

  api.addFiles([
    'lib/traceur-runtime.js',
    'lib/es6-module-loader@0.16.5.js',
    'lib/system@0.16.7.js',

    "lib/angular@2.0.0-alpha.31.dev.js" //
    // contains angular, reflect-metadata, rtts_assert, rx, zone.js, System.config
    ], ["client"]);
});

Package.onTest(function (api) {
  api.use(["netanelgilad:angular2-typescript", "mike:mocha-package", "practicalmeteor:chai"]);
  api.use("shmck:angular2");

  api.addFiles("tests/client/app.ts", ["client"]);

});
  
  