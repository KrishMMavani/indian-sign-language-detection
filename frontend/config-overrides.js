const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    fallback: {
      "fs": false,
      "path": false,
      "crypto": false
    },
    alias: {
      three: path.resolve('./node_modules/three'),
      'three-mesh-bvh': path.resolve('./node_modules/three-mesh-bvh/src/index.js')
    }
  };
  
  return config;
};