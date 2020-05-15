/**
 * Note: configs in _data/butterfly.yml will replace configs in hexo.theme.config.
 */
const {join} = require('path');
const fs = require('hexo-fs');
const merge = require('lodash/merge');
const yml = require('js-yaml');

'use strict'

hexo.on('generateBefore', function () {
  const rootConfig = hexo.config;
  const themeConfigPath = join(process.cwd(),"_theme.yml");
  if (fs.existsSync(themeConfigPath)) {
    const file = fs.readFileSync(themeConfigPath);
    merge(hexo.theme.config, yml.load(file));
  }
  hexo.theme.config.rootConfig = rootConfig
})
