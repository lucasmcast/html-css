export class NewsDAO{

    constructor(){
        this.apikey = '35cbe59d9d144abebd03d7c457a45e75'
    }

    getTopNewsApi(){
        var url = 'http://newsapi.org/v2/top-headlines?'+ 'country=br&' + 'apiKey=' + this.apikey;
        console.log(url)
        return fetch(url);
    }
}