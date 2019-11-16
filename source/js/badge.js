window.addEventListener("load", () => {
    const script = document.querySelector("script[bagde]");
    if (script) {
        let tags = script.attributes.tags;
        try {
            tags = JSON.parse(tags);
            for (const _tag of tags) {
                const {tag,label,url,color="blue",dataPath,dataTemplate} = _tag;
                const img = document.querySelector(`[alt='${tag}']`);
                if(img&&url){
                    fetch(url).then((result)=>{
                        const paths = dataPath.split(".");
                        try{
                            let data=result;
                            for (const path of paths){
                                data = data[path];
                            }
                            const value = dataTemplate?dataTemplate.replace("$data",data):data;
                            img.src=`https://img.shields.io/badge/${label}-${value}-${color})`;
                        }catch (e) {

                        }
                    });
                }
            }
        } catch (e) {

        }
    }
});
