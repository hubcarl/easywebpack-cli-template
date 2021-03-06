'use strict';
const path = require('path');
const merge = require('easywebpack-react').merge;
const webpackConfig = require('../config');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setAlias('asset', 'app/web/asset');
    this.setAlias('component', 'app/web/component');
    this.setAlias('framework', 'app/web/framework');
    this.setAlias('store', 'app/web/store');
    this.setAlias('app', 'app/web/framework/vue/app.js');
  }
};
module.exports = WebpackBaseBuilder;