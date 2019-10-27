/**
 * Note: configs in _data/butterfly.yml will replace configs in hexo.theme.config.
 */

hexo.on('generateBefore', function () {
  const rootConfig = hexo.config;
  if(rootConfig && rootConfig.theme_config){
    merge(hexo.theme.config, rootConfig.theme_config);
  }
  hexo.theme.config.rootConfig = rootConfig;
});