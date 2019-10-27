/**
 * html5 标签
 *
 * Usage:
 *
 * {% label [class]@Text %}
 *
 * [class] : default | primary | success | info | warning | danger.
 *           If not defined, default class will be selected.
 */

function html5Tag (tagName,args) {
    return '<'+tagName+' '+args.join('')+'>' + text + '</'+tagName+'>';
}

hexo.extend.tag.register('div', html5Tag.bind("div"), { ends: false });
hexo.extend.tag.register('img', html5Tag.bind("img"), { ends: false });
hexo.extend.tag.register('span', html5Tag.bind("span"), { ends: false });
hexo.extend.tag.register('section', html5Tag.bind("section"), { ends: false });
hexo.extend.tag.register('dt', html5Tag.bind("dt"), { ends: false });
hexo.extend.tag.register('dl', html5Tag.bind("dl"), { ends: false });
hexo.extend.tag.register('ul', html5Tag.bind("ul"), { ends: false });
hexo.extend.tag.register('li', html5Tag.bind("li"), { ends: false });
hexo.extend.tag.register('section', html5Tag.bind("section"), { ends: false });
hexo.extend.tag.register('iframe', html5Tag.bind("iframe"), { ends: false });
hexo.extend.tag.register('header', html5Tag.bind("header"), { ends: false });
hexo.extend.tag.register('main', html5Tag.bind("main"), { ends: false });
hexo.extend.tag.register('footer', html5Tag.bind("footer"), { ends: false });



