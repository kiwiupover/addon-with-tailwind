'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here

    'ember-cli-bootstrap-sassy': {
      'js': false,
      'glyphicons': false
    }

  });

  return app.toTree();
};
