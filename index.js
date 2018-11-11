'use strict';

const MergeTrees = require('broccoli-merge-trees');
const buildTailwind = require('ember-cli-tailwind/lib/build-tailwind');

module.exports = {
  name: require('./package').name,

  config() {
    return {
      'ember-cli-tailwind': {
        shouldBuildTailwind: true
      }
    };
  },

  treeForAddonStyles(tree) {
    let trees = tree ? [ tree ] : [];

    trees.push(buildTailwind(this));

    return new MergeTrees(trees);
  }
};
