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

function html5Tag (tagName) {
    return (args,content)=>`<${tagName} ${args.join(' ')}>${hexo.render.renderSync({text: content, engine: 'markdown'}).split('\n').join('')}</${tagName}>`;
}

["div","img","span","section","dt","dl","dd","ul","li","iframe","header","main","footer"].map((tagName)=>{
    hexo.extend.tag.register(tagName, html5Tag(tagName), { ends: true });
});
