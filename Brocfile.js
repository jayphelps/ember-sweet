var fs = require('fs'),
    sweetjs = require('broccoli-sweetjs'),
    mergeTrees = require('broccoli-merge-trees');

var sweeteSource = fs.readFileSync('spec/sweete.js', 'utf-8');
var formatIndent = 2;

var options = {
  //filename: infile,
  //modules: modules,
  //ast: ast,
  modules: [require('sweet.js').loadModule(sweeteSource)],
  readableNames: true,
  escodegen: {
    format: {
      indent: {
        style: Array(formatIndent).join(' ')
      }
    }
  }
};

tree = sweetjs('test', options);
module.exports = tree;