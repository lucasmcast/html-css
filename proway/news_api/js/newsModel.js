export class News{

    constructor(){
        this.author;
        this.title;
        this.url;
        this.urlImage;
        this.content;
        this.publishedAt;
        this.description;
    }

    setAuthor(author){
        this.author = author;
    }

    getAuthor(){
        return this.author;
    }

    setTitle(title){
        this.title = title;
    }

    getTitle(){
        return this.title;
    }

    setUrl(url){
        this.url = url;
    }

    getUrl(){
        return this.url;
    }

    setUrlImage(urlImage){
        this.urlImage = urlImage;
    }

    setContent(content){
        this.content = content;
    }

    getContent(){
        return this.content;
    }

    setPublishedAt(publishedAt){
        this.publishedAt = publishedAt;
    }

    getPublishedAt(){
        return this.publishedAt;
    }

    setDescription(description){
        this.description = description;
    }

    getDescription(){
        return this.description;
    }
}