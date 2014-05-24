var sweetjs = require('broccoli-sweetjs');
var mergeTrees = require('broccoli-merge-trees');

var tree = mergeTrees(['spec', 'test']);

var formatIndent = 2;

var options = {
  //filename: infile,
  //modules: modules,
  //ast: ast,
  readableNames: true,
  escodegen: {
    format: {
      indent: {
        style: Array(formatIndent).join(' ')
      }
    }
  }
};

tree = sweetjs(tree, options);

module.exports = tree;